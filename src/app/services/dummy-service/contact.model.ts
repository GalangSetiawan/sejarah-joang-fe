export class ContactModel {

  public contactName:string = null;
  public contactDesc:string = null;
  public contactNumber:string = null;
  public contactUrl:string = null;

  constructor(obj?: Partial<ContactModel>) {
    Object.assign(this, obj);
  }
}
  