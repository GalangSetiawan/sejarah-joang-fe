import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public sidebarShow: boolean = false;
  public isLoginScreen:boolean = false;

  constructor(
    private router: Router,
    
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show progress spinner or progress bar
          console.log('Route change detected');
          this.backToTop();
      }

      if (event instanceof NavigationEnd) {
          // Hide progress spinner or progress bar
          console.log(event);
      }

      if (event instanceof NavigationError) {
           // Hide progress spinner or progress bar

          // Present error to user
          console.log(event.error);
      }
  });
  }

  ngOnInit() {
  
  }


  public setCurrentMenu(url:string){
    // $('html, body').animate({ scrollTop: 0 }, 'fast');
    console.log('setCurrentMenu ===>', this.router.url);
    if(this.router.url.includes(url)) return true;
    else return false;
  }

  public backToTop(){
    $('#top-page').hide();
    $('#top-page').show('slow');
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    console.log('backToTop ===>');
  }
}

