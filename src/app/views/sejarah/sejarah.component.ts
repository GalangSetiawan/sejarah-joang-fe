import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import * as _ from 'lodash';
import { SessionHelper } from 'src/app/_helpers/session-helper';

@Component({
  selector: 'app-sejarah',
  templateUrl: './sejarah.component.html',
  styleUrls: ['./sejarah.component.scss']
})
export class SejarahComponent implements OnInit {

  public slug:any = "";
  public listDataOriginal:any[] = [];
  public listYear:any[] = [];
  public selectedItem:any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    ) {
    }

  ngOnInit() {
    // SessionHelper.destroy('GS_SEJARAH_JOANG_SEJARAH_DETAIL');

    this.listDataOriginal = [
      {
          year : '1920',
          img : 'assets/img/sejarah/1920.jpg',
          title : 'Menteng sebagai Kota Taman Pertama di Indonesia',
          slug: 'menteng-sebagai-kota-taman-pertama-di-indonesia',
          subtitle : 'Kota taman pertama',
          prolog : 'Daerah Menteng merupakan hutan yang banyak ditumbuhi pohon Menteng. Selama perkembangan kota Batavia Pemukiman Menteng pada dasarnya mengalami 2 gelombang perkembangan, yaitu daerah New Gondangdia pada tahun 1910 oleh P.A.J. Moojen dan New Menteng pada tahun 1922 oleh Ir. F. Kubatz.',
          body: '<p>Nama Menteng berasal dari nama vegetasi yang mendominasi di sekitar kawasan yaitu pohon Menteng.  Tanah yang dahulu dimiliki oleh Masyarakat keturunan Arab yang kemudian dibeli oleh pemerintah kolonial Hindia-Belanda dan dijadikan pemukiman eksklusif mereka dengan konsep Garden City. </p><p>Kecamatan Menteng merupakan pusat dari kota Administrasi Jakarta Pusat. Kawasan Menteng yang sengaja didesain dan dipersiapkan sebagai komplek dan perumahan bagi pejabat elit Belanda saat itu telah dilengkapi fasilitas umum untuk menunjang kehidupan mereka.</p>'
      },
      {
          year : '1938',
          img : 'assets/img/sejarah/1938.jpg',
          title : 'Pembangunan Hotel Schomper',
          slug: 'pembangunan-hotel-schomper',
          subtitle : 'Hotel Schomper',
          prolog : '<p>Menteng disebut menjadi lingkungan eropa dikarnakan sangat mirip dengan Minervaalan, yaitu kawasan elit yang ada di Selatan Kota Amsterdam. P.A.J. Moojen dituntut untuk merancang dan mengembangkan wilayah Menteng dengan mengikuti Kota Taman Ebenzer Howard yang memiliki standar estetika Eropa saat itu.</p>',
          body: '<p>Hotel Schomper dimiliki oleh orang kebangsaan Belanda bernama L.C. Schomper. Seiring perkembangan kota Batavia akan berbagai hasil bumi ke mancanegara meningkat, pada tahun 1938 L.C. Schomper membuka hotel di daerah Menteng dengan nama Hotel Schomper yang terletak di jalan Menteng 31 sekarang. Hotel dipergunakan untuk khusus untuk para pedagang asing, pejabat tinggi Belanda dan pribumi kelas atas.</p>'
      },
      {
          year : '1942',
          img : 'assets/img/sejarah/1942.jpg',
          title : 'Peralihan fungsi hotel Schomper saat sekutu jatuh',
          slug: 'peralihan-fungsi-hotel-schomper-saat-sekutu-jatuh',
          subtitle : 'Peralihan fungsi hotel',
          prolog : '<p>Waktu Belanda menyerah pada tanggal 8 Maret 1942, bulan Juni 1942 Hotel diambil alih oleh Jepang dan diserahkan kepada jawatan propaganda Jepang (SENDEBU) dan diserahkan kepada pemuda untuk digunakan pendidikan para pemuda, untuk menyokong pemerintah Jepang di Indonesia. Gedung Joang dijadikan pendidikan politik yang dibiayai oleh "Gunseikanbu Sendebu".</p>',
          body: '<p>Jepang bermaksud mendidik para pemuda Indonesia untuk kepentingan Jepang sendiri, namun rencana itu berhasil dibelokan oleh para pemimpin Indonesia untuk menanamkan cita-cita kemerdekaan Indonesia yang murni. Diberi nama "Ashrama Angkatan Baru" dan akhirnya menjadi Asrama Menteng 31, muridnya dinamakan Pemuda Menteng 31.</p>'
      },
      {
          year : '1944',
          img : 'assets/img/sejarah/1944.jpg',
          title : 'Peralihan PUTERA menjadi Jawa Hokokai',
          slug: 'peralihan-putera-menjadi-jawa-hokokai',
          subtitle : 'PUTERA menjadi Jawa Hokokai',
          prolog : '<p>Setelah berbagai macam cara gerakan yang dibuat Pemerintahan Jepang gagal dalam mempropagandakan politik Hakko Ichiu, yaitu mengekspansi negara lain dengan dalih persaudaraan yang mengatasnamakan takdir absolut Kaisar. Akhirnya Jepang mengincar tokoh nasionalis yang lebih dikenal oleh masyarakat sebagai “Empat Serangkai” yaitu; Bung Karno, Bung Hatta, Ki Hajar Dewantoro, dan Mas Mansyur.</p>',
          body: '<p>PUTERA organisasi yang dibentuk Jepang pada tahun 1943 dengan maksud untuk membela keperluan Jepang yang sedang terhimpit dalam perang melawan negara Barat.</p><p>Dirasa PUTERA lebih bermanfaat bagi Indonesia daripada Jepang sendiri. Jepang menilai bahwa kegiatan PUTERA kurang menunjukkan dukungan terhadap kebijakan politik Jepang. Oleh karena itu, pada tahun 1944 PUTERA dibubarkan dan digantikan kehadirannya oleh Jawa Hokokai Kebaktian Rakyat Jawa yang mencakup semua golongan masyarakat; Cina, Arap, Pribumi di Indonesia.</p>'
      },
      {
          year : '1945',
          img : 'assets/img/sejarah/1945-1.jpg',
          title : 'Jepang menyerah, berakhirlah kekuasaannya di tanah air',
          slug: 'jepang-menyerah-berakhirlah-kekuasaannya-di-tanah-air',
          subtitle : 'Jepang menyerah',
          prolog : '<p>Begitu banyak kejadian pahit dan manis pada tahun 1945 seperti berakhirnya perang dunia ke II. Begitu pun Gedung Joang 45 Jakarta yang menjadi saksi bisu rencana kemerdekaan. Kekalahan Jepang menjadi awal kemerdekaan Tanah Air tercinta, Rencana pengasingan dan penculikan tokoh nasionalis guna menjauhi pengaruh sekutu dan memaksakan kehendak untuk Kemerdekaan Indonesia.</p>',
          body: '<p>Kehancuran yang disebabkan oleh dua bom atom di Hiroshima dan Nagasaki tersebut membuat pemerintahan Jepang melihat bahwa mereka tidak bisa lagi menghindari kekalahan dari Sekutu. Menyerah tanpa syarat sendiri berarti penyerahan di mana tidak ada jaminan apapun yang diberikan kepada pihak yang menyerah. Menyerahnya Jepang kepada Sekutu pada Agustus 1945 menandakan akhir dari Perang Dunia II.</p>'
      },
      {
          year : '1945',
          img : 'assets/img/sejarah/1945-2.jpg',
          title : 'Pengasingan Rengasdengklok dan Proklamasi',
          slug: 'pengasingan-rengasdengklok-dan-proklamasi',
          subtitle : 'Rengasdengklok dan Proklamasi',
          prolog : '<p>Begitu banyak kejadian pahit dan manis pada tahun 1945 seperti berakhirnya perang dunia ke II. Begitu pun Gedung Joang 45 Jakarta yang menjadi saksi bisu rencana kemerdekaan. Kekalahan Jepang menjadi awal kemerdekaan Tanah Air tercinta, Rencana pengasingan dan penculikan tokoh nasionalis guna menjauhi pengaruh sekutu dan memaksakan kehendak untuk Kemerdekaan Indonesia.</p>',
          body: '<p>Pada tanggal 16 Agustus 1945, Bung Karno, Bung Hatta, Ibu Fatmawati dan Guntur (bayi) diamankan para pemuda, yang didukung pasukan Pembela Tanah Air (PETA) menuju Rengasdengklok rumah dari Giau I Siong. Dikarnakan perbedaan pendapat antara Golongan Muda dengan Golongan Tua, maksud dari pengasingan itu untuk mendesak Dwitunggal menyelenggarakan proklamasi sekarng juga sekaligus mencegah penangkapan mereka oleh pihak Jepang.</p>'
      },
      {
          year : '1945',
          img : 'assets/img/sejarah/1945-3.jpg',
          title : 'Pasca Proklamasi',
          slug: 'pasca-proklamasi',
          subtitle : 'Pasca Proklamasi',
          prolog : '<p>Begitu banyak kejadian pahit dan manis pada tahun 1945 seperti berakhirnya perang dunia ke II. Begitu pun Gedung Joang 45 Jakarta yang menjadi saksi bisu rencana kemerdekaan. Kekalahan Jepang menjadi awal kemerdekaan Tanah Air tercinta, Rencana pengasingan dan penculikan tokoh nasionalis guna menjauhi pengaruh sekutu dan memaksakan kehendak untuk Kemerdekaan Indonesia.</p>',
          body: '<p>Pasca Proklamasi pada tanggal 23 Agustus 1945, pemuda Menteng 31 melebur dengan Komite van Aksi dan berhasil merebut kembali Gedung Menteng 31 dari tangan Jawa Hokokai. Program pertama Komite van Aksi mendesak agar Komite Nasional Indonesia Pusat (KNIP) dan menjadikan Pembela Tanah Air (PETA) serta Heiho sebagai Tentara Rakyat Indonesia (TRI).</p><p>Setelah PETA dibubarkan, Komite van Aksi menyusun Angkatan Pemuda Indonesia (API) di belakang gedung Menteng 31 ,dan melebur ke dalam organisasi bersenjata yaitu "Laskar Rakjat Djakarta Raja".</p>'
      },
      {
          year : '1957',
          img : 'assets/img/sejarah/1957-1.jpg',
          title : 'Dari hotel hingga menjadi kantor PETERA',
          slug: 'dari-hotel-hingga-menjadi-kantor-petera',
          subtitle : 'Hotel hingga menjadi kantor',
          prolog : '<p>Pada masa Indonesia berdaulat  Gedung Menteng 31 pernah mengalami berbagai peralihan fungsi. Setelah lima (5) tahun ditinggal oleh para Pemuda, Gedung Menteng 31 ini sempat menjadi asrama para pekerja wanita. Di tahun yang sama pula percobaan pembunuhan presiden Indonesia juga telah terjadi di Cikini, Jakarta Pusat.</p>',
          body: '<p>Gedung Menteng 31 dijadikan kantor Kementrian Pengerahan Tenaga Rakyat (PETERA) oleh A.M.Hanafi sebagai Menteri PETERA hingga kementrian itu dibubarkan pada tahun 1960. </p>'
      },
      {
          year : '1957',
          img : 'assets/img/sejarah/1957-1.jpg',
          title : 'Percobaan pembunuhan sang Proklamator',
          slug: 'percobaan-pembunuhan-sang-proklamator',
          subtitle : 'Percobaan pembunuhan sang Proklamator',
          prolog : '<p>Pada masa Indonesia berdaulat  Gedung Menteng 31 pernah mengalami berbagai peralihan fungsi. Setelah lima (5) tahun ditinggal oleh para Pemuda, Gedung Menteng 31 ini sempat menjadi asrama para pekerja wanita. Di tahun yang sama pula percobaan pembunuhan presiden Indonesia juga telah terjadi di Cikini, Jakarta Pusat.</p>',
          body: '<p>30 November 1957 percobaan pembunuhan bapak proklamator Presiden Ir. Soekarno pada saat menghadiri bazar Sekolah Perguruan Cikini, menggunakan bom granat kurang lebih pada pukul 21:00 WIB. </p><p>Akibat ledakan granat tersebut mengakibatkan 9 orang minggal dan 55 orang luka-luka termasuk di dalamnya pegawai Presiden Soekarno dan beberapa murid Perguruan Cikini.</p>'
      },
    ]

    this.selectedItem = this.listDataOriginal;

    this.listYear = _.uniq(_.map(this.listDataOriginal, 'year'));
    console.log('listYear ==>', this.listYear);
    

  }



  public onYearSelected(year){
    this.selectedItem = []

    this.listDataOriginal.forEach(data => {
      if(data.year == year){
        this.selectedItem.push(data)
      }
    });
  }

  public onSejarahSelected(data){
    console.log('onSejarahSelected ===>',data);

    this.router.navigate(['/sejarah-detail'+'/'+data.slug]);
    SessionHelper.setItem('GS_SEJARAH_JOANG_SEJARAH_DETAIL', data, true)
  }

  public textToSlug(str){
  var result = str.toLowerCase() .trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
      return result
  }

}
