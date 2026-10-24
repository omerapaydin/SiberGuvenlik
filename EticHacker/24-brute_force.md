# Brute Force

# Hydra – Brute Force Aracı

**Hydra**, web uygulamaları ve SSH, FTP, SMB gibi ağ servislerinde kullanıcı adı ve parola güvenliğini test etmek için kullanılan bir kimlik doğrulama test aracıdır.

> Yalnızca kendi sistemlerinde veya izinli test ortamlarında kullanılmalıdır.

## Örnek Komut

```bash
hydra -V -L wordlist.dic -p test 10.0.2.15 http-post-form '/wp-login.php:log=^USER^&pwd=^PASS^&wp-submit=Log+In:F=Invalid username'
```

## Parametreler

- `hydra` → Kimlik doğrulama testi aracı.
- `-V` → Denenen kullanıcı adı ve parolaları gösterir.
- `-L wordlist.dic` → Kullanıcı adlarını dosyadan alır.
- `-p test` → Sabit parola olarak `test` kullanır.
- `10.0.2.15` → Hedef test sunucusunun IP adresi.
- `http-post-form` → HTTP POST giriş formunu test eder.
- `/wp-login.php` → WordPress giriş sayfası.
- `log=^USER^` → Kullanıcı adı alanı.
- `pwd=^PASS^` → Parola alanı.
- `wp-submit=Log+In` → Form gönderim parametresi.
- `F=Invalid username` → Başarısız giriş yanıtını belirleyen metin.

## Çalışma Mantığı

1. Hydra, `wordlist.dic` dosyasındaki kullanıcı adlarını okur.
2. Her kullanıcı adını `test` parolasıyla dener.
3. HTTP POST isteklerini hedef giriş formuna gönderir.
4. Sunucunun yanıtlarını analiz ederek olası başarılı girişleri belirler.

## Önemli

- Hydra yalnızca WordPress için kullanılmaz.
- HTTP, HTTPS, SSH, FTP, SMB ve diğer desteklenen servislerde kullanılabilir.
- `F=` değeri, uygulamanın gerçek başarısız giriş mesajına uygun olmalıdır.
- Başarılı görünen sonuçlar ayrıca doğrulanmalıdır.

**Özet:**

`Wordlist → Hydra → Giriş Formu → Yanıt Analizi → Kimlik Doğrulama Güvenlik Testi`

---

# WPScan – WordPress Güvenlik Test Aracı

**WPScan**, WordPress sitelerindeki güvenlik açıklarını, eklentileri, temaları, kullanıcıları ve yapılandırma sorunlarını tespit etmek için kullanılan bir güvenlik tarama aracıdır.

> Yalnızca kendi sistemlerinde veya izinli laboratuvar ortamlarında kullanılmalıdır.

## Örnek Komut

```bash
wpscan --url http://10.0.2.15 --passwords wordlist.dic --usernames omerapaydin
```

## Parametreler

- `wpscan` → WordPress güvenlik tarama aracı.
- `--url http://10.0.2.15` → Hedef WordPress test sitesinin adresi.
- `--passwords wordlist.dic` → Denenecek parolaların bulunduğu wordlist.
- `--usernames omerapaydin` → Parolaları test edilecek kullanıcı adı.

## Çalışma Mantığı

1. WPScan hedef WordPress sitesine bağlanır.
2. `omerapaydin` kullanıcısı için `wordlist.dic` dosyasındaki parolaları sırayla dener.
3. Sunucunun kimlik doğrulama yanıtlarını analiz eder.
4. Olası başarılı girişleri raporlar.

## WPScan ile Neler Yapılabilir?

- WordPress sürümünü tespit etme.
- Tema ve eklentileri inceleme.
- Bilinen güvenlik açıklarını araştırma.
- Kullanıcı hesaplarını tespit etme.
- Parola güvenliğini test etme.

## Özet

`WordPress → WPScan → Kullanıcı/Parola Testi → Güvenlik Analizi`

**Not:** WPScan, WordPress'e özeldir. Hydra ise WordPress dışında SSH, FTP, HTTP ve diğer desteklenen servislerde de kimlik doğrulama testleri yapabilir.

---

# Brute Force - Burp Suite Intruder

- Login işlemi sırasında HTTP isteği **Burp Suite** ile yakalanır ve **Intruder** modülüne gönderilir.

- **Positions:** `Add` seçeneği kullanılarak test edilecek `username` veya `password` parametresi **payload position** olarak belirlenir. Test senaryosuna göre **Sniper, Battering Ram, Pitchfork veya Cluster Bomb** saldırı tiplerinden uygun olanı seçilir.

- **Payloads:** `Payload Options` bölümüne kullanılacak **wordlist** eklenir. Gerekli yapılandırmalar tamamlandıktan sonra `Start Attack` ile test başlatılır.

- **Sonuç Analizi:** Intruder sonuçlarında `Status Code`, `Length`, yönlendirme ve response içeriği karşılaştırılır. Diğer yanıtlardan belirgin şekilde farklı `Length` değerine sahip response'lar olası başarılı giriş açısından incelenir.

> **Not:** `Length` değerinin yüksek veya farklı olması tek başına doğru kullanıcı adı veya parolanın bulunduğunu göstermez. Şüpheli response; içerik, HTTP durum kodu, yönlendirme ve session/cookie değişiklikleriyle birlikte doğrulanmalıdır.
