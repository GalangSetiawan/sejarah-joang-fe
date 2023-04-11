export class SocialMediaModel {

  public socialMediaName:string = null;
  public socialMediaAccount:string = null;
  public socialMediaUrl:string = null;
  public socialMediaIcon:string = null;

  constructor(obj?: Partial<SocialMediaModel>) {
    Object.assign(this, obj);
  }
}
  