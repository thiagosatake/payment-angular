import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { environment } from "../../../../environments/environment"
import { Observable, EMPTY } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { retry, catchError, map } from "rxjs/operators";
import { PaymentStatus } from "./payment-status.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentStatusService {

  baseCheckoutV1Url = `${environment.apiBaseUrl}${environment.checkoutV1Path}`;

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
    this.showMessage("Error " + JSON.stringify(e), true);
    return EMPTY;
  }

  getPaymentStatus( checkoutId:string): Observable<PaymentStatus> {
    return this.http.get(this.baseCheckoutV1Url +"/"+ checkoutId +"/payment", {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }).pipe(
      retry(0),
      map((response: any) => { return response }),
      catchError( e => this.errorHandler(e))
    );
  }

}
