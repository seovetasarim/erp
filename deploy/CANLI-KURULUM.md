# DijitalERP Canlı Kurulum (cPanel / Vercel)

## Vercel (önemli)

Vercel **serverless** ortamında SQLite çalışmaz. `ENOENT ... mkdir '/var/task/data'` hatası, MySQL ortam değişkenlerinin **Production** ortamında tanımlı olmadığını gösterir.

Vercel → Project → Settings → Environment Variables:

| Değişken | Production | Örnek |
|----------|------------|-------|
| `DB_DRIVER` | Evet | `mysql` |
| `MYSQL_HOST` | Evet | `104.247.173.212` (cPanel sunucu IP — `localhost` değil) |
| `MYSQL_PORT` | Evet | `3306` |
| `MYSQL_USER` | Evet | cPanel DB kullanıcı adı |
| `MYSQL_PASSWORD` | Evet | cPanel DB şifresi |
| `MYSQL_DATABASE` | Evet | cPanel DB adı |
| `AUTH_SECRET` | Evet | 32+ karakter rastgele |
| `NEXT_PUBLIC_SITE_URL` | Evet | `https://www.dijitalerp.com.tr` |

Değişkenleri yalnızca **Preview**'a değil, mutlaka **Production**'a da ekleyin. Kaydettikten sonra **Redeploy** yapın.

cPanel → Remote MySQL bölümünde Vercel IP aralıklarına izin verin (veya geçici test için `%`).

## 1. MySQL tabloları

Yerelde `.env.production` dosyası oluşturup `deploy/env.production.template` değerlerini doldurun.

### Yeni kurulum (boş veritabanı)

Uzak MySQL erişimi açıksa:

```bash
npm run db:ensure
# veya sadece MySQL CREATE TABLE:
npm run db:init-mysql
npm run db:seed-admin
```

Yerel geliştirme (SQLite):

```bash
npm run db:ensure
```

`db:ensure` tüm sayfa tablolarını kontrol eder; eksikse oluşturur: `users`, `orders`, `licenses`, `subscriptions`, `email_logs`, `admins`, `support_tickets`, `user_addresses`.

Alternatif: cPanel → phpMyAdmin → SQL sekmesine `deploy/mysql-schema.sql` dosyasının tamamını yapıştırıp çalıştırın.

### Mevcut canlı veritabanı (eski kurulum)

Daha önce sadece temel tablolar oluşturulduysa, eksik migration dosyalarını **sırayla** phpMyAdmin'de çalıştırın:

1. `deploy/support-tickets-migration.sql` — destek talepleri
2. `deploy/user-addresses-migration.sql` — müşteri adresleri

Her dosyayı bir kez çalıştırmanız yeterlidir (`CREATE TABLE IF NOT EXISTS` kullanır).

## 2. Dosyaları yükle

cPanel → Dosya Yöneticisi → `erp` veya `nodejs` klasörüne proje dosyalarını yükleyin.
`.next`, `node_modules` hariç tüm kaynak kod + `package.json`.

## 3. Node.js uygulaması

cPanel → Setup Node.js App:

- Node sürümü: 20+
- Application root: proje klasörü
- Application URL: `dijitalerp.com.tr`
- Application startup file: `server.js`

Terminal (cPanel Terminal):

```bash
cd ~/erp-github-push
npm install
npm run build
```

## 4. Ortam değişkenleri

cPanel Node.js App → Environment Variables bölümüne `.env.production` değerlerini ekleyin.

Şablon: `deploy/env.production.template`

| Değişken | Zorunlu | Açıklama |
|----------|---------|----------|
| `DB_DRIVER` | Evet | `mysql` |
| `MYSQL_*` | Evet | Veritabanı bağlantısı |
| `AUTH_SECRET` | Evet | 32+ karakter rastgele |
| `DIJITALERP_LICENSE_SECRET` | Evet | ERP desktop `license.secret` ile aynı |
| `NEXT_PUBLIC_SITE_URL` | Evet | `https://www.dijitalerp.com.tr` |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD` | Evet | Admin panel girişi |
| `SMTP_*` | Önerilir | Lisans e-postaları |
| `CRON_SECRET` | Evet | Cron endpoint koruması |
| `PAYTR_*` | Ödeme için | Merchant panelden alınır |

PayTR callback URL (merchant panelde kayıtlı olmalı):

`https://www.dijitalerp.com.tr/api/paytr/callback`

## 5. Admin hesabı

İlk kurulumda:

```bash
npm run db:seed-admin
```

Production'da `ADMIN_SEED_PASSWORD` ortam değişkeni ile güçlü şifre verin. Varsayılan şifre kullanmayın.

## 6. Cron (süre hatırlatmaları + süresi dolan lisanslar)

cPanel → Cron Jobs → günlük:

```bash
curl -s -H "Authorization: Bearer CRON_SECRET" https://www.dijitalerp.com.tr/api/cron/subscriptions
```

## 7. Lisans akışı (manuel)

1. Müşteri ödeme yapar → sipariş admin panelde **Siparişler**'e düşer.
2. Admin → **Siparişler** → **Lisans Üret** → süre seçer (30 gün, 90 gün, 1 yıl, süresiz).
3. Lisans müşterinin **Hesabım → Lisanslarım** bölümünde görünür; isteğe bağlı e-posta gider.

SMTP ayarlanmazsa lisans yine oluşur; e-posta gitmez.

## 8. Test kontrol listesi

1. `/kayit` — hesap oluştur
2. `/fiyatlandirma` → paket seç → PayTR test ödemesi (merchant bilgileri gelince)
3. `/admin/siparisler` → ödenen siparişe lisans üret
4. `/hesabim` → Lisanslarım (key + kalan gün)
5. `/admin/login` — yönetici girişi
6. `/admin/destek` — iletişim formundan gelen talep
7. Misafir olarak indirme linki → `/giris` yönlendirmesi

## Notlar

- PayTR canlı modda `PAYTR_TEST_MODE=0` olmalı.
- İndirme dosyası (`public` veya sunucu yolunda `dijitalerp.rar`) erişilebilir olmalı.
- ERP uygulamasında uzak lisans URL: `https://www.dijitalerp.com.tr/api/licenses/remote`
