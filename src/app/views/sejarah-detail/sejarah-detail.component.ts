import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ObjectHelper } from 'src/app/_helpers/object-helper';
import { SessionHelper } from 'src/app/_helpers/session-helper';

@Component({
  selector: 'app-sejarah-detail',
  templateUrl: './sejarah-detail.component.html',
  styleUrls: ['./sejarah-detail.component.scss']
})
export class SejarahDetailComponent implements OnInit {

  public slug:any = "";
  public data = null;


  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,

    ) {
  }

  ngOnInit(): void {
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug')
    console.log('slug sejarah detail ===>',this.slug,this);


    this.data = SessionHelper.getItem('GS_SEJARAH_JOANG_SEJARAH_DETAIL', true)
    console.log('data ===>', this.data
    );

    if(ObjectHelper.isEmpty(this.data)){
      this.router.navigate(['/sejarah']);
    }
    
  }



}
