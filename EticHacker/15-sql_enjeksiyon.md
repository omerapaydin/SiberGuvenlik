# SQL Enjeksiyon

## Temel sql komutları

- SELECT \* FROM demo;

- INSERT INTO demo (id, name, hint) VALUES (18, "James", "Guitar");

- DELETE FROM demo WHERE name = "James";

- UPDATE demo SET id = 18 WHERE name = "Ömer";

- SELECT \* FROM demo WHERE name LIKE "%E";

---

## Veritabanı Açığı Arama SQL Injection

- Servisin Form/Giriş Ekranında Açık Aranır
- SQL Injection, uygulamanın kullanıcıdan aldığı verileri güvenli şekilde işlemeden doğrudan SQL sorgusuna dahil etmesi sonucunda ortaya çıkabilen bir güvenlik açığıdır. Özellikle giriş formları gibi kullanıcı adı ve parola bilgilerinin veritabanında sorgulandığı alanlar, izinli test ortamlarında kontrol edilebilir.

### Yorum karakteriyle parola kontrolünün devre dışı bırakılması

- Bir giriş sistemi temel olarak aşağıdakine benzer bir sorgu kullanabilir

- > SELECT \* FROM accounts WHERE username='james' AND password='1111';

- MySQL gibi # karakterini yorum başlangıcı olarak destekleyen bir DBMS’de, güvensiz sorgu oluşturulması durumunda sorgunun sonraki bölümü yorum haline getirilebilir.

- > SELECT \* FROM accounts WHERE username='admin' # AND password='979978';
- şeklini alırsa # sonrasındaki bölüm SQL tarafından yorum olarak değerlendirilir. Etkin sorgu mantığı böylece:
- > SELECT \* FROM accounts WHERE username='admin';
- ile aynı değildir. OR 1=1 nedeniyle koşul yalnızca admin kaydını değil, diğer kayıtları da eşleştirebilir.

- SELECT \* FROM accounts WHERE username='james' AND password '1111 AND 1=1#' // Bu kodda password '' içindeki kısım kopyalanır AND kısmı çalışır. # kısmı yorum satırı anlamı taşır sonrası çalışmaz

- SELECT \* FROM accounts
  WHERE username='admin' AND password='' OR 1=1#' // ' OR 1=1# yazılır “#’dan sonrasını okuma, yok say”. Bu yüzden aslında sorgu şöyle oluyor:SELECT \* FROM accounts
  WHERE username='admin' AND password='' OR 1=1 olarak SELECT \* FROM accounts
  WHERE username='admin' girdi çıkar.

- SELECT \* FROM accounts
  WHERE username='admin' # AND password='979978' // username kısmına admin'# yazarsak kullanıcı adının bilindiği veya tahmin edildiği tüm kullanıcılar şifre bilinmeksizin hesaba girilir. SELECT \* FROM accounts
  WHERE username='admin'

### URL de Açık Aranır

- Kullanıcıdan alınan veriler sunucu tarafında yeterince filtrelenmeden veritabanı sorgularına dahil edildiğinde SQL Injection zafiyeti oluşabilir.

- URL parametreleri üzerinden gelen veriler doğrudan SQL sorgusuna eklenirse, sorgu yapısı manipüle edilebilir.

* http://10.0.2.5/......username=admin'%23.... // üstteki methodu '%23 şeklinde %23 = # karakterinin URL encoded halidir. Kullanıcı adı ile giriş yapılır

* http://10.0.2.5/......username=admin' union select \* from accounts%23.... // Tüm kullanıcıları çeker
