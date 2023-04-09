import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
// import data from 'src/assets/json/sejarah-joang-general-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public sidebarShow: boolean = false;
  public isLoginScreen:boolean = false;
  public isAdminScreen:boolean = false;
  public generalData: any = null;

  
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

        if(this.route.url.includes('admin')){
          this.isAdminScreen = true;
        }else{
          this.isAdminScreen = false;
        }

        
      });
  }

  ngOnInit() {
    this.getGeneralData();
  }

  public getGeneralData(){
    // this.generalData = data;
    console.log('generalData ===>', this.generalData);
    

  }


}
