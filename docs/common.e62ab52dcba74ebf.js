"use strict";(self.webpackChunksejarah_joang=self.webpackChunksejarah_joang||[]).push([[592],{4674:(u,h,r)=>{r.d(h,{M:()=>a});var n=r(1571),i=r(529);class a{constructor(t){this.http=t,this.status=["OUTOFSTOCK","INSTOCK","LOWSTOCK"],this.productNames=["Bamboo Watch","Black Watch","Blue Band","Blue T-Shirt","Bracelet","Brown Purse","Chakra Bracelet","Galaxy Earrings","Game Controller","Gaming Set","Gold Phone Case","Green Earbuds","Green T-Shirt","Grey T-Shirt","Headphones","Light Green T-Shirt","Lime Band","Mini Speakers","Painted Phone Case","Pink Band","Pink Purse","Purple Band","Purple Gemstone Necklace","Purple T-Shirt","Shoes","Sneakers","Teal T-Shirt","Yellow Earbuds","Yoga Mat","Yoga Set"]}getProductsSmall(){return this.http.get("assets/products-small.json").toPromise().then(t=>t.data).then(t=>t)}getProducts(){return this.http.get("assets/products.json").toPromise().then(t=>t.data).then(t=>t)}getProductsWithOrdersSmall(){return this.http.get("assets/products-orders-small.json").toPromise().then(t=>t.data).then(t=>t)}generatePrduct(){const t={id:this.generateId(),name:this.generateName(),description:"Product Description",price:this.generatePrice(),quantity:this.generateQuantity(),category:"Product Category",inventoryStatus:this.generateStatus(),rating:this.generateRating()};return t.image=t.name.toLocaleLowerCase().split(/[ ,]+/).join("-")+".jpg",t}generateId(){let t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var o=0;o<5;o++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}generateName(){return this.productNames[Math.floor(Math.random()*Math.floor(30))]}generatePrice(){return Math.floor(Math.random()*Math.floor(299)+1)}generateQuantity(){return Math.floor(Math.random()*Math.floor(75)+1)}generateStatus(){return this.status[Math.floor(Math.random()*Math.floor(3))]}generateRating(){return Math.floor(Math.random()*Math.floor(5)+1)}}a.\u0275fac=function(t){return new(t||a)(n.LFG(i.eN))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac})},8394:(u,h,r)=>{r.d(h,{z:()=>s});var n=r(1571),i=r(529),a=r(6048);class s{constructor(e,o){this.http=e,this.serverApiService=o,this.serviceURL="/api/free-data",this.baseUrl=this.serverApiService.getAPI()+this.serviceURL}getAll(){return this.http.get(this.baseUrl)}getById(e){return this.http.get(this.baseUrl+"/"+e)}create(e){return this.http.post(this.baseUrl,e)}update(e,o){return this.http.put(`${this.baseUrl}/${e}`,o)}delete(e){return this.http.delete(`${this.baseUrl}/${e}`)}}s.\u0275fac=function(e){return new(e||s)(n.LFG(i.eN),n.LFG(a.U))},s.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}}]);