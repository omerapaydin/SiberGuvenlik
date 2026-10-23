# Linux Temel Komutlar

## Paket Yönetimi ve Kurulum

- `passwd` : Şifre değişimi

- `apt update`: Paket yöneticisini günceller.
- `cd /opt`: Genellikle yazılımlar buraya indirilir.
- `git clone https://github.com/... .git`: GitHub'dan kodları indirir.
- `sudo bash install.sh`: Kurulum scriptini çalıştırır.

## Kullanıcı ve Sistem

- `sudo su`: En yetkili kullanıcı (root) yapar.
- `./çalıştırılacakdosya`: Çalıştırılabilir dosyayı çalıştırır.
- `setxkbmap tr`: Klavye düzenini Türkçe yapar.

## Dosya ve Klasör İşlemleri

- `pwd`: Bulunduğun klasörün tam yolunu yazdırır.
- `ls`: Bulunduğun dizindeki dosya ve klasörleri listeler.
- `cd klasorAdi`: Belirtilen klasöre girer.
- `cd ..`: Bir üst klasöre çıkar.
- `mkdir yeniKlasor`: Yeni bir klasör oluşturur.
- `rm dosya.txt`: Dosyayı siler.
- `mv dosya.txt klasor` : dosyayı klasöre taşır
- `ps aux` : tüm çalışan süreçleri detaylı gösterir
- `kill 1234 ` : PID’si 1234 olan süreci kapatır
- `top`: Canlı sistem izleme

## Ağ ve Ağ Araçları

- `ping google.com`: Belirtilen siteye ping atarak IP adresini öğrenir.

## Dosya Düzenleme

- `touch nmapsonuc.txt`: Boş bir dosya oluşturur.
- `nano nmapsonuc.txt`: Dosyayı Nano editörü ile düzenler.
- `cat nmapsonuc.txt`: Dosyanın içeriğini terminale yazdırır.

---

- Crack, siber güvenlik ve yazılım dünyasında genelde şu anlamlarda kullanılır: Parola kırma ,Yazılım kırma

- /etc/passwd → Kullanıcı bilgileri var ama şifreler yok
- /etc/shadow → Şifrelerin hash’lenmiş halleri burada tutulur

---

## Linux Piping

- > ls -la // Linux’ta çok kullanılan bir komuttur. Dosyaları detaylı ve gizli olanlar dahil listelemek için kullanılır.

- > grep pass wordlist.txt // Dosyanın içinde pas geçenleri bulur
- > cat notes.txt | grep pass // Dosyanın içinde pas geçenleri bulur

## Linux İzinleri

- > ls -la // -rw r-- r-- 1 user user 123 Apr 24 10:00 file.txt şeklinde ayrıtı verir

-     r → read (okuma)
      w → write (yazma)
      x → execute (çalıştırma)

- User : Dosyanın sahibi olan kullanıcı (Root)
- Group : Dosyanın ait olduğu kullanıcı grubu
- Others : Sistemdeki geri kalan herkes (Kali)

- rwx r-x rw- // User/Group/Others // 3lü grup şeklinde hangi izinler açık
- User rwx (okuma),(yazma),çalıştırma / Others rw- (okuma),(yazma)

## İzinleri Değiştirmek

- > chmod 777 test.py // Herkes dosyayı okuyabilir. Herkes yazabilir. Herkes çalıştırabilir

7 - user (owner) - rwx
7 - group - rwx
7 - others - rwx

- r = 4
  w = 2
  x = 1
  4 + 2 + 1 = 7

* 000 - 0
  001 - 1  
  010 - 2
  011 - 3
  100 - 4
  101 - 5
  110 - 6
  111 - 7

---

# Linux - Find Komutu

`find` komutu, Linux sistemlerinde dosya ve dizinleri
belirli kriterlere göre aramak için kullanılır.

## 1. Tüm Dosyaları Listeleme

find . -type f

- Bulunulan dizindeki ve alt dizinlerdeki tüm dosyaları listeler.

## 2. Klasörleri Listeleme

find . -type d

- Bulunulan dizindeki ve alt dizinlerdeki klasörleri listeler.

## 3. TXT Dosyalarını Bulma

find . -name "\*.txt"

- `.txt` uzantılı dosya ve dizinleri arar.

## 4. PHP Dosyalarını Bulma

find . -type f -name "\*.php"

- `.php` uzantılı dosyaları bulur.

## 5. Home Dizinindeki Dosyaları Listeleme

find /home -type f

- `/home` dizini ve alt dizinlerindeki tüm dosyaları listeler.

## 6. Büyük Dosyaları Bulma

find . -type f -size +100M

- 100 MiB'den büyük dosyaları bulur.

## Parametreler

- `find` → Dosya ve dizin arama komutu.
- `.` → Bulunulan dizin.
- `-type f` → Normal dosyaları arar.
- `-type d` → Dizinleri arar.
- `-name` → Dosya veya dizin adına göre arama yapar.
- `-size` → Dosya boyutuna göre arama yapar.
- `/home` → Aramanın başlayacağı dizin.

## Özet

find → Dosya ve dizin arama
-type f → Dosyalar
-type d → Klasörler
-name → İsme göre arama
-size → Boyuta göre arama

---

- `locate text.txt` → Linux sisteminde adı text.txt geçen dosya ve dizinlerin konumlarını bulmak için kullanılır.
  Örnek çıktı:
- /home/kali/Desktop/text.txt
  /home/kali/Documents/text.txt

---

# Linux - Wget Komutu

`wget`, Linux terminali üzerinden internetten dosya indirmek için kullanılan bir araçtır.

## Dosya İndirme

```bash
wget https://example.com/file.zip
```

- `wget` → Dosya indirme komutu.
- `https://example.com/file.zip` → İndirilecek dosyanın URL adresi.
- İndirilen dosya, terminalde bulunulan dizine kaydedilir.
