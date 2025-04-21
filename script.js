const questions = [
  {
    text: "Apa alasan yang dapat digunakan untuk menambah anggaran perlengkapan kebersihan?",
    options: [
      "A. Mengganti barang yang rusak dan memenuhi kebutuhan baru",
      "B. Membeli barang tambahan sebagai cadangan",
      "C. Meningkatkan jumlah barang walau stok masih cukup",
      "D. Menyesuaikan harga dengan inflasi",
      "E. Mengikuti tren perlengkapan baru"
    ],
    correct: "A. Mengganti barang yang rusak dan memenuhi kebutuhan baru"
  },
  {
    text: "Jenis bahan pembersih apa yang paling efisien untuk lantai kantor berbahan keramik?",
    options: [
      "A. Detergen biasa",
      "B. Pembersih kaca",
      "C. Cairan pel khusus keramik",
      "D. Larutan antiseptik",
      "E. Pemutih pakaian"
    ],
    correct: "C. Cairan pel khusus keramik"
  },
  {
    text: "Apa kriteria utama dalam memilih pemasok perlengkapan kebersihan?",
    options: [
      "A. Lokasi pemasok",
      "B. Harga murah tanpa mempertimbangkan kualitas",
      "C. Kualitas barang dan ketepatan pengiriman",
      "D. Popularitas pemasok",
      "E. Kecepatan promosi pemasok"
    ],
    correct: "C. Kualitas barang dan ketepatan pengiriman"
  },
  {
    text: "Apa yang harus dilakukan jika anggaran perlengkapan kebersihan kantor terbatas?",
    options: [
      "A. Mengurangi frekuensi kebersihan kantor",
      "B. Mencari alternatif barang yang lebih ekonomis namun tetap berkualitas",
      "C. Membatalkan seluruh pengadaan",
      "D. Memprioritaskan barang-barang yang kurang penting",
      "E. Menggunakan barang bekas"
    ],
    correct: "B. Mencari alternatif barang yang lebih ekonomis namun tetap berkualitas"
  },
  {
    text: "Siapa yang bertanggung jawab untuk memastikan kebutuhan perlengkapan kebersihan kantor terpenuhi?",
    options: [
      "A. Seluruh pegawai",
      "B. Bagian logistik atau administrasi kantor",
      "C. Pimpinan kantor",
      "D. Tim kebersihan kantor",
      "E. Bagian keuangan kantor"
    ],
    correct: "B. Bagian logistik atau administrasi kantor"
  },
  {
    text: "Apa langkah pertama yang harus dilakukan sebelum membersihkan ruangan?",
    options: [
      "A. Menyiapkan alat kebersihan yang diperlukan",
      "B. Menyapu lantai terlebih dahulu",
      "C. Memastikan ruangan kosong dari penghuni",
      "D. Memulai dengan membersihkan kaca jendela",
      "E. Menggunakan pengharum ruangan"
    ],
    correct: "A. Menyiapkan alat kebersihan yang diperlukan"
  },
  {
    text: "Apa tujuan utama dari menggunakan kain microfiber saat membersihkan peralatan elektronik?",
    options: [
      "A. Menyerap debu lebih baik tanpa meninggalkan goresan",
      "B. Lebih murah dibandingkan kain biasa",
      "C. Tidak memerlukan cairan pembersih tambahan",
      "D. Lebih cepat kering setelah digunakan",
      "E. Mudah dibersihkan setelah dipakai"
    ],
    correct: "A. Menyerap debu lebih baik tanpa meninggalkan goresan"
  },
  {
    text: "Alat kebersihan yang digunakan untuk membersihkan debu pada sudut yang sulit dijangkau adalah:",
    options: [
      "A. Sapu biasa",
      "B. Kemoceng berbulu halus",
      "C. Lap basah",
      "D. Vacuum cleaner dengan nosel kecil",
      "E. Pembersih kaca"
    ],
    correct: "D. Vacuum cleaner dengan nosel kecil"
  },
  {
    text: "Cairan pembersih apa yang paling tepat digunakan untuk membersihkan noda pada lantai keramik?",
    options: [
      "A. Larutan cuka dan air",
      "B. Cairan pemutih",
      "C. Sabun pencuci piring",
      "D. Cairan pembersih lantai khusus keramik",
      "E. Detergen bubuk"
    ],
    correct: "D. Cairan pembersih lantai khusus keramik"
  },
  {
    text: "Apa yang harus dilakukan setelah membersihkan meja kerja dengan cairan pembersih?",
    options: [
      "A. Membiarkan meja mengering sendiri",
      "B. Membersihkan meja kembali dengan kain kering",
      "C. Mengoleskan pengharum meja",
      "D. Meletakkan kembali barang-barang tanpa menunggu meja kering",
      "E. Menggunakan kain basah tambahan untuk memastikan kebersihan"
    ],
    correct: "B. Membersihkan meja kembali dengan kain kering"
  },
  {
    text: "Bagaimana pengelola umum memastikan bahwa ruangan sudah siap digunakan pada hari acara?",
    options: [
      "A. Mengunjungi ruangan sehari sebelumnya untuk inspeksi",
      "B. Menghubungi penyedia ruangan melalui telepon",
      "C. Menyerahkan tanggung jawab kepada pihak lain",
      "D. Memastikan pembayaran ruangan selesai",
      "E. Mengatur waktu kedatangan peserta lebih awal"
    ],
    correct: "A. Mengunjungi ruangan sehari sebelumnya untuk inspeksi"
  },
  {
    text: "Apa yang sebaiknya dilakukan jika ruangan yang dipesan tidak tersedia pada hari acara?",
    options: [
      "A. Membatalkan acara",
      "B. Mencari ruangan pengganti secara cepat",
      "C. Mengadakan acara di luar ruangan",
      "D. Menunda acara hingga ruangan tersedia",
      "E. Menggunakan ruangan yang tidak sesuai kapasitas"
    ],
    correct: "B. Mencari ruangan pengganti secara cepat"
  },
  {
    text: "Fasilitas apa yang sering diabaikan tetapi penting dalam sebuah acara kedinasan?",
    options: [
      "A. Ketersediaan parkir",
      "B. Wi-Fi berkecepatan tinggi",
      "C. Air minum untuk peserta",
      "D. Ruang penyimpanan barang",
      "E. Tempat istirahat untuk panitia"
    ],
    correct: "B. Wi-Fi berkecepatan tinggi"
  },
  {
    text: "Apa manfaat utama dari menyusun daftar periksa (checklist) untuk acara?",
    options: [
      "A. Mengurangi jumlah staf yang dibutuhkan",
      "B. Menghindari kelupaan terhadap detail penting",
      "C. Menambah waktu untuk pelaksanaan acara",
      "D. Membantu membatasi anggaran acara",
      "E. Mengurangi risiko keluhan dari peserta"
    ],
    correct: "B. Menghindari kelupaan terhadap detail penting"
  },
  {
    text: "Apa yang harus dilakukan untuk memastikan konsumsi peserta memadai selama acara?",
    options: [
      "A. Menyediakan makanan sebanyak mungkin",
      "B. Membiarkan peserta membawa makanan sendiri",
      "C. Mengurangi biaya katering untuk menghemat anggaran",
      "D. Menyediakan hanya snack ringan",
      "E. Menyediakan makanan yang sesuai kebutuhan peserta"
    ],
    correct: "E. Menyediakan makanan yang sesuai kebutuhan peserta"
  },
  {
    text: "Langkah pertama yang harus dilakukan pengelola umum untuk memastikan peralatan dan barang-barang gedung dalam kondisi baik adalah:",
    options: [
      "A. Membuat inventarisasi aset secara terperinci",
      "B. Meminta laporan dari staf kebersihan",
      "C. Memeriksa manual setiap peralatan",
      "D. Menghubungi vendor untuk perawatan",
      "E. Mengganti peralatan lama secara berkala"
    ],
    correct: "A. Membuat inventarisasi aset secara terperinci"
  },
  {
    text: "Mengapa jadwal perawatan preventif penting dalam pengelolaan gedung?",
    options: [
      "A. Untuk mengurangi biaya operasional",
      "B. Untuk memastikan semua staf terlibat",
      "C. Untuk menghindari pembelian peralatan baru",
      "D. Untuk memperpanjang umur peralatan",
      "E. Untuk mengurangi beban kerja pengelola"
    ],
    correct: "D. Untuk memperpanjang umur peralatan"
  },
  {
    text: "Apa prioritas utama saat memeriksa peralatan listrik di gedung?",
    options: [
      "A. Menentukan usia peralatan",
      "B. Memastikan keamanan penggunaannya",
      "C. Mengganti komponen yang terlihat usang",
      "D. Membersihkan debu pada komponen",
      "E. Mencatat spesifikasi teknis"
    ],
    correct: "B. Memastikan keamanan penggunaannya"
  },
  {
    text: "Dokumen apa yang penting disiapkan untuk memastikan pemeliharaan peralatan berjalan sesuai rencana?",
    options: [
      "A. Daftar belanja suku cadang",
      "B. Buku panduan perawatan vendor",
      "C. Laporan harian operasional",
      "D. Jadwal inspeksi berkala",
      "E. Catatan keluhan pengguna"
    ],
    correct: "D. Jadwal inspeksi berkala"
  },
  {
    text: "Apa yang sebaiknya dilakukan jika ada barang atau peralatan yang sudah melewati masa pakainya?",
    options: [
      "A. Langsung mengganti dengan yang baru",
      "B. Memperbaiki dan tetap digunakan",
      "C. Menggunakan barang tersebut hingga benar-benar rusak",
      "D. Menghapus dari inventaris dan mengajukan pembelian baru",
      "E. Menunggu rekomendasi dari vendor"
    ],
    correct: "D. Menghapus dari inventaris dan mengajukan pembelian baru"
  },
  {
    text: "Apa cara terbaik untuk menangani keluhan terkait makanan dari tamu selama acara?",
    options: [
      "A. Mengabaikan keluhan jika tidak signifikan",
      "B. Memberikan kompensasi berupa menu tambahan",
      "C. Mencatat keluhan untuk evaluasi pasca acara",
      "D. Meminta maaf dan menawarkan solusi langsung",
      "E. Mengganti vendor katering di acara berikutnya"
    ],
    correct: "D. Meminta maaf dan menawarkan solusi langsung"
  },
  {
    text: "Apa yang harus dilakukan jika minuman panas tumpah di meja tamu selama acara?",
    options: [
      "A. Membersihkan dengan segera dan meminta maaf",
      "B. Mengabaikan insiden dan melanjutkan acara",
      "C. Menawarkan kompensasi berupa minuman gratis",
      "D. Meminta tamu untuk membersihkan sendiri",
      "E. Mengganti seluruh pengaturan meja"
    ],
    correct: "A. Membersihkan dengan segera dan meminta maaf"
  },
  {
    text: "Faktor apa yang sering diabaikan tetapi penting dalam penyajian makanan dan minuman?",
    options: [
      "A. Jumlah makanan yang berlebih",
      "B. Kebersihan serbet dan perlengkapan kecil",
      "C. Varian rasa makanan",
      "D. Pilihan minuman selain air putih",
      "E. Kecepatan penyajian"
    ],
    correct: "B. Kebersihan serbet dan perlengkapan kecil"
  },
  {
    text: "Apa manfaat utama melakukan evaluasi penyajian makanan setelah acara?",
    options: [
      "A. Menentukan menu yang paling disukai tamu",
      "B. Mengurangi anggaran untuk acara berikutnya",
      "C. Menyempurnakan layanan di acara mendatang",
      "D. Menghindari vendor katering yang sama",
      "E. Mengidentifikasi tamu yang hadir"
    ],
    correct: "C. Menyempurnakan layanan di acara mendatang"
  },
  {
    text: "Apa langkah yang paling penting untuk menghindari sisa makanan berlebih dalam acara?",
    options: [
      "A. Membatasi menu yang disajikan",
      "B. Menggunakan jasa vendor katering yang hemat",
      "C. Mengestimasi jumlah tamu dengan akurat",
      "D. Mengurangi porsi makanan setiap tamu",
      "E. Memesan makanan sesuai anggaran minimum"
    ],
    correct: "C. Mengestimasi jumlah tamu dengan akurat"
  },
  {
    text: "Langkah pertama yang harus dilakukan oleh pengelola umum sebelum mengatur pengantaran barang atau dokumen adalah:",
    options: [
      "A. Memilih jasa pengiriman tercepat",
      "B. Mengidentifikasi tujuan pengiriman",
      "C. Menentukan anggaran pengiriman",
      "D. Mengemas barang dengan aman",
      "E. Membuat daftar pengiriman yang diperlukan"
    ],
    correct: "B. Mengidentifikasi tujuan pengiriman"
  },
  {
    text: "Apa yang menjadi prioritas utama dalam mengemas dokumen penting untuk pengiriman?",
    options: [
      "A. Kecepatan proses pengemasan",
      "B. Kesesuaian ukuran kemasan",
      "C. Perlindungan terhadap kerusakan atau kehilangan",
      "D. Penggunaan bahan kemasan murah",
      "E. Label kemasan yang menarik"
    ],
    correct: "C. Perlindungan terhadap kerusakan atau kehilangan"
  },
  {
    text: "Bagaimana pengelola memastikan bahwa barang yang dikirim telah sampai ke tujuan?",
    options: [
      "A. Mengandalkan bukti pembayaran jasa pengiriman",
      "B. Menghubungi penerima melalui telepon",
      "C. Menggunakan layanan pengiriman dengan fitur pelacakan",
      "D. Mengirimkan barang melalui staf internal",
      "E. Meminta tanda terima dari kurir pengantar"
    ],
    correct: "C. Menggunakan layanan pengiriman dengan fitur pelacakan"
  },
  {
    text: "Apa tindakan terbaik jika pengiriman dokumen penting mengalami keterlambatan?",
    options: [
      "A. Meminta maaf kepada penerima dan memberikan penjelasan",
      "B. Menunggu dokumen tiba tanpa tindakan",
      "C. Membatalkan pengiriman dan menggantinya dengan salinan digital",
      "D. Mengirim ulang dokumen melalui jalur lain",
      "E. Menghubungi penyedia layanan pengiriman untuk klarifikasi"
    ],
    correct: "E. Menghubungi penyedia layanan pengiriman untuk klarifikasi"
  },
  {
    text: "Apa yang harus dilakukan pengelola jika barang yang akan dikirim berukuran besar dan berat?",
    options: [
      "A. Menggunakan kendaraan pribadi untuk pengiriman",
      "B. Memilih layanan pengiriman khusus untuk barang besar",
      "C. Membagi barang menjadi beberapa bagian kecil",
      "D. Mengurangi isi barang agar lebih ringan",
      "E. Mengirimkan barang dalam waktu yang berbeda"
    ],
    correct: "B. Memilih layanan pengiriman khusus untuk barang besar"
  },
  {
    text: "Apa yang sebaiknya dilakukan jika dokumen harus sampai di alamat tujuan dalam waktu kurang dari satu hari?",
    options: [
      "A. Menggunakan layanan pengiriman kilat atau same-day delivery",
      "B. Mengirim dokumen melalui email untuk sementara",
      "C. Mengantarkan dokumen secara langsung menggunakan kendaraan pribadi",
      "D. Menggunakan kurir lokal yang tidak memerlukan proses panjang",
      "E. Meminta penerima datang untuk mengambil dokumen"
    ],
    correct: "A. Menggunakan layanan pengiriman kilat atau same-day delivery"
  },
  {
    text: "Apa yang menjadi perhatian utama saat memilih jasa pengiriman untuk dokumen perusahaan?",
    options: [
      "A. Biaya yang paling ekonomis",
      "B. Kecepatan waktu pengiriman",
      "C. Reputasi layanan pengiriman",
      "D. Jaminan keamanan dan privasi dokumen",
      "E. Popularitas penyedia layanan"
    ],
    correct: "D. Jaminan keamanan dan privasi dokumen"
  },
  {
    text: "Apa langkah yang harus dilakukan pengelola setelah dokumen berhasil dikirim?",
    options: [
      "A. Menyimpan bukti pengiriman untuk arsip",
      "B. Menghubungi penerima untuk konfirmasi",
      "C. Memastikan dokumen dicatat dalam laporan pengiriman",
      "D. Melakukan evaluasi terhadap proses pengiriman",
      "E. Semua jawaban benar"
    ],
    correct: "E. Semua jawaban benar"
  },
  {
    text: "Bagaimana memastikan dokumen penting tidak tertukar selama proses pengiriman?",
    options: [
      "A. Menyertakan nomor referensi unik pada paket",
      "B. Menggunakan amplop dengan warna mencolok",
      "C. Menyusun dokumen berdasarkan prioritas",
      "D. Mengemas dokumen di lokasi yang berbeda",
      "E. Mengirimkan dokumen secara terpisah"
    ],
    correct: "A. Menyertakan nomor referensi unik pada paket"
  },
  {
    text: "Apa manfaat menggunakan asuransi pengiriman untuk dokumen bernilai tinggi?",
    options: [
      "A. Mengurangi risiko dokumen hilang",
      "B. Memberikan perlindungan tambahan terhadap kehilangan atau kerusakan",
      "C. Memastikan dokumen tiba lebih cepat",
      "D. Mengurangi biaya pengiriman secara keseluruhan",
      "E. Memberikan reputasi baik pada perusahaan pengirim"
    ],
    correct: "B. Memberikan perlindungan tambahan terhadap kehilangan atau kerusakan"
  },
  {
    "text": "Dapat menjalin hubungan baik antar anggota organisasi, struktur anggota dapat mengetahui tugas, kewajiban dan tanggung jawabnya, spesialisasi dalam melakukan tugas. Merupakan manfaat...",
    "options": [
      "A. Coordinating",
      "B. Planning",
      "C. Organizing",
      "D. Actuating",
      "E. Controlling"
    ],
    "correct": "C. Organizing"
  },
  {
    "text": "Menentukan sumber dana yang diperlukan, mengalokasikan sumber keuangan yang ada pada segala aktivitas perusahaan atau penyusunan anggaran pengeluaran, dan melakukan pengawasan terhadap penggunaan dan pemanfaatan keuangan, merupakan langkah yang ditempuh oleh manajemen...",
    "options": [
      "A. Personalia",
      "B. Produksi",
      "C. Keuangan",
      "D. Pemasaran",
      "E. Administrasi"
    ],
    "correct": "C. Keuangan"
  },
  {
    "text": "Bagaimana Anda membagi tugas kepada rekan dan bawahan Anda?",
    "options": [
      "A. Saya membaginya sesuai dengan kepribadian dan sifat",
      "B. Saya membaginya sesuai dengan minat dan keinginan",
      "C. Saya membaginya sesuai dengan keahlian dan keterampilan",
      "D. Saya membaginya sesuai dengan minat dan kemampuan",
      "E. Saya membaginya sesuai dengan bakat"
    ],
    "correct": "C. Saya membaginya sesuai dengan keahlian dan keterampilan"
  },
  {
    "text": "Vendor atau pihak ketiga melaporkan bahwa proyek yang sedang dikerjakan tidak mencapai target tepat waktu. Tindakan yang saya lakukan adalah...",
    "options": [
      "A. Meminta bukti untuk dilaporkan kepada atasan",
      "B. Meminta vendor untuk menyelesaikan pekerjaan tepat waktu",
      "C. Meminta bukti yang lengkap untuk didiskusikan dan mencarikan solusi",
      "D. Meminta bukti yang lengkap untuk dilaporkan kepada atasan bahwa vendor kurang baik",
      "E. Meminta alasan kepada vendor mengapa pekerjaan tidak selesai tepat waktu"
    ],
    "correct": "D. Meminta bukti yang lengkap untuk dilaporkan kepada atasan bahwa vendor kurang baik"
  },
  {
    "text": "Anda mendapat klien yang sangat kritis terhadap hasil kerja Anda, menghadapi klien tersebut...",
    "options": [
      "A. Bersedia memenuhi semua permintaan sehingga dapat memuaskan klien",
      "B. Bernegosiasi dengan klien bahwa tidak semua permintaannya dapat dipenuhi",
      "C. Melaporkan sikap klien tersebut kepada atasan",
      "D. Meminta atasan untuk menambah pegawai yang dapat membantu klien tersebut",
      "E. Meminta atasan untuk menambah pegawai khusus"
    ],
    "correct": "B. Bernegosiasi dengan klien bahwa tidak semua permintaannya dapat dipenuhi"
  },
  {
    "text": "Saya mampu menuntaskan tugas sebelum batas waktu yang ditetapkan. Saya memiliki waktu senggang pada jam kerja. Biasanya waktu tersebut digunakan untuk...",
    "options": [
      "A. Membaca buku-buku yang dapat mendukung pekerjaan saya",
      "B. Menawarkan bantuan kepada rekan kerja",
      "C. Meneliti kembali hasil pekerjaan saya",
      "D. Bersosialisasi dengan rekan-rekan se-kantor",
      "E. Bersosialisasi dengan rekan-rekan dari tim berbeda"
    ],
    "correct": "A. Membaca buku-buku yang dapat mendukung pekerjaan saya"
  },
  {
    "text": "Suatu hari ada seorang klien kebangsaan asing menemui Anda untuk berkonsultasi. Anda tidak mengerti bahasa yang ia gunakan. Sikap Anda....",
    "options": [
      "A. Menolak untuk menemuinya karena takut tidak paham",
      "B. Menyuruh rekan Anda yang memahami bahasa orang asing tersebut untuk menemuinya",
      "C. Meminta bantuan rekan Anda yang memahami bahasa orang asing tersebut untuk menerjemahkan ketika Anda sedang berbicara dengannya",
      "D. Berpura-pura memahami pembicaraannya",
      "E. Meminta orang asing tersebut untuk datang lain kali dan membawa penerjemah"
    ],
    "correct": "C. Meminta bantuan rekan Anda yang memahami bahasa orang asing tersebut untuk menerjemahkan ketika Anda sedang berbicara dengannya"
  },
  {
    "text": "Buah mangga milik tetangga Anda berjatuhan dan mengenai genting rumah Anda hingga berlubang. Sikap Anda adalah....",
    "options": [
      "A. Mendatangi tetangga Anda dan marah-marah",
      "B. Menyuruh tetangga Anda untuk menebang pohon mangganya.",
      "C. Mendatangi tetangga Anda dan meminta dengan sopan agar memangkas dahan-dahan pohon yang berada di atas genting anda",
      "D. Meminta izin kepada tetangga Anda untuk menebang dahan tersebut.",
      "E. Menebang pohon mangga tanpa sepengetahuan tetangga Anda"
    ],
    "correct": "C. Mendatangi tetangga Anda dan meminta dengan sopan agar memangkas dahan-dahan pohon yang berada di atas genting anda"
  },
  {
    "text": "Rekan kerja Anda yang sedang cuti melahirkan meminta Anda untuk membawakan barang-barangnya yang tertinggal di kantor. Sikap Anda....",
    "options": [
      "A. Segera mengantarkannya",
      "B. Menggunakan jasa kurir untuk mengantar",
      "C. Mengantarkannya pulang kantor sekaligus menjenguk rekan Anda.",
      "D. Menolak karena pekerjaan Anda banyak",
      "E. Menyuruh rekan Anda yang lain untuk mengantar."
    ],
    "correct": "C. Mengantarkannya pulang kantor sekaligus menjenguk rekan Anda."
  },
  {
    "text": "Planning, Organizing, Motivating, Controlling, Evaluating merupakan fungsi manajemen menurut...",
    "options": [
      "A. Sondang P. Siagian",
      "B. Henry Fayol",
      "C. M. Gullick",
      "D. Harold Koontz",
      "E. George R. Terry"
    ],
    "correct": "A. Sondang P. Siagian"
  },
  {
    "text": "Anda adalah karyawan yang memiliki kompetensi di bidang pemasaran dan dipercaya untuk memimpin tim yang kurang produktif. Usia mereka jauh lebih tua dari pada Anda. Bagaimana strategi Anda?",
    "options": [
      "A. Memaksa anggota tim untuk mengikuti kehendak Anda",
      "B. Mengevaluasi kinerja tim dan mendorongnya untuk berubah",
      "C. Mengambil alih tanggung jawab tim",
      "D. Menggunakan cara baru sesuai kemampuan Anda",
      "E. Mendiskusikan apa hambatannya selama ini dan mencari solusi bersama serta mengevaluasi secara rutin"
    ],
    "correct": "E. Mendiskusikan apa hambatannya selama ini dan mencari solusi bersama serta mengevaluasi secara rutin"
  },
  {
    "text": "Yang termasuk pengumpulan data primer adalah...",
    "options": [
      "A. Profil kesehatan Kecamatan A",
      "B. Laporan tahunan program sanitarian kesehatan",
      "C. Hasil kajian Surveilans Vektor",
      "D. Hasil diskusi kelompok terarah",
      "E. Laporan kejadian wabah"
    ],
    "correct": "D. Hasil diskusi kelompok terarah"
  },
  {
    "text": "Yang termasuk pengumpulan data sekunder adalah...",
    "options": [
      "A. Hasil wawancara tanpa panduan",
      "B. Laporan tahunan program Promkes",
      "C. Hasil wawancara dengan panduan",
      "D. Hasil diskusi kelompok terarah",
      "E. Hasil observasi berkelanjutan"
    ],
    "correct": "B. Laporan tahunan program Promkes"
  },
  {
    "text": "Kegiatan mengubah data berbentuk huruf menjadi data berbentuk angka atau bilangan disebut juga...",
    "options": [
      "A. Entry data",
      "B. Editing",
      "C. Coding",
      "D. Tabulating",
      "E. Cleaning"
    ],
    "correct": "C. Coding"
  },
  {
    "text": "Proses penyederhanaan data dalam bentuk yang lebih mudah dibaca dan diinterpretasikan disebut juga...",
    "options": [
      "A. Interpretasi data",
      "B. Analisa data",
      "C. Tabulating",
      "D. Recording",
      "E. Cleaning"
    ],
    "correct": "B. Analisa data"
  },
  {
    "text": "Pengumpulan data primer berupa kelembapan udara di dalam rumah paling tepat menggunakan metode pengumpulan data...",
    "options": [
      "A. Kuisioner",
      "B. Pengukuran",
      "C. Wawancara",
      "D. Pengamatan",
      "E. Rekam medis"
    ],
    "correct": "B. Pengukuran"
  },
  {
    "text": "Hal yang perlu diperhatikan dalam membuat atau merumuskan kegiatan programa adalah...",
    "options": [
      "A. Kecepatan",
      "B. Waktu",
      "C. Ketersediaan teknologi",
      "D. Ketepatan",
      "E. Hari"
    ],
    "correct": "C. Ketersediaan teknologi"
  },
  {
    "text": "Dorongan atau bimbingan dari pemerintah bagi peningkatan kerja sama kelompok-kelompok tani dapat diperlihatkan dalam bentuk...",
    "options": [
      "A. Penyediaan bahan-bahan khusus",
      "B. Membasmi hama-hama yang umum",
      "C. Organisasi koperasi",
      "D. Kegiatan politik petani",
      "E. Membeli hasil panen dengan harga tinggi"
    ],
    "correct": "A. Penyediaan bahan-bahan khusus"
  },
  {
    "text": "Penyajian data yang merupakan gabungan dari diagram batang dan garis adalah...",
    "options": [
      "A. Diagram peta",
      "B. Diagram pencar",
      "C. Diagram lingkaran",
      "D. Piktogram",
      "E. Histogram"
    ],
    "correct": "E. Histogram"
  },
  {
    "text": "Kegiatan yang menggambarkan jawaban responden dengan cara tertentu dan dapat digunakan untuk menciptakan statistik deskriptif variabel-variabel yang diteliti disebut...",
    "options": [
      "A. Cleaning",
      "B. Tabulating",
      "C. Analisa data",
      "D. Editing",
      "E. Recording"
    ],
    "correct": "B. Tabulating"
  },
  {
    "text": "Guru mengadakan penilaian yang mengacu pada kriteria yang telah ditetapkan dan mencakup semua aspek kompetensi baik afektif kognitif dan psikomotorik itu adalah prinsip penilaian...",
    "options": [
      "A. beracuan kriteria dan menyeluruh",
      "B. beracuan kriteria dan sistematis",
      "C. akuntabel dan menyeluruh",
      "D. objektif dan menyeluruh"
    ],
    "correct": "A. beracuan kriteria dan menyeluruh"
  },
  {
    "text": "Langkah-langkah menulis soal tes uraian sebagai berikut kecuali...",
    "options": [
      "A. melakukan analisis KI dan KD serta indikator",
      "B. mendefinisikan tujuan-tujuan pembelajaran dan lingkup bahan ajar yang mestinya diungkap",
      "C. menyusun kisi-kisi",
      "D. membuat pedoman penskoran"
    ],
    "correct": "C. menyusun kisi-kisi"
  },
  {
    "text": "Berikut adalah tugas dan kewenangan satuan pendidikan dalam penilaian hasil belajar peserta didik kecuali...",
    "options": [
      "A. menetapkan standar ketuntasan belajar yang harus dicapai peserta didik",
      "B. menetapkan kriteria kenaikan kelas",
      "C. menetapkan kriteria kelulusan peserta didik",
      "D. menjadi panitia pelaksana ujian nasional tingkat satuan pendidikan"
    ],
    "correct": "D. menjadi panitia pelaksana ujian nasional tingkat satuan pendidikan"
  },
  {
    "text": "Dalam menentukan jumlah alokasi waktu pada Kompetensi Dasar Bu Dina selalu memperhatikan aspek-aspek dibawah ini kecuali...",
    "options": [
      "A. jumlah minggu efektif",
      "B. jumlah dan keluasan KD",
      "C. kedalaman dan tingkat kesulitan KD",
      "D. jangka waktu penggunaan media"
    ],
    "correct": "D. jangka waktu penggunaan media"
  },
  {
    "text": "Penentuan alokasi waktu pada silabus berdasarkan...",
    "options": [
      "A. program tahunan",
      "B. program semester",
      "C. analisis minggu efektif",
      "D. kedalaman materi"
    ],
    "correct": "C. analisis minggu efektif"
  },
  {
    "text": "Jika pada silabus terdapat diksi 'memecahkan masalah sampah' hal itu terdapat pada komponen...",
    "options": [
      "A. materi pembelajaran",
      "B. kegiatan pembelajaran",
      "C. kompetensi dasar",
      "D. indikator pencapaian kompetensi"
    ],
    "correct": "C. kompetensi dasar"
  },
  {
    "text": "Kumpulan tugas siswa yang akan dijadikan bahan untuk menyusun laporan hasil belajar kepada orang tua disebut penilaian...",
    "options": [
      "A. jurnal",
      "B. portofolio",
      "C. raport",
      "D. produk"
    ],
    "correct": "B. portofolio"
  },
  {
    "text": "Dalam menyusun instrumen penilaian tertulis harus diperhatikan hal-hal berikut kecuali...",
    "options": [
      "A. materi",
      "B. bahasa",
      "C. relevansi",
      "D. kaidah penulisan"
    ],
    "correct": "C. relevansi"
  },
  {
    "text": "Perilaku yang dapat diukur untuk menunjukkan ketercapaian kompetensi dasar tertentu yang menjadi acuan penilaian mata pelajaran adalah...",
    "options": [
      "A. kompetensi inti",
      "B. standar kompetensi lulusan",
      "C. indikator",
      "D. standar isi"
    ],
    "correct": "C. indikator"
  },
  {
    "text": "Seorang guru sebelum melaksanakan pembelajaran mempersiapkan perangkat pembelajaran. Setelah menyusun indikator pembelajaran untuk KD tertentu. Selanjutnya menyusun tujuan pembelajaran. Hal ini termuat dalam...",
    "options": [
      "A. silabus",
      "B. RPP",
      "C. program tahunan",
      "D. standar kompetensi lulusan"
    ],
    "correct": "B. RPP"
  },
  {
    "text": "Vendor atau pihak ketiga melaporkan bahwa proyek yang sedang dikerjakan tidak mencapai target tepat waktu. Tindakan yang saya lakukan adalah",
    "options": [
      "A. Meminta bukti untuk dilaporkan kepada atasan",
      "B. Meminta vendor untuk menyelesaikan pekerjaan tepat waktu",
      "C. Meminta bukti yang lengkap untuk didiskusikan dan mencarikan solusi",
      "D. Meminta bukti yang lengkap untuk dilaporkan kepada atasan bahwa vendor kurang baik",
      "E. Meminta alasan kepada vendor mengapa pekerjaan tidak selesai tepat waktu"
    ],
    "correct": "D. Meminta bukti yang lengkap untuk dilaporkan kepada atasan bahwa vendor kurang baik"
  },
  {
    "text": "Anda adalah karyawan yang memiliki kompetensi dibidang pemasaran, dan dipercaya untuk memimpin tim yang kurang produktif. Usia mereka jauh lebih tua dari pada anda. Bagaimana strategi anda ?",
    "options": [
      "A. Memaksa anggota tim untuk mengikuti kehendak anda",
      "B. Mengevaluasi kinerja tim dan mendorongnya untuk berubah",
      "C. Mengambil alih tanggungjawab tim sebagai tanggungjawab",
      "D. Menggunakan cara baru sesuai kemampuan anda",
      "E. Mendiskusikan apa hambatannya selama ini dan mencari solusi bersama serta mengevaluasi secara rutin"
    ],
    "correct": "E. Mendiskusikan apa hambatannya selama ini dan mencari solusi bersama serta mengevaluasi secara rutin"
  },
  {
    "text": "Apakah Anda bersikeras agar orang lain melakukan pembagian tugas secara adil?",
    "options": [
      "A. Tergantung hal tersebut dapat ditoleransi atau tidak?",
      "B. Jelas, karena keadilan adalah utama dan mutlak",
      "C. Tidak masalah jika kedua pihak puas walaupun bukan dalam posisi adil",
      "D. Tidak masalah walaupun tidak adil, proporsinya cukup dan dapat berjalan dengan baik",
      "E. Jelas, karena keadilan adalah yang utama"
    ],
    "correct": "B. Jelas, karena keadilan adalah utama dan mutlak"
  },
  {
    "text": "Untuk mencapai tujuan kelompok yang telah ditetapkan saya :",
    "options": [
      "A. Tidak mempermasalahkan apakah orang lain mau bekerja dengan baik atau tidak",
      "B. Mendorong orang lain untuk bekerja dengan baik jika situasi memungkinkan",
      "C. Mendorong orang lain bekerja dengan baik jika diperlukan",
      "D. Menstimulasi orang lain untuk mau bekerja dengan baik",
      "E. Mengajak orang lain bersama-sama untuk bekerja dengan baik"
    ],
    "correct": "D. Menstimulasi orang lain untuk mau bekerja dengan baik"
  },
  {
    "text": "Prosedur kerja yang baik menurut anda adalah....",
    "options": [
      "A. Meskipun berbelit- belit selalu mengikuti prosedur yang telah ditetapkan",
      "B. Sesuai dengan perintah dan arahan atasan",
      "C. Menerapkan prosedur baru agar tidak ketinggalan zaman",
      "D. Menerapkan prosedur baru yang lebih maju",
      "E. Melakukan inovasi secara berkelanjutan agar prosedur kerja semakin efektif dan efisien"
    ],
    "correct": "E. Melakukan inovasi secara berkelanjutan agar prosedur kerja semakin efektif dan efisien"
  },
  {
    "text": "Penerapan PRA pada fase perencanaan, diantaranya adalah....",
    "options": [
      "A. meningkatkan kesadaran masyarakat tentang adanya masalah spesifik",
      "B. meningkatkan kerjasama dalam meninjau kembali permasalahan",
      "C. mendapat informasi yang lebih rinci tentang kelayakan rencana kegiatan",
      "D. mengantisipasi konflik yang terjadi diantara kelompok masyarakat",
      "E. meningkatkan kesadaran masyarakat tentang adanya masalah perbedaan"
    ],
    "correct": "C. mendapat informasi yang lebih rinci tentang kelayakan rencana kegiatan"
  },
  {
    "text": "Saya tergolong orang yang kreatif, karena saya...",
    "options": [
      "A. Mampu menyelesaikan berbagai tugas sulit dalam waktu yang singkat",
      "B. Senang menghasilkan karya-karya intelektual yang bermanfaat",
      "C. Memiliki cara pandang yang unik dan kontroversial",
      "D. Mempunyai ide-ide baru yang belum pernah dilakukan sebelumnya",
      "E. Senang menghasilkan karya-karya baru"
    ],
    "correct": "B. Senang menghasilkan karya-karya intelektual yang bermanfaat"
  },
  {
    "text": "Anda mendapat klien yang sangat kritis terhadap hasil kerja anda, menghadapi klien tersebut;",
    "options": [
      "A. Bersedia memenuhi semua permintaan sehingga dapat memuaskan klien",
      "B. Bernegosiasi dengan klien bahwa tidak semua permintaannya dapat dipenuhi",
      "C. Melaporkan sikap klien tersebut kepada atasan",
      "D. Meminta atasan untuk menambah pegawai yang dapat membantu klien tersebut",
      "E. Meminta atasan untuk menambah pegawai khusus"
    ],
    "correct": "B. Bernegosiasi dengan klien bahwa tidak semua permintaannya dapat dipenuhi"
  },
  {
    "text": "Apa yang Anda lakukan dalam sebuah diskusi dengan sekelompok kecil teman-teman Anda sekantor?",
    "options": [
      "A. Saya selalu aktif berpendapat dan mengarahkan teman- teman untuk aktif juga",
      "B. Jika perlui bicara maka saya ungkapkan, jika tidak maka saya cukup mendengar",
      "C. Saya menjadi pengamat sejenak kemudian aktif berpendapat",
      "D. Saya lebih banyak diam dan berbicara sekedaarnya",
      "E. Saya aktif berpendapat dan mengarahkan teman- teman untuk mengikuti pendapat saya"
    ],
    "correct": "A. Saya selalu aktif berpendapat dan mengarahkan teman- teman untuk aktif juga"
  },
  {
    "text": "Dengan dana terbatas anda diminta oleh atasan untuk mengadakan kegiatan di kantor. Beberapa pendahulu anda tidak terlalu sukses melaksanakan kegiatan tersebut, karena adanya right budget policy. Reaksi anda ketika menerima tugas tersebut?",
    "options": [
      "A. Menolak tugas tersebut karena dirasa mustahil untuk dilaksanakan",
      "B. Menerima tugas tersebut dengan berbagai syarat yang harus dipenuhi.",
      "C. Menolak tugas dengan mengemukakan kekurangan - kekurangan diri, dan meminta atasan untuk menugaskan kepada orang lain.",
      "D. Menerima tugas tersebut kemudian mengajak rekan- rekan kerja untuk mendiskusikan berbagai alternatif cara menyelesaikan tugas tersebut.",
      "E. Menerima tugas tersebut kemudian mencoba menyelesaikannya sendiri"
    ],
    "correct": "D. Menerima tugas tersebut kemudian mengajak rekan- rekan kerja untuk mendiskusikan berbagai alternatif cara menyelesaikan tugas tersebut."
  },
  {
    "text": "Apakah Anda menunjukkan inisiatif dan berusaha untuk mengejar prestasi kerja?",
    "options": [
      "A. Saya selalu menunjukkan inisiatif dalam bekerja",
      "B. Terkadang jika saya terpikirkan ide maka saya akan berinisiatif melakukan sesuatu",
      "C. Tergantung keadaan dan kondisi saya",
      "D. Saya tidak pernah berinisiatif tetapi selalu mengerjakan tugas dengan baik",
      "E. Saya kadang berinisiatif jika diperlukan"
    ],
    "correct": "A. Saya selalu menunjukkan inisiatif dalam bekerja"
  },
  {
    "text": "Siswa diminta mengamati proses fotosintesis termasuk penilaian...",
    "options": [
      "A. Kinerja",
      "B. Produk",
      "C. Portofolio",
      "D. Proyek",
      "E. Praktik"
    ],
    "correct": "D. Proyek"
  },
  {
    "text": "Dalam mengawali pelajarannya, Pak Joko menyampaikan suatu permasalahan guna menggugah dan menimbulkan kepenasaran-kepenasaran para siswanya. Langkah tersebut bertujuan untuk mendorong para siswa agar mau mengembangkan kreativitasnya. Langkah yang dilakukan Pak Joko itu merupakan bagian dari model pembelajaran....",
    "options": [
      "A. Portofolio",
      "B. Saintifik",
      "C. Penemuan Diskoveri learning",
      "D. Autentik"
    ],
    "correct": "C. Penemuan Diskoveri learning"
  },
  {
    "text": "Berikut ini merupakan faktor-faktor yang perlu diperhatikan dalam pengembangan kisi-kisi tes uraian, kecuali ....",
    "options": [
      "A. Penentuan alokasi waktu",
      "B. Penentuan pokok bahasan",
      "C. Penentuan indikator/tujuan",
      "D. Pendistribusian butir soal"
    ],
    "correct": "C. Penentuan indikator/tujuan"
  },
  {
    "text": "Pada awal semester Pak Budi sebagai guru IPA selalu menjelaskan penilaian yang akan dilaksanakan selama satu semester dan penentuan nilai akhir IPA yang akan dijadikan dasar untuk pemberian nilai raport. Hal ini artinya Pak Budi telah menerapkan prinsip penilaian.....",
    "options": [
      "A. Sistematis",
      "B. Terbuka",
      "C. Terpadu",
      "D. Sistematis",
      "E. Akuntabel"
    ],
    "correct": "C. Terpadu"
  },
  {
    "text": "Berikut merupakan pelaksanaan PRA di desa, kecuali....",
    "options": [
      "A. Disusun satu tahun sekali",
      "B. Melibatkan kelompok tani, dusun, dan lembaga ekonomi",
      "C. Dipandu tim petani pemandu",
      "D. Hanya mencakup sumberdaya manusia",
      "E. Hanya mencakup sumberdaya alam"
    ],
    "correct": "A. Disusun satu tahun sekali"
  },
  {
    "text": "Urutan gambaran isi program penyuluhan adalah....",
    "options": [
      "A. Pendahuluan, tujuan kegiatan, masalah, cara mencapai tujuan",
      "B. Pendahuluan, masalah, tujuan kegiatan, cara mencapai tujuan",
      "C. Pendahuluan, tujuan kegiatan, cara mencapai tujuan, masalah",
      "D. Pendahuluan, cara mencapai tujuan, masalah, tujuan kegiatan",
      "E. Pendahuluan, perencanaan, tujuan kegiatan, cara mencapai tujuan"
    ],
    "correct": "A. Pendahuluan, tujuan kegiatan, masalah, cara mencapai tujuan"
  },
  {
    "text": "Koperasi Unit Desa (KUD) menyalurkan sarana produksi pertanian (saprotan) dari Kredit Usaha Tani (KUT) maupun non KUT ke petani melalui...",
    "options": [
      "A. Tempat Pelayanan Koperasi (TPK)",
      "B. Petugas Penyuluh Lapangan (PPL)",
      "C. Kepala desa",
      "D. Dinas pertanian",
      "E. BRI"
    ],
    "correct": "A. Tempat Pelayanan Koperasi (TPK)"
  },
  {
    "text": "Anda adalah seorang ASN PPPK di sebuah perusahaan. Anda sudah terbiasa mengajarkan tugas Anda selama setahun terakhir. Tiba-tiba atasan memberikan tugas mendadak di luar tugas Anda. Anda merasa biasa saja dan mengerjakan tersebut.",
    "options": [
      "A. Sangat setuju",
      "B. Setuju",
      "C. Ragu-ragu",
      "D. Tidak setuju",
      "E. Sangat tidak setuju"
    ],
    "correct": "A. Sangat setuju"
  },
  {
    "text": "Suatu hari Anda sedang berjalan ke Supermarket. Selain itu Anda juga ingin melanjutkan perjalanan ke kampus. Akan tetapi Anda baru ingat tidak membawa SIM. Jarak ke kampus lebih dekat dengan rumah. Sikap Anda ...",
    "options": [
      "A. Pulang untuk mengambil SIM.",
      "B. Menelepon saudara untuk membawakan SIM.",
      "C. Berharap tidak ada razia.",
      "D. Langsung ke kampus sebab jaraknya lebih dekat."
    ],
    "correct": "D. Langsung ke kampus sebab jaraknya lebih dekat."
  },
  {
    "text": "Masalah paling vital dalam organisasi dan sering menjadi tantangan manajer...",
    "options": [
      "A. Masalah sistem dan prosedur kerja",
      "B. Masalah teknologi yang selalu berubah",
      "C. Masalah konsep dan perencanaan",
      "D. Masalah manusia dan perilakunya",
      "E. Masalah manusia dan keinginannya"
    ],
    "correct": "D. Masalah manusia dan perilakunya"
  },
  {
    "text": "Dalam penyusunan TOR tingkat kabupaten/kota, yang termasuk instrumen kegiatan adalah...",
    "options": [
      "A. Formulir evaluasi kesehatan lingkungan",
      "B. Intervensi fisik",
      "C. Penyuluhan",
      "D. Perbaikan jamban keluarga",
      "E. Lokasi kegiatan"
    ],
    "correct": "A. Formulir evaluasi kesehatan lingkungan"
  },
  {
    "text": "Penyuluhan dengan membawa alat peraga merupakan teknik...",
    "options": [
      "A. Temu usaha",
      "B. Demonstrasi",
      "C. Anjangsana",
      "D. Temu wisata",
      "E. Tatap muka"
    ],
    "correct": "B. Demonstrasi"
  },
  {
    "text": "Behavior theory adalah...",
    "options": [
      "A. Teori sikap",
      "B. Teori ilmu",
      "C. Teori tingkah laku",
      "D. Ilmu politik",
      "E. Teori kasus"
    ],
    "correct": "C. Teori tingkah laku"
  },
  {
    "text": "Bahan yang akan disampaikan oleh para penyuluh kepada pelaku utama dan pelaku usaha merupakan pengertian dari...",
    "options": [
      "A. Rencana kerja",
      "B. Penyuluhan pertanian",
      "C. Sistem penyuluhan",
      "D. Materi penyuluhan",
      "E. Programa penyuluhan"
    ],
    "correct": "D. Materi penyuluhan"
  },
  {
    "text": "Yang tidak termasuk media tercetak adalah...",
    "options": [
      "A. Poster",
      "B. Folder",
      "C. Video",
      "D. Brosur",
      "E. Pamflet"
    ],
    "correct": "C. Video"
  },
  {
    "text": "Penyuluh disebut juga...",
    "options": [
      "A. Pelaku utama",
      "B. Pelaku usaha",
      "C. Pegawai pemerintah",
      "D. Pemberi pesan",
      "E. Pelayan konsumen"
    ],
    "correct": "D. Pemberi pesan"
  },
  {
    "text": "Perumusan masalah yang benar adalah...",
    "options": [
      "A. Perumusan masalah perlu dipusatkan pada masalah-masalah unreal-problems",
      "B. Perumusan masalah perlu dipusatkan pada masalah-masalah yang belum dirasakan masyarakat",
      "C. Perumusan masalah hendaknya dipusatkan pada masalah-masalah yang dinilai sebagai penyebab tidak terpenuhinya kebutuhan nyata (real needs) masyarakat",
      "D. Perumusan masalah hendaknya dipusatkan pada masalah potensial",
      "E. Jika ada lebih dari satu masalah kesehatan, maka tidak perlu diadakan penyusunan prioritas masalah"
    ],
    "correct": "C. Perumusan masalah hendaknya dipusatkan pada masalah-masalah yang dinilai sebagai penyebab tidak terpenuhinya kebutuhan nyata (real needs) masyarakat"
  },
  {
    "text": "Dalam menetapkan prioritas masalah harus mempertimbangkan beberapa hal sebagai berikut, kecuali...",
    "options": [
      "A. Beratnya atau besarnya masalah",
      "B. Kelompok masyarakat yang diserang",
      "C. Distribusi geografis",
      "D. Pertimbangan politis",
      "E. Besarnya dana"
    ],
    "correct": "E. Besarnya dana"
  },
  {
    "text": "Keuntungan pertanyaan tertutup adalah...",
    "options": [
      "A. Mudah dihitung persentase jawabannya",
      "B. Dapat menggunakan lembar jawaban komputer sehingga cepat menghitungnya",
      "C. Mudah melacak pendapat berdasarkan waktu",
      "D. Mudah memfilter jawaban yang tidak berguna atau yang ekstrim",
      "E. Interpretasi beberapa pembaca dapat berbeda sehingga sulit disimpulkan"
    ],
    "correct": "A. Mudah dihitung persentase jawabannya"
  }
  ];
  
    let currentIndex = 0;
    let timer;
    let totalSeconds = 60 * 60;
    let answers = []; // Array untuk menyimpan jawaban
    const navPageSize = 20;  // Maksimum tombol soal per halaman navigasi
    let navPage = 0;         // Halaman navigasi saat ini
  
    function startExam() {
      document.getElementById('start-container').style.display = 'none';
      document.getElementById('exam-container').style.display = 'block';
      document.body.classList.add('fullscreen-mode');
      showQuestion();
      generateNavButtons();
      startTimer();
    }
  
    function showQuestion() {
      const q = questions[currentIndex];
      const qBox = document.getElementById("question-box");
      let optionsHTML = "";
  
      q.options.forEach((opt, idx) => {
        optionsHTML += `
          <div class="form-check mb-2">
            <input class="form-check-input" type="radio" name="question${currentIndex}" id="option${idx}" value="${opt}" onchange="markAnswered()">
            <label class="form-check-label" for="option${idx}">${opt}</label>
          </div>
        `;
      });
  
      qBox.innerHTML = `<h5 class="mb-3">Soal No.  ${currentIndex + 1} :</h5><p>${q.text}</p><hr>${optionsHTML}`;
  
      // Jika sudah ada jawaban tersimpan, set opsi yang dipilih
      if (answers[currentIndex]) {
        const selector = `input[name="question${currentIndex}"][value="${answers[currentIndex]}"]`;
        const savedInput = document.querySelector(selector);
        if (savedInput) savedInput.checked = true;
      }
      // Update navigasi agar nomor soal yang aktif dan sudah dijawab tampil sesuai
      updateNavPage();
      generateNavButtons();
    }
  
    // Jika soal saat ini tidak berada pada halaman navigasi aktif, update navPage
    function updateNavPage() {
      navPage = Math.floor(currentIndex / navPageSize);
    }
  
    function generateNavButtons() {
    const nav = document.getElementById("question-nav");
    nav.innerHTML = "";
  
    const totalQuestions = questions.length;
    const startIndex = navPage * navPageSize;
    const endIndex = Math.min(startIndex + navPageSize, totalQuestions);
  
    // Tombol untuk pindah ke halaman navigasi sebelumnya (jika ada)
    if (navPage > 0) {
      nav.innerHTML += `
        <button class="btn btn-lg btn-primary px-4" onclick="prevNavPage()">
          <img src="next.png" alt="Previous" width="20" height="20" />
        </button>
      `;
    }
  
    for (let i = startIndex; i < endIndex; i++) {
      nav.innerHTML += `
        <button class="btn btn-outline-primary" onclick="jumpTo(${i})" id="nav-btn-${i}">
          ${i + 1}
        </button>
      `;
    }
  
    if (endIndex < totalQuestions) {
      nav.innerHTML += `
        <button class="btn btn-lg btn-primary px-4" onclick="nextNavPage()">
          <img src="previous.png" alt="Next" width="20" height="20" />
        </button>
      `;
    }
  
    highlightActiveButton();
    }
  
    function highlightActiveButton() {
      const totalQuestions = questions.length;
      for (let i = 0; i < totalQuestions; i++) {
        const btn = document.getElementById(`nav-btn-${i}`);
        if (btn) {
          btn.classList.remove('active-question');
          if (i === currentIndex) {
            btn.classList.add('active-question');
          }
          // Tandai tombol yang sudah dijawab
          if (answers[i]) {
            btn.classList.add('answered-question');
          }
        }
      }
    }
  
    function prevNavPage() {
      if (navPage > 0) {
        navPage--;
        generateNavButtons();
      }
    }
  
    function nextNavPage() {
      const totalPages = Math.ceil(questions.length / navPageSize);
      if (navPage < totalPages - 1) {
        navPage++;
        generateNavButtons();
      }
    }
  
      function saveAndContinue() {
      saveAnswer();  // Simpan jawaban pengguna saat ini
      if (currentIndex < questions.length - 1) {
          currentIndex++;  // Pindah ke soal berikutnya
          showQuestion();   // Tampilkan soal berikutnya
      }
      }
  
      // Lewatkan soal ini tanpa menyimpan jawaban
      function skipQuestion() {
      if (currentIndex < questions.length - 1) {
          currentIndex++;  // Pindah ke soal berikutnya
          showQuestion();   // Tampilkan soal berikutnya
      }
      }
  
    function jumpTo(index) {
      saveAnswer();
      currentIndex = index;
      updateNavPage();
      showQuestion();
    }
  
    function saveAnswer() {
      const selectedOption = document.querySelector(`input[name="question${currentIndex}"]:checked`);
      if (selectedOption) {
        answers[currentIndex] = selectedOption.value;
      }
    }
  
    function markAnswered() {
      const btn = document.getElementById(`nav-btn-${currentIndex}`);
      if (btn) btn.classList.add('answered-question');
    }
  
    function finishExam() {
      saveAnswer();
      clearInterval(timer);
      document.getElementById('exam-container').style.display = 'none';
      showScoreModal();
    }
  
    function showScoreModal() {
      let correctAnswers = 0;
      questions.forEach((q, idx) => {
        if (answers[idx] === q.correct) {
          correctAnswers++;
        }
      });
      const score = Math.round((correctAnswers / questions.length) * 100);
      document.getElementById("score").innerText = `${score}%`;
  
      const modal = new bootstrap.Modal(document.getElementById('scoreModal'));
      modal.show();
    }
  
    function downloadResult() {
      let resultText = 'Rekap Hasil Ujian\n\n';
      questions.forEach((q, idx) => {
        const answer = answers[idx] || "Belum dijawab";
        const correctAnswer = q.correct;
        const resultLine = `
          Soal ${idx + 1}: ${q.text}
          Jawaban Anda: ${answer}
          Jawaban Benar: ${correctAnswer}
          ${answer === correctAnswer ? "Benar" : "Salah"}
          \n\n
        `;
        resultText += resultLine;
      });
  
      const blob = new Blob([resultText], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'hasil_ujian.txt';
      link.click();
    }
  
    function viewResult() {
      document.getElementById('result-container').style.display = 'block';
      const resultList = document.getElementById("result-list");
      resultList.innerHTML = "";
  
      questions.forEach((q, idx) => {
        const answer = answers[idx] || "Belum dijawab";
        const correctAnswer = q.correct;
        const resultItem = document.createElement("li");
        resultItem.classList.add("list-group-item");
        resultItem.innerHTML = `
          Soal ${idx + 1}: ${q.text} <br>
          Jawaban Anda: ${answer} <br>
          Jawaban Benar: ${correctAnswer} <br>
          ${answer === correctAnswer ? "<strong>Benar</strong>" : "<strong>Salah</strong>"}
        `;
        resultList.appendChild(resultItem);
      });
    }
  
    function restartExam() {
      location.reload();
    }
  
    function startTimer() {
      timer = setInterval(() => {
        if (totalSeconds <= 0) {
          finishExam();
        } else {
          totalSeconds--;
          const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
          const seconds = (totalSeconds % 60).toString().padStart(2, '0');
          document.getElementById("timer").innerText = `Waktu: ${minutes}:${seconds}`;
        }
      }, 1000);
    }