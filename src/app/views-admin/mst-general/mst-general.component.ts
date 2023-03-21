import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { ProductService } from '../../services/dummy-service/dummy-product.service';
import { Product } from '../../services/dummy-service/dummy-product.model';
import * as lzstring from 'lz-string';

import { FreeDataService } from 'src/app/services/free-data/free-data.service';


@Component({
  providers: [MessageService],
  selector: 'app-mst-general',
  templateUrl: './mst-general.component.html',
  styleUrls: ['./mst-general.component.scss']
})
export class MstGeneralComponent implements OnInit {

  public products1: Product[];
  public products2: Product[];
  public statuses: SelectItem[];
  public clonedProducts: { [s: string]: Product; } = {};
  private ngUnsubscribe: Subject<boolean> = new Subject();

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private freeDataService: FreeDataService
  ) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products1 = data);
      this.productService.getProductsSmall().then(data => this.products2 = data);

      this.statuses = [{label: 'In Stock', value: 'INSTOCK'},{label: 'Low Stock', value: 'LOWSTOCK'},{label: 'Out of Stock', value: 'OUTOFSTOCK'}]
  }

  onRowEditInit(product: Product) {
    this.clonedProducts[product.id] = {...product};
  }

  onRowEditSave(product: Product) {
      if (product.price > 0) {
          delete this.clonedProducts[product.id];
          this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
      }  
      else {
          this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
      }
  }

  onRowEditCancel(product: Product, index: number) {
      this.products2[index] = this.clonedProducts[product.id];
      delete this.products2[product.id];
  }


  sendData(){
    console.log('products2 ===>', this.products2);
    var compress = lzstring.compressToBase64(JSON.stringify(this.products2))
    console.log('products2 compress ===>', compress );

    var decompress = lzstring.decompressFromBase64(compress)
    console.log('products2 compress ===>', JSON.parse(decompress) );

    this.freeDataService.create({data:compress}).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (r:any) =>{
        this.messageService.add({severity:'success', summary: 'Success', detail:'data tersimpan'});

        },
      error =>{
        this.messageService.add({severity:'error', summary: 'Error', detail:'Gagal tersimpan'});
      }
    );
  }


  public getData(){
    this.freeDataService.getById(4).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (r:any) =>{
        console.log('result get ===>', r);
        var decompress = lzstring.decompressFromBase64(r.data)
        console.log('result decompress ===>', JSON.parse(decompress) );

      },
      error =>{
      }
    );
  }

}
