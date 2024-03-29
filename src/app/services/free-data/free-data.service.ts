import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { ServerApiService } from './../server-api.service'


@Injectable({
  providedIn: 'root'
})
export class FreeDataService {
  public baseUrl:string
  public serviceURL = '/api/free-data'

  constructor(
    private http: HttpClient,
    private serverApiService : ServerApiService,
    ){
      this.baseUrl = (this.serverApiService.getAPI()) + this.serviceURL;
    }

    public getAll(){
      return this.http.get(this.baseUrl);
    }

    public getById(id:number){
      return this.http.get(this.baseUrl + '/' +id);
    }

    public create(data): Observable<any> {
      return this.http.post(this.baseUrl, data);
    }
  
    public update(id, data): Observable<any> {
      return this.http.put(`${this.baseUrl}/${id}`, data);
    }
  
    public delete(id): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }


}
