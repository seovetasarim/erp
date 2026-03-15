import { FileSpreadsheet, BarChart3, Package, FileText, Check } from 'lucide-react';

const excelFeatures = [
  { icon: FileSpreadsheet, title: 'Excel Dışa Aktarma', items: ['Tek tıkla Excel export – Kolay kullanım', 'XLSX formatı – Excel uyumlu', 'Tarih aralığı – Filtreleme', 'Firma bazlı – Çoklu firma desteği'] },
  { icon: BarChart3, title: 'Stok Raporları', items: ['Aylık hareket – Excel\'e aktar', 'Kategori dağılımı – Excel export', 'Günlük hareket – Dışa aktarma', 'En çok hareket – Excel raporu'] },
  { icon: Package, title: 'Cari & Fatura', items: ['Cari bakiye – Excel listesi', 'Fatura listesi – Excel export', 'Stok özeti – Excel\'e aktar', 'Muhasebe entegrasyonu – Excel ile'] },
  { icon: FileText, title: 'Kullanım Alanları', items: ['Muhasebe yazılımına aktarım', 'Excel\'de analiz – Grafik, pivot', 'Yedek rapor – Arşivleme', 'Dış sistemlere veri aktarımı'] },
];

export default function ExcelExportContent() {
  return (
    <section id="excel-export" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Excel Export</h2>
          <p>DijitalERP ile stok, cari ve fatura raporlarını Excel&apos;e aktarın. Tek tıkla dışa aktarma, muhasebe entegrasyonu ve veri analizi.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {excelFeatures.map((cat) => (
            <div key={cat.title} className="feature-card feature-card-category">
              <div className="feature-card-header">
                <cat.icon size={22} className="feature-cat-icon" />
                <h3>{cat.title}</h3>
              </div>
              <ul className="feature-list">
                {cat.items.map((item) => (
                  <li key={item}>
                    <Check size={16} className="feature-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
