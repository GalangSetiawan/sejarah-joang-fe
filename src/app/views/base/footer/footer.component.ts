import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from 'src/app/services/dummy-service/dummy-product.service';
import { GeneralDataModel } from 'src/app/services/dummy-service/general-data.model';
import { SocialMediaModel } from 'src/app/services/dummy-service/social-media.model';
import { ContactModel } from 'src/app/services/dummy-service/contact.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public generalData:GeneralDataModel = null;
  public socialMediaList: SocialMediaModel[] = [];
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
    // this.generalData = data;

    this.productService.getGeneralData().then((data:any) => {
      this.socialMediaList = data.socialMedia;
      this.contactList = data.contactList;
      console.log('socialMediaList footer ===>',  this.socialMediaList);
      console.log('contactList footer ===>', this.contactList);
   });
  }

}
