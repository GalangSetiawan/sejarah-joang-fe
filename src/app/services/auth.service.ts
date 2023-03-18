import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerApiService } from './server-api.service'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public serverApi:string
  public authUrl = '/api/auth/'

  constructor(
    private http: HttpClient,
    private serverApiService : ServerApiService,
    ) {
      this.serverApi = (this.serverApiService.getAPI()) + this.authUrl;

     }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.serverApi + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.serverApi + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}