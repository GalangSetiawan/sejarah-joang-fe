import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../../../services/token-storage.service';
import {  Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public currentUser:any;


  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private tokenStorage: TokenStorageService
  ) {
   }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(){
    if (this.tokenStorage.getToken()) {
      this.currentUser = this.tokenStorage.getUser();
      console.log('this.currentUser ===>',this.currentUser)
    }else{
      console.log('kamu tidak memiliki akses',this.currentUser)
    }
  }

  logout(): void {
    console.log('logout')
    this.tokenStorage.signOut();
    this.router.navigate(['/dashboard']);
    window.location.reload();
  }

}
