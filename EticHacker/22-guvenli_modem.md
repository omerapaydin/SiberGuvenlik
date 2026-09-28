# Güvenli Modeme Sahip Olmak

## Güvenli Wi-Fi / Modem Yapılandırması

- WPA3 veya WPA2-AES kullanmak
  Mümkünse WPA3 tercih edilmeli. WEP, WPA ve eski TKIP kullanılmamalıdır.
- 802.11w / Protected Management Frames (PMF) etkinleştirmek
  Deauthentication ve disassociation gibi yönetim çerçevelerinin sahteciliğine karşı koruma sağlar. WPA3’te PMF zorunludur. // PMF (Protected Management Frames / 802.11w), Wi-Fi’deki yönetim paketlerinin bir kısmını koruyan güvenlik özelliğidir. Özellikle sahte deauthentication/disassociation paketleriyle cihazların ağdan koparılmasına karşı koruma sağlar.
- Güçlü ve uzun Wi-Fi parolası kullanmak
  Tahmin edilmesi zor, benzersiz ve yeterince uzun bir parola tercih edilmelidir.
- WPS’yi kapatmak
  Kullanılmıyorsa özellikle WPS PIN özelliği devre dışı bırakılmalıdır.
  // WPS = Wi-Fi’ye kolay bağlantı özelliği
- MAC filtrelemeye güvenlik önlemi olarak güvenmemek
  MAC adresleri gözlemlenebilir ve taklit edilebilir (MAC Spoofing). Bu nedenle gerçek bir kimlik doğrulama mekanizmasının yerini tutmaz.
- SSID gizlemeyi güvenlik önlemi olarak görmemek
  “Hidden Network” ağı gerçek anlamda görünmez veya güvenli hale getirmez.
- ARP Spoofing/ARP Inspection korumalarını kullanmak
  Destekleyen kurumsal ağ ekipmanlarında ARP tabanlı MITM saldırılarına karşı Dynamic ARP Inspection gibi özellikler etkinleştirilebilir.
- Modem/router yönetim panelini güvenli tutmak
  Varsayılan yönetici parolası değiştirilmeli, internet üzerinden uzaktan yönetim gerekmiyorsa kapatılmalıdır.
- Firmware’i güncel tutmak
  Router/modem güvenlik güncellemeleri düzenli olarak yüklenmelidir.
- Misafir ve IoT cihazlarını ayırmak
  Destekleniyorsa misafir ağı/VLAN kullanılarak güvenilmeyen veya IoT cihazları ana ağdan izole edilmelidir.

* Kısaca: WPA3/WPA2-AES + PMF (802.11w) + güçlü parola + WPS kapalı + güncel firmware + güvenli yönetim paneli + ağ izolasyonu
