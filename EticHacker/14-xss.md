# XSS

- XSS (Cross-Site Scripting), web sitelerinde görülen bir güvenlik açığıdır. Bu açık sayesinde saldırgan, siteye zararlı JavaScript kodu ekleyebilir ve siteyi kullanan kişilerin tarayıcısında çalıştırabilir.

- Stored XSS sadece şu durumda olur:

✔ Kullanıcı girdisi DB’ye kaydediliyor
✔ Sonra tekrar HTML olarak ekrana basılıyor

- Stored XSS, kullanıcı verisinin veritabanına kaydedilip diğer kullanıcılara tekrar gösterildiği tüm form alanlarında ortaya çıkabilir.

- Forma girilen bilgileri veritabanına kaydeder. Tarayıcı yenilense bile girilen form ekranda gösterildiği için zararlı js kodu eklenirse siteye giren tüm kullanıcılar hacklenir

- Güvenlik önlemi :
  • Kullanıcı girdisi HTML encode edilmelidir
  • Output encoding uygulanmalıdır
  • Whitelist input validation kullanılmalıdır
  • JavaScript içeriği filtrelenmemeli, hiç çalıştırılmamalıdır
  • CSP (Content Security Policy) kullanılmalıdır

- Forma <script>alert("i hack you")</script> kaydedildiğinde siteye her giren bu alertle karşılaşır.

- Stored XSS nasıl anlaşılır
  • Yorum yaz
  • Script ekle
  • Sayfayı yenile
  • Başkası girsin
  • Script çalışıyorsa → Stored XSS

* Beef kullanarak

- Terminalde çıkan hook kodunu tarayıcıda form kısmına gir ve kaydet. Kullanıcılar o sayfaya girdiğinde beef arayüzünde online olurlar
