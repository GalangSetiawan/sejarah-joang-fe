import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from 'src/app/services/dummy-service/dummy-product.service';
import { GeneralDataModel } from 'src/app/services/dummy-service/general-data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public generalData:GeneralDataModel = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService : ProductService,
    private route: Router,
    ) {
  }

  ngOnInit() {
    this.getGeneralData();
  }

  public getGeneralData(){
    // this.generalData = data;

    this.productService.getGeneralData().then((data) => {
      console.log('generalData dashboard ===>', data);
      this.generalData = data;
   });


  }
}
