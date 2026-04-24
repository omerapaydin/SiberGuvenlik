# Linux Temel Komutlar

## Paket Yönetimi ve Kurulum

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

- /etc/passwd → Kullanıcı bilgileri var ama şifreler yok (eski sistemlerde vardı)
- /etc/shadow → Şifrelerin hash’lenmiş halleri burada tutulur

---

## Linux Piping

- > ls -la // Linux’ta çok kullanılan bir komuttur. Dosyaları detaylı ve gizli olanlar dahil listelemek için kullanılır.

- > grep pass wordlist.txt // Dosyanın içinde pas geçenleri bulur
- > cat notes.txt | grep pass // Dosyanın içinde pas geçenleri bulur

## Linux İzinleri

- > ls -la // -rw-r--r-- 1 user user 123 Apr 24 10:00 file.txt şeklinde ayrıtı verir

-     r → read (okuma)
      w → write (yazma)
      x → execute (çalıştırma)

- User : Dosyanın sahibi olan kullanıcı (Root)
- Group : Dosyanın ait olduğu kullanıcı grubu
- Others : Sistemdeki geri kalan herkes (Kali)

- rwx r-x rw- // User/Group/Others // 3lü grup şeklinde hangi izinler açık
- User rwx (okuma),(yazma),çalıştırma / Others rw- (okuma),(yazma)
