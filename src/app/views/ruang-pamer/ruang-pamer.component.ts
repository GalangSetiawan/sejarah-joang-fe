import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-ruang-pamer',
  templateUrl: './ruang-pamer.component.html',
  styleUrls: ['./ruang-pamer.component.scss']
})
export class RuangPamerComponent implements OnInit {

  public slug:any = "";
  public activeIndex: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,

    ) {
    }

  ngOnInit() {

    this.slug = this.activatedRoute.snapshot.paramMap.get('slug')
    console.log('ruang pamer ===>',this.slug)

    
  }
}
