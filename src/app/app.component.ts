import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public sidebarShow: boolean = false;
  public isLoginScreen:boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,

    ) {
      route.events.subscribe((val) => {
        if(this.route.url.includes('login')){
          this.isLoginScreen = true;
        }else{
          this.isLoginScreen = false;
        }
    });
  }

  ngOnInit() {
    
  }


}
