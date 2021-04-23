import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GatewayService } from '../../services/gateway.service';
import { Gateway } from '../../models/gateway.model';
import { GatewaySetupComponent } from '../gateway-setup/gateway-setup.component';
import { DialogDeleteConfirmationComponent } from '../../../../shared/components/dialog-delete-confirmation/dialog-delete-confirmation.component';


@Component({
  selector: 'app-gateway-card',
  templateUrl: './gateway-card.component.html',
  styleUrls: ['./gateway-card.component.css']
})
export class GatewayCardComponent implements OnInit {

  formGroup = new FormGroup({
    nameFormControl: new FormControl('', Validators.required),
    descriptionFormControl: new FormControl('')
  });

  @Input()
  public gateway: Gateway = { uuid: '---', name: '', description: '' };
  public parentRef!: GatewaySetupComponent;

  saveMode = false;
  gatewayNameIsUnique = true;

  constructor(public gatewayService: GatewayService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.formGroup.controls.nameFormControl.setValue(this.gateway.name);
    this.formGroup.controls.descriptionFormControl.setValue(this.gateway.description);

    if (this.gateway.uuid !== '---') {
      this.saveMode = false;
      this.formGroup.disable();
    } else {
      this.saveMode = true;
    }
  }

  refresh(): void {
    this.saveMode = false;
    this.formGroup.disable();
    if ( this.gateway.uuid !== undefined ){
      this.gatewayService.getOne(this.gateway.uuid).subscribe(
        data => {
          this.gateway = data;
          this.formGroup.controls.nameFormControl.setValue(this.gateway.name);
          this.formGroup.controls.descriptionFormControl.setValue(this.gateway.description);
        }
      );
    }
  }

  save(): void {

    this.gateway.name = this.formGroup.controls.nameFormControl.value;
    this.gateway.description = this.formGroup.controls.descriptionFormControl.value;

    this.gatewayService.getByName(this.gateway.name).subscribe(x => {

      this.gatewayNameIsUnique = (x == null || this.gateway.uuid === x.uuid);
      if (this.gatewayNameIsUnique) {

        if (this.gateway.uuid === '---') {
          this.gateway.uuid = undefined;
          this.gatewayService.save(this.gateway).subscribe( () =>
            this.parentRef.loadGatewayCards()
          );
        } else {
          this.gatewayService.save(this.gateway).subscribe( i =>
            this.gateway.uuid = i);
        }

        this.saveMode = false;
        this.formGroup.disable();
      } else {
        this.formGroup.controls.nameFormControl.setErrors({ incorrect: true });
      }
    }
    );
  }

  enable(): void {
    this.saveMode = true;
    this.formGroup.enable();
  }

  delete(): void {
    const dialogRef = this.dialog.open(DialogDeleteConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.parentRef.remove(this.gateway);
        if ( this.gateway.uuid !== undefined ) {
          this.gatewayService.delete(this.gateway.uuid).subscribe();
        }
      }
    });
  }

  getNameErrorMessage(): string {
    if (this.formGroup.controls.nameFormControl.hasError('required')) {
      return 'You must enter a value.';
    }
    return this.formGroup.controls.nameFormControl.hasError('incorrect') ? 'Name already in use.' : '';
  }

  goToEdit(): void {
    this.router.navigateByUrl('/payment/admin/gateway/' + this.gateway.uuid);
  }

}
