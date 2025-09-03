### Ağlara Giriş

**IP**
IP (Internet Protocol), cihazların internet veya bir ağ üzerinden birbirleriyle iletişim kurabilmesi için kullandığı benzersiz adres sistemidir.

**DNS**

DNS (Domain Name System)
Sen tarayıcıya www.facebook.com yazarsın, DNS bunu otomatik olarak IP adresine çevirir (örneğin 157.240.1.35) ve siteye ulaşmanı sağlar.
Olmasaydı, her siteye IP yazarak gitmek zorunda kalırdık.

**VPN**
VPN (Virtual Private Network)
VPN, internet bağlantını şifreleyen ve seni başka bir lokasyondaymış gibi gösteren sanal özel bir ağdır.

**MAC**

MAC adresi (Media Access Control Address), bir ağ cihazının (örneğin bilgisayar, telefon, yazıcı gibi) ağ arayüzüne (ethernet kartı, Wi-Fi adaptörü) üretici tarafından atanan benzersiz bir kimlik numarasıdır.

--Terminal İşlemleri--

-mac adresi değiştirme-
~ifconfig wlan0 down //kapalı
~macchanger --random wlan0 //mac adresi değişir
~ifconfig wlan0 up

-sorun çıkarsa-
~service NetworkManager restart //ağlara res atar

---

-iwconfig //wlan0 managed/monitor modda mı görmek için
-airmon-ng start wlan0 //monitor moda geçer. bağlı olmadığımız ağlardan bilgi almak için
--airmon-ng stop wlan0mon /managed moda geçer (nete bağlanmak için)
