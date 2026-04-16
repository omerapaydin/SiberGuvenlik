# Network Teorisi

## Open System Interconnection

1.  Physical (Fiziksel Katman) - Data cables stc. // Örnek: Ethernet kablosu, fiber
2.  Data Link (Veri Bağlantı Katmanı) - Switch, MAC Address // MAC adresi ile iletişim
3.  Network (Ağ Katmanı)- Route, IP Adress // IP adresi ve routing (yönlendirme)
4.  Transport (Taşıma Katmanı) - TCP / UDP // Portlar ve veri akışı kontrolü
5.  Session (Oturum Katmanı) - Communitication // İletişimi başlatır, sürdürür, sonlandırır
6.  Presentation (Sunum Katmanı) - JPEG, MOV, Data // Veri formatı
7.  Application (Uygulama Katmanı) - HTTP, Mail Server etc. // Kullanıcıya en yakın katman

## Binary

- Binary (ikili sistem), bilgisayarların kullandığı sayı sistemidir ve sadece 2 rakamdan oluşur: 0 ve 1

Normal sayı sistemi (decimal):
• 5

Binary karşılığı:
• 101

Nasıl?
• 1×2^2 + 0×2^1 + 1×2^0 = 4 + 0 + 1 = 5

- 192.168.0.1
  11000000.1010100.00000000.00000001
  8 bit 8 bit 8 bit 8 bit
  4 byte

- High-Level Language > Assembly > Machine Language
- C#, Java, Python > CPU’ya daha yakın, Komutlar kısa ve donanıma bağlı > Bilgisayarın direkt anladığı dil, Sadece 0 ve 1 (binary)

## IP

- IPV4 2 ^ 32 // → yetersiz kalmaya başladı
  • Toplam: ≈ 4.29 milyar adres
  • 32 bit’ten oluşur
  • Örnek: 192.168.1.1
- IPV6 2 ^ 128 // → gelecek için tasarlandı
  • Toplam: ≈ 3.4 × 10³⁸ adres (inanılmaz büyük)
  • 128 bit’ten oluşur
  • Örnek: 2001:0db8:85a3:0000:0000:8a2e:0370:7334

## Private Networks

           Network   Subnet Mask  Kullanılabilir IP

- Class A - 10.0.0.0 - 255.0.0.0 - 16777214
- Class B - 172.16.0.0 - 255.240.0.0 - 1048574
- Class C - 192.168.0.0 - 255.255.255.0 - 254
