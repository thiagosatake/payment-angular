import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { environment } from "../../../environments/environment"
import { Observable, EMPTY } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  basePurchaseUrl = `${environment.apiBaseUrl}${environment.purchaseV1Path}`;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 10000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Error "  + JSON.stringify(e), true);
    return EMPTY;
  }

}
