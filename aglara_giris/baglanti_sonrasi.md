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
