import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map, defaultIfEmpty } from 'rxjs/operators';
import { Gateway } from '../models/gateway.model';
import { GatewayParameter } from '../models/gateway-parameter.model';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

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

  get(): Observable<Gateway[]> {
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

  getByName(name: string): Observable<Gateway> {
    return this.http.get(this.baseGatewayUrl + '/name/' + name, {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }).pipe(
      retry(0),
      map((response: any) => response ),
      catchError(e => this.errorHandler(e)),
      defaultIfEmpty()
    );
  }

  getOne(uuid: string): Observable<Gateway> {
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

  getDetails(uuid: string): Observable<Gateway> {
    return this.http.get(this.baseGatewayUrl + '/' + uuid + '/details/', {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }).pipe(
      retry(0),
      map((response: any) => response),
      catchError(e => this.errorHandler(e)),
      defaultIfEmpty()
    );
  }

  getParameter(uuid: string): Observable<GatewayParameter> {
    return this.http.get(this.baseGatewayUrl + '/configuration/' + uuid , {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }).pipe(
      retry(0),
      map((response: any) => response),
      catchError(e => this.errorHandler(e)),
      defaultIfEmpty()
    );
  }

  save(gateway: Gateway): Observable<any> {
    const body = JSON.stringify(gateway);
    return this.http.put(this.baseGatewayUrl + '/save', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
    }).pipe(
      retry(0),
      map((response: any) => { this.showMessage('Gateway has been save successfully!', false); return response; }),
      catchError(e => this.errorHandler(e)),
      defaultIfEmpty()
    );
  }

  delete(uuid: string): Observable<any> {
    return this.http.delete(this.baseGatewayUrl + '/' + uuid , {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }).pipe(
      retry(0),
      map((response: any) => { this.showMessage('Gateway deleted successfully!', false); return response; }),
      catchError(e => this.errorHandler(e)),
      defaultIfEmpty()
    );
  }

  saveParameter(uuid: string, gatewayParameter: GatewayParameter): Observable<any> {
    const body = JSON.stringify(gatewayParameter);
    return this.http.put(this.baseGatewayUrl + '/' + uuid + '/configurations/save', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
    }).pipe(
      retry(0),
      map((response: any) => { this.showMessage('Gateway Configuration has been save successfully!', false); return response; }),
      catchError(e => this.errorHandler(e)),
      defaultIfEmpty()
    );
  }

  deleteParameter(uuid: string): Observable<any> {
    return this.http.delete(this.baseGatewayUrl + '/configurations/' + uuid + '/remove' , {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }).pipe(
      retry(0),
      map((response: any) => { this.showMessage('Gateway Configuration deleted successfully!', false); return response; }),
      catchError(e => this.errorHandler(e)),
      defaultIfEmpty()
    );
  }


  getParameterByGatewayAndKey(uuid: string, key: string): Observable<any> {
    return this.http.get(this.baseGatewayUrl + '/' + uuid + '/configurations/key/' + key  , {
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
