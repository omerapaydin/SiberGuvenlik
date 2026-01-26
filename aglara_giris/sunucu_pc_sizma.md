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
-sS → stealth
-sV → servis
-O → OS
-sC → script
-A → hepsi
