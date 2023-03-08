import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public sidebarShow: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,

    ) {
  }

  ngOnInit() {
    
  }


  public setCurrentMenu(url:string){
    console.log('setCurrentMenu ===>', this.route.url);
    if(this.route.url.includes(url)) return true;
    else return false;
  }
}
