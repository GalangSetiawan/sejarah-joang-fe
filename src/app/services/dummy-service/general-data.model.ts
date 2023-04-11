import { SocialMediaModel } from 'src/app/services/dummy-service/social-media.model';
import { ContactModel } from 'src/app/services/dummy-service/contact.model';

export class GeneralDataModel {

  public title:string = null;
  public tagLine1:string = null;
  public tagline2:string = null;
  public tagline3:string = null;
  public googleMapUrl:string = null;
  public socialMedia:SocialMediaModel[] = [];
  public contactList:ContactModel[] = [];


  constructor(obj?: Partial<GeneralDataModel>) {
    Object.assign(this, obj);
  }
}
  