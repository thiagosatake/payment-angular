import { Component, OnInit, Input } from '@angular/core';
import { SibsCardScriptLoaderService } from './sibs-card-script-loader.service';


@Component({
  selector: 'app-sibs-card',
  templateUrl: './sibs-card.component.html',
  styleUrls: ['./sibs-card.component.css']
})
export class SibsCardComponent implements OnInit{
  @Input() checkoutId ! : string;

  constructor( private sibsCardScriptLoaderService: SibsCardScriptLoaderService ) { }

  ngOnInit(): void {
    this.loadScripts();
  }

  private loadScripts() {
    this.sibsCardScriptLoaderService.loadScript(this.checkoutId);
  }


}
