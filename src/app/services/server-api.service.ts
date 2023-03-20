import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {
  public API = 'http://localhost:8081'
  // public API = 'https://sejarahjoang.api.desawisatacisaat.com'
  // public API = 'https://api.desawisatacisaat.com/'

  constructor() { }

  public getAPI(){
    return this.API
  }

  

}
