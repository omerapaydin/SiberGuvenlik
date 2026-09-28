# Şeytani İkiz (Evil Twin) Saldırısı

- Gerçek Wi-Fi ağıyla aynı veya benzer isimde sahte bir erişim noktası oluşturulur.
- Hedefin gerçek ağdan kopması sağlanarak sahte ağa yönelmesi amaçlanır.
- Hedef sahte ağa bağlandığında, gerçek ağı taklit eden bir giriş/portal ekranıyla karşılaşabilir.
- Girilen Wi-Fi parolası gibi bilgiler saldırgan tarafından ele geçirilebilir.

* Kısaca: Gerçek ağı taklit et → hedef sahte ağa bağlanır → sahte portal gösterilir → girilen bilgiler yakalanabilir.

## Airgeddon

- Airgeddon, izinli Wi-Fi güvenlik testlerinde Evil Twin dahil çeşitli kablosuz ağ testlerini kolaylaştıran ve Aircrack-ng gibi araçları bir arada kullanan bir pentest aracıdır.

- Açılır menüde :
  > Put interface in monitor mode //monitor moda geçilir
  > Evil Twin attacks menu // Seçilir
  > Evil Twin AP attack with captive portal (monitor mode needed) // sahte/yapay Wi-Fi ağı senaryosu
- Yapılan taramada istenilen wifi ağı göründüğünde durdurulur dump
  > İstenilen ağ numarası seçilir
  > Deauth aireplay attack // Handshake alınır
  > Turkish // Kullanıcı ağdan atıldığında kendisine gelecek arayüzdeki yazı dili seçilir. Bu arayüz tekrar bağlanmak için şifre isteyecek bir arayüz
- Kullanıcı şifre girdiğinde ağ şifresi kaydedilir

- /opt/airgeddon/language_strings.sh // nano ile düzenlenebilir arayüz kısmında çıkacak yazılar düzenlenebilir

- Laboratuvar ortamındaki Evil Twin senaryosunun genel akışı:
  Wi-Fi adaptörü
  ↓
  Monitor Mode
  ↓
  Kablosuz ağların taranması
  ↓
  Test edilecek AP'nin seçilmesi
  ↓
  Evil Twin / Sahte AP oluşturulması
  ↓
  Captive Portal
  ↓
  Test istemcisinin sahte AP'ye bağlanması
  ↓
  Portal üzerinden girilen bilginin gözlemlenmesi

- Fluxion alternatiftir
