import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public slug:any = "";
  constructor(
    private activatedRoute: ActivatedRoute,

    ) {
    }

  ngOnInit() {

    this.slug = this.activatedRoute.snapshot.paramMap.get('slug')
    console.log('slug article ===>',this.slug)

    
  }
}
