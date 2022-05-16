import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AwsCognitoService {

  constructor(private http: HttpClient) { }

  public getTokenDetailsFromCognito(callbackCode: string): Observable<any> {

    const details = {
      grant_type: 'authorization_code',
      code: callbackCode,
      client_id: environment.clientId,
      redirect_uri: environment.redirectURL
    };

    const formBody = Object.keys(details)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(details[key])}`)
      .join('&');

    return this.http.post<any>(`${environment.cognitoURL}/oauth2/token`,
      formBody, {
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });

  }

  public logoutUserFromCognito(): Observable<any> {
    return this.http.get<any>(`${environment.cognitoURL}/logout?client_id=${environment.clientId}&logout_uri=${environment.logoutHome}`);
  }
}
