import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Gateway } from '../models/gateway.model';
import { retry, map, catchError, defaultIfEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseGatewayUrl = '/proxy/payment/api/v1/gateways';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 10000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Error ' + JSON.stringify(e), true);
    return EMPTY;
  }

  getGateway(): Observable<Gateway[]> {
    return this.http.get(this.baseGatewayUrl, {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }).pipe(
      retry(0),
      map((response: any) => response),
      catchError(e => this.errorHandler(e)),
      defaultIfEmpty()
    );
  }

  getGatewayById(uuid: string): Observable<Gateway> {
    return this.http.get(this.baseGatewayUrl + '/' + uuid, {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }).pipe(
      retry(0),
      map((response: any) => response),
      catchError(e => this.errorHandler(e)),
      defaultIfEmpty()
    );
  }


}
