import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProductService } from '../../services/dummy-service/dummy-product.service';
import { FreeDataService } from 'src/app/services/free-data/free-data.service';
import * as lzstring from 'lz-string';
import { ObjectHelper } from 'src/app/_helpers/object-helper';


@Component({
  providers: [MessageService],
  selector: 'app-mst-post',
  templateUrl: './mst-post.component.html',
  styleUrls: ['./mst-post.component.scss']
})
export class MstPostComponent implements OnInit {

  public inputForm:FormGroup;
  public pengaturanUmum:any = null;


  public statuses: SelectItem[];
  private ngUnsubscribe: Subject<boolean> = new Subject();

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private messageService: MessageService,
    private freeDataService: FreeDataService
  ) {
    this.initForm();
   }

  ngOnInit() {

      this.getDataById(1);



      // this.productService.getProductsSmall().then(data => this.products1 = data);
      // this.productService.getProductsSmall().then(data => this.products2 = data);

      this.statuses = [{label: 'In Stock', value: 'INSTOCK'},{label: 'Low Stock', value: 'LOWSTOCK'},{label: 'Out of Stock', value: 'OUTOFSTOCK'}]
  }


  public initForm(){
    this.inputForm = this.fb.group({
      title : [ null, Validators.required],
      quotes : [ null, Validators.required],
      quoteBy : [ null, Validators.required],
    })
  }


  public submit(){
    this.sendData(this.inputForm.value);
  }


  sendData(data){
    var compress = lzstring.compressToBase64(JSON.stringify(data))
    if(ObjectHelper.isEmpty(this.pengaturanUmum)){
      this.freeDataService.create({ data: compress }).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (r:any) =>{
          this.getDataById(r.id)
          this.messageService.add({severity:'success', summary: 'Success', detail:'data tersimpan'});
          },
        error =>{
          this.messageService.add({severity:'error', summary: 'Error', detail:'Gagal tersimpan'});
        }
      );
    }else{
      this.freeDataService.update( 1 ,{ data: compress }).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (r:any) =>{
          this.getDataById(r.id)
          this.messageService.add({severity:'success', summary: 'Success', detail:'data terupdate'});
          },
        error =>{
          this.messageService.add({severity:'error', summary: 'Error', detail:'Gagal terupdate'});
        }
      );
    }
    
  }



  public getDataById(id){
    this.freeDataService.getById(id).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (r:any) =>{
        var decompress = lzstring.decompressFromBase64(r.data);
        this.pengaturanUmum = JSON.parse(decompress);
        this.inputForm.patchValue(this.pengaturanUmum)
      },
      error =>{
      }
    );
  }

}
