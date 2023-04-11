import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from 'src/app/services/dummy-service/dummy-product.service';
import { GeneralDataModel } from 'src/app/services/dummy-service/general-data.model';
import { ContactModel } from 'src/app/services/dummy-service/contact.model';

@Component({
  selector: 'app-informasi',
  templateUrl: './informasi.component.html',
  styleUrls: ['./informasi.component.scss']
})
export class InformasiComponent implements OnInit {

  public generalData:GeneralDataModel = null;
  public contactList: ContactModel[] = [];

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
    this.productService.getGeneralData().then((data:any) => {
      this.contactList = data.contactList;
      console.log('contactList informasi ===>', this.contactList);
   });
  }

}
