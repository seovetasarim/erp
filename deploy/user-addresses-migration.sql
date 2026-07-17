-- Mevcut canlı veritabanına kullanıcı adresleri tablosu ekler (phpMyAdmin'de bir kez çalıştırın)

CREATE TABLE IF NOT EXISTS user_addresses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  label VARCHAR(64) NOT NULL DEFAULT 'Genel',
  line1 VARCHAR(255) NOT NULL,
  line2 VARCHAR(255) NULL,
  city VARCHAR(128) NOT NULL,
  district VARCHAR(128) NOT NULL,
  postal_code VARCHAR(16) NULL,
  is_default TINYINT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_user_addresses_user ON user_addresses(user_id);
