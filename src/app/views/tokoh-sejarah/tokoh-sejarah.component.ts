import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-tokoh-sejarah',
  templateUrl: './tokoh-sejarah.component.html',
  styleUrls: ['./tokoh-sejarah.component.scss']
})
export class TokohSejarahComponent implements OnInit {

  public slug:any = "";
  public listTokoh = [];
  public selectedItem:any = null;
  public title ="PEMUDA MENTENG 31";

  constructor(
    private activatedRoute: ActivatedRoute,

    ) {
  }

  ngOnInit(): void {

    this.slug = this.activatedRoute.snapshot.paramMap.get('slug')
    console.log('slug tokoh sejarah ===>',this.slug,this.selectedItem)

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listTokoh = [
      { 
        name : "SUKARNI KARTODIWIRJO",
        img : "assets/img/content/sukarni-kartodiwirjo.jpg",
        desc : "<p>Sukarni lahir pada tanggal 14 Juli 1916 dan wafat pada tanggal 7 Mei 1971, nama lengkapnya adalah Soekarni Kartodiwirjo, adalah tokoh pejuang kemerdekaan dan Pahlawan Nasional Indonesia. Perkenalan Sukarni dengan dunia pergerakan nasional yang memperjuangkan kemerdekaan Indonesia dimulai ketika usia masih remaja, 14 tahun, saat dia masuk menjadi anggota perhimpunan Indonesia Muda tahun 1930. Semenjak itu dia berkembang menjadi pemuda militan dan revolusioner. Tidak lama sebelum Jepang masuk, Sukarni tertangkap di Balikpapan dan kemudian dibawa ke Samarinda.</p><p>Namun, setelah Jepang masuk, Sukarni berserta beberapa tokoh pergerakan lain seperti Adam Malik dan Wikana malah dibebaskan oleh Jepang. Tahun 1943, bersama Chairul Saleh, dia memimpin Asrama Pemuda di Menteng 31. Di tempat itu Sukarni makin giat menggembleng para pemuda untuk berjuang demi kemerdekaan Indonesia. Seperti diketahui, pada kurun selanjutnya, Menteng 31 dikenal sebagai salah satu pusat penting yang melahirkan tokoh Angkatan 45.</p>"
      },
      { 
        name : "CHAIRUL SALEH",
        img : "assets/img/content/chairul-saleh.jpg",
        desc : "<p>Jendral TNI (HOR) Chaerul Saleh gelar Datuk Paduko Rajo lahir pada tanggal 13 September 1916 dan wafat pada tanggal 8 Februari 1967. Ia adalah seorang pejuang dan tokoh politik Indonesia yang pernah menjabat sebagai wakil perdana menteri, menteri, dan ketua MPRS dari tahun 1957 sampai 1966. Ia juga mengajukan ide negara kepulauan dengan batas teritorial 12 mil laut yang di­sahkan pada 13 Desember 1957. Atas jasa-jasanya, Chaerul dianugerahi gelar kehormatan Jenderal TNI.</p><p>Beliau menjadi anggota dari Jawatan Propaganda Jepang atau yang dikenal dengan nama Sendenbu.  Dia menjabat sebagai penasihat (sanyo) untuk Barisan Pelopor di bawah kepemimpinan Soekarno. Selama bekerja untuk Jepang, Chaerul dipercaya juga memimpin kursus yang bernama Angkatan Baru Indonesia bersama Sukarni. Kursus inilah yang menjadi cikal bakal dari Asrama Angkatan Baroe Indonesia atau Asrama Menteng 31. </p><p>Lokasi asrama berada di Jalan Menteng No. 31, Kebon Sirih, Menteng, Jakarta Pusat yang menjadi bekas dari Hotel Schomper yang dimiliki oleh L.C. Schomper yang diambil paksa oleh pemerintah Jepang setelah kekalahan Hindia Belanda. Saat ini, gedung Asrama ini digunakan sebagai Gedung Joang 45.</p>"
      },
      { 
        name : "DIPA NUSANTARA AIDIT",
        img : "assets/img/content/dipa-nusantara-aidit.jpg",
        desc : "<p>Dipa Nusantara Aidit atau dikenal juga dengan D.N. Aidit lahir pada tanggal 30 Juli 1923 dan wafat pada tanggal 22 November 1965. Beliau adalah seorang pemimpin senior Partai Komunis Indonesia (PKI). Lahir dengan nama Achmad Aidit di Pulau Belitung, ia akrab dipanggil 'Amat' oleh orang-orang yang akrab dengannya. Menjelang dewasa, Achmad Aidit mengganti namanya menjadi Dipa Nusantara Aidit Ia memberitahukan hal ini kepada ayahnya, yang menyetujuinya begitu saja.Aidit mendapat pendidikan dalam sistem kolonial Belanda.</p><p>Meskipun ia seorang Marxis dan anggota Komunis Internasional (Komintern), Aidit menunjukkan dukungan terhadap paham Marhaenisme Sukarno[6] dan membiarkan partainya berkembang tanpa menunjukkan keinginan untuk merebut kekuasaan. Sebagai balasan atas dukungannya terhadap Sukarno, ia berhasil menjadi Sekjen PKI, dan belakangan Ketua.</p><p>Pada 1965, PKI menjadi salah satu partai politik terbesar di Indonesia, dan menjadi semakin berani dalam memperlihatkan kecenderungannya terhadap kekuasaan. Pada tanggal 30 September 1965 terjadilah tragedi nasional yang dimulai di Jakarta dengan diculik dan dibunuhnya enam orang jenderal dan seorang perwira. Peristiwa ini dikenal sebagai Peristiwa G-30-S. Aidit dituduh sebagai dalang peristiwa ini. Dan dia akhirnya dihukum mati oleh militer.</p>",
      },
      { 
        name : "ADAM MALIK",
        img : "assets/img/content/adam-malik.jpg",
        desc : "<p>H. Adam Malik Batubara lahir pada tanggal 22 Juli 1917 dan wafat pada tanggal 5 September 1984. Beliau adalah seorang politikus Indonesia dan mantan jurnalis yang menjabat sebagai wakil presiden ketiga. Sebelumnya ia menjabat sebagai ketua parlemen, menteri luar negeri, presiden Majelis Umum Perserikatan Bangsa-Bangsa, dan jurnalis. Adam Malik ditetapkan sebagai salah seorang Pahlawan Nasional Indonesia pada tanggal 6 November 1998 berdasarkan Keppres Nomor 107/TK/1998.</p><p>Mewakili kelompok pemuda, Adam Malik sebagai pimpinan Komite Van Aksi, terpilih sebagai Ketua III Komite Nasional Indonesia Pusat (1945-1947) yang bertugas menyiapkan susunan pemerintahan. Selain itu, Adam Malik adalah pendiri dan anggota Partai Rakyat, pendiri Partai Murba, dan anggota parlemen. Tahun 1945-1946 ia menjadi anggota Badan Persatuan Perjuangan di Yogyakarta. Kariernya semakin menanjak ketika menjadi Ketua II Komite Nasional Indonesia Pusat (KNIP), sekaligus merangkap jabatan sebagai anggota Badan Pekerja KNIP.</p>",
      },
      { 
        name : "WIKANA",
        img : "assets/img/content/wikana.jpg",
        desc : "<p>Wikana lahir di Sumedang, Jawa Barat tanggal 18 Oktober 1914  dan meninggal/hilang tahun 1966. Beliau adalah seorang pejuang kemerdekaan Indonesia. Bersama Chaerul Saleh, Sukarni dan pemuda-pemuda lainnya dari Menteng 31, mereka menculik Soekarno dan Hatta dalam Peristiwa Rengasdengklok dengan tujuan agar kedua tokoh ini segera membacakan Proklamasi Kemerdekaan setelah kekalahan Jepang dari Sekutu pada tahun 1945.</p><p>Pada masa mudanya ia aktif sebagai Angkatan Baru Indonesia dan Gerakan Rakyat Baru. Semasa zaman kolonial, Wikana menjadi pemimpin PKI bawah tanah di Jawa Barat. Ia juga berkawan dekat dengan Widarta tokoh PKI bawah tanah yang bertanggungjawab di wilayah Jakarta. Beberapa pekan sebelum peristiwa G30S 1965 terjadi, Wikana berserta beberapa elemen PKI lainnya pergi ke Peking untuk menghadiri perayaan hari Nasional Cina 1 Oktober 1965. </p><p>Tapi sontak terdengar kabar dari tanah air tentang insiden penculikan dan pembunuhan para jenderal. PKI disalahkan.Kurang dari setahun setelah peristiwa G30S, dia ditangkap di rumahnya di Jalan Dempo No. 7 A, Matraman, Jakarta Timur. Mereka membawa Wikana dan sampai hari ini, pemuda garang yang sempat membuat Bung Karno naik pitam itu, tak pernah kembali pulang.</p>",
      },
      { 
        name : "MUHAMMAD HATTA LUKMAN",
        img : "assets/img/content/muhammad-hatta-lukman.jpg",
        desc : "<p>M.H. Lukman atau nama panjang Muhammad Hatta Lukman lahir di Tegal, Jawa Tengah pada tanggal 1 Januari 1920 - wafat pada tanggal 29 April 1966. Beliau adalah tokoh komunis Indonesia, Ia juga Wakil Ketua Central Committee Partai Komunis Indonesia. Lukman diam-diam dieksekusi mati pada pertengahan tahun 1966 selama pembersihan anti-komunis 1965-1966.</p><p>Sebelum 17 Agustus 1945, MH. Lukman juga ikut menculik Soekarno-Hatta untuk segera memproklamasikan kemerdekakan Indonesia pada bulan Agustus. Setelah kemerdekaan, Lukman juga ikut mengobarkan semangat rakyat pada rapat Samudra di Jakarta. Dia juga pernah dijebloskan ke penjara karena dianggap menentang Jepang. Andilnya cukup besar dalam mewujudkan kemerdekaan sehingga dalam usia muda dia telah menjadi Menteri yang membantu Sukarno dan Hatta. </p><p>MH. Lukman aktif di kelompok yang bermarkas di Menteng 31, kelompok yang dikenal dengan nama API (Angkatan Pemuda Indonesia) bersama tokoh-tokoh muda lainnya.</p>",
      },
      { 
        name : "NJONO MARUTO NITIMIHARDJO",
        img : "assets/img/content/njono-maruto-nitimihardjo.jpg",
        desc : "<p>Maruto Nitimihardjo lahir pada tanggal 26 Desember 1906 wafat pada tanggal 17 Januari 1989. Beliau adalah seorang politikus Indonesia kelahiran Cirebon. Setelah proklamasi Kemerdekaan Indonesia, ia bekerja di kantor berita Antara di Yogyakarta dari bulan Januari 1946 dan kemudian sebagai anggota Pemimpin Kantor Berita tersebut pada bulan Pebruari 1947. Dari April 1947 sampai 1950, Ia menjabat sebagai anggota Badan Pekerja KNIP, mula-mula sebagai wakil dari sebagai wakil dari Partai Rakyat, kemudian sebagai wakil dari Partai Murba.</p>",
      },
      { 
        name : "ANAK MARHAEN HANAFI",
        img : "assets/img/content/anak-marhaen-hanafi.jpg",
        desc : "<p>AM Hanafi atau Anak Marhaen Hanafi (lahir di Bengkulu, Hindia Belanda, tahun 1918 – meninggal di Paris, Prancis, 2 Maret 2004 pada umur 85/86 tahun) adalah mantan Menteri Urusan Tenaga Rakyat (1957–1960) dan mantan Duta Besar Republik Indonesia untuk Kuba (1963–1965). Bung Karno dibuang Balanda ke Bengkulu tahun 1938- 1942. Ada banyak teman Bung Karno selama pengasingan, dan A.M Hanafi pun selalu “ngintil” setiap Bung Karno saat bicara politik. Setelah dibawa BK ke Jakarta, Hanafi tumbuh sebagai pejuang radikal.</p><p>Ia aktifis Menteng 31, sebuah rumah yang digunakan banyak tokoh pemuda seperti, Sukarni, Chairul Saleh, Adam Malik dan Hanafi senidiri untuk membicarakan kemerdekaan Indonesia. Jika bukan Sukarni dan Hanafi tak menculik BK dan Hatta ke Rengas Dengklok pada satu malam sebelum proklamasi, mungkin kita juga tak segera merdeka. </p> <p>Hanafi juga yang mengorganisir pemuda melakukan Rapat raksasa di lapangan Ikada yang dikenal dengan nama Rapat Ikada, 19 September. Ikada yang kini adalah lapangan monas itu diorganisir Hanafi dan pemuda pemuda dari Menteng 31 agar rakyat memberi dukungan kepada BK dan Hatta untuk memimpin negara ini.</p>",
      },
      { 
        name : "BURHANUDDIN MOHAMMAD DIAH",
        img : "assets/img/content/burhanuddin-mohammad-diah.jpg",
        desc : "<p>Burhanuddin Mohammad Diah (7 April 1917 – 10 Juni 1996) adalah seorang tokoh pers, pejuang kemerdekaan, diplomat, dan pengusaha Indonesia. Nama asli B.M. Diah yang sesungguhnya hanyalah Burhanuddin. Nama ayahnya adalah Mohammad Diah, yang berasal dari Barus, Sumatra Utara. Pada usia 17 tahun, Burhanuddin berangkat ke Jakarta dan belajar di Ksatriaan Instituut (sekarang Sekolah Ksatrian) yang dipimpin oleh Dr. E.E. Douwes Dekker. </p><p>Burhanuddin memilih jurusan jurnalistik, tetapi ia banyak belajar tentang dunia kewartawanan dari pribadi Douwes Dekker. Jurnalis Burhanuddin Muhammad Diah turut menjadi saksi pada saat Soekarno-Hatta mengadakan pertemuan dengan tokoh-tokoh PPKI di kediaman Laksamana Tadashi Maeda di jalan Meiji Dori (kini Jalan Imam Bonjol Nomor 1). Pada 1 Oktober 1945 B.M. Diah mendirikan Harian Merdeka. </p><p>Diah menjadi pemimpin redaksi, Joesoef Isak menjadi wakilnya, dan Rosihan Anwar menjadi redaktur. Diah memimpin surat kabar ini hingga akhir hayatnya, meskipun belakangan ia lebih banyak menangani PT Masa Merdeka, penerbit Harian 'Merdeka'.</p>",
      },
      { 
        name : "AMIR SJARIFOEDDIN",
        img : "assets/img/content/amir-sjarifoeddin.jpg",
        desc : "<p>Amir Sjarifoeddin Harahap (27 April 1907 – 19 Desember 1948) adalah seorang politikus dan jurnalis Indonesia. Ia menjabat sebagai Perdana Menteri Indonesia ketika Revolusi  Nasional Indonesia sedang berlangsung. Amir lahir dari keluarga bangsawan Batak Angkola asal Pasar Matanggor. Kakeknya, Sutan Gunung Tua, adalah seorang jaksa di Tapanuli. Ayahnya, Baginda Soripada, juga adalah seorang jaksa di Medan. Di kota itulah, Amir lahir dalam keluarga berada dan memiliki tradisi intelektual. Menjelang invasi Jepang ke Hindia Belanda, Amir berusaha—menyetujui dan menjalankan garis Komunis Internasional agar kaum kiri menggalang aliansi dengan kekuatan kapitalis untuk menghancurkan Fasisme. </p> <p>Setelah Peristiwa Madiun 1948, pada masa pemerintahan Hatta PKI berupaya membentuk negara komunis di Madiun dan menyatakan perang terhadap mereka. Amir Sjarifuddin, sebagai salah seorang tokoh PKI, yang pada saat peristiwa Madiun meletus sedang berada di Yogyakarta dalam rangka kongres Serikat Buruh Kereta Api (SBKA) turut ditangkap  beserta beberapa kawannya. 19 Desember 1948, sekitar tengah malam,di kompleks makam desa Ngaliyan, kepala Amir Sjarifuddin ditembak dengan pistol oleh seorang letnan Polisi Militer, sebuah satuan khusus dalam Angkatan Bersenjata Indonesia.</p>",
      },
      { 
        name : "SUBADIO SASTROSATOMO",
        img : "assets/img/content/subadio-sastrosatomo.jpg",
        desc : "<p>Subadio Sastrosatomo adalah seorang politikus Indonesia yang lahir di Pangkalan Brandan, Sumatra Timur pada tanggal 26 Mei 1919. Ayahnya, seorang pegawai Jawatan Garam dan Candu Negara di Pangkalan Brandan, wafat pada 1929. Karena kedua abangnya sudah berkeluarga, Soebadio yang menjadi putra tertua dari sembilan bersaudara praktis menjadi tangan kanan ibunya yang berdagang kulakan dan mengurus sendiri rumah tangganya. </p><p>Tak mengherankan jika keluarganya berharap Soebadio meneruskan jejak kakak sulungnya, Sapoean untuk menjadi dokter. Lulus dari AMS-B (ilmu pasti) di Yogyakarta pada 1939, ia berangkat ke Batavia untuk melanjutkan studi kedokteran di Geneeskundige Hoogeschool. </p><p>Sebagai titipan, Soebadio sudah diberi wejangan ibunya untuk tidak ikut-ikutan berpolitik dan hanya menjadi mahasiswa yang wajar.adalah anggota Partai Sosialis Indonesia (PSI). Setelah proklamasi Kemerdekaan Indonesia, ia diangkat sebagai anggota Badan Pekerja Komite Nasional Indonesia Pusat di Jogjakarta.</p>",
      },
      // { 
      //   name : "DJOHAR NUR",
      //   img : "assets/img/content/djohar-nur.jpg",
      //   desc : "",
      // },
    ]
  }

  public selectedData(selected){
    this.selectedItem = selected;
    this.title = this.selectedItem.name;
  }

  public toScreenGrid(){
    this.selectedItem = null;
    this.title ="PEMUDA MENTENG 31";
  }
}
