/**
 * Munaqasyah Learning System - Questions Data
 * File: questions.js
 * Comprehensive curriculum for TPA (Taman Pendidikan Al-Qur'an)
 * Contains 15 levels across 4 core subjects + Final Exam (160 questions total)
 */

window.QUESTIONS_DATA = {
  // ==========================================
  // HARI 1: FIQH (LEVEL 1 - 4)
  // ==========================================

  1: {
    title: 'Dasar-Dasar Ibadah',
    subject: 'fiqh',
    subjectLabel: 'Fiqh',
    day: 1,
    difficulty: 'easy',
    icon: '🕌',
    topics: ['Rukun Islam', 'Waktu-Waktu Salat', 'Puasa Ramadhan', 'Zakat Fitrah'],
    lesson: '<h4>Dasar-Dasar Ibadah Islam</h4><p>Ibadah merupakan bukti ketaatan dan rasa syukur seorang hamba kepada Allah SWT. Sebagai santri TPA, memahami fondasi ibadah adalah kewajiban mendasar:</p><ul><li><strong>Rukun Islam:</strong> Terdiri dari 5 pilar utama: (1) Mengucapkan Dua Kalimah Syahadat, (2) Mendirikan Salat lima waktu, (3) Membayar Zakat, (4) Menjalankan Puasa di bulan Ramadhan, dan (5) Menunaikan Ibadah Haji bagi yang mampu.</li><li><strong>Salat Fardhu 5 Waktu:</strong> Ibadah wajib sehari semalam yang terdiri atas Subuh (2 rakaat, fajar shadiq hingga terbit matahari), Dzuhur (4 rakaat, tergelincir matahari ke barat), Ashar (4 rakaat, bayangan benda melebihi panjang aslinya), Maghrib (3 rakaat, matahari terbenam hingga mega merah hilang), dan Isya (4 rakaat, mega merah hilang hingga fajar).</li><li><strong>Puasa Ramadhan:</strong> Menahan diri dari makan, minum, dan hal-hal yang membatalkannya mulai dari terbit fajar shadiq sampai terbenamnya matahari, dikerjakan selama 29 atau 30 hari di bulan Ramadhan.</li><li><strong>Zakat Fitrah:</strong> Zakat pembersih jiwa yang wajib dibayarkan oleh setiap muslim menjelang Idul Fitri berupa makanan pokok (beras di Indonesia) sebanyak 1 sha\' atau sekitar 2,5 kg / 3,5 liter.</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Berapakah jumlah rukun Islam yang wajib diamalkan oleh setiap muslim?',
        options: ['3 perkara', '4 perkara', '5 perkara', '6 perkara'],
        correct: 2,
        explanation: 'Rukun Islam berjumlah 5: Syahadat, Salat, Zakat, Puasa Ramadhan, dan Haji bagi yang mampu.'
      },
      {
        type: 'multiple_choice',
        question: 'Rukun Islam yang pertama dan menjadi syarat utama masuk Islam adalah...',
        options: [
          'Mendirikan salat lima waktu',
          'Mengucapkan dua kalimah syahadat',
          'Membayar zakat fitrah',
          'Mengerjakan puasa Ramadhan'
        ],
        correct: 1,
        explanation: 'Rukun Islam pertama adalah mengucap dua kalimah syahadat (syahadat tauhid dan syahadat rasul).'
      },
      {
        type: 'multiple_choice',
        question: 'Berapa hari biasanya umat Islam melaksanakan ibadah puasa di bulan Ramadhan?',
        options: ['20 - 25 hari', '25 - 28 hari', '29 - 30 hari', '31 - 32 hari'],
        correct: 2,
        explanation: 'Perhitungan bulan qamariyah dalam kalender Hijriyah adalah 29 atau 30 hari.'
      },
      {
        type: 'multiple_choice',
        question: 'Zakat fitrah di Indonesia pada umumnya dikeluarkan dalam bentuk...',
        options: [
          'Bahan makanan pokok (beras)',
          'Emas murni perhiasan',
          'Pakaian baru untuk hari raya',
          'Hewan ternak kambing'
        ],
        correct: 0,
        explanation: 'Zakat fitrah dibayarkan dengan makanan pokok daerah setempat, yaitu beras seberat 2,5 kg atau 3,5 liter per jiwa.'
      },
      {
        type: 'multiple_choice',
        question: 'Waktu dimulainya pelaksanaan salat Maghrib ditandai dengan...',
        options: [
          'Matahari terbit dari ufuk timur',
          'Matahari tepat berada di tengah langit',
          'Terbenamnya seluruh bundaran matahari di ufuk barat',
          'Hilangnya cahaya mega merah di langit'
        ],
        correct: 2,
        explanation: 'Waktu Maghrib dimulai sejak terbenamnya matahari secara sempurna hingga hilangnya mega merah (syafaq ahmar).'
      },
      {
        type: 'multiple_choice',
        question: 'Salat fardhu yang dikerjakan saat tengah hari ketika matahari mulai condong ke arah barat adalah salat...',
        options: ['Subuh', 'Dzuhur', 'Ashar', 'Isya'],
        correct: 1,
        explanation: 'Waktu Dzuhur masuk saat matahari tergelincir dari tengah langit ke arah barat (zawal).'
      },
      {
        type: 'multiple_choice',
        question: 'Waktu yang paling utama (afdhal) untuk menyerahkan zakat fitrah kepada mustahik adalah...',
        options: [
          'Pada awal malam bulan Ramadhan',
          'Setelah selesai salat Idul Fitri',
          'Pagi hari raya sebelum pelaksanaan salat Idul Fitri',
          'Pada pertengahan bulan Sya\'ban'
        ],
        correct: 2,
        explanation: 'Waktu paling afdhal membayar zakat fitrah adalah pagi hari raya Idul Fitri sebelum jemaah melaksanakan salat Id.'
      },
      {
        type: 'true_false',
        question: 'Melaksanakan ibadah puasa di bulan Ramadhan hukumnya adalah fardhu \'ain bagi setiap muslim yang telah baligh dan berakal sehat.',
        correct: true,
        explanation: 'Benar, puasa Ramadhan hukumnya fardhu \'ain berdasarkan dalil Al-Qur\'an Surah Al-Baqarah ayat 183.'
      },
      {
        type: 'true_false',
        question: 'Salat wajib (fardhu) dalam sehari semalam hanya ada 4 waktu saja.',
        correct: false,
        explanation: 'Salah, salat fardhu dalam sehari semalam ada 5 waktu: Subuh, Dzuhur, Ashar, Maghrib, dan Isya dengan total 17 rakaat.'
      },
      {
        type: 'true_false',
        question: 'Zakat fitrah wajib ditunaikan bagi setiap jiwa muslim, baik anak-anak maupun orang dewasa yang memiliki kelebihan bekal di hari raya.',
        correct: true,
        explanation: 'Benar, zakat fitrah mengikat seluruh muslim tanpa memandang usia selama ia hidup di akhir Ramadhan dan memiliki kelebihan makanan.'
      }
    ]
  },

  2: {
    title: 'Ibadah Sepanjang Tahun',
    subject: 'fiqh',
    subjectLabel: 'Fiqh',
    day: 1,
    difficulty: 'medium',
    icon: '📅',
    topics: ['Hari-Hari Besar Islam', 'Bulan Hijriyah', 'Tata Cara Ibadah Haji/Umroh'],
    lesson: '<h4>Ibadah Sepanjang Tahun & Penanggalan Islam</h4><p>Umat Islam memiliki kalender Hijriyah yang dihitung berdasarkan peredaran bulan (qamariyah) serta rangkaian peringatan hari besar dan ibadah tahunan:</p><ul><li><strong>12 Bulan Hijriyah:</strong> (1) Muharram, (2) Shafar, (3) Rabi\'ul Awwal, (4) Rabi\'ul Akhir, (5) Jumadil Awwal, (6) Jumadil Akhir, (7) Rajab, (8) Sya\'ban, (9) Ramadhan, (10) Syawwal, (11) Dzulqa\'dah, dan (12) Dzulhijjah.</li><li><strong>Hari-Hari Besar Islam:</strong> Tahun Baru Islam (1 Muharram), Maulid Nabi Muhammad SAW (12 Rabi\'ul Awwal), Isra\' Mi\'raj (27 Rajab), Nuzulul Qur\'an (17 Ramadhan), Hari Raya Idul Fitri (1 Syawwal), Hari Raya Idul Adha (10 Dzulhijjah), dan Hari Tasyrik (11, 12, 13 Dzulhijjah).</li><li><strong>Haji dan Umroh:</strong> Haji adalah rukun Islam kelima yang dikerjakan pada bulan Dzulhijjah dengan wukuf di Arafah. Umroh sering disebut "haji kecil" dan dapat dikerjakan sewaktu-waktu sepanjang tahun tanpa wukuf di Arafah.</li><li><strong>Rukun Haji:</strong> Ihram (niat), Wukuf di Arafah, Thawaf Ifadhah, Sa\'i antara Shafa dan Marwah, Tahallul (bercukur), serta Tertib.</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Bulan pertama dalam penanggalan kalender Hijriyah adalah bulan...',
        options: ['Ramadhan', 'Muharram', 'Sya\'ban', 'Dzulhijjah'],
        correct: 1,
        explanation: 'Kalender Hijriyah dimulai dengan bulan Muharram dan diakhiri dengan bulan Dzulhijjah.'
      },
      {
        type: 'multiple_choice',
        question: 'Peringatan peristiwa agung Isra\' Mi\'raj Nabi Muhammad SAW diperingati setiap tanggal...',
        options: ['12 Rabi\'ul Awwal', '17 Ramadhan', '27 Rajab', '10 Dzulhijjah'],
        correct: 2,
        explanation: 'Isra\' Mi\'raj diperingati pada 27 Rajab. Tanggal 12 Rabi\'ul Awwal adalah Maulid Nabi dan 17 Ramadhan adalah Nuzulul Qur\'an.'
      },
      {
        type: 'multiple_choice',
        question: 'Perbedaan paling pokok dan mendasar antara ibadah Haji dan Umroh adalah...',
        options: [
          'Niat ihram dari miqat',
          'Wukuf di Padang Arafah pada 9 Dzulhijjah',
          'Melakukan thawaf mengelilingi Ka\'bah 7 putaran',
          'Melakukan sa\'i antara bukit Shafa dan Marwah'
        ],
        correct: 1,
        explanation: 'Wukuf di Padang Arafah merupakan rukun haji terpenting yang tidak ada di dalam ibadah Umroh.'
      },
      {
        type: 'multiple_choice',
        question: 'Berjalan atau berlari-lari kecil bolak-balik antara bukit Shafa dan Marwah sebanyak 7 kali dinamakan...',
        options: ['Thawaf', 'Wukuf', 'Sa\'i', 'Tahallul'],
        correct: 2,
        explanation: 'Sa\'i adalah rukun haji dan umroh berupa berjalan bolak-balik 7 kali antara Shafa dan Marwah mengenang Siti Hajar.'
      },
      {
        type: 'multiple_choice',
        question: 'Hari Raya Idul Adha (Hari Raya Kurban) jatuh pada penanggalan Hijriyah setiap tanggal...',
        options: ['1 Syawwal', '10 Dzulhijjah', '1 Muharram', '15 Sya\'ban'],
        correct: 1,
        explanation: 'Idul Adha jatuh pada tanggal 10 Dzulhijjah, dilanjutkan dengan hari Tasyrik pada 11, 12, dan 13 Dzulhijjah.'
      },
      {
        type: 'true_false',
        question: 'Ibadah umroh hanya boleh dilaksanakan pada bulan Dzulhijjah saja bersamaan dengan rombongan jemaah haji.',
        correct: false,
        explanation: 'Salah, ibadah umroh dapat ditunaikan kapan saja sepanjang tahun tanpa terikat waktu khusus.'
      },
      {
        type: 'true_false',
        question: 'Pada hari Tasyrik yaitu tanggal 11, 12, dan 13 Dzulhijjah, umat Islam diharamkan untuk berpuasa.',
        correct: true,
        explanation: 'Benar, hari Tasyrik adalah hari makan, minum, dan mengingat Allah SWT, sehingga diharamkan berpuasa.'
      },
      {
        type: 'fill_blank',
        question: 'Memotong atau mencukur sebagian rambut kepala sebagai tanda selesainya rangkaian ibadah haji atau umroh disebut ___.',
        answer: 'tahallul',
        acceptedAnswers: ['tahallul', 'tahalul', 'tahallul awal', 'tahallul tsani'],
        explanation: 'Tahallul adalah melepaskan diri dari larangan ihram dengan mencukur sekurang-kurangnya 3 helai rambut.'
      },
      {
        type: 'fill_blank',
        question: 'Batas tempat atau waktu yang ditentukan syariat bagi jemaah untuk memulai niat dan mengenakan pakaian ihram disebut ___.',
        answer: 'miqat',
        acceptedAnswers: ['miqat', 'miqot', 'miqat makani', 'miqat zamani'],
        explanation: 'Miqat adalah batas awal pelaksanaan ibadah haji/umroh, baik batas waktu (zamani) maupun lokasi geografis (makani).'
      },
      {
        type: 'fill_blank',
        question: 'Berdiam diri dan berdoa di Padang Arafah pada tanggal 9 Dzulhijjah yang merupakan puncak ibadah haji disebut ibadah ___.',
        answer: 'wukuf',
        acceptedAnswers: ['wukuf', 'wuquf', 'wukuf di arafah'],
        explanation: 'Wukuf di Arafah adalah rukun haji yang paling agung sebagaimana sabda Nabi: "Al-Hajju \'Arafah" (Haji itu wukuf di Arafah).'
      }
    ]
  },

  3: {
    title: 'Thaharah & Bersuci',
    subject: 'fiqh',
    subjectLabel: 'Fiqh',
    day: 1,
    difficulty: 'medium',
    icon: '💧',
    topics: ['Jenis-Jenis Air', 'Thaharah', 'Tayammum', 'Mandi Besar'],
    lesson: '<h4>Thaharah (Bersuci dalam Islam)</h4><p>Salat tidak akan diterima tanpa kesucian badan, pakaian, dan tempat. Thaharah secara bahasa berarti bersih, sedangkan secara istilah adalah mengangkat hadas dan menghilangkan najis:</p><ul><li><strong>7 Macam Air Mutlaq (Suci dan Menyucikan):</strong> Air hujan, air laut, air sungai, air sumur, air mata air, air salju/es, dan air embun.</li><li><strong>Pembagian Air:</strong> (1) <em>Air Mutlaq:</em> Suci dan menyucikan; (2) <em>Air Musyammas:</em> Suci menyucikan tetapi makruh (air terkena terik matahari di bejana logam); (3) <em>Air Musta\'mal & Muqayyad:</em> Suci zatnya tapi tidak menyucikan (air bekas wudhu atau air teh/kopi); (4) <em>Air Mutanajis:</em> Air terkena najis dan kurang dari dua qullah atau berubah sifatnya.</li><li><strong>Hadas Kecil & Hadas Besar:</strong> Hadas kecil disucikan dengan wudhu, sedangkan hadas besar (seperti haid, nifas, keluar mani, junub) disucikan dengan mandi besar (mandi wajib).</li><li><strong>Tayammum:</strong> Pengganti wudhu atau mandi besar saat dalam keadaan darurat (tidak ada air atau sakit keras) dengan mengusap wajah dan kedua tangan sampai siku menggunakan debu suci.</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Air yang suci pada zatnya serta dapat menyucikan hadas dan najis tanpa makruh disebut air...',
        options: ['Air mutanajis', 'Air musta\'mal', 'Air mutlaq', 'Air musyammas'],
        correct: 2,
        explanation: 'Air mutlaq adalah air murni alami yang sah digunakan untuk berwudhu dan mandi wajib.'
      },
      {
        type: 'multiple_choice',
        question: 'Manakah di antara pilihan berikut yang termasuk salah satu dari 7 jenis air suci dan menyucikan?',
        options: ['Air teh manis', 'Air kopi susu', 'Air kelapa muda', 'Air embun'],
        correct: 3,
        explanation: 'Air embun termasuk salah satu dari 7 jenis air mutlaq alami. Teh, kopi, dan air kelapa suci namun tidak menyucikan hadas.'
      },
      {
        type: 'multiple_choice',
        question: 'Mengusap wajah dan kedua belah tangan hingga siku dengan debu tanah suci sebagai pengganti wudhu dinamakan...',
        options: ['Istinja\'', 'Tayammum', 'Mandi wiladah', 'Istijmar'],
        correct: 1,
        explanation: 'Tayammum adalah cara bersuci secara darurat menggunakan debu suci saat ketiadaan air atau berhalangan sakit.'
      },
      {
        type: 'multiple_choice',
        question: 'Keadaan yang mewajibkan seorang muslim untuk melakukan mandi besar (mandi junub) adalah...',
        options: [
          'Buang air kecil di toilet',
          'Buang angin (kentut)',
          'Selesai dari masa haid atau nifas bagi wanita',
          'Tertidur lelap dalam posisi duduk tegak'
        ],
        correct: 2,
        explanation: 'Selesainya masa darah haid atau nifas merupakan penyebab hadas besar yang mewajibkan mandi besar.'
      },
      {
        type: 'multiple_choice',
        question: 'Air yang volumenya kurang dari dua qullah dan kejatuhan benda najis sehingga berubah rasa, warna, atau baunya dinamakan...',
        options: ['Air musta\'mal', 'Air mutanajis', 'Air makruh', 'Air musyammas'],
        correct: 1,
        explanation: 'Air mutanajis adalah air yang terkena najis sehingga haram dan tidak sah digunakan untuk bersuci.'
      },
      {
        type: 'true_false',
        question: 'Menghilangkan hadas kecil cukup dilakukan dengan berwudhu atau bertayammum apabila memenuhi syarat sahnya.',
        correct: true,
        explanation: 'Benar, hadas kecil seperti buang air kecil, buang air besar, atau buang angin disucikan dengan wudhu.'
      },
      {
        type: 'true_false',
        question: 'Air teh manis dan air kelapa adalah air suci yang sah digunakan untuk berwudhu dan mandi wajib.',
        correct: false,
        explanation: 'Salah, air teh dan kelapa adalah air suci tetapi tidak dapat menyucikan hadas (thahir ghoiru muthahhir).'
      },
      {
        type: 'fill_blank',
        question: 'Membersihkan kotoran najis yang keluar dari qubul (saluran kemih) atau dubur dengan air bersih atau batu disebut ___.',
        answer: 'istinja',
        acceptedAnswers: ['istinja', 'istinja\'', 'istinjak', 'cebok'],
        explanation: 'Istinja\' adalah membersihkan jalan keluar kotoran buang air kecil atau buang air besar agar suci kembali.'
      },
      {
        type: 'fill_blank',
        question: 'Media tanah yang sah dan disyariatkan dalam ajaran Islam untuk bersuci saat tayammum adalah ___.',
        answer: 'debu',
        acceptedAnswers: ['debu', 'debu suci', 'tanah', 'debu yang suci', 'tanah suci'],
        explanation: 'Tayammum dilakukan menggunakan sha\'id thoyyib (debu/tanah yang bersih dan suci dari kotoran).'
      },
      {
        type: 'fill_blank',
        question: 'Batas minimal ukuran volume air yang banyak dalam fikih mazhab Syafi\'i agar tidak mudah terpengaruh najis adalah ___ qullah.',
        answer: 'dua',
        acceptedAnswers: ['dua', '2', 'dua qullah', '2 qullah'],
        explanation: 'Air dua qullah (sekitar 216 liter / bak kubus 60 cm) adalah batas ukuran air banyak.'
      }
    ]
  },

  4: {
    title: 'Puasa Lanjutan',
    subject: 'fiqh',
    subjectLabel: 'Fiqh',
    day: 1,
    difficulty: 'hard',
    icon: '🌙',
    topics: ['Puasa Sunnah', 'Puasa Nazar', 'Puasa Kafarat'],
    lesson: '<h4>Hukum Puasa Lanjutan: Sunnah, Nazar, & Kafarat</h4><p>Selain puasa wajib Ramadhan, terdapat jenis puasa lain yang diatur dalam syariat Islam:</p><ul><li><strong>Puasa Sunnah:</strong> Di antaranya puasa Senin-Kamis, puasa Ayyamul Bidh (13, 14, 15 tiap bulan qamariyah), puasa 6 hari di bulan Syawwal (pahalanya setara puasa setahun), puasa Arafah 9 Dzulhijjah (menghapus dosa setahun lalu dan setahun mendatang), puasa \'Asyura 10 Muharram, dan puasa Nabi Daud (sehari puasa sehari berbuka).</li><li><strong>Puasa Nazar:</strong> Puasa yang asalnya berstatus sunnah atau mubah, namun menjadi wajib dikerjakan karena seseorang berikrar janji kepada Allah atas terkabulnya suatu hajat kebaikan.</li><li><strong>Puasa Kafarat (Denda):</strong> Puasa penebus dosa atas pelanggaran tertentu, seperti melanggar sumpah (3 hari puasa jika tak mampu memberi makan 10 miskin), atau kafarat hubungan badan suami-istri di siang hari Ramadhan (puasa 2 bulan berturut-turut).</li><li><strong>Hari Diharamkan Puasa:</strong> Dua hari raya (1 Syawwal dan 10 Dzulhijjah) serta Hari Tasyrik (11, 12, 13 Dzulhijjah).</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Puasa sunnah yang paling disukai Allah SWT dengan cara sehari berpuasa dan sehari berbuka adalah puasa...',
        options: ['Puasa Senin-Kamis', 'Puasa Ayyamul Bidh', 'Puasa Nabi Daud', 'Puasa Enam Hari Syawwal'],
        correct: 2,
        explanation: 'Puasa Nabi Daud a.s. adalah puasa sunnah terbaik: sehari berpuasa dan sehari tidak berpuasa secara bergantian.'
      },
      {
        type: 'multiple_choice',
        question: 'Puasa sunnah Arafah yang dilaksanakan pada 9 Dzulhijjah bagi yang tidak berhaji memiliki keutamaan...',
        options: [
          'Menghapuskan dosa selama sepuluh tahun',
          'Menghapuskan dosa setahun yang lalu dan setahun yang akan datang',
          'Mendapatkan kekayaan melimpah ruah',
          'Membebaskan dari segala kewajiban salat'
        ],
        correct: 1,
        explanation: 'Hadits riwayat Muslim menjelaskan puasa Arafah menghapuskan dosa setahun yang lalu dan setahun yang akan datang.'
      },
      {
        type: 'multiple_choice',
        question: 'Ahmad bernazar: "Jika saya lulus munaqasyah dengan nilai terbaik, saya akan berpuasa 3 hari." Hukum melaksanakan puasa tersebut setelah lulus adalah...',
        options: ['Sunnah muakkad', 'Mubah', 'Wajib', 'Makruh'],
        correct: 2,
        explanation: 'Memenuhi nazar dalam ketaatan kepada Allah hukumnya wajib berdasarkan firman-Nya dalam QS. Al-Hajj ayat 29.'
      },
      {
        type: 'multiple_choice',
        question: 'Kafarat berat bagi orang yang sengaja melakukan hubungan suami istri di siang hari bulan Ramadhan (jika tidak mampu memerdekakan budak) adalah...',
        options: [
          'Berpuasa selama 3 hari berturut-turut',
          'Berpuasa selama 7 hari di bulan Syawwal',
          'Berpuasa selama dua bulan berturut-turut tanpa terputus',
          'Cukup membaca istighfar sebanyak 100 kali'
        ],
        correct: 2,
        explanation: 'Kafarat \'uzhma jimak di siang hari Ramadhan adalah puasa 2 bulan berturut-turut jika tidak mampu memerdekakan budak.'
      },
      {
        type: 'fill_blank',
        question: 'Puasa sunnah yang dikerjakan pada tanggal 13, 14, dan 15 pada pertengahan setiap bulan Hijriyah disebut puasa ___.',
        answer: 'ayyamul bidh',
        acceptedAnswers: ['ayyamul bidh', 'ayyamul bid', 'ayamul bidh', 'hari-hari putih', 'ayyamul baidh'],
        explanation: 'Ayyamul Bidh artinya hari-hari putih saat bulan purnama bersinar terang benderang di pertengahan bulan.'
      },
      {
        type: 'fill_blank',
        question: 'Puasa sunnah pada tanggal 10 Muharram untuk mengenang pertolongan Allah kepada Nabi Musa dari kejaran Fir\'aun disebut puasa ___.',
        answer: 'asyura',
        acceptedAnswers: ['asyura', 'asyuro', '\'asyura', '\'asyuro'],
        explanation: 'Puasa \'Asyura jatuh pada 10 Muharram dengan keutamaan menghapuskan dosa satu tahun yang lalu.'
      },
      {
        type: 'fill_blank',
        question: 'Puasa tebusan atau denda yang diwajibkan syariat karena seseorang melanggar larangan agama atau sumpah dinamakan puasa ___.',
        answer: 'kafarat',
        acceptedAnswers: ['kafarat', 'kaffarah', 'kafarah', 'kafarot'],
        explanation: 'Puasa kafarat berfungsi sebagai penutup dosa dan penebus pelanggaran hukum syariat.'
      },
      {
        type: 'ordering',
        question: 'Urutkan tingkatan kafarat pelanggaran jimak siang hari Ramadhan dari urutan yang paling utama menurut syariat:',
        items: [
          'Memerdekakan seorang budak sahaya mukmin',
          'Berpuasa selama dua bulan berturut-turut',
          'Memberi makan kepada 60 orang fakir miskin',
          'Membayar sedekah seikhlasnya'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Urutan kafarat jimak Ramadhan: (1) Memerdekakan budak, (2) Berpuasa 2 bulan berturut-turut, (3) Memberi makan 60 orang miskin.'
      },
      {
        type: 'ordering',
        question: 'Urutkan tanggal pelaksanaan puasa sunnah di bulan Dzulhijjah dan Muharram berikut secara kronologis kalender:',
        items: [
          'Puasa Tarwiyah (8 Dzulhijjah)',
          'Puasa Arafah (9 Dzulhijjah)',
          'Puasa Tasu\'a (9 Muharram)',
          'Puasa Asyura (10 Muharram)'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Urutan kalender Hijriyah: 8 Dzulhijjah (Tarwiyah), 9 Dzulhijjah (Arafah), berganti tahun ke 9 Muharram (Tasu\'a) dan 10 Muharram (Asyura).'
      },
      {
        type: 'ordering',
        question: 'Urutkan opsi penyelesaian kafarat pelanggaran sumpah (kafarat yamin) sesuai ketentuan Surah Al-Ma\'idah ayat 89:',
        items: [
          'Memberi makan sepuluh orang miskin',
          'Memberi pakaian kepada sepuluh orang miskin',
          'Memerdekakan seorang hamba sahaya',
          'Berpuasa selama tiga hari jika tidak mampu'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Pilihan awal adalah memberi makan 10 orang miskin, memberi pakaian, atau memerdekakan budak. Jika tak sanggup, baru berpuasa 3 hari.'
      }
    ]
  },

  // ==========================================
  // HARI 2: TAUHID (LEVEL 5 - 7)
  // ==========================================

  5: {
    title: 'Mengenal Allah SWT',
    subject: 'tauhid',
    subjectLabel: 'Tauhid',
    day: 2,
    difficulty: 'easy',
    icon: '☪️',
    topics: ['Asmaul Husna', 'Sifat Wajib Bagi Allah', 'Sifat Mustahil Bagi Allah', 'Sifat Jaiz Bagi Allah'],
    lesson: '<h4>Mengenal Allah SWT (Ma\'rifatullah)</h4><p>Tauhid adalah fondasi utama keyakinan seorang muslim. Kita mengenal keagungan Allah melalui nama-nama-Nya yang mulia dan sifat-sifat-Nya:</p><ul><li><strong>Asmaul Husna:</strong> Nama-nama terindah milik Allah SWT yang berjumlah 99, seperti Ar-Rahman (Maha Pengasih), Ar-Rahim (Maha Penyayang), Al-Malik (Maha Merajai), dan Al-Quddus (Maha Suci).</li><li><strong>20 Sifat Wajib bagi Allah:</strong> Wujud (Ada), Qidam (Terdahulu tanpa awal), Baqa\' (Kekal tanpa akhir), Mukhalafatu lil hawaditsi (Berbeda dari makhluk), Qiyamuhu binafsihi (Berdiri sendiri), Wahdaniyyah (Esa), Qudrat (Kuasa), Iradat (Berkehendak), Ilmu (Mengetahui), Hayat (Hidup), Sama\' (Mendengar), Bashar (Melihat), Kalam (Berfirman), Qadiran, Muridan, \'Aliman, Hayyan, Sami\'an, Bashiran, Mutakalliman.</li><li><strong>Sifat Mustahil bagi Allah:</strong> Lawan dari sifat wajib yang berjumlah 20 sifat, contohnya \'Adam (Tiada), Huduts (Ada permulaan), Fana (Rusak/binasa), \'Ajzun (Lemah), dan Jahlun (Bodoh).</li><li><strong>Sifat Jaiz bagi Allah:</strong> Hanya ada 1 sifat jaiz, yaitu "Fi\'lu kulli mumkinin au tarkuhu" (Allah berhak menciptakan segala sesuatu yang mungkin terjadi atau meninggalkannya).</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Berapakah jumlah nama-nama agung dan terindah bagi Allah SWT (Asmaul Husna)?',
        options: ['20 nama', '25 nama', '99 nama', '114 nama'],
        correct: 2,
        explanation: 'Asmaul Husna berjumlah 99 nama sesuai sabda Nabi Muhammad SAW dalam hadits shahih Bukhari dan Muslim.'
      },
      {
        type: 'multiple_choice',
        question: 'Sifat wajib pertama bagi Allah SWT yang memiliki arti "Maha Ada" adalah sifat...',
        options: ['Qidam', 'Wujud', 'Baqa\'', 'Wahdaniyyah'],
        correct: 1,
        explanation: 'Wujud artinya Ada, membuktikan bahwa Allah SWT itu wujud nyata sebagai pencipta seluruh alam semesta.'
      },
      {
        type: 'multiple_choice',
        question: 'Lawan atau kebalikan dari sifat wajib Wujud adalah sifat mustahil...',
        options: ['Fana', '\'Adam', 'Huduts', '\'Ajzun'],
        correct: 1,
        explanation: '\'Adam artinya tidak ada, merupakan sifat mustahil yang tidak mungkin ada pada Allah SWT.'
      },
      {
        type: 'multiple_choice',
        question: 'Sifat wajib Allah "Mukhalafatuhu lil hawaditsi" mengandung makna bahwa Allah...',
        options: [
          'Berdiri sendiri tanpa bantuan siapa pun',
          'Berbeda dengan segala makhluk ciptaan-Nya',
          'Maha Mendengar segala bisikan',
          'Maha Kekal abadi selamanya'
        ],
        correct: 1,
        explanation: 'Mukhalafatuhu lil hawaditsi artinya Allah berbeda dengan segala hal yang baru (makhluk ciptaan-Nya).'
      },
      {
        type: 'multiple_choice',
        question: 'Berapakah jumlah sifat wajib bagi Allah SWT yang wajib diketahui dan diyakini oleh santri?',
        options: ['10 sifat', '20 sifat', '25 sifat', '99 sifat'],
        correct: 1,
        explanation: 'Sifat wajib bagi Allah yang wajib diyakini dan dipelajari dalam aqidah Ahlussunnah berjumlah 20 sifat.'
      },
      {
        type: 'multiple_choice',
        question: 'Sifat jaiz bagi Allah SWT berjumlah 1 sifat, yaitu...',
        options: [
          'Wajib menjadikan semua orang kaya',
          'Berbuat sesuatu yang mungkin atau meninggalkannya',
          'Memiliki anak dan sekutu',
          'Tunduk pada kehendak makhluk'
        ],
        correct: 1,
        explanation: 'Sifat jaiz Allah adalah "Fi\'lu kulli mumkinin au tarkuhu" (memperbuat sesuatu yang mungkin atau meninggalkannya).'
      },
      {
        type: 'multiple_choice',
        question: 'Nama Asmaul Husna "Ar-Rahman" dan "Ar-Rahim" berturut-turut memiliki arti...',
        options: [
          'Maha Merajai dan Maha Suci',
          'Maha Pengasih dan Maha Penyayang',
          'Maha Adil dan Maha Bijaksana',
          'Maha Mengetahui dan Maha Mendengar'
        ],
        correct: 1,
        explanation: 'Ar-Rahman artinya Maha Pengasih kepada semua makhluk di dunia, Ar-Rahim artinya Maha Penyayang kepada orang mukmin di akhirat.'
      },
      {
        type: 'true_false',
        question: 'Sifat mustahil bagi Allah adalah sifat-sifat kekurangan dan kelemahan yang mustahil ada pada zat Allah SWT.',
        correct: true,
        explanation: 'Benar, Allah Maha Suci dari segala kekurangan dan cacat kelemahan.'
      },
      {
        type: 'true_false',
        question: 'Sifat Allah "Baqa\'" artinya Allah SWT akan hancur dan binasa saat sangkakala kiamat ditiup.',
        correct: false,
        explanation: 'Salah, Baqa\' artinya Maha Kekal Abadi. Lawannya adalah Fana (rusak/binasa) yang merupakan sifat mustahil bagi Allah.'
      },
      {
        type: 'true_false',
        question: 'Sifat "Qiyamuhu binafsihi" bermakna bahwa Allah SWT Maha Berdiri Sendiri dan tidak membutuhkan pertolongan makhluk-Nya.',
        correct: true,
        explanation: 'Benar, Allah Maha Kaya dan Mandiri, sedangkan seluruh makhluk sangat bergantung kepada-Nya.'
      }
    ]
  },

  6: {
    title: 'Rukun Iman & Malaikat',
    subject: 'tauhid',
    subjectLabel: 'Tauhid',
    day: 2,
    difficulty: 'medium',
    icon: '✨',
    topics: ['Rukun Iman', 'Kalimat Thoyyibah', 'Nama-nama Malaikat Allah'],
    lesson: '<h4>Rukun Iman, Malaikat Allah, & Kalimat Thayyibah</h4><p>Keimanan adalah keyakinan teguh di dalam hati, diikrarkan dengan lisan, dan dibuktikan dengan perbuatan:</p><ul><li><strong>6 Rukun Iman:</strong> (1) Iman kepada Allah, (2) Iman kepada Malaikat-malaikat Allah, (3) Iman kepada Kitab-kitab Allah, (4) Iman kepada Rasul-rasul Allah, (5) Iman kepada Hari Kiamat, dan (6) Iman kepada Qada dan Qadar.</li><li><strong>10 Malaikat Wajib Diketahui & Tugasnya:</strong> (1) Jibril (menyampaikan wahyu), (2) Mikail (membagi rezeki & menurunkan hujan), (3) Israfil (meniup sangkakala), (4) Izrail (mencabut nyawa), (5) Munkar dan (6) Nakir (menanyai di alam kubur), (7) Raqib (mencatat amal baik), (8) \'Atid (mencatat amal buruk), (9) Malik (menjaga neraka), dan (10) Ridwan (menjaga surga).</li><li><strong>Kalimat Thayyibah:</strong> Kalimat-kalimat baik berzikir kepada Allah: <em>Basmalah</em> (Bismillah), <em>Tahmid</em> (Alhamdulillah), <em>Tasbih</em> (Subhanallah), <em>Tahlil</em> (La ilaha illallah), <em>Takbir</em> (Allahu Akbar), <em>Istighfar</em> (Astaghfirullah), <em>Hauqalah</em> (La haula wa la quwwata illa billah), dan <em>Tarji\'/Istirja\'</em> (Inna lillahi wa inna ilaihi raji\'un).</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Berapakah jumlah rukun iman yang wajib diyakini di dalam hati oleh setiap muslim?',
        options: ['4 rukun', '5 rukun', '6 rukun', '7 rukun'],
        correct: 2,
        explanation: 'Rukun iman berjumlah 6 perkara sebagaimana diterangkan dalam hadits Jibril tentang Islam, Iman, dan Ihsan.'
      },
      {
        type: 'multiple_choice',
        question: 'Malaikat yang bertugas mengalirkan rezeki dan menurunkan air hujan atas perintah Allah SWT adalah...',
        options: ['Malaikat Jibril', 'Malaikat Mikail', 'Malaikat Israfil', 'Malaikat Ridwan'],
        correct: 1,
        explanation: 'Malaikat Mikail bertugas mengatur pembagian rezeki, angin, dan hujan kepada seluruh makhluk.'
      },
      {
        type: 'multiple_choice',
        question: 'Malaikat yang bertugas mencatat segala amal perbuatan baik manusia adalah...',
        options: ['Malaikat Raqib', 'Malaikat \'Atid', 'Malaikat Malik', 'Malaikat Nakir'],
        correct: 0,
        explanation: 'Malaikat Raqib mencatat amal baik, sedangkan Malaikat \'Atid mencatat amal buruk di sebelah kiri.'
      },
      {
        type: 'multiple_choice',
        question: 'Kalimat tauhid yang paling utama "Laa ilaaha illallah" dinamakan dengan kalimat...',
        options: ['Tasbih', 'Tahmid', 'Tahlil', 'Hauqalah'],
        correct: 2,
        explanation: 'Lafaz Laa ilaaha illallah disebut kalimat Tahlil, pengakuan tiada tuhan selain Allah.'
      },
      {
        type: 'multiple_choice',
        question: 'Kalimat "Laa haula wa laa quwwata illaa billaahil \'aliyyil \'azhiim" disebut kalimat...',
        options: ['Basmalah', 'Hauqalah', 'Tarji\'', 'Ta\'awwudz'],
        correct: 1,
        explanation: 'Kalimat tersebut dinamakan Hauqalah, bermakna tiada daya dan kekuatan kecuali dengan pertolongan Allah.'
      },
      {
        type: 'true_false',
        question: 'Malaikat diciptakan oleh Allah SWT dari cahaya (nur) dan memiliki sifat selalu patuh serta tidak pernah bermaksiat.',
        correct: true,
        explanation: 'Benar, malaikat adalah makhluk suci dari nur yang tidak berjenis kelamin dan tidak pernah ingkar kepada perintah Allah.'
      },
      {
        type: 'true_false',
        question: 'Rukun iman yang kelima adalah beriman kepada qada dan qadar Allah.',
        correct: false,
        explanation: 'Salah, rukun iman kelima adalah beriman kepada Hari Akhir (Kiamat), sedangkan Qada dan Qadar adalah rukun keenam.'
      },
      {
        type: 'fill_blank',
        question: 'Kalimat thoyyibah yang bermakna "Maha Suci Allah" (Subhanallah) disebut bacaan ___.',
        answer: 'tasbih',
        acceptedAnswers: ['tasbih', 'bacaan tasbih', 'kalimat tasbih'],
        explanation: 'Subhanallah disebut kalimat Tasbih, menyucikan Allah dari segala sifat kekurangan.'
      },
      {
        type: 'fill_blank',
        question: 'Malaikat yang bertugas meniup sangkakala pada saat terjadinya kiamat dan hari kebangkitan adalah Malaikat ___.',
        answer: 'israfil',
        acceptedAnswers: ['israfil', 'isrofil'],
        explanation: 'Malaikat Israfil mengemban tugas meniup terompet sangkakala atas izin Allah SWT.'
      },
      {
        type: 'fill_blank',
        question: 'Kalimat "Inna lillahi wa inna ilaihi raji\'un" yang diucapkan ketika tertimpa musibah dinamakan kalimat tarji\' atau kalimat ___.',
        answer: 'istirja',
        acceptedAnswers: ['istirja', 'istirja\'', 'tarji', 'tarji\''],
        explanation: 'Kalimat Istirja\' diucapkan saat menghadapi cobaan, menyadari semua berasal dari Allah dan akan kembali kepada-Nya.'
      }
    ]
  },

  7: {
    title: 'Qada, Qadar & Akhirat',
    subject: 'tauhid',
    subjectLabel: 'Tauhid',
    day: 2,
    difficulty: 'hard',
    icon: '⚖️',
    topics: ['Qada dan Qadar', 'Nabi-Nabi Ulul Azmi', 'Tanda-Tanda Kiamat'],
    lesson: '<h4>Qada, Qadar, Ulul Azmi, & Peristiwa Hari Akhir</h4><p>Mengimani takdir dan kepastian hari akhir melahirkan ketenangan jiwa dan semangat berikhtiar:</p><ul><li><strong>Qada dan Qadar:</strong> Qada adalah ketetapan Allah pada zaman azali sebelum alam semesta tercipta. Qadar adalah realisasi atau perwujudan dari ketetapan tersebut di dunia nyata.</li><li><strong>Pembagian Takdir:</strong> (1) <em>Takdir Mubram:</em> Takdir pasti yang tidak dapat diubah manusia (seperti ajal kematian, jenis kelamin kelahiran). (2) <em>Takdir Mu\'allaq:</em> Takdir yang digantungkan pada ikhtiar hamba, doa, dan sedekah (seperti kepandaian dan kesehatan).</li><li><strong>5 Rasul Ulul Azmi:</strong> Para rasul pilihan yang memiliki keteguhan tekad, kesabaran, dan ketabahan hati luar biasa: Nuh a.s., Ibrahim a.s., Musa a.s., Isa a.s., dan Muhammad SAW (disingkat: NIMIM).</li><li><strong>Tanda-Tanda Kiamat:</strong> <em>Sugra (Kecil):</em> Banyak bencana, kebodohan merajalela, orang berlomba meninggikan gedung. <em>Kubra (Besar):</em> Terbitnya matahari dari ufuk barat, munculnya fitnah Dajjal, turunnya Nabi Isa a.s., keluarnya Ya\'juj dan Ma\'juj, kabut asap Dukhan, serta tiupan sangkakala.</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Ketetapan takdir Allah SWT yang erat kaitannya dengan usaha, ikhtiar, dan doa seorang hamba dinamakan...',
        options: ['Takdir Mubram', 'Takdir Mu\'allaq', 'Takdir Mutlak', 'Takdir Hakiki'],
        correct: 1,
        explanation: 'Takdir Mu\'allaq adalah takdir yang digantungkan pada usaha manusia, misalnya orang yang belajar giat menjadi berprestasi.'
      },
      {
        type: 'multiple_choice',
        question: 'Manakah di antara peristiwa berikut yang merupakan contoh dari takdir Mubram (mutlak dan tidak dapat diubah)?',
        options: [
          'Menjadi juara kelas karena tekun belajar',
          'Sembuh dari penyakit karena berobat rutin',
          'Batas ajal dan kematian seseorang',
          'Kaya raya karena giat berdagang'
        ],
        correct: 2,
        explanation: 'Ajal kematian, hari kiamat, dan orang tua biologis adalah takdir Mubram yang ketentuannya mutlak di tangan Allah.'
      },
      {
        type: 'multiple_choice',
        question: 'Gelar kehormatan "Ulul Azmi" diberikan kepada para rasul Allah yang memiliki keistimewaan berupa...',
        options: [
          'Kekayaan istana dan kerajaan yang megah',
          'Kesabaran dan ketabahan hati yang luar biasa dalam berdakwah',
          'Jumlah prajurit pasukan terbanyak di dunia',
          'Pengetahuan meramal kejadian masa depan'
        ],
        correct: 1,
        explanation: 'Ulul Azmi bermakna orang-orang yang memiliki keteguhan hati, kesabaran, dan perjuangan yang tak tertandingi.'
      },
      {
        type: 'multiple_choice',
        question: 'Salah satu tanda kiamat kubra (kiamat besar) yang menutup pintu taubat bagi seluruh manusia adalah...',
        options: [
          'Banyaknya gedung-gedung bertingkat tinggi',
          'Terbitnya matahari dari sebelah barat',
          'Sering terjadinya gempa bumi ringan',
          'Banyak orang yang malas menghafal Al-Qur\'an'
        ],
        correct: 1,
        explanation: 'Matahari terbit dari barat adalah tanda besar kiamat di mana pintu taubat resmi ditutup oleh Allah SWT.'
      },
      {
        type: 'fill_blank',
        question: 'Singkatan huruf populer untuk memudahkan menghafal 5 nabi Ulul Azmi (Nuh, Ibrahim, Musa, Isa, Muhammad) adalah ___.',
        answer: 'nimim',
        acceptedAnswers: ['nimim', 'n i m i m', 'mimin'],
        explanation: 'NIMIM adalah akronim untuk: Nuh a.s., Ibrahim a.s., Musa a.s., Isa a.s., dan Muhammad SAW.'
      },
      {
        type: 'fill_blank',
        question: 'Sosok pembawa fitnah terbesar di akhir zaman yang bermata buta sebelah dan mengaku sebagai tuhan adalah ___.',
        answer: 'dajjal',
        acceptedAnswers: ['dajjal', 'al-masih ad-dajjal', 'dajal', 'al masih ad dajjal'],
        explanation: 'Al-Masih Ad-Dajjal adalah pembawa fitnah terbesar di akhir zaman yang kelak dibunuh oleh Nabi Isa a.s.'
      },
      {
        type: 'fill_blank',
        question: 'Hari dibangkitkannya seluruh manusia dari dalam alam kubur setelah tiupan sangkakala kedua dinamakan Yaumul ___.',
        answer: 'ba\'ats',
        acceptedAnswers: ['ba\'ats', 'baats', 'ba\'at', 'ba\'atsun', 'baas'],
        explanation: 'Yaumul Ba\'ats adalah hari kebangkitan seluruh manusia dari kubur untuk menuju Padang Mahsyar.'
      },
      {
        type: 'ordering',
        question: 'Urutkan nama-nama Nabi Ulul Azmi berikut secara kronologis masa kenabian mereka dari yang paling awal:',
        items: [
          'Nabi Nuh a.s.',
          'Nabi Ibrahim a.s.',
          'Nabi Musa a.s.',
          'Nabi Muhammad SAW'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Urutan kronologis kenabian: Nabi Nuh a.s., kemudian Nabi Ibrahim a.s., Nabi Musa a.s., dan ditutup Nabi Muhammad SAW.'
      },
      {
        type: 'ordering',
        question: 'Urutkan tahapan fase perjalanan manusia di alam akhirat berikut secara berurutan:',
        items: [
          'Alam Barzakh (Alam Kubur)',
          'Yaumul Ba\'ats (Hari Kebangkitan)',
          'Yaumul Hisab dan Mizan (Perhitungan & Penimbangan Amal)',
          'Surga atau Neraka (Tempat Pembalasan Terakhir)'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Fase akhirat dimulai dari Alam Barzakh, dibangkitkan pada Yaumul Ba\'ats, dihisab & ditimbang di Mizan, lalu masuk Surga atau Neraka.'
      },
      {
        type: 'ordering',
        question: 'Urutkan rentetan kemunculan peristiwa tanda kiamat kubra berikut sesuai riwayat hadits:',
        items: [
          'Munculnya fitnah Dajjal',
          'Turunnya Nabi Isa a.s. ke muka bumi',
          'Keluarnya gerombolan Ya\'juj dan Ma\'juj',
          'Terbitnya matahari dari arah barat'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Urutan tanda kiamat kubra: keluarnya Dajjal, disusul turunnya Nabi Isa membunuhnya, serbuan Ya\'juj & Ma\'juj, lalu matahari terbit dari barat.'
      }
    ]
  },

  // ==========================================
  // HARI 3: TARIKH / KISAH ISLAMI (LEVEL 8 - 10)
  // ==========================================

  8: {
    title: 'Para Nabi Pilihan I',
    subject: 'tarikh',
    subjectLabel: 'Tarikh',
    day: 3,
    difficulty: 'easy',
    icon: '📖',
    topics: ['Kisah Nabi Muhammad SAW', 'Nabi Ibrahim a.s.', 'Nabi Ismail a.s.', 'Nabi Adam a.s.'],
    lesson: '<h4>Kisah Para Nabi Pilihan: Teladan Sepanjang Zaman</h4><p>Mempelajari sejarah nabi menanamkan kecintaan kepada para utusan Allah yang penuh keteladanan:</p><ul><li><strong>Nabi Adam a.s.:</strong> Manusia dan nabi pertama yang diciptakan Allah dari tanah liat (Abul Basyar). Allah memerintahkan para malaikat dan iblis bersujud hormat, namun iblis membangkang karena kesombongan.</li><li><strong>Nabi Ibrahim a.s.:</strong> Bergelar Khalilullah (Kekasih Allah) dan bapak para nabi (Abul Anbiya\'). Menghancurkan berhala kaumnya lalu dibakar oleh Raja Namrud, namun api menjadi dingin dan menyelamatkannya atas mukjizat Allah.</li><li><strong>Nabi Ismail a.s.:</strong> Putra Nabi Ibrahim dan Siti Hajar. Dari hentakan kakinya memancar air Zamzam. Dengan penuh kerelaan ia bersedia disembelih sang ayah demi perintah Allah sebelum digantikan dengan seekor domba besar, serta bersama sang ayah membangun Ka\'bah.</li><li><strong>Nabi Muhammad SAW:</strong> Nabi penutup para anbiya\' (Khatamul Anbiya\'). Lahir 12 Rabi\'ul Awwal Tahun Gajah di Mekah dalam keadaan yatim. Diberi gelar Al-Amin karena kejujurannya, menerima wahyu pertama Surah Al-\'Alaq 1-5 di Gua Hira, dan mukjizat terbesarnya adalah Kitab Suci Al-Qur\'an.</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Manusia dan nabi pertama yang diciptakan langsung oleh Allah SWT dari tanah adalah...',
        options: ['Nabi Nuh a.s.', 'Nabi Adam a.s.', 'Nabi Ibrahim a.s.', 'Nabi Idris a.s.'],
        correct: 1,
        explanation: 'Nabi Adam a.s. diciptakan oleh Allah dari tanah sebagai khalifah dan manusia pertama di bumi.'
      },
      {
        type: 'multiple_choice',
        question: 'Raja zalim dan sombong yang memerintahkan agar Nabi Ibrahim a.s. dibakar hidup-hidup adalah...',
        options: ['Raja Fir\'aun', 'Raja Namrud', 'Raja Jalut', 'Raja Abrahah'],
        correct: 1,
        explanation: 'Raja Namrud memerintahkan membakar Nabi Ibrahim a.s. karena menghancurkan berhala sesembahannya.'
      },
      {
        type: 'multiple_choice',
        question: 'Sumber mata air suci di samping Ka\'bah yang memancar berkat hentakan kaki bayi Nabi Ismail a.s. adalah...',
        options: ['Air Kautsar', 'Air Ma\'in', 'Air Zamzam', 'Air Salsabil'],
        correct: 2,
        explanation: 'Mata air Zamzam memancar di lembah Mekah yang tandus saat ibunda Hajar mencari air bolak-balik Shafa dan Marwah.'
      },
      {
        type: 'multiple_choice',
        question: 'Nabi Muhammad SAW dilahirkan pada tahun Gajah pada tanggal 12 Rabi\'ul Awwal di kota suci...',
        options: ['Madinah', 'Mekah', 'Yerusalem', 'Thaif'],
        correct: 1,
        explanation: 'Nabi Muhammad SAW dilahirkan pada hari Senin, 12 Rabi\'ul Awwal Tahun Gajah di kota Mekah al-Mukarramah.'
      },
      {
        type: 'multiple_choice',
        question: 'Karena kejujuran dan amanah beliau sejak masa muda, masyarakat kaum Quraisy memberi gelar Nabi Muhammad dengan gelar...',
        options: ['Al-Faruq', 'Al-Amin', 'As-Shiddiq', 'Dzulqarnain'],
        correct: 1,
        explanation: 'Al-Amin artinya orang yang jujur dan amat dapat dipercaya, gelar mulia Nabi Muhammad SAW.'
      },
      {
        type: 'multiple_choice',
        question: 'Wahyu Al-Qur\'an pertama yang diturunkan kepada Nabi Muhammad SAW di Gua Hira adalah surah...',
        options: ['Al-Fatihah ayat 1-7', 'Al-Ikhlas ayat 1-4', 'Al-\'Alaq ayat 1-5', 'Al-Baqarah ayat 1-5'],
        correct: 2,
        explanation: 'Wahyu pertama yang turun melalui Malaikat Jibril adalah Surah Al-\'Alaq ayat 1-5 diawali perintah membaca (Iqra\').'
      },
      {
        type: 'multiple_choice',
        question: 'Nabi yang bersama putranya diperintahkan oleh Allah SWT untuk meninggikan pondasi bangunan Ka\'bah adalah...',
        options: [
          'Nabi Nuh dan Sam',
          'Nabi Ibrahim dan Nabi Ismail',
          'Nabi Daud dan Nabi Sulaiman',
          'Nabi Zakariya dan Nabi Yahya'
        ],
        correct: 1,
        explanation: 'Nabi Ibrahim a.s. bersama putranya Nabi Ismail a.s. bersama-sama membangun dan merenovasi Ka\'bah.'
      },
      {
        type: 'true_false',
        question: 'Iblis menolak perintah Allah untuk bersujud hormat kepada Nabi Adam a.s. karena merasa dirinya lebih mulia diciptakan dari unsur api.',
        correct: true,
        explanation: 'Benar, iblis sombong dan membangkang berkata: "Aku lebih baik daripadanya, Engkau ciptakan aku dari api dan dia dari tanah".'
      },
      {
        type: 'true_false',
        question: 'Ayahanda Nabi Muhammad SAW bernama Abdullah yang telah wafat sebelum Nabi Muhammad SAW lahir ke dunia.',
        correct: true,
        explanation: 'Benar, Nabi Muhammad SAW lahir dalam kondisi yatim karena ayahandanya wafat saat beliau masih dalam kandungan.'
      },
      {
        type: 'true_false',
        question: 'Peristiwa kesabaran Nabi Ismail a.s. saat hendak disembelih menjadi asal-usul pensyariatan ibadah kurban pada Hari Raya Idul Adha.',
        correct: true,
        explanation: 'Benar, ketaatan Ibrahim dan Ismail diganti dengan sembelihan domba besar dan diabadikan sebagai ibadah kurban.'
      }
    ]
  },

  9: {
    title: 'Para Nabi Pilihan II',
    subject: 'tarikh',
    subjectLabel: 'Tarikh',
    day: 3,
    difficulty: 'medium',
    icon: '📜',
    topics: ['Kisah Nabi Nuh a.s.', 'Nabi Yusuf a.s.', 'Nabi Isa a.s.', 'Nabi Daud a.s.'],
    lesson: '<h4>Kisah Nabi Nuh, Yusuf, Daud, & Isa a.s.</h4><p>Perjalanan dakwah para nabi sarat dengan cobaan berat dan pertolongan mukjizat dari Allah SWT:</p><ul><li><strong>Nabi Nuh a.s.:</strong> Berdakwah selama kurang lebih 950 tahun dengan kesabaran luar biasa. Atas perintah Allah beliau membuat bahtera raksasa. Kaum durhaka ditenggelamkan banjir bah dahsyat, termasuk putra kandungnya sendiri yang durhaka bernama Kan\'an.</li><li><strong>Nabi Yusuf a.s.:</strong> Diberikan ketampanan rupawan dan mukjizat menakwilkan tabir mimpi. Mengalami ujian dibuang saudara-saudaranya ke sumur, dijual sebagai budak di Mesir, difitnah hingga dipenjara, hingga akhirnya diangkat menjadi bendahara negara Mesir.</li><li><strong>Nabi Daud a.s.:</strong> Pemuda pemberani yang berhasil merobohkan panglima raksasa Jalut (Goliath) dengan katapel batu. Dikaruniai Kitab Zabur, memiliki suara sangat merdu yang membuat burung dan gunung bertasbih bersamanya, serta mukjizat melunakkan besi baja dengan tangan.</li><li><strong>Nabi Isa a.s.:</strong> Lahir dari wanita suci Siti Maryam tanpa perantaraan ayah. Berbicara membela ibunya saat masih bayi dalam buaian, menerima Kitab Injil, dapat menyembuhkan penyakit kusta, buta sejak lahir, dan menghidupkan orang mati atas izin Allah SWT.</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Putra Nabi Nuh a.s. yang durhaka dan menolak naik ke atas kapal hingga tewas tenggelam tersapu banjir bah bernama...',
        options: ['Yafits', 'Sam', 'Kan\'an', 'Ham'],
        correct: 2,
        explanation: 'Kan\'an menolak ajakan dakwah ayahnya dan mengira gunung dapat melindunginya dari banjir bah, namun ia tenggelam.'
      },
      {
        type: 'multiple_choice',
        question: 'Nabi yang diberi mukjizat menafsirkan mimpi raja dan berhasil menyelamatkan negeri Mesir dari paceklik panjang adalah...',
        options: ['Nabi Yusuf a.s.', 'Nabi Musa a.s.', 'Nabi Yunus a.s.', 'Nabi Harun a.s.'],
        correct: 0,
        explanation: 'Nabi Yusuf a.s. menakwilkan mimpi raja tentang 7 sapi gemuk yang dimakan 7 sapi kurus sebagai masa panen dan paceklik.'
      },
      {
        type: 'multiple_choice',
        question: 'Nabi Daud a.s. semasa muda berhasil menumbangkan seorang raja penguasa zalim yang perkasa bernama...',
        options: ['Raja Namrud', 'Raja Jalut', 'Haman', 'Qarun'],
        correct: 1,
        explanation: 'Nabi Daud a.s. mengalahkan Jalut (Goliath) dengan katapel batu atas pertolongan Allah, lalu kelak menjadi raja Bani Israil.'
      },
      {
        type: 'multiple_choice',
        question: 'Kitab suci samawi yang diturunkan oleh Allah SWT kepada Nabi Daud a.s. adalah...',
        options: ['Kitab Taurat', 'Kitab Zabur', 'Kitab Injil', 'Kitab Al-Qur\'an'],
        correct: 1,
        explanation: 'Kitab Zabur diturunkan kepada Nabi Daud a.s., Taurat kepada Nabi Musa, Injil kepada Nabi Isa, dan Al-Qur\'an kepada Nabi Muhammad SAW.'
      },
      {
        type: 'multiple_choice',
        question: 'Salah satu mukjizat Nabi Isa a.s. sejak masih bayi dalam buaian adalah...',
        options: [
          'Dapat membelah lautan dengan tongkat',
          'Mampu berbicara membela kesucian kehormatan ibunya',
          'Dapat membuat perahu besar dari kayu jati',
          'Mampu melunakkan besi keras dengan jarinya'
        ],
        correct: 1,
        explanation: 'Saat masih bayi digendong Siti Maryam, Nabi Isa berbicara membantah tuduhan keji kaum Yahudi kepada ibunya.'
      },
      {
        type: 'true_false',
        question: 'Nabi Yusuf a.s. dimasukkan ke dalam sumur tua oleh saudara-saudaranya karena rasa iri dengki terhadap kasih sayang ayah mereka.',
        correct: true,
        explanation: 'Benar, saudara-saudara Yusuf cemburu melihat kecintaan Nabi Ya\'qub kepada Yusuf dan adiknya Bunyamin.'
      },
      {
        type: 'true_false',
        question: 'Menurut keyakinan akidah Islam, Nabi Isa a.s. wafat di tiang salib oleh tentara Romawi.',
        correct: false,
        explanation: 'Salah, dalam Surah An-Nisa ayat 157-158 dijelaskan bahwa Nabi Isa tidak disalib melainkan diserupakan orang lain dan diangkat ke langit.'
      },
      {
        type: 'fill_blank',
        question: 'Burung-burung dan gunung-gunung turut bertasbih memuji Allah ketika mendengar lantunan suara yang sangat merdu dari Nabi ___.',
        answer: 'daud',
        acceptedAnswers: ['daud', 'dawud', 'nabi daud', 'nabi dawud'],
        explanation: 'Nabi Daud a.s. dianugerahi suara merdu yang luar biasa saat membaca kitab Zabur hingga alam ikut bertasbih.'
      },
      {
        type: 'fill_blank',
        question: 'Ibunda Nabi Isa a.s. adalah seorang wanita suci dan shalihah bernama Siti ___.',
        answer: 'maryam',
        acceptedAnswers: ['maryam', 'mariam', 'siti maryam'],
        explanation: 'Siti Maryam binti Imran adalah wanita pilihan yang melahirkan Nabi Isa tanpa perantaraan seorang ayah atas mukjizat Allah.'
      },
      {
        type: 'fill_blank',
        question: 'Kapal besar Nabi Nuh a.s. setelah surutnya banjir dahsyat akhirnya merapat dan berlabuh di atas puncak Gunung ___.',
        answer: 'judi',
        acceptedAnswers: ['judi', 'judiya', 'al-judi', 'bukit judi', 'gunung judi'],
        explanation: 'Disebutkan dalam Al-Qur\'an Surah Hud ayat 44 bahwa bahtera Nabi Nuh a.s. berlabuh di atas Bukit Judi.'
      }
    ]
  },

  10: {
    title: 'Nabi & Khulafaur Rasyidin',
    subject: 'tarikh',
    subjectLabel: 'Tarikh',
    day: 3,
    difficulty: 'hard',
    icon: '🏛️',
    topics: ['Kisah Nabi Sulaiman a.s.', 'Nabi Musa a.s.', 'Abu Bakar as-Shiddiq', 'Umar bin Khattab', 'Utsman bin Affan'],
    lesson: '<h4>Nabi Ulung & Khulafaur Rasyidin</h4><p>Kepemimpinan Islam dibangun atas landasan keadilan, amanah, dan ketakwaan:</p><ul><li><strong>Nabi Musa a.s.:</strong> Bergelar Kalimullah (diajak bicara langsung oleh Allah). Menghadapi Fir\'aun dan tukang sihirnya, mukjizat tongkat membelah Laut Merah dan tangan bercahaya putih, menerima Kitab Taurat di Bukit Tursina (Sinai).</li><li><strong>Nabi Sulaiman a.s.:</strong> Putra Nabi Daud yang mewarisi kerajaan megah. Memiliki mukjizat memahami bahasa binatang (seperti burung hud-hud dan semut), menundukkan angin, memimpin balatentara dari kalangan manusia, jin, dan burung, serta mengislamkan Ratu Balqis dari negeri Saba\'.</li><li><strong>Khulafaur Rasyidin (Para Khalifah Pembawa Petunjuk):</strong><ol><li><strong>Abu Bakar As-Shiddiq:</strong> Khalifah ke-1. Membenarkan Isra\' Mi\'raj, menumpas nabi palsu dan kaum murtad, memprakarsai penulisan mushaf Al-Qur\'an pertama.</li><li><strong>Umar bin Khattab (Al-Faruq):</strong> Khalifah ke-2. Tegas membedakan yang hak dan batil, memelopori penanggalan kalender Hijriyah, dan memperluas wilayah dakwah.</li><li><strong>Utsman bin Affan (Dzun Nurain):</strong> Khalifah ke-3. Saudagar dermawan pemilik dua cahaya, menyatukan pembukuan mushaf standar Al-Qur\'an (Mushaf Utsmani).</li><li><strong>Ali bin Abi Thalib:</strong> Khalifah ke-4. Menantu Rasulullah, bergelar Babul \'Ilmi (Gerbang Ilmu) dan Singa Allah.</li></ol></li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Sahabat Rasulullah SAW yang bergelar "Al-Faruq" (pembeda antara yang hak dan yang batil) adalah...',
        options: ['Abu Bakar As-Shiddiq', 'Umar bin Khattab', 'Utsman bin Affan', 'Ali bin Abi Thalib'],
        correct: 1,
        explanation: 'Umar bin Khattab r.a. diberi gelar Al-Faruq oleh Rasulullah SAW karena ketegasan dan keberaniannya membela kebenaran.'
      },
      {
        type: 'multiple_choice',
        question: 'Khalifah yang berjasa besar menyatukan penulisan dan standarisasi mushaf Al-Qur\'an menjadi satu dialek resmi adalah...',
        options: ['Abu Bakar As-Shiddiq', 'Umar bin Khattab', 'Utsman bin Affan', 'Ali bin Abi Thalib'],
        correct: 2,
        explanation: 'Khalifah Utsman bin Affan r.a. menyatukan naskah Al-Qur\'an ke dalam satu mushaf induk yang dinamai Mushaf Utsmani.'
      },
      {
        type: 'multiple_choice',
        question: 'Mukjizat agung yang dikaruniakan Allah SWT kepada Nabi Sulaiman a.s. dalam memimpin kerajaannya adalah...',
        options: [
          'Memahami bahasa binatang dan menundukkan bangsa jin serta angin',
          'Mampu menghidupkan orang yang telah meninggal dunia',
          'Mengeluarkan seekor unta betina bunting dari celah batu',
          'Mampu membelah bulan purnama menjadi dua bagian'
        ],
        correct: 0,
        explanation: 'Nabi Sulaiman a.s. dikaruniai kemampuan memahami bahasa semut, burung, dan binatang lain serta bala tentara dari bangsa jin.'
      },
      {
        type: 'multiple_choice',
        question: 'Tongkat mukjizat Nabi Musa a.s. berubah menjadi ular besar yang menelan seluruh tipu daya sihir pesuruh dari raja...',
        options: ['Raja Namrud', 'Raja Fir\'aun', 'Raja Abrahah', 'Raja Heraklius'],
        correct: 1,
        explanation: 'Nabi Musa a.s. mengalahkan para tukang sihir istana Raja Fir\'aun dengan mukjizat tongkat yang berubah menjadi ular raksasa.'
      },
      {
        type: 'fill_blank',
        question: 'Utsman bin Affan r.a. dijuluki dengan gelar "Dzun Nurain" yang berarti pemilik ___ cahaya karena menikahi dua putri Rasulullah SAW.',
        answer: 'dua',
        acceptedAnswers: ['dua', '2', 'dua cahaya', 'dua buah'],
        explanation: 'Dzun Nurain artinya pemilik dua cahaya karena Utsman menikahi Ruqayyah dan setelah wafat menikahi Ummu Kultsum.'
      },
      {
        type: 'fill_blank',
        question: 'Sahabat yang dengan gagah berani menggantikan posisi tidur di ranjang Nabi Muhammad SAW pada malam hijrah adalah ___.',
        answer: 'ali bin abi thalib',
        acceptedAnswers: ['ali bin abi thalib', 'ali', 'ali bin abi tholib', 'sayyidina ali'],
        explanation: 'Ali bin Abi Thalib r.a. mempertaruhkan nyawanya tidur di pembaringan Nabi untuk mengecoh kaum kafir Quraisy.'
      },
      {
        type: 'fill_blank',
        question: 'Penetapan kalender Islam (Tahun Hijriyah) pertama kali diresmikan perhitungannya pada masa kepemimpinan Khalifah ___.',
        answer: 'umar bin khattab',
        acceptedAnswers: ['umar bin khattab', 'umar', 'umar bin khatab', 'khalifah umar'],
        explanation: 'Khalifah Umar bin Khattab r.a. bersama para sahabat menetapkan tahun 1 Hijriyah dihitung dari peristiwa hijrah ke Madinah.'
      },
      {
        type: 'ordering',
        question: 'Urutkan masa kepemimpinan empat sahabat Khulafaur Rasyidin dari khalifah pertama hingga keempat:',
        items: [
          'Abu Bakar As-Shiddiq',
          'Umar bin Khattab',
          'Utsman bin Affan',
          'Ali bin Abi Thalib'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Urutan Khulafaur Rasyidin: (1) Abu Bakar As-Shiddiq, (2) Umar bin Khattab, (3) Utsman bin Affan, dan (4) Ali bin Abi Thalib.'
      },
      {
        type: 'ordering',
        question: 'Urutkan peristiwa perjalanan hidup Nabi Musa a.s. berikut secara kronologis:',
        items: [
          'Dihanyutkan dalam peti di sungai Nil saat bayi',
          'Tinggal di Madyan dan menikahi putri Nabi Syu\'aib',
          'Membelah Laut Merah menyelamatkan Bani Israil dari Fir\'aun',
          'Menerima Kitab Suci Taurat di Bukit Tursina (Sinai)'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Kisah Nabi Musa: bayi di sungai Nil, hijrah ke Madyan, membelah Laut Merah, lalu munajat menerima Taurat di Tursina.'
      },
      {
        type: 'ordering',
        question: 'Urutkan proses perjalanan kodifikasi mushaf Al-Qur\'an pada masa para sahabat:',
        items: [
          'Banyak penghafal Al-Qur\'an (huffadz) gugur dalam Perang Yamamah',
          'Umar bin Khattab mengusulkan pengumpulan Al-Qur\'an kepada Abu Bakar',
          'Zaid bin Tsabit ditunjuk memimpin penulisan mushaf pertama',
          'Utsman bin Affan menyatukan dan menyebarkan mushaf standar ke penjuru negeri'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Gugurnya huffadz mendorong usul Umar kepada Abu Bakar, Zaid bin Tsabit mengumpulkannya, dan Utsman membukukannya secara seragam.'
      }
    ]
  },

  // ==========================================
  // HARI 4: ILMU TAJWID (LEVEL 11 - 14)
  // ==========================================

  11: {
    title: 'Dasar Tajwid',
    subject: 'tajwid',
    subjectLabel: 'Tajwid',
    day: 4,
    difficulty: 'easy',
    icon: '📿',
    topics: ['Makharijul Huruf', 'Hukum Nun Sukun dan Tanwin', 'Hukum Mim Mati', 'Idgham yang lain'],
    lesson: '<h4>Dasar-Dasar Ilmu Tajwid</h4><p>Membaca Al-Qur\'an dengan tartil dan tajwid yang benar adalah fardhu \'ain bagi setiap muslim agar maknanya terjaga:</p><ul><li><strong>Makharijul Huruf (5 Tempat Keluar Huruf):</strong><ol><li><em>Al-Jauf:</em> Rongga mulut dan tenggorokan (tempat keluarnya huruf mad).</li><li><em>Al-Halq:</em> Tenggorokan (huruf: ء, هـ, ع, ح, غ, خ).</li><li><em>Al-Lisan:</em> Lidah (18 huruf hijaiyyah).</li><li><em>Asy-Syafatain:</em> Dua bibir (huruf: ب, م, و, ف).</li><li><em>Al-Khaisyum:</em> Pangkal hidung (tempat keluarnya suara ghunnah/dengung).</li></ol></li><li><strong>5 Hukum Nun Sukun (نْ) & Tanwin (ً ٍ ٌ):</strong><ol><li><em>Izhar Halqi:</em> Dibaca jelas, hurufnya 6 (ء, هـ, ع, ح, غ, خ).</li><li><em>Idgham Bighunnah:</em> Melebur dengan dengung, hurufnya 4 (ي, ن, م, و).</li><li><em>Idgham Bilaghunnah:</em> Melebur tanpa dengung, hurufnya 2 (ل, ر).</li><li><em>Iqlab:</em> Menukar suara nun/tanwin menjadi suara mim rapat disertai dengung, hurufnya 1 (ب).</li><li><em>Ikhfa Haqiqi:</em> Membaca samar disertai dengung, hurufnya 15 (ت, ث, ج, د, ذ, ز, س, ش, ص, ض, ط, ظ, ف, ق, ك).</li></ol></li><li><strong>3 Hukum Mim Mati (مْ):</strong><ol><li><em>Ikhfa Syafawi:</em> Mim mati bertemu huruf ب (samar di bibir berdengung).</li><li><em>Idgham Mimi (Mutamatsilain):</em> Mim mati bertemu huruf م (melebur berdengung).</li><li><em>Izhar Syafawi:</em> Mim mati bertemu 26 huruf selain ب dan م (dibaca jelas).</li></ol></li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Hukum bacaan yang terjadi apabila nun sukun (نْ) atau tanwin bertemu huruf hijaiyyah terbagi menjadi...',
        options: ['3 macam hukum', '4 macam hukum', '5 macam hukum', '6 macam hukum'],
        correct: 2,
        explanation: 'Nun sukun dan tanwin memiliki 5 hukum: Izhar Halqi, Idgham Bighunnah, Idgham Bilaghunnah, Iqlab, dan Ikhfa Haqiqi.'
      },
      {
        type: 'multiple_choice',
        question: 'Apabila nun sukun atau tanwin bertemu dengan salah satu huruf halq (ء, هـ, ع, ح, غ, خ), maka hukum bacaannya adalah...',
        options: ['Ikhfa Haqiqi', 'Izhar Halqi', 'Idgham Bighunnah', 'Iqlab'],
        correct: 1,
        explanation: 'Izhar Halqi dibaca jelas tanpa mendengung karena huruf-hurufnya keluar dari tenggorokan (halq).'
      },
      {
        type: 'multiple_choice',
        question: 'Huruf-huruf Idgham Bighunnah berjumlah 4 huruf yang terangkum dalam kata...',
        options: [
          'ل - ر (Lam dan Ra)',
          'ي - ن - م - و (Yanmu)',
          'ق - ط - ب - ج - د (Baju di toko)',
          'ت - ث - د - ذ'
        ],
        correct: 1,
        explanation: 'Huruf Idgham Bighunnah ada 4 yaitu Ya, Nun, Mim, dan Wawu, disingkat "YANMU".'
      },
      {
        type: 'multiple_choice',
        question: 'Hukum bacaan ketika nun sukun atau tanwin bertemu huruf Ba (ب) sehingga suaranya beralih menjadi bunyi Mim disertai dengung adalah...',
        options: ['Izhar', 'Ikhfa', 'Iqlab', 'Idgham'],
        correct: 2,
        explanation: 'Iqlab artinya membalik atau menukar suara nun mati/tanwin menjadi suara mim rapat dengan dengung.'
      },
      {
        type: 'multiple_choice',
        question: 'Jika huruf Mim Mati (مْ) bertemu dengan huruf Mim (م), maka hukum bacaannya dinamakan...',
        options: [
          'Izhar Syafawi',
          'Ikhfa Syafawi',
          'Idgham Mimi (Mutamatsilain)',
          'Idgham Bilaghunnah'
        ],
        correct: 2,
        explanation: 'Mim sukun bertemu huruf mim berharakat dinamakan Idgham Mimi atau Idgham Mutamatsilain dibaca dengung.'
      },
      {
        type: 'multiple_choice',
        question: 'Makhraj huruf yang terletak pada rongga mulut dan rongga tenggorokan tempat keluarnya huruf mad disebut...',
        options: ['Al-Halq', 'Al-Jauf', 'Al-Lisan', 'Asy-Syafatain'],
        correct: 1,
        explanation: 'Al-Jauf adalah rongga terbuka di mulut dan tenggorokan tempat berhembusnya huruf-huruf mad.'
      },
      {
        type: 'multiple_choice',
        question: 'Huruf-huruf hijaiyyah seperti Ba (ب), Mim (م), Wawu (و), dan Fa (ف) keluar dari makhraj...',
        options: [
          'Al-Lisan (Lidah)',
          'Asy-Syafatain (Dua bibir)',
          'Al-Khaisyum (Pangkal hidung)',
          'Al-Halq (Tenggorokan)'
        ],
        correct: 1,
        explanation: 'Asy-Syafatain artinya kedua belah bibir, tempat keluarnya huruf Ba, Mim, Wawu, dan Fa.'
      },
      {
        type: 'true_false',
        question: 'Cara membaca Idgham Bilaghunnah (pada huruf Lam dan Ra) adalah meleburkan bunyi nun sukun tanpa disertai dengung.',
        correct: true,
        explanation: 'Benar, Bilaghunnah artinya tanpa dengung, suara nun sukun atau tanwin langsung masuk ke huruf Lam atau Ra.'
      },
      {
        type: 'true_false',
        question: 'Hukum Ikhfa Syafawi terjadi apabila Mim Mati bertemu dengan huruf Wawu (و).',
        correct: false,
        explanation: 'Salah, Ikhfa Syafawi HANYA terjadi bila Mim Mati bertemu huruf Ba (ب). Jika bertemu Wawu hukumnya Izhar Syafawi.'
      },
      {
        type: 'true_false',
        question: 'Suara dengung (ghunnah) dalam ilmu tajwid keluar melalui makhraj Al-Khaisyum (pangkal hidung).',
        correct: true,
        explanation: 'Benar, Al-Khaisyum merupakan pangkal hidung yang menghasilkan resonansi suara dengung (ghunnah).'
      }
    ]
  },

  12: {
    title: 'Hukum Huruf',
    subject: 'tajwid',
    subjectLabel: 'Tajwid',
    day: 4,
    difficulty: 'medium',
    icon: '🔤',
    topics: ['Alif Lam (Syamsiyah/Qamariyah)', 'Qolqolah', 'Tafhim dan Tarqiq', 'Fawathissuwar'],
    lesson: '<h4>Hukum Alif Lam, Qolqolah, Tebal-Tipis, & Fawatihussuwar</h4><p>Penerapan hukum huruf memperindah bacaan Al-Qur\'an sesuai kaidah tartil:</p><ul><li><strong>Hukum Alif Lam Ta\'rif (ال):</strong><ol><li><em>Al-Qamariyah (Izhar Qamariyah):</em> Huruf lam sukun dibaca terang dan jelas. Hurufnya ada 14 yang terangkum dalam: <em>اَبْغِ حَجَّكَ وَخَفْ عَقِيْمَهُ</em> (Al-Hamdu, Al-Kitab).</li><li><em>Al-Syamsiyah (Idgham Syamsiyah):</em> Huruf lam dilebur langsung ke huruf berikutnya yang bertasydid (huruf syamsiyah ada 14, seperti Asy-Syams, Ar-Rahman).</li></ol></li><li><strong>Hukum Qolqolah (Memantul):</strong> Terdiri dari 5 huruf: ق, ط, ب, ج, د (dirangkum: "Baju Di Toko" / "Quthbu Jaddin").<ol><li><em>Qolqolah Sughra:</em> Pantulan ringan karena huruf qolqolah berharakat sukun asli di tengah kata (contoh: يَقْطَعُ).</li><li><em>Qolqolah Kubra:</em> Pantulan kuat dan tebal karena huruf qolqolah dihentikan (waqof) di akhir kalimat (contoh: الْفَلَقِ).</li></ol></li><li><strong>Tafhim dan Tarqiq:</strong> Tafhim artinya menebalkan suara (pada huruf Ra fathah/dhammah dan Lam Jalalah pada lafaz Allah yang didahului fathah/dhammah). Tarqiq artinya menipiskan suara (pada huruf Ra kasrah dan Lam Jalalah yang didahului kasrah).</li><li><strong>Fawatihussuwar:</strong> Huruf-huruf muqaththa\'ah pembuka surah (seperti Alif-Lam-Mim, Ya-Sin, Tha-Ha, Qaf).</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Huruf-huruf qolqolah berjumlah 5 huruf yang terangkum dalam singkatan kata...',
        options: [
          'ت - ث - د - ذ - ز',
          'ق - ط - ب - ج - د (Baju di toko)',
          'ف - ق - ك - ل - م',
          'ء - هـ - ع - ح - غ'
        ],
        correct: 1,
        explanation: 'Huruf qolqolah ada 5: Qaf, Tha, Ba, Jim, Dal (ق ط ب ج د) diringkas "Baju di toko".'
      },
      {
        type: 'multiple_choice',
        question: 'Manakah di antara lafaz berikut yang mengandung hukum bacaan Alif Lam Syamsiyah?',
        options: [
          'اَلْقَمَرُ (Al-Qamaru)',
          'اَلشَّمْسُ (Asy-Syamsu)',
          'اَلْحَمْدُ (Al-Hamdu)',
          'اَلْكِتَابُ (Al-Kitabu)'
        ],
        correct: 1,
        explanation: 'Asy-Syamsu mengandung Al-Syamsiyah karena bunyi alif lam dilebur langsung ke huruf Syin yang bertasydid.'
      },
      {
        type: 'multiple_choice',
        question: 'Pantulan qolqolah yang terjadi karena huruf qolqolah berharakat sukun asli di tengah-tengah kata disebut...',
        options: ['Qolqolah Kubra', 'Qolqolah Sughra', 'Qolqolah Akbar', 'Qolqolah Mutawasithah'],
        correct: 1,
        explanation: 'Qolqolah Sughra (pantulan kecil/ringan) terjadi bila huruf qolqolah bersukun asli di tengah kata.'
      },
      {
        type: 'multiple_choice',
        question: 'Huruf Ra (ر) wajib dibaca dengan suara tebal (Tafhim) apabila huruf Ra tersebut...',
        options: [
          'Berharakat kasrah',
          'Didahului oleh huruf Ya sukun',
          'Berharakat fathah atau berharakat dhammah',
          'Berada di akhir kata dengan kasratain'
        ],
        correct: 2,
        explanation: 'Huruf Ra berharakat fathah atau dhammah wajib dibaca tebal (Tafhim).'
      },
      {
        type: 'multiple_choice',
        question: 'Huruf-huruf hijaiyyah terpotong yang mengawali pembukaan surah-surah tertentu di dalam Al-Qur\'an dinamakan...',
        options: ['Asmaul Husna', 'Fawathissuwar', 'Ayat Sajadah', 'Gharibul Qur\'an'],
        correct: 1,
        explanation: 'Fawathissuwar atau huruf muqaththa\'ah adalah huruf-huruf abjad pembuka surah seperti Alif Lam Mim, Ya Sin, dll.'
      },
      {
        type: 'true_false',
        question: 'Pada hukum Alif Lam Qamariyah, huruf lam sukun (الْ) harus dibaca dengan jelas, terang, dan tidak berdengung.',
        correct: true,
        explanation: 'Benar, Al-Qamariyah dinamakan juga Izhar Qamariyah di mana huruf lam terbaca jelas.'
      },
      {
        type: 'true_false',
        question: 'Lafadz Allah (Lam Jalalah) dibaca tafhim (tebal) apabila didahului oleh huruf yang berharakat kasrah.',
        correct: false,
        explanation: 'Salah, lafaz Allah dibaca tipis (tarqiq) jika didahului kasrah (seperti bismillahi), dan dibaca tebal jika didahului fathah/dhammah.'
      },
      {
        type: 'fill_blank',
        question: 'Hukum memantulkan suara ketika melafazkan huruf hijaiyyah tertentu yang berharakat sukun dinamakan ___.',
        answer: 'qolqolah',
        acceptedAnswers: ['qolqolah', 'qalqalah', 'kolkolah', 'kalkalah'],
        explanation: 'Qolqolah secara bahasa artinya getaran atau memantul saat mematikan hurufnya.'
      },
      {
        type: 'fill_blank',
        question: 'Pantulan qolqolah yang berada di akhir ayat karena dibaca waqof (berhenti) dinamakan qolqolah ___.',
        answer: 'kubra',
        acceptedAnswers: ['kubra', 'kubro'],
        explanation: 'Qolqolah Kubra (besar) terjadi pada huruf qolqolah yang diwaqafkan di akhir kata, seperti pada kata: الْفَلَقِ.'
      },
      {
        type: 'fill_blank',
        question: 'Membaca huruf dengan suara tebal dan berat memenuhi rongga mulut dalam istilah tajwid disebut bacaan ___.',
        answer: 'tafhim',
        acceptedAnswers: ['tafhim', 'tafkhim', 'tebal'],
        explanation: 'Tafhim artinya menggemukkan atau menebalkan bacaan huruf pada makhrajnya.'
      }
    ]
  },

  13: {
    title: 'Waqof & Mad',
    subject: 'tajwid',
    subjectLabel: 'Tajwid',
    day: 4,
    difficulty: 'medium',
    icon: '⏸️',
    topics: ['Shod yang dibaca Shin', 'Waqof Wal Ibtida', 'Mad (panjang bacaan)'],
    lesson: '<h4>Hukum Mad, Waqof, & Tanda-Tanda Khusus</h4><p>Mengatur panjang-pendek bacaan (Mad) serta tempat berhenti (Waqof) sangat menentukan keindahan dan kebenaran makna:</p><ul><li><strong>Hukum Mad (Panjang Bacaan):</strong><ol><li><em>Mad Asli / Thabi\'i:</em> Panjang 2 harakat (1 alif), terjadi pada alif setelah fathah, ya sukun setelah kasrah, wawu sukun setelah dhammah.</li><li><em>Mad Wajib Muttasil:</em> Mad thabi\'i bertemu hamzah dalam SATU kata (panjang 4-5 harakat).</li><li><em>Mad Jaiz Munfasil:</em> Mad thabi\'i bertemu hamzah di LAIN kata terpisah (panjang 4-5 atau 2 harakat).</li><li><em>Mad \'Aridh Lissukun:</em> Mad thabi\'i bertemu huruf hidup yang diwaqafkan di akhir kata (boleh 2, 4, atau 6 harakat).</li><li><em>Mad \'Iwadh:</em> Tanwin fathah (fathatain) di akhir kalimat yang diwaqafkan, dibaca mad 2 harakat.</li></ol></li><li><strong>Tanda-Tanda Waqof Utama:</strong><ul><li><strong>م (Lazim):</strong> Wajib berhenti agar makna tidak rancu.</li><li><strong>لا (Mamnu\'):</strong> Dilarang berhenti di tengah ayat.</li><li><strong>ج (Jaiz):</strong> Boleh berhenti dan boleh melanjutkan bacaan.</li><li><strong>قلى (Al-Waqfu Aula):</strong> Lebih utama berhenti.</li><li><strong>صلى (Al-Washlu Aula):</strong> Lebih utama lanjut terus.</li><li><strong>∴ ∴ (Mu\'anaqah):</strong> Harus berhenti pada salah satu titik tiga, tidak boleh di keduanya.</li></ul></li><li><strong>Huruf Shod dibaca Sin:</strong> Huruf shod (ص) yang di atasnya terdapat huruf sin kecil (س) dibaca dengan suara huruf Sin, contoh pada Surah Al-Baqarah ayat 245 (يَبْصُطُ dibaca yabsuthu).</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Kadar panjang bacaan untuk hukum Mad Thabi\'i (Mad Asli) adalah...',
        options: ['1 harakat', '2 harakat (1 alif)', '4 harakat (2 alif)', '6 harakat (3 alif)'],
        correct: 1,
        explanation: 'Mad Thabi\'i atau Mad Asli memiliki ketukan panjang 2 harakat (setara 1 alif).'
      },
      {
        type: 'multiple_choice',
        question: 'Hukum bacaan yang terjadi jika Mad Thabi\'i bertemu dengan huruf Hamzah di dalam SATU kata yang sama adalah...',
        options: [
          'Mad Jaiz Munfasil',
          'Mad Wajib Muttasil',
          'Mad \'Aridh Lissukun',
          'Mad Badal'
        ],
        correct: 1,
        explanation: 'Mad Wajib Muttasil terjadi saat mad bertemu hamzah dalam satu kata (muttasil = bersambung), dibaca 4-5 harakat.'
      },
      {
        type: 'multiple_choice',
        question: 'Tanda waqof dengan simbol huruf "م" (Mim kecil) dalam mushaf Al-Qur\'an menunjukkan waqof...',
        options: [
          'Waqof Jaiz (boleh berhenti)',
          'Waqof Lazim (harus berhenti)',
          'Waqof Mamnu\' (dilarang berhenti)',
          'Waqof Hasan'
        ],
        correct: 1,
        explanation: 'Tanda Mim kecil adalah Waqof Lazim, di mana pembaca diharuskan berhenti agar makna ayat tidak rusak.'
      },
      {
        type: 'multiple_choice',
        question: 'Tanda waqof berupa titik tiga ganda ( ∴  ∴ ) yang mengharuskan berhenti di salah satu tanda saja dinamakan...',
        options: [
          'Waqof Saktah',
          'Waqof Mu\'anaqah (Muraqabah)',
          'Waqof Kafi',
          'Waqof Tam'
        ],
        correct: 1,
        explanation: 'Waqof Mu\'anaqah ditandai sepasang titik tiga; pembaca memilih berhenti di salah satu titik dan tidak di keduanya.'
      },
      {
        type: 'multiple_choice',
        question: 'Jika ada huruf Mad Thabi\'i bertemu dengan huruf hijaiyyah hidup di akhir ayat karena dibaca waqof, hukumnya adalah...',
        options: [
          'Mad \'Aridh Lissukun',
          'Mad Silah Qashirah',
          'Mad Farq',
          'Mad Tamkin'
        ],
        correct: 0,
        explanation: 'Mad \'Aridh Lissukun terjadi bila huruf mad bertemu huruf sukun karena waqof di akhir bacaan (panjang 2, 4, atau 6 harakat).'
      },
      {
        type: 'true_false',
        question: 'Tanda waqof "لا" (La Waqfa Fihi) berarti dilarang berhenti apabila berada di tengah-tengah ayat yang maknanya belum sempurna.',
        correct: true,
        explanation: 'Benar, tanda "لا" menandakan pembaca tidak boleh berhenti di tempat tersebut.'
      },
      {
        type: 'true_false',
        question: 'Mad Jaiz Munfasil adalah hukum mad yang terjadi apabila huruf mad bertemu huruf hamzah dalam SATU kata yang sama.',
        correct: false,
        explanation: 'Salah, Munfasil artinya terpisah di kata lain. Jika berada dalam satu kata dinamakan Mad Wajib Muttasil.'
      },
      {
        type: 'fill_blank',
        question: 'Tanda waqof "قلى" (Al-Waqfu Aula) memiliki arti bahwa bacaan lebih diutamakan untuk ___.',
        answer: 'berhenti',
        acceptedAnswers: ['berhenti', 'waqaf', 'waqof', 'al-waqfu aula'],
        explanation: 'Qala singkatan dari Al-Waqfu Aula, yang berarti berhenti lebih utama daripada lanjut.'
      },
      {
        type: 'fill_blank',
        question: 'Tanda waqof "صلى" (Al-Washlu Aula) memiliki arti bahwa bacaan lebih diutamakan untuk diteruskan atau ___.',
        answer: 'lanjut',
        acceptedAnswers: ['lanjut', 'washal', 'dilanjutkan', 'diteruskan', 'al-washlu aula'],
        explanation: 'Shala singkatan dari Al-Washlu Aula, yang berarti meneruskan bacaan (washal) lebih utama.'
      },
      {
        type: 'fill_blank',
        question: 'Jika di atas huruf Shod (ص) terdapat tanda huruf Sin kecil (س), maka huruf tersebut dibaca dengan suara huruf ___.',
        answer: 'sin',
        acceptedAnswers: ['sin', 's', 'huruf sin'],
        explanation: 'Huruf Shod dengan huruf Sin kecil di atasnya dibaca sebagai bunyi huruf Sin (contoh: QS. Al-Baqarah: 245).'
      }
    ]
  },

  14: {
    title: 'Tajwid Lanjutan',
    subject: 'tajwid',
    subjectLabel: 'Tajwid',
    day: 4,
    difficulty: 'hard',
    icon: '🎓',
    topics: ['Bacaan Imalah/Isymam/Naql/Tashil/Saktah', 'Waqof dan tanda-tandanya', 'Sifatul Huruf', 'Mengenal Ayat-ayat Sajadah'],
    lesson: '<h4>Gharibul Qur\'an, Sifatul Huruf, & Ayat Sajadah</h4><p>Tingkat mahir dalam ilmu tajwid meliputi penguasaan bacaan gharib (langka) dan sifat-sifat huruf:</p><ul><li><strong>Bacaan Gharibul Qur\'an (Riwayat Hafsh \'an \'Ashim):</strong><ol><li><em>Imalah:</em> Memiringkan bunyi fathah ke arah kasrah (seperti bunyi "e" pada kata "sate") pada lafaz مَجْر۪ىهَا (QS. Hud: 41).</li><li><em>Isymam:</em> Memoncongkan dua bibir ke depan tanpa suara sebagai isyarat dhammah pada kata لَا تَأْمَنَّا (QS. Yusuf: 11).</li><li><em>Tashil:</em> Membaca hamzah kedua secara samar dan ringan antara hamzah dan alif pada kata ءَاَعْجَمِيٌّ (QS. Fussilat: 44).</li><li><em>Naql:</em> Memindahkan harakat hamzah ke huruf sukun sebelumnya pada kata بِئْسَ الاِسْمُ dibaca "bi\'sa-lismu" (QS. Al-Hujurat: 11).</li><li><em>Saktah:</em> Berhenti sejenak selama 2 harakat tanpa mengambil nafas di 4 tempat: QS. Al-Kahfi: 1-2, QS. Ya-Sin: 52, QS. Al-Qiyamah: 27, dan QS. Al-Muthaffifin: 14.</li></ol></li><li><strong>Sifatul Huruf:</strong> Karakteristik huruf saat dibunyikan: <em>Hams</em> (berdesis mengalirkan nafas) lawannya <em>Jahr</em> (menahan nafas); <em>Syiddah</em> (suara tertahan kuat) lawannya <em>Rakhawah</em> (suara mengalir lepas); <em>Isti\'la\'</em> (pangkal lidah naik ke langit-langit) lawannya <em>Istifal</em>.</li><li><strong>Ayat-Ayat Sajadah:</strong> Terdapat 15 ayat di dalam Al-Qur\'an yang disunnahkan bagi pembaca dan pendengarnya untuk melakukan Sujud Tilawah.</li></ul>',
    questions: [
      {
        type: 'multiple_choice',
        question: 'Memiringkan bunyi fathah ke arah kasrah (seperti vokal "é") pada lafaz "مَجْر۪ىهَا" dalam Surah Hud ayat 41 disebut bacaan...',
        options: ['Isymam', 'Imalah', 'Tashil', 'Naql'],
        correct: 1,
        explanation: 'Imalah artinya miring atau condong, memiringkan bunyi fathah ke arah kasrah sehingga berbunyi "majrehaa".'
      },
      {
        type: 'multiple_choice',
        question: 'Berhenti sejenak selama kira-kira dua harakat tanpa mengambil nafas dengan niat melanjutkan bacaan dinamakan...',
        options: ['Waqof', 'Saktah', 'Qath\'u', 'Washal'],
        correct: 1,
        explanation: 'Saktah adalah menahan suara sejenak tanpa bernafas selama dua harakat lalu melanjutkan ayat.'
      },
      {
        type: 'multiple_choice',
        question: 'Memoncongkan kedua bibir ke depan tanpa suara sebagai isyarat dhammah pada lafaz "لَا تَأْمَنَّا" (QS. Yusuf: 11) dinamakan...',
        options: ['Isymam', 'Imalah', 'Tashil', 'Saktah'],
        correct: 0,
        explanation: 'Isymam adalah memoncongkan dua bibir tanpa mengeluarkan suara sebagai lambang harakat dhammah yang tersembunyi.'
      },
      {
        type: 'multiple_choice',
        question: 'Berapakah jumlah keseluruhan ayat-ayat Sajadah yang terdapat di dalam mushaf Al-Qur\'an?',
        options: ['7 ayat', '10 ayat', '15 ayat', '20 ayat'],
        correct: 2,
        explanation: 'Terdapat 15 ayat sajadah di dalam Al-Qur\'an yang disunnahkan untuk melakukan sujud tilawah.'
      },
      {
        type: 'fill_blank',
        question: 'Memindahkan harakat hamzah ke huruf mati sebelumnya pada lafaz "بِئْسَ الاِسْمُ" sehingga dibaca "bi\'salismu" disebut bacaan ___.',
        answer: 'naql',
        acceptedAnswers: ['naql', 'an-naql', 'bacaan naql'],
        explanation: 'Naql artinya memindahkan harakat suatu huruf ke huruf sukun di depannya.'
      },
      {
        type: 'fill_blank',
        question: 'Membaca hamzah kedua dengan suara samar dan ringan antara hamzah dan alif pada lafaz "ءَاَعْجَمِيٌّ" disebut bacaan ___.',
        answer: 'tashil',
        acceptedAnswers: ['tashil', 'tas-hil', 'at-tashil', 'tashilun'],
        explanation: 'Tashil artinya meringankan pelafalan hamzah kedua agar pengucapannya menjadi mudah.'
      },
      {
        type: 'fill_blank',
        question: 'Sujud yang disunnahkan untuk dikerjakan ketika membaca atau mendengar ayat-ayat sajadah disebut sujud ___.',
        answer: 'tilawah',
        acceptedAnswers: ['tilawah', 'sujud tilawah', 'tilawat'],
        explanation: 'Sujud Tilawah disunnahkan saat membaca atau mendengarkan ayat sajadah sebagai bentuk ketundukan kepada Allah.'
      },
      {
        type: 'ordering',
        question: 'Urutkan 4 surah tempat terjadinya bacaan Saktah dalam Al-Qur\'an riwayat Imam Hafsh sesuai urutan mushaf:',
        items: [
          'Surah Al-Kahfi ayat 1-2',
          'Surah Ya-Sin ayat 52',
          'Surah Al-Qiyamah ayat 27',
          'Surah Al-Muthaffifin ayat 14'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Urutan bacaan Saktah: Al-Kahfi (surah 18), Ya-Sin (surah 36), Al-Qiyamah (surah 75), dan Al-Muthaffifin (surah 83).'
      },
      {
        type: 'ordering',
        question: 'Urutkan letak kemunculan hukum bacaan Gharib berikut sesuai urutan surah dalam Al-Qur\'an:',
        items: [
          'Imalah pada lafaz Majreeha (Surah Hud)',
          'Isymam pada lafaz Laa Ta\'mannaa (Surah Yusuf)',
          'Tashil pada lafaz A\'a\'jamiyyun (Surah Fussilat)',
          'Naql pada lafaz Bi\'sal-ismu (Surah Al-Hujurat)'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Urutan letak surah: Surah Hud (11), Surah Yusuf (12), Surah Fussilat (41), dan Surah Al-Hujurat (49).'
      },
      {
        type: 'ordering',
        question: 'Urutkan rukun pelaksanaan sujud tilawah saat berada di luar salat:',
        items: [
          'Niat dan takbiratul ihram menghadap kiblat',
          'Melakukan sujud satu kali dan membaca doa sujud tilawah',
          'Bangkit dari sujud dan duduk sejenak',
          'Mengucapkan salam ke kanan dan ke kiri'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Rukun sujud tilawah di luar salat: (1) Niat & takbiratul ihram, (2) Sujud sekali sambil berdoa, (3) Duduk kembali, (4) Salam.'
      }
    ]
  },

  // ==========================================
  // HARI 5 / FINAL: UJIAN AKHIR (LEVEL 15)
  // ==========================================

  15: {
    title: 'Ujian Akhir Munaqasyah',
    subject: 'final',
    subjectLabel: 'Ujian Akhir',
    day: 0,
    difficulty: 'hard',
    icon: '🏆',
    topics: ['Fiqh', 'Tauhid', 'Tarikh', 'Tajwid'],
    lesson: '<h4>Ujian Akhir Munaqasyah</h4><p>Selamat! Anda telah menyelesaikan semua materi. Ujian akhir ini mencakup <strong>semua materi</strong> dari keempat bidang studi. Pastikan Anda telah memahami semua materi sebelumnya.</p><p>Passing grade: <strong>80%</strong></p>',
    questions: [
      // 5 Questions Fiqh
      {
        type: 'multiple_choice',
        question: 'Ibadah dalam rukun Islam yang berkedudukan sebagai tiang agama dan menjadi pembeda utama antara keimanan dan kekufuran adalah...',
        options: [
          'Membayar zakat mal',
          'Mendirikan salat fardhu lima waktu',
          'Melaksanakan ibadah haji ke Baitullah',
          'Berpuasa sunnah Ayyamul Bidh'
        ],
        correct: 1,
        explanation: 'Salat adalah tiang agama (ash-shalatu \'imaduddin); barangsiapa mendirikannya berarti ia menegakkan agamanya.'
      },
      {
        type: 'multiple_choice',
        question: 'Batas akhir waktu yang sah untuk mengeluarkan zakat fitrah agar tidak terhitung sebagai sedekah biasa adalah...',
        options: [
          'Malam ke-27 bulan Ramadhan',
          'Tepat tengah malam menjelang Idul Fitri',
          'Sebelum pelaksanaan salat Idul Fitri',
          'Tenggelamnya matahari pada hari raya Idul Fitri'
        ],
        correct: 2,
        explanation: 'Jika zakat fitrah diserahkan setelah selesai salat Idul Fitri, maka statusnya berubah menjadi sedekah biasa.'
      },
      {
        type: 'multiple_choice',
        question: 'Sebab syar\'i yang membolehkan seorang muslim untuk bertayammum sebagai pengganti wudhu adalah...',
        options: [
          'Udara terasa sangat dingin meskipun persediaan air melimpah',
          'Tidak menemukan air setelah berikhtiar mencari atau sakit yang membahayakan jika terkena air',
          'Ingin menghemat waktu salat',
          'Merasa malas menyentuh air di pagi hari'
        ],
        correct: 1,
        explanation: 'Tayammum disyariatkan saat tidak ada air setelah diikhtiarkan mencarinya, atau ada uzur sakit yang melarang terkena air.'
      },
      {
        type: 'multiple_choice',
        question: 'Puncak dari seluruh rangkaian ibadah haji yang dilaksanakan pada tanggal 9 Dzulhijjah di Padang Arafah adalah...',
        options: [
          'Thawaf Wada\' mengelilingi Ka\'bah',
          'Mabit di Muzdalifah',
          'Wukuf di Padang Arafah',
          'Melempar Jumrah Aqabah'
        ],
        correct: 2,
        explanation: 'Wukuf di Arafah adalah rukun haji yang paling utama; tanpa wukuf maka haji seseorang tidak sah.'
      },
      {
        type: 'multiple_choice',
        question: 'Kafarat wajib bagi orang yang melanggar sumpah (jika tidak mampu memberi makan atau pakaian kepada 10 orang miskin) adalah...',
        options: [
          'Berpuasa selama 3 hari',
          'Berpuasa selama 7 hari',
          'Berpuasa selama 14 hari',
          'Berpuasa selama 30 hari'
        ],
        correct: 0,
        explanation: 'Berdasarkan QS. Al-Ma\'idah ayat 89, kafarat melanggar sumpah jika tidak mampu memberi makan/pakaian adalah puasa 3 hari.'
      },

      // 5 Questions Tauhid
      {
        type: 'multiple_choice',
        question: 'Sifat wajib bagi Allah SWT yang bermakna "Maha Mendengar segala sesuatu tanpa membutuhkan daun telinga" adalah sifat...',
        options: ['Bashar', 'Sama\'', 'Kalam', 'Qudrat'],
        correct: 1,
        explanation: 'Sama\' artinya Maha Mendengar, mendengar segala perkataan nyata maupun bisikan hati makhluk tanpa perantara organ telinga.'
      },
      {
        type: 'multiple_choice',
        question: 'Nama Asmaul Husna "Al-Quddus" mengandung makna bahwa Allah SWT...',
        options: [
          'Maha Merajai seluruh alam semesta',
          'Maha Suci dari segala bentuk kekurangan, cela, dan kelemahan',
          'Maha Memberi rasa aman kepada hamba-Nya',
          'Maha Memelihara kelangsungan hidup alam'
        ],
        correct: 1,
        explanation: 'Al-Quddus artinya Maha Suci dari segala aib, kekurangan, maupun keserupaan dengan makhluk.'
      },
      {
        type: 'multiple_choice',
        question: 'Malaikat yang bertugas menanyai setiap manusia di dalam alam kubur tentang tuhan, nabi, dan agamanya adalah...',
        options: [
          'Malaikat Raqib dan \'Atid',
          'Malaikat Munkar dan Nakir',
          'Malaikat Malik dan Ridwan',
          'Malaikat Jibril dan Mikail'
        ],
        correct: 1,
        explanation: 'Malaikat Munkar dan Nakir bertugas memberikan pertanyaan kubur mengenai keimanan seseorang setelah dimakamkan.'
      },
      {
        type: 'multiple_choice',
        question: 'Ketetapan takdir Allah yang tertulis di Lauhul Mahfuzh namun penerapannya dapat berubah melalui doa dan ikhtiar hamba dinamakan...',
        options: ['Takdir Mubram', 'Takdir Mu\'allaq', 'Takdir Mutasyabih', 'Takdir Majazi'],
        correct: 1,
        explanation: 'Takdir Mu\'allaq adalah takdir yang tergantung pada usaha, doa, dan ikhtiar sungguh-sungguh dari manusia.'
      },
      {
        type: 'multiple_choice',
        question: 'Salah satu tanda besar hari kiamat (kiamat kubra) yang bertugas membunuh fitnah keji Dajjal di akhir zaman adalah...',
        options: [
          'Turunnya kembali Nabi Isa a.s. ke muka bumi',
          'Keluarnya binatang melata Daabbah',
          'Terjadinya gerhana bulan beruntun',
          'Banyaknya letusan gunung berapi'
        ],
        correct: 0,
        explanation: 'Nabi Isa a.s. akan diturunkan kembali oleh Allah ke bumi untuk menegakkan syariat Islam dan membunuh Dajjal di Bab Lud.'
      },

      // 5 Questions Tarikh
      {
        type: 'multiple_choice',
        question: 'Mukjizat terbesar Nabi Muhammad SAW yang bersifat abadi dan senantiasa terpelihara keasliannya hingga akhir zaman adalah...',
        options: [
          'Membelah bulan purnama menjadi dua bagian',
          'Mengalirkan air bersih dari sela-sela jemari beliau',
          'Kitab Suci Al-Qur\'anul Karim',
          'Perjalanan Isra\' Mi\'raj dalam waktu satu malam'
        ],
        correct: 2,
        explanation: 'Al-Qur\'an adalah mukjizat ma\'nawiyyah terbesar Nabi Muhammad SAW yang menjadi pedoman abadi umat manusia.'
      },
      {
        type: 'multiple_choice',
        question: 'Nabi yang bergelar "Abul Anbiya\'" (Bapak Para Nabi) karena dari garis keturunannya lahir banyak nabi dan rasul agung adalah...',
        options: ['Nabi Adam a.s.', 'Nabi Ibrahim a.s.', 'Nabi Nuh a.s.', 'Nabi Musa a.s.'],
        correct: 1,
        explanation: 'Nabi Ibrahim a.s. bergelar Abul Anbiya\' karena melalui putranya Ismail dan Ishaq lahir para nabi besar setelahnya.'
      },
      {
        type: 'multiple_choice',
        question: 'Mukjizat yang diberikan Allah SWT kepada Nabi Daud a.s. untuk memudahkan beliau membuat baju zirah besi adalah...',
        options: [
          'Mampu melunakkan besi keras dengan kedua tangannya tanpa api',
          'Mampu memerintahkan jin menyelam ke dasar samudra',
          'Mampu membelah batu cadas besar dengan tongkat',
          'Mampu menahan peredaran matahari di langit'
        ],
        correct: 0,
        explanation: 'Allah melunakkan besi keras bagi Nabi Daud a.s. sehingga beliau dapat merajut pakaian pelindung perang dengan mudah.'
      },
      {
        type: 'multiple_choice',
        question: 'Sahabat yang membenarkan kebenaran peristiwa Isra\' Mi\'raj seketika tanpa ragu saat kaum kafir Quraisy mendustakannya adalah...',
        options: [
          'Umar bin Khattab',
          'Abu Bakar As-Shiddiq',
          'Utsman bin Affan',
          'Ali bin Abi Thalib'
        ],
        correct: 1,
        explanation: 'Abu Bakar diberi gelar As-Shiddiq (yang membenarkan) karena keyakinan kuatnya atas peristiwa Isra\' Mi\'raj Rasulullah SAW.'
      },
      {
        type: 'multiple_choice',
        question: 'Sahabat Rasulullah SAW yang terkenal dengan julukan "Babul \'Ilmi" (Gerbang Ilmu Pengetahuan) dan merupakan menantu beliau adalah...',
        options: [
          'Zaid bin Tsabit',
          'Ali bin Abi Thalib',
          'Abdullah bin Mas\'ud',
          'Mu\'adz bin Jabal'
        ],
        correct: 1,
        explanation: 'Rasulullah SAW bersabda: "Aku adalah kota ilmu dan Ali adalah pintu gerbangnya", menunjukkan kedalaman ilmu Ali bin Abi Thalib r.a.'
      },

      // 5 Questions Tajwid
      {
        type: 'multiple_choice',
        question: 'Apabila nun sukun (نْ) bertemu dengan huruf Kaf (ك), maka hukum bacaannya adalah...',
        options: ['Izhar Halqi', 'Idgham Bighunnah', 'Ikhfa Haqiqi', 'Iqlab'],
        correct: 2,
        explanation: 'Kaf adalah salah satu dari 15 huruf Ikhfa Haqiqi, dibaca samar disertai dengung.'
      },
      {
        type: 'multiple_choice',
        question: 'Hukum bacaan yang terjadi apabila huruf Mim Mati (مْ) bertemu dengan huruf hijaiyyah selain huruf Mim dan Ba adalah...',
        options: [
          'Izhar Syafawi',
          'Ikhfa Syafawi',
          'Idgham Mimi',
          'Idgham Mutajanisain'
        ],
        correct: 0,
        explanation: 'Izhar Syafawi dibaca jelas di bibir tanpa dengung saat mim sukun bertemu 26 huruf selain mim dan ba.'
      },
      {
        type: 'multiple_choice',
        question: 'Kadar panjang bacaan bagi Mad Wajib Muttasil menurut riwayat Imam Hafsh adalah...',
        options: [
          '2 harakat (1 alif)',
          '4 sampai 5 harakat (2 - 2,5 alif)',
          '6 harakat penuh (3 alif)',
          '1 harakat saja'
        ],
        correct: 1,
        explanation: 'Mad Wajib Muttasil dibaca panjang 4 sampai 5 harakat saat washal (bersambung).'
      },
      {
        type: 'multiple_choice',
        question: 'Manakah di antara lafaz berikut yang mengandung hukum bacaan Qolqolah Kubra ketika dibaca waqof?',
        options: [
          'يَجْعَلُونَ',
          'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۙ',
          'أَبْصَارِهِمْ',
          'تَقْهَرْ'
        ],
        correct: 1,
        explanation: 'Kata الْفَلَقِ di akhir ayat mengandung huruf Qaf yang dimatikan karena waqof sehingga menjadi Qolqolah Kubra (pantulan besar).'
      },
      {
        type: 'multiple_choice',
        question: 'Cara membaca lafaz "مَجْر۪ىهَا" pada Surah Hud ayat 41 dengan memiringkan vokal "a" ke bunyi "e" dinamakan bacaan...',
        options: ['Isymam', 'Tashil', 'Imalah', 'Saktah'],
        correct: 2,
        explanation: 'Imalah adalah memiringkan bunyi harakat fathah ke arah kasrah sehingga berbunyi "majrehaa".'
      }
    ]
  }
};
