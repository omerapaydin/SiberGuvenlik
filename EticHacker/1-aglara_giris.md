# Ağlara Giriş (Networking Basics)

## 1. IP Adresi (Internet Protocol)

IP adresi, bir cihazın ağ üzerindeki **benzersiz kimliğidir**. İnternete bağlı her cihazın bir IP adresi vardır. Yaklaşık konum tahmini yapılabilir

- Amaç: Cihazlar arası iletişimi sağlamak
- Örnek: `192.168.1.1`, `157.240.1.35`

---

## 2. DNS (Domain Name System)

DNS, insanların anlayabileceği domain isimlerini IP adreslerine çevirir.

### Çalışma Mantığı

1. Tarayıcıya `www.facebook.com` yazılır
2. DNS sunucusu bunu IP’ye çevirir
3. Tarayıcı o IP’ye istek atar
4. Site açılır

DNS olmasaydı:

- Her siteye IP adresi ile erişmek zorunda kalırdık

---

## 3. VPN (Virtual Private Network)

VPN, internet trafiğini **şifreleyen** ve kullanıcıyı farklı bir lokasyondaymış gibi gösteren teknolojidir.

### Özellikleri

- IP adresini gizler
- Veri güvenliği sağlar
- Coğrafi kısıtlamaları aşar

---

## 4. MAC Adresi (Media Access Control)

MAC adresi, ağ kartına üretici tarafından verilen **benzersiz fiziksel kimliktir**.

- Örnek: `00:1A:2B:3C:4D:5E`
- Normalde değişmez, ancak yazılımsal olarak değiştirilebilir

---

-mac adresi değiştirme-

- > ifconfig wlan0 down // Arayüzü kapat
- > macchanger --random wlan0 // mac adresi değişir
- > ifconfig wlan0 up

-sorun çıkarsa-

- > service NetworkManager restart // Ağ servisini yeniden başlat

---

## Wireless Komutları

- > iwconfig //wlan0 managed/ Monitor modda mı görmek için
- > airmon-ng start wlan0 // Monitor moda geçer. bağlı olmadığımız ağlardan bilgi almak için. Dinleme modu
- > airmon-ng stop wlan0mon / Managed moda geçer

## IP Türü ----- Nerede Kullanılır

192.168.x.x ---- Ev/LAN
10.x.x.x ---- Kurumsal LAN
