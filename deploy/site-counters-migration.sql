-- Canli MySQL: site indirme sayaci (hero alani)
-- phpMyAdmin'de dijitalerpcom_erpprogrami veritabaninda calistirin

CREATE TABLE IF NOT EXISTS site_counters (
  counter_key VARCHAR(64) PRIMARY KEY,
  value INT NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
