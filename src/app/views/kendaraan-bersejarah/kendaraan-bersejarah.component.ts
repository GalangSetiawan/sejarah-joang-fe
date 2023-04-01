import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-kendaraan-bersejarah',
  templateUrl: './kendaraan-bersejarah.component.html',
  styleUrls: ['./kendaraan-bersejarah.component.scss']
})
export class KendaraanBersejarahComponent implements OnInit {

  public slug:any = "";
  public listData:any[] = [];
  public selectedItem:any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    ) {
    }

  ngOnInit() {


    this.slug = this.activatedRoute.snapshot.paramMap.get('slug')
    console.log('slug kendaraan bersejarah ===>',this.slug)

    this.listData = [
      {
        title : "MOBIL PERISTIWA CIKINI",
        desc : "Mobil dengan merk Imperial ini milik keluarga Ir. Soekarno yang sering dipakai untuk keseharian beliau beserta istri dan anak-anaknya, mobil yang telah menjadi saksi bisu dalam peristiwa Cikini yaitu terjadinya peristiwa peledakan granat di Perguruan Cikini pada tanggal 30 November 1957. Acara yang didatangi Presiden Soekarno menghadiri acar bazar Sekolah Perguruan Cikini (PERCIK). Peristiwa tersebut adalah usaha percobaan pembunuhan yang dilakukan oleh penghianat Bangsa terhadap Presiden Soekarno, kejadian tersebut berlangsung di halaman depan komplek Perguruan Cikini Jl. Cikini Raya Jakarta Pusat pada pukul 21.00 WIB.",
        img : [
          "assets/img/content/mobilcikini1.jpg",
          "assets/img/content/mobilcikini2.jpg",
          "assets/img/content/mobilhatta1.jpg",
          "assets/img/content/mobilhatta2.jpg",
          "assets/img/content/mobilkarno1.jpg",
          "assets/img/content/mobilkarno2.jpg",
        ],
        merkMobil : "Imperial 1939",
        jenisMobil : "Sedan lomosin",
        mesinMobil : "-",
        platMobil : "Plat mobil",
      },
      {
        title : "MOBIL DINAS BUNG KARNO",
        desc : "Mobil Rep 1, mobil sedan limosin merk Buick buatan Amerika tahun 1939 merupakan mobil kepresidenan pertama yang dimiliki pemerintah Indonesia dan digunakan untuk menjalankan tugas daripada Presiden RI yaitu Ir. Soekarno. Pada mulanya Mobil REP 1 ini dimiliki oleh Departemen Perhubungan bangsa Jepang dan mobil terbagus di Jakarta tahun 1945. Mobil di parkir di belakang Kantor Departemen Perhubungan (skrng kantor Deriktorat Perhubungan Laut, Jl. Merdeka Timur Jakarta). Ketika didekati oleh Sudiro (Anggota Barisan Banteng), supir tersebut sedang duduk dekat mobil Sudiro yang kemudian meminta mobil tersebut secara diplomasi. Lalu mobil itu dibawa ke Pegangsaan Timur No. 56 dan diserahkan kepada Bung Karno sambil berkata 'ini Mobil yang pantas dipakai untuk Presiden RI'.",
        img : [
          "assets/img/content/mobilkarno1.jpg",
          "assets/img/content/mobilkarno2.jpg",
          "assets/img/content/mobilcikini1.jpg",
          "assets/img/content/mobilcikini2.jpg",
          "assets/img/content/mobilhatta1.jpg",
          "assets/img/content/mobilhatta2.jpg",
        ],
        merkMobil : "Buick eight 1939",
        jenisMobil : "Sedan lomosin",
        mesinMobil : "-",
        platMobil : "REP 1",
      },
      {
        title : "MOBIL DINAS BUNG HATTA",
        desc : "Mobil DeSoto buatan Amerika yang dipinjamkan oleh Djohan Djohor selaku paman Bung Hatta untuk keponakannya itu sendiri, menurut Pamannya mobil ini dirasa lebih cocok digunakan untuk Mobil Dinas Kenegaraan Bung Hatta yang menjabat sebagai Wakil Presiden Indonesia.",
        img : [
          "assets/img/content/mobilhatta1.jpg",
          "assets/img/content/mobilhatta2.jpg",
          "assets/img/content/mobilcikini1.jpg",
          "assets/img/content/mobilcikini2.jpg",
          "assets/img/content/mobilkarno1.jpg",
          "assets/img/content/mobilkarno2.jpg",
        ],
        merkMobil : "DeSoto cabriolet 1938",
        jenisMobil : "Sedan lomosin",
        mesinMobil : "-",
        platMobil : "REP 2",
      },
    ];

    // patch value by slug
    if(this.slug.includes('mobil-peristiwa-cikini')){
      this.selectedItem = this.listData[0];
    }else if(this.slug.includes('mobil-dinas-bung-karno')){
      this.selectedItem = this.listData[1];
    }else if(this.slug.includes('mobil-dinas-bung-hatta')){
      this.selectedItem = this.listData[2];
    }else{
      this.selectedItem = this.listData[0];
    }
  }
}
