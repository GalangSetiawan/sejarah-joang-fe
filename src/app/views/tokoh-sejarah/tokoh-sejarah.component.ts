import { Component } from '@angular/core';

@Component({
  selector: 'app-tokoh-sejarah',
  templateUrl: './tokoh-sejarah.component.html',
  styleUrls: ['./tokoh-sejarah.component.scss']
})
export class TokohSejarahComponent {

  public listTokoh = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listTokoh = [
      { name : "SUKARNI KARTODIWIRJO" },
      { name : "CHAIRUL SALEH" },
      { name : "DIPA NUSANTARA AIDIT" },
      { name : "ADAM MALIK" },
      { name : "WIKANA" },
      { name : "MUHAMMAD HATTA LUKMAN" },
      { name : "NJONO MARUTO NITIMIHARDJO" },
      { name : "ANAK MARHAEN HANAFI" },
      { name : "BURHANUDDIN MOHAMMAD DIAH" },
      { name : "AMIR SJARIFOEDDIN" },
      { name : "SUBADIO SASTROSATOMO" },
      { name : "DJOHAR NUR" },
    ]
  }
}
