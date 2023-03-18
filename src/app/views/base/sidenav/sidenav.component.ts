import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public sidebarShow: boolean = false;
  public isLoginScreen:boolean = false;

  constructor(
    private route: Router,
  ) {}

  ngOnInit() {
  
  }


  public setCurrentMenu(url:string){
    console.log('setCurrentMenu ===>', this.route.url);
    if(this.route.url.includes(url)) return true;
    else return false;
  }
}

