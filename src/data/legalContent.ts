export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalPageContent = {
  slug: "hizmet-sartlari" | "gizlilik-politikasi";
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  lastUpdated: string;
  sections: LegalSection[];
};

export const TERMS_OF_SERVICE: LegalPageContent = {
  slug: "hizmet-sartlari",
  heroEyebrow: "Yasal metin",
  heroTitle: "Hizmet Şartları",
  heroDescription:
    "DijitalERP web sitesi, hesap, lisans, destek ve yazılım indirme hizmetlerinin kullanımına ilişkin koşulları okuyun.",
  metaTitle: "Hizmet Şartları",
  metaDescription:
    "DijitalERP hizmet şartları: hesap kullanımı, lisans koşulları, ödeme, destek, sorumluluk ve fesih hükümleri.",
  keywords: [
    "DijitalERP hizmet şartları",
    "kullanım koşulları",
    "ERP lisans şartları",
    "yazılım sözleşmesi",
  ],
  lastUpdated: "17 Temmuz 2026",
  sections: [
    {
      id: "genel",
      title: "1. Genel Hükümler",
      paragraphs: [
        "Bu Hizmet Şartları (“Sözleşme”), DijitalERP markası altında sunulan web sitesi (dijitalerp.com.tr), müşteri hesabı, yazılım indirme, lisans satışı, abonelik, destek ve ilgili dijital hizmetlerin (“Hizmetler”) kullanımına ilişkin koşulları düzenler.",
        "Siteye erişen, hesap oluşturan, yazılım indiren veya ödeme yapan her gerçek ve tüzel kişi (“Kullanıcı”), bu Sözleşme’yi okuduğunu, anladığını ve kabul ettiğini beyan eder.",
        "DijitalERP, Hizmetler’i ve bu metni önceden bildirimde bulunarak güncelleme hakkını saklı tutar. Güncel metin sitede yayımlandığı tarihten itibaren geçerlidir.",
      ],
    },
    {
      id: "tanim",
      title: "2. Hizmet Tanımı",
      paragraphs: [
        "DijitalERP; Windows masaüstü ortamında çalışan, stok, cari, fatura, kasa ve raporlama modüllerini içeren offline ERP yazılımı ile bu yazılıma ilişkin web tabanlı hesap, lisans yönetimi, destek ve bilgilendirme hizmetlerini sunar.",
        "Ücretsiz sürüm belirli modül ve kullanım kapsamıyla sunulabilir. Ücretli paketler, tek seferlik lisans veya dönemsel kiralama modeliyle satılabilir. Paket kapsamı fiyatlandırma sayfasında ve sipariş özetinde gösterilir.",
      ],
      list: [
        "Web sitesi üzerinden hesap oluşturma ve yönetimi",
        "Kayıtlı kullanıcılara yazılım indirme erişimi",
        "Lisans anahtarı teslimi ve uzaktan doğrulama",
        "Destek talebi oluşturma ve yanıt takibi",
        "Ödeme altyapısı üzerinden lisans/abonelik satın alma",
      ],
    },
    {
      id: "hesap",
      title: "3. Hesap ve Kayıt",
      paragraphs: [
        "Hizmetler’in bir kısmı (indirme, lisans takibi, profil destek talepleri vb.) için geçerli bir hesap gereklidir. Kayıt sırasında verilen bilgilerin doğru, güncel ve eksiksiz olması Kullanıcı’nın sorumluluğundadır.",
        "Hesap güvenliği Kullanıcı’ya aittir. Şifrenizi üçüncü kişilerle paylaşmamalı, yetkisiz erişim şüphesi halinde derhal bizimle iletişime geçmelisiniz.",
        "DijitalERP; sahte bilgi, kötüye kullanım, güvenlik ihlali veya yürürlükteki mevzuata aykırılık şüphesi halinde hesabı askıya alma veya sonlandırma hakkını saklı tutar.",
      ],
    },
    {
      id: "lisans",
      title: "4. Lisans, Ödeme ve Faturalama",
      paragraphs: [
        "Ücretli lisans ve abonelikler, sipariş anında belirtilen plan, süre, cihaz/PC limiti ve fiyat üzerinden sağlanır. Ödemeler güvenli ödeme altyapısı (PayTR vb.) aracılığıyla tahsil edilebilir.",
        "Başarılı ödeme sonrası lisans anahtarı hesabınıza tanımlanır ve kayıtlı e-posta adresinize iletilebilir. Ödeme onaylanmadan lisans aktivasyonu yapılmaz.",
        "DijitalERP yazılımı, satın alınan lisans kapsamı dışında çoğaltılamaz, kiralanamaz, alt lisans verilemez veya kaynak kodu tersine mühendislik yoluyla elde edilemez.",
        "Fiyat, vergi ve kampanya koşulları önceden duyurulmak kaydıyla değiştirilebilir. Mevcut aboneliklerde yenileme dönemine ilişkin bilgilendirme yapılır.",
      ],
    },
    {
      id: "kullanim",
      title: "5. Kabul Edilebilir Kullanım",
      paragraphs: [
        "Kullanıcı, Hizmetler’i yalnızca yasal amaçlarla ve iyi niyetle kullanmayı kabul eder.",
      ],
      list: [
        "Sisteme yetkisiz erişim veya saldırı girişimi",
        "Zararlı yazılım yükleme, spam veya otomatik veri kazıma",
        "Başkalarının hesabını izinsiz kullanma",
        "Yanıltıcı, hakaret içeren veya yasa dışı içerik ile destek talebi oluşturma",
        "Lisans anahtarlarının izinsiz paylaşımı veya ticari olmayan kullanım sınırlarının aşılması",
      ],
    },
    {
      id: "fikri",
      title: "6. Fikri Mülkiyet",
      paragraphs: [
        "DijitalERP markası, logosu, arayüz tasarımı, web sitesi içeriği, yazılım kodu, dokümantasyon ve ilgili tüm materyaller fikri mülkiyet mevzuatı kapsamında korunur.",
        "Bu Sözleşme, Kullanıcı’ya yazılım üzerinde mülkiyet devri yapmaz; yalnızca lisans kapsamında kullanım hakkı tanır.",
      ],
    },
    {
      id: "sorumluluk",
      title: "7. Garanti ve Sorumluluk Sınırı",
      paragraphs: [
        "Yazılım “olduğu gibi” sunulur. DijitalERP, işletme sürekliliği, veri kaybı, dolaylı zarar veya üçüncü taraf entegrasyonlarından doğan kayıplar dahil olmak üzere, yürürlükteki mevzuatın izin verdiği ölçüde sorumluluğu sınırlı tutar.",
        "Kullanıcı, iş verilerinin düzenli yedeklenmesinden, donanım uyumluluğundan ve yerel mevzuata uygun kullanımdan sorumludur.",
        "Web sitesi veya ödeme altyapısında planlı/plansız kesinti, bakım veya mücbir sebep hallerinde hizmet geçici olarak durabilir.",
      ],
    },
    {
      id: "destek",
      title: "8. Destek Hizmetleri",
      paragraphs: [
        "Destek talepleri web sitesi iletişim formu veya hesap paneli üzerinden oluşturulabilir. Yanıt süreleri talep yoğunluğuna göre değişebilir.",
        "Ücretsiz destek kapsamı, satın alınan paket ve sözleşme koşulları ile sınırlı olabilir. Kurulum, eğitim veya özelleştirme talepleri ayrıca ücretlendirilebilir.",
      ],
    },
    {
      id: "fesih",
      title: "9. Fesih ve Askıya Alma",
      paragraphs: [
        "Kullanıcı hesabını dilediği zaman kapatabilir. Aktif lisans ve abonelikler için iade koşulları, tüketici mevzuatı ve sipariş türüne göre değerlendirilir.",
        "Sözleşme ihlali, ödeme temerrüdü veya güvenlik riski halinde DijitalERP hesabı askıya alabilir veya sonlandırabilir.",
      ],
    },
    {
      id: "hukuk",
      title: "10. Uygulanacak Hukuk ve Uyuşmazlık",
      paragraphs: [
        "Bu Sözleşme Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıklarda İstanbul (Anadolu) Mahkeme ve İcra Daireleri yetkilidir; tüketici sıfatındaki Kullanıcılar için zorunlu kanuni haklar saklıdır.",
      ],
    },
    {
      id: "iletisim",
      title: "11. İletişim",
      paragraphs: [
        "Hizmet Şartları hakkında sorularınız için info@dijitalerp.com.tr adresine e-posta gönderebilir veya 0216 606 17 46 numarasından bize ulaşabilirsiniz.",
      ],
    },
  ],
};

export const PRIVACY_POLICY: LegalPageContent = {
  slug: "gizlilik-politikasi",
  heroEyebrow: "KVKK ve gizlilik",
  heroTitle: "Gizlilik Politikası",
  heroDescription:
    "Kişisel verilerinizin nasıl toplandığını, işlendiğini, saklandığını ve haklarınızı bu metinde bulabilirsiniz.",
  metaTitle: "Gizlilik Politikası",
  metaDescription:
    "DijitalERP gizlilik politikası: KVKK kapsamında kişisel veri işleme, çerezler, güvenlik ve başvuru hakları.",
  keywords: [
    "DijitalERP gizlilik",
    "KVKK",
    "kişisel veri politikası",
    "çerez politikası",
  ],
  lastUpdated: "17 Temmuz 2026",
  sections: [
    {
      id: "veri-sorumlusu",
      title: "1. Veri Sorumlusu",
      paragraphs: [
        "6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu sıfatıyla DijitalERP; dijitalerp.com.tr web sitesi, müşteri hesabı, destek süreçleri ve lisans hizmetleri aracılığıyla elde edilen kişisel verileri aşağıda açıklanan ilkelere uygun işler.",
        "İletişim: info@dijitalerp.com.tr — 0216 606 17 46",
      ],
    },
    {
      id: "toplanan-veriler",
      title: "2. Toplanan Kişisel Veriler",
      paragraphs: [
        "Hizmetler’den yararlanırken aşağıdaki veri kategorileri toplanabilir:",
      ],
      list: [
        "Kimlik ve iletişim: ad soyad, e-posta, telefon",
        "Hesap ve müşteri bilgisi: müşteri kodu, şifre (hash’lenmiş), kayıt tarihi",
        "Adres bilgisi: profil adres formlarında girilen fatura/teslimat adresleri",
        "İşlem ve finans: sipariş, plan, ödeme durumu (kart bilgisi ödeme kuruluşunda işlenir)",
        "Destek: talep konusu, mesaj içeriği, yanıt kayıtları",
        "Teknik: IP adresi, tarayıcı/cihaz bilgisi, oturum çerezleri, erişim logları",
      ],
    },
    {
      id: "amac",
      title: "3. Verilerin İşlenme Amaçları",
      paragraphs: [
        "Kişisel verileriniz aşağıdaki amaçlarla işlenir:",
      ],
      list: [
        "Üyelik oluşturma, kimlik doğrulama ve hesap yönetimi",
        "Yazılım indirme yetkisinin sağlanması",
        "Lisans teslimi, uzaktan doğrulama ve abonelik yönetimi",
        "Ödeme ve sipariş süreçlerinin yürütülmesi",
        "Destek taleplerinin alınması ve yanıtlanması",
        "Yasal yükümlülüklerin yerine getirilmesi",
        "Hizmet güvenliği, dolandırıcılık önleme ve sistem iyileştirme",
        "Açık rızanız halinde bilgilendirme ve pazarlama iletişimi",
      ],
    },
    {
      id: "hukuki-dayanak",
      title: "4. Hukuki Sebepler",
      paragraphs: [
        "Veri işleme faaliyetleri KVKK m.5 ve m.6 kapsamında; sözleşmenin kurulması/ifası, hukuki yükümlülük, meşru menfaat ve açık rıza hukuki sebeplerine dayanabilir.",
      ],
    },
    {
      id: "aktarim",
      title: "5. Veri Aktarımı",
      paragraphs: [
        "Verileriniz yalnızca hizmetin gerektirdiği ölçüde ve gerekli güvenlik önlemleri alınarak paylaşılır:",
      ],
      list: [
        "Ödeme kuruluşları (ör. PayTR) — ödeme işlemleri",
        "E-posta/SMS altyapı sağlayıcıları — bildirim ve lisans iletimi",
        "Barındırma ve altyapı hizmetleri — site ve veritabanı",
        "Yetkili kamu kurumları — yasal zorunluluk halinde",
      ],
    },
    {
      id: "saklama",
      title: "6. Saklama Süreleri",
      paragraphs: [
        "Kişisel veriler, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı/saklama süreleri kadar muhafaza edilir. Süre sonunda veriler silinir, yok edilir veya anonim hale getirilir.",
      ],
    },
    {
      id: "cerezler",
      title: "7. Çerezler",
      paragraphs: [
        "Web sitemizde oturum yönetimi, güvenlik ve kullanım analitiği amacıyla çerezler kullanılabilir. Zorunlu çerezler hizmetin çalışması için gereklidir.",
        "Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz; bazı çerezlerin devre dışı bırakılması hesap girişi veya indirme gibi özellikleri kısıtlayabilir.",
      ],
    },
    {
      id: "guvenlik",
      title: "8. Veri Güvenliği",
      paragraphs: [
        "Kişisel verilerin korunması için erişim kontrolü, şifreleme, güvenli iletim (HTTPS), yetkilendirme ve düzenli yedekleme gibi teknik ve idari tedbirler uygulanır.",
        "Hiçbir sistem %100 güvenlik garantisi veremez; şüpheli bir durum fark ederseniz derhal bizimle iletişime geçin.",
      ],
    },
    {
      id: "haklar",
      title: "9. KVKK Kapsamındaki Haklarınız",
      paragraphs: [
        "KVKK m.11 uyarınca veri sorumlusuna başvurarak aşağıdaki haklarınızı kullanabilirsiniz:",
      ],
      list: [
        "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
        "İşlenmişse buna ilişkin bilgi talep etme",
        "Amacına uygun kullanılıp kullanılmadığını öğrenme",
        "Yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme",
        "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
        "KVKK’da öngörülen şartlarda silinmesini veya yok edilmesini isteme",
        "Otomatik sistemler ile analiz sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
        "Kanuna aykırı işleme nedeniyle zarara uğramanız halinde tazminat talep etme",
      ],
    },
    {
      id: "basvuru",
      title: "10. Başvuru Yöntemi",
      paragraphs: [
        "Haklarınıza ilişkin taleplerinizi info@dijitalerp.com.tr adresine kimliğinizi doğrulayacak bilgilerle iletebilirsiniz. Başvurular en geç 30 gün içinde sonuçlandırılır.",
      ],
    },
    {
      id: "degisiklik",
      title: "11. Politika Değişiklikleri",
      paragraphs: [
        "Bu Gizlilik Politikası güncellenebilir. Güncel sürüm web sitesinde yayımlandığı tarihte yürürlüğe girer. Önemli değişikliklerde makul yöntemlerle bilgilendirme yapılabilir.",
      ],
    },
  ],
};
