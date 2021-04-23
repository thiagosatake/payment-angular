import { Component, OnInit } from '@angular/core';
import { PurchaseHistoryService } from './purchase-history.service';
import { Purchase } from './purchase-history.model';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  purchase ! : Purchase[];

  constructor(public purchaseHistoryService : PurchaseHistoryService) { }

  ngOnInit(): void {
    this.purchaseHistoryService.getPurchaseHistory().subscribe(
      data => this.purchase = data
    );
  }

}
