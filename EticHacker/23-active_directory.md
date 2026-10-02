# Active Directory

- Active Directory (AD), Microsoft’un özellikle şirket ağlarında kullanıcıları, bilgisayarları, yetkileri ve diğer ağ kaynaklarını merkezi olarak yönetmek için kullandığı dizin hizmetidir.
- Örneğin bir şirkette 500 çalışan ve 500 bilgisayar olduğunu düşün. Her bilgisayarda ayrı ayrı kullanıcı oluşturmak yerine Active Directory üzerinden merkezi yönetim yapılabilir:

Temel kavramları:

- Domain: Yönetilen ağın mantıksal yapısı, örn. firma.local
- Domain Controller (DC): Active Directory’yi çalıştıran ve kimlik doğrulama/yetkilendirme işlemlerinde merkezi rol oynayan sunucu.
- User / Group: Kullanıcı hesapları ve kullanıcı grupları.
- Group Policy (GPO): Bilgisayarlara ve kullanıcılara merkezi kurallar uygulama sistemi.
- Kerberos: AD ortamlarında temel kimlik doğrulama protokollerinden biri.

Active Directory’nin mantıksal (logical) yapısı

- Objects: User, computer, group gibi AD içindeki nesneler.
- Domain: Örneğin academyclub.co; kullanıcı ve bilgisayarların merkezi yönetildiği yapı.
- OU (Organizational Unit): Kullanıcı/bilgisayarları departman vb. şekilde gruplamak için kullanılan yapılar.
- Tree: Parent/child domain yapısı. Örn. academyclub.co → emea.academyclub.co.
- Forest: Bir veya daha fazla AD tree’sini kapsayan en üst mantıksal yapı.
- Trust: Domain/forest’ların birbirlerinin kaynaklarına belirlenen koşullarda erişebilmesini sağlayan güven ilişkileri.
- Schema: AD’de hangi nesne türlerinin ve özelliklerinin bulunabileceğini tanımlar. Şimdilik mantığını bilmen yeterli.

Fiziksel Taraf

- Domain Controller (DC): Active Directory Domain Services’i çalıştıran sunucudur. Kullanıcıların kimlik doğrulaması, yetkilendirme ve AD verilerinin yönetiminde merkezi rol oynar.

- NTDS.dit: Domain Controller üzerinde Active Directory veritabanını barındıran kritik dosyadır. Kullanıcılar, gruplar ve bilgisayarlar gibi AD nesnelerinin verileri burada tutulur; kimlik bilgileriyle ilişkili parola hash’leri de AD veritabanının parçasıdır.

Pentest açısından öğrenme önceliğini kabaca şöyle düşünebilirsin:

- Domain + Domain Controller + User/Group → OU/GPO → Kerberos/NTLM → LDAP → NTDS.dit → Trust → Tree/Forest

* Try Hack Me test ortamı olarak kullanılabilir

## Enum4Linux

- Enum4Linux = SMB/Windows ortamından kullanıcı, grup, paylaşım ve domain bilgilerini toplamak için kullanılan enumeration aracı.

- > nmap <hedef-ip> // ile hedef ip ile ilgili bilgiler toplanır.

- > sudo nano /etc/hosts // Gerekiyorsa hedef IP ve domain eşleştirilerek domain adının hedef IP’ye çözümlenmesi sağlanır.

- > enum4linux -a spookysec.local // kullanıcı/grup/share/domain bilgilerinin incelenmesi

## Kerbrute

- Kerbrute = Active Directory’de Kerberos üzerinden kullanıcı hesaplarını tespit ve test etmeye yarayan enumeration aracıdır.

- > ./kerbrute userenum --dc 10.10.87.254 -d spookysec.loca /home/kali/userlist.txt //Active Directory laboratuvarında Kerberos üzerinden listedeki kullanıcı adlarından hangilerinin domain’de geçerli olduğunu kontrol eder
