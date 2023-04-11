import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {


    constructor() { }

    public generateGeneralData(){
        return {
            title : "Museum Sejarah Joang 45",
            tagLine1 : "JASMERAH",
            tagline2 : "Jangan sekali-sekali melupakan sejarah",
            tagline3 : "Ir. Soekarno",
            googleMapUrl : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36048.215433693265!2d106.81689752250372!3d-6.1876506583973425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f439e42506f1%3A0x5b47d4d83d25b9dd!2sGedung%20Joang%20&#39;45!5e0!3m2!1sid!2sid!4v1679995626596!5m2!1sid!2sid",
    
            socialMedia : [
                {
                    socialMediaName : "Instagram",
                    socialMediaAccount : "museum.joang45",
                    socialMediaUrl : "https://www.instagram.com/museum.joang45/",
                    socialMediaIcon : "assets/img/icon/ig.png"
                },
                {
                    socialMediaName : "Facebook",
                    socialMediaAccount : "MuseumSejarahJoang45",
                    socialMediaUrl : "https://www.facebook.com/search/posts/?q=museum%20sejarah%20joang%2045%20menteng",
                    socialMediaIcon : "assets/img/icon/fb.png"
                },
                {
                    socialMediaName : "Youtube",
                    socialMediaAccount : "MuseumSejarahJoang",
                    socialMediaUrl : "https://www.youtube.com/watch?v=CcMgR_NK8GQ",
                    socialMediaIcon : "assets/img/icon/yt.png"
                },
                {
                    socialMediaName : "Tiktok",
                    socialMediaAccount : "MuseumSejarahJoang",
                    socialMediaUrl : "https://www.tiktok.com/@jj_sejarah45?lang=en",
                    socialMediaIcon : "assets/img/icon/tt.png"
                }
            ],
    
            contactList : [
                {
                    contactName : null,
                    contactDesc :  "Kantor",
                    contactNumber : "(021) 3909148",
                    contactUrl : null
                },
                {
                    contactName : "Muslim",
                    contactDesc : "Tour guide",
                    contactNumber : "(021) 3909148",
                    contactUrl : null
                },
                {
                    contactName : "Yunda",
                    contactDesc : "Loket",
                    contactNumber : "0857 7456 3217",
                    contactUrl : null
                }
            ]
    
        }
    }

    public getGeneralData() {
        return Promise.resolve(this.generateGeneralData());
    }




}