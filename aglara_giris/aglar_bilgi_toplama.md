### Ağlar İle İlgili Bilgi Toplama

~iwconfig //monitor moda geç kontrol
~airodump-ng wlan0mon //ağların bilgileri

~airodump-ng --channel 9 --bssid E4:C3:2A:B7:23:90 --write airodumptest wlan0mon //channel ve mac adresi bilinmeli
