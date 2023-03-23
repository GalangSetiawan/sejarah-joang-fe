import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../../../services/token-storage.service';
import {  Router } from '@angular/router'
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public currentUser:any;
  public items: MegaMenuItem[];


  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private tokenStorage: TokenStorageService
  ) {
   }

  ngOnInit(): void {
    this.getUser();

    this.items = [
        {
            label: 'Pengaturan umum', 
            icon: 'pi pi-fw pi-video',
            state: { url: '/admin/home'}, 
            command: (event) => { this.onMenuClick(event.item) }
        },
        {
            label: 'Post',
            icon: 'pi pi-fw pi-users',
            state: { url: '/admin/post'}, 
            command: (event) => { this.onMenuClick(event.item) }
        },
        { 
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            state: { url: '/admin/post'}, 
            command: (event) => { this.onMenuClick(event.item) }
        },
        {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
            state: { url: '/admin/post'}, 
            command: (event) => { this.onMenuClick(event.item) }
        }
    ]

  }


  public onMenuClick(event){
    console.log('onMenuClick ==>',event);
    this.router.navigate([event.state.url]);

    
  }



  public getUser(){
    if (this.tokenStorage.getToken()) {
      this.currentUser = this.tokenStorage.getUser();
      console.log('this.currentUser ===>',this.currentUser)
    }else{
      console.log('kamu tidak memiliki akses',this.currentUser)
    }
  }

  public logout(): void {
    console.log('logout')
    this.tokenStorage.signOut();
    this.router.navigate(['/dashboard']);
    window.location.reload();
  }

}
