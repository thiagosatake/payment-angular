import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GatewayParameter } from '../../models/gateway-parameter.model';
import { GatewayService } from '../../services/gateway.service';
import { GatewayDetailsComponent } from '../gateway-details/gateway-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteConfirmationComponent } from '../../../../shared/components/dialog-delete-confirmation/dialog-delete-confirmation.component';
import { defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-gateway-parameter-card',
  templateUrl: './gateway-parameter-card.component.html',
  styleUrls: ['./gateway-parameter-card.component.css']
})
export class GatewayParameterCardComponent implements OnInit {

  formGroup = new FormGroup({
    keyFormControl: new FormControl('', Validators.required),
    valueFormControl: new FormControl('', Validators.required)
  });

  @Input()
  public gatewayParameter: GatewayParameter = { uuid: '---', key: '', value: ''};
  public parentRef!: GatewayDetailsComponent;

  saveMode = false;
  keyIsUnique = true;

  constructor(public gatewayService: GatewayService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formGroup.controls.keyFormControl.setValue(this.gatewayParameter.key);
    this.formGroup.controls.valueFormControl.setValue(this.gatewayParameter.value);

    if (this.gatewayParameter.uuid !== '---') {
      this.saveMode = false;
      this.formGroup.disable();
    } else {
      this.saveMode = true;
    }
  }

  refresh(): void {
    this.saveMode = false;
    this.formGroup.disable();
    if ( this.gatewayParameter.uuid !== undefined ){
      this.gatewayService.getParameter(this.gatewayParameter.uuid).subscribe(
        data => {
          this.gatewayParameter = data;
          this.formGroup.controls.keyFormControl.setValue(this.gatewayParameter.key);
          this.formGroup.controls.valueFormControl.setValue(this.gatewayParameter.value);
        }
      );
    }
  }

  save(): void {

    this.gatewayParameter.key = this.formGroup.controls.keyFormControl.value;
    this.gatewayParameter.value = this.formGroup.controls.valueFormControl.value;

    if (this.gatewayParameter.uuid === '---') {
      this.gatewayParameter.uuid = undefined;
      this.gatewayService.saveParameter(this.parentRef.uuid, this.gatewayParameter)
      .subscribe( () => this.parentRef.loadGatewayParameterCards() );
    } else {
      this.gatewayService.saveParameter(this.parentRef.uuid, this.gatewayParameter).subscribe( i =>
        this.gatewayParameter.uuid = i
      );
    }
    this.saveMode = false;
    this.formGroup.disable();

  }

  enable(): void {
    this.saveMode = true;
    this.formGroup.enable();
  }

  delete(): void {
    const dialogRef = this.dialog.open(DialogDeleteConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.parentRef.remove(this.gatewayParameter);
        if (this.gatewayParameter.uuid !== undefined) {
          this.gatewayService.deleteParameter(this.gatewayParameter.uuid).subscribe();
        }
      }
    });

  }

  getKeyErrorMessage(): string {
    if (this.formGroup.controls.keyFormControl.hasError('required')) {
      return 'You must enter a value.';
    }
    return this.formGroup.controls.keyFormControl.hasError('incorrect') ? 'Name already in use.' : '';
  }

  getValueErrorMessage(): string {
    return this.formGroup.controls.valueFormControl.hasError('required') ? 'You must enter a value.' : '';
  }

}
