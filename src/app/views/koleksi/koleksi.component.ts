import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-koleksi',
  templateUrl: './koleksi.component.html',
  styleUrls: ['./koleksi.component.scss']
})
export class KoleksiComponent {

  public listRuangPamer = [];


  constructor(
    private activatedRoute: ActivatedRoute,

    ) {
  }

  ngOnInit(): void {


    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listRuangPamer = [
      { 
        name : "Ruang pendahuluan perjuangan",
        img : "assets/img/content/sukarni-kartodiwirjo.jpg",
        desc : "<p>Lorem ipsu, fugiat ut, veniam unde deleniti ad minus enim, tenetur ea quod aut ipsa qui.</p>"
      },
      { 
        name : "Ruang proklamator",
        img : "assets/img/content/chairul-saleh.jpg",
        desc : "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quur ea quod aut ipsa qui.</p>"
      },
      { 
        name : "Ruang masa jepang",
        img : "assets/img/content/dipa-nusantara-aidit.jpg",
        desc : "<p>Lorem ipsum dolor sit, amet consectetur nus enim, tenetur ea quod aut ipsa qui.</p",
      },
      { 
        name : "Ruang seputar proklamasi",
        img : "assets/img/content/adam-malik.jpg",
        desc : "<p>Lorem ipsum dolor siinus enim, tenetur ea quod aut ipsa qui.</p",
      },
      { 
        name : "Ruang proklamasi",
        img : "assets/img/content/adam-malik.jpg",
        desc : "<p>Lorem ipstur ea quod aut ipsa qui.</p",
      },
      { 
        name : "Ruang masa kedaulatan RIS",
        img : "assets/img/content/wikana.jpg",
        desc : "<p>Lorema quod aut ipsa qui.</p",
      },
      { 
        name : "Ruang laskar putri",
        img : "assets/img/content/muhammad-hatta-lukman.jpg",
        desc : "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia necessitatibus ex, fuui.</p",
      },
      { 
        name : "Ruang perjuangan menuju NKRI",
        img : "assets/img/content/njono-maruto-nitimihardjo.jpg",
        desc : "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.ui.</p",
      },      
    ]
  }
}
