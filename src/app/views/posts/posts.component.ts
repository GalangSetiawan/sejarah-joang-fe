import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public slug:any = "";
  constructor(
    private activatedRoute: ActivatedRoute,

    ) {
    }

  ngOnInit() {

    this.slug = this.activatedRoute.snapshot.paramMap.get('slug')
    console.log('slug ===>',this.slug)

    
  }
}
