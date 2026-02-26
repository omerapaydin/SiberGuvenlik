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
