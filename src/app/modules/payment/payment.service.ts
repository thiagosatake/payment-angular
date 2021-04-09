import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { environment } from "../../../environments/environment"
import { Observable, EMPTY } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  basePaymentUrl = `${environment.apiBaseUrl}${environment.paymentV1Path}`;

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
