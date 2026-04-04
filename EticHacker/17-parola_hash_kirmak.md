# Parola Ve Hash Kırma

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
