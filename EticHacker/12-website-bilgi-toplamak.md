# Bilgi Toplamak

## Maltego

- İnternetteki bilgileri toplayıp aralarındaki ilişkileri gösteren analiz programı. Kişi, e-posta, domain, IP, sosyal medya gibi veriler arasında bağlantı kurar

- Arayüzden website seçilir. Site url girilir. All Transform seçilir. Tarama sonucu çıkan bilgilerle site açıkları aranabilir. Örn: site wordpress kullanıyor. Wordpress exploit denenebilir

## Netcraft

- Netcraft, internet siteleri hakkında bilgi toplamak ve güvenlik analizi yapmak için kullanılan bir OSINT ve güvenlik servisidir. Web sitelerinin altyapısını ve güvenliğini analiz eden araç.

- IP adresi, Hosting firması,Sunucu türü,SSL bilgisi,Domain bilgisi

- Siteye, araştırılacak site url'si girilir

## Shodan.io

- Shodan aslında klasik bir arama motoru gibi görünür ama Google gibi web sitelerini değil, internete bağlı cihazları arar.
- Shodan üzerinde bir IP adresi arattığında, o IP’ye ait “internete açık teknik kimlik kartını” görürsün.

  Yani Shodan:

- Web sitelerini değil
- Sunucuları, kameraları, router’ları, IoT cihazlarını, açık portları listeler

## Ters IP Araması

- Ters IP araması (Reverse IP Lookup), bir IP adresine bağlı olan domain / web sitelerini bulma işlemidir. Aynı sunucuda birçok site olabilir.
- yougetsignal.com

## Whois Sorgusu

- WHOIS sorgusu, bir domain (alan adı) veya IP adresi hakkında kayıt bilgilerini öğrenmek için yapılan sorgudur
- Genelde domainin kime ait olduğu, ne zaman alındığı, hangi firmadan alındığı gibi bilgiler gösterir.

- > whois {target-ip}

- archive.com / icann.com

## Osint Framework

- “Bilgi toplamak için hangi aracı kullanacağını gösteren dev bir rehber”

## robots.txt

- Bu dosya bir web sitesinde bulunur ve arama motoru botlarına hangi sayfaya girip giremeyeceklerini söyler.
- Site sonuna eklenir : https://siteadi.com/robots.txt
- Gizli klasörleri gösterebilir (bazen güvenlik açığı olur)

- > dirb https://siteadi.com

- Web sitelerinde gizli klasör ve dosyaları bulmak için kullanılan bir araçtır. Yani siteye kelime listesi ile tek tek klasör dener.
