### Bağlantı Sonrası Yapılacaklar

**_ Netdiscover _**
-Mac adresleri ve ip adreslerini gösteren tablo çıkarır

~ifconfig //ip adresini öğren (bağlı olduğun ağın ya da kırdığın ağın)

~netdiscover -i eth0 -r 10.0.2.0/24 -c 10 // eth0=adı ,, 0/24 bu aralıktaki ağlar ,, 10 ne kadar istek atılacağı

**_ nmap _**

~nmap 10.0.2.0/24 //aynı sonucu verir
