const sections = {
    home: `
    <div class="glass-card main-hero centered-layout fade-in">
        <h1>Merhaba, Ben <span class="accent-text">Ceren Karayılan</span></h1>
        
        <div class="photo-wrapper">
            <img src="kendim.png" alt="Ceren" class="hero-photo"> 
        </div>

        <p class="subtitle">Siber Güvenlik Araştırmacısı & Web Geliştirici</p>
        
        <div class="btn-wrapper">
            <a onclick="showSection('about')" class="btn glow">Keşfet</a>
        </div>
    </div>
`,
    about: `
    <div class="glass-card centered-layout fade-in">
        <h2 class="section-title"><i class="fas fa-user-graduate"></i> ÖZGEÇMİŞ & İLETİŞİM</h2>
        
        <div class="profile-center">
            <img src="indir (5).jpeg" class="main-photo">
        </div>
        <div class="bio-section">
                <h3>Vizyon & Kariyer Hedefi</h3>
                <p>22.01.2003 Adıyaman/Merkez doğumluyum. Batman Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Siber güvenlik mimarileri, yapay zeka entegrasyonu ve modern web teknolojileri üzerine uzmanlaşıyorum. Teknik problem çözme yeteneğimi akademik projelerim ve aldığım profesyonel eğitimlerle (BTK Akademi, Siber Vatan, Udemy) pekiştirerek, endüstri standartlarında güvenli yazılımlar geliştirmeyi hedefliyorum.</p>
            </div>

        <div class="professional-bio left-align">
            <div class="bio-section">
                <h3><i class="fas fa-university"></i> Eğitim Geçmişi</h3>
                <table class="info-table">
                <tr>
                        <td><strong>İlkokul & Ortaokul</strong></td>
                        <td>Cengiz Topel İlköğretim Okulu</td>
                    </tr>
                    <tr>
                        <td><strong>Lise</strong></td>
                        <td>Ayşegül Kaman Anadolu Lisesi</td>
                    </tr>
                    <tr>
                        <td><strong>Üniversite</strong></td>
                        <td>Batman Üniversitesi - Bilgisayar Mühendisliği</td>
                    </tr>
                    
                </table>
            </div>

            <div class="bio-section" style="margin-top: 40px;">
                <h3><i class="fas fa-address-book"></i> İletişim Bilgileri</h3>
                <table class="info-table">
                    <tr>
                        <td><strong>E-posta</strong></td>
                        <td><a href="mailto:ceren.kryln1907@gmail.com" class="table-link">ceren.kryln1907@gmail.com</a></td>
                    </tr>
                    <tr>
                        <td><strong>Telefon</strong></td>
                        <td><a href="tel:+905510106786" class="table-link">0551 010 67 86</a></td>
                    </tr>
                    <tr>
                        <td><strong>Konum</strong></td>
                        <td>Batman / Türkiye</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
`,

    skills: `
    <div div class="glass-card left-align fade-in" >
        <h2 class="section-title"><i class="fas fa-tools"></i> TEKNİK YETKİNLİKLER & ARAÇLAR</h2>
        
        <div class="item-cat">
            <div class="item-header"><h3>Yazılım Geliştirme & Web Teknolojileri</h3><span class="badge">Teknik</span></div>
            <p>Modern web mimarileri üzerine uzmanlaşıyor; HTML5, CSS3 ve JavaScript ile yüksek performanslı, kullanıcı odaklı arayüzler geliştiriyorum. Geliştirme süreçlerinde **Visual Studio Code** ve **PyCharm** gibi IDE'leri aktif olarak kullanarak temiz kod prensiplerini uyguluyorum.</p>
        </div>

        <div class="item-cat">
            <div class="item-header"><h3>Siber Güvenlik & Sistem Analizi</h3><span class="badge">Sertifikalı</span></div>
            <p>Siber Vatan ve Hackviser platformları üzerinden ağ güvenliği, sızma testleri ve zafiyet taramaları üzerine teknik yetkinlik kazandım. **Kali Linux**, **Wireshark** ve **Nmap** gibi profesyonel araçlarla sistem açıklarını analiz ederek savunma stratejileri kurguluyorum.</p>
        </div>

        <div class="item-cat">
            <div class="item-header"><h3>Problem Çözme & Algoritma Optimizasyonu</h3><span class="badge">Mühendislik</span></div>
            <p>Karmaşık mühendislik problemlerine analitik yaklaşımlar geliştiriyor, Big-O analizi ve veri yapıları optimizasyonu ile yazılım performansını artırıyorum. Algoritma tasarımı süreçlerinde mantıksal hataları minimize etmek için **Jupyter Notebook** üzerinden prototipleme yapıyorum.</p>
        </div>

        <div class="item-cat">
            <div class="item-header"><h3>Elektronik Devre Analizi & Simülasyon</h3><span class="badge">Donanım</span></div>
            <p>Devre tasarımı ve analizi süreçlerinde Thevenin, Op-Amp ve Kirchhoff yasalarını uygulayarak donanım çözümleri üretiyorum. Tasarımlarımı fiziksel üretime geçmeden önce **Proteus** ve **Multisim** gibi simülasyon araçlarıyla test ederek hata payını minimize ediyorum.</p>
        </div>
    </div >

    <div class="glass-card left-align fade-in" style="margin-top: 40px;">
        <h2 class="section-title"><i class="fas fa-graduation-cap"></i> KARİYER GELİŞİMİ & EĞİTİM VİZYONU</h2>

        <div class="item-cat">
            <div class="item-header"><h3>BTK Akademi & Udemy Uzmanlıkları</h3><span class="badge">Profesyonel</span></div>
            <p>Sürekli öğrenme prensibim doğrultusunda **BTK Akademi** ve **Udemy** üzerinden 200 saati aşkın teknik eğitim tamamladım. C#, Python ve Siber Güvenlik dökümantasyonlarını takip ederek, teorik bilgilerimi endüstri standartlarındaki projelerle pratiğe döküyorum.</p>
        </div>

        <div class="item-cat">
            <div class="item-header"><h3>Kariyer Stratejileri & Vizyoner Gelişim</h3><span class="badge">İnovasyon</span></div>
            <ul class="clean-list">
                <li><strong>İleri Veri Analizi:</strong> Microsoft Excel ve SQL ile büyük veri setlerinden anlamlı raporlar üreterek karar verme süreçlerini destekliyorum.</li>
                <li><strong>Bulut Bilişim:</strong> Google Cloud servisleri ile ölçeklenebilir ve güvenli sistem mimarileri tasarlıyorum.</li>
                <li><strong>Profesyonel İletişim:</strong> Mühendislik projelerini iş dünyasına etkili sunma ve teknik dökümantasyon hazırlama üzerine çalışıyorum.</li>
            </ul>
        </div>
    </div>
`,
    education: `
    <div div class="glass-card left-align fade-in" >
            <h2 class="section-title"><i class="fas fa-graduation-cap"></i> EĞİTİM & UZMANLIK BELGELERİ</h2>
            
            <div class="item-cat">
                <div class="item-header"><h3>Batman Üniversitesi</h3><span class="badge">LİSANS</span></div>
                <p>Bilgisayar Mühendisliği Bölümü (2022-Devam Ediyor). Siber savunma mimarileri ve yapay zeka üzerine uzmanlaşıyorum.</p>
            </div>

            <div class="item-cat">
                <div class="item-header"><h3>Siber Güvenlik & Sistem Yönetimi</h3><span class="badge">TEKNİK</span></div>
                <ul class="clean-list">
                    <li><strong>Google Cloud Bulut Bilişim:</strong> Ölçeklenebilir bulut servisleri yönetimi ve mimari tasarım temelleri.</li>
                    <li><strong>Windows İşletim Sistemleri Güvenliği:</strong> Kurumsal sistemlerde sıkılaştırma ve Active Directory yönetimi.</li>
                    <li><strong>Sistem Mühendisliği Eğitimi:</strong> Karmaşık IT altyapılarının planlanması ve operasyonel süreç yönetimi.</li>
                    <li><strong>Kali Linux & Sızma Testleri:</strong> Hackviser üzerinden ağ ve uygulama güvenliği uzmanlığı.</li>
                </ul>
            </div>

            <div class="item-cat">
                <div class="item-header"><h3>Yapay Zeka ve Veri Analitiği</h3><span class="badge">İNOVASYON</span></div>
                <ul class="clean-list">
                    <li><strong>Yapay Zeka Etiği ve Güvenliği:</strong> Algoritmik karar verme süreçlerinde etik ilkeler ve veri güvenliği.</li>
                    <li><strong>İleri Ağ Teknolojileri:</strong> Geleceğin ağ mimarileri ve yüksek hızlı veri iletim teknolojileri.</li>
                    <li><strong>Microsoft Excel İleri Veri Analizi:</strong> Teknik verilerin istatistiksel raporlanması ve görselleştirilmesi.</li>
                </ul>
            </div>

            <div class="item-cat">
                <div class="item-header"><h3>Kariyer ve Vizyoner Gelişim</h3><span class="badge">PROFESYONEL</span></div>
                <ul class="clean-list">
                    <li><strong>Girişimcilik ve Sunum Teknikleri:</strong> Mühendislik projelerinin iş dünyasına etkili sunumu ve iletişim stratejileri.</li>
                    <li><strong>Kariyerde Hedef Belirleme:</strong> Profesyonel gelişim planlama ve mühendislik kariyer yönetimi.</li>
                </ul>
            </div>
        </div >
    `,
    projects: `
    <div div class="glass-card left-align fade-in" >
        <h2 class="section-title"><i class="fas fa-code-branch"></i> Geliştirdiğim Projeler</h2>
        
        <div class="item-cat">
            <div class="item-header">
                <h3>Yüz Tanıma ve Biyometrik Kişilik Analizi</h3>
                <span class="badge">Yapay Zeka & Tez</span>
            </div>
            <p><strong>Teknoloji:</strong> Python, OpenCV, MySQL, Flask</p>
            <p>Mezuniyet tezim kapsamında geliştirdiğim bu sistem, kullanıcıların yüz hatlarını biyometrik olarak tarayarak yapay zeka algoritmaları üzerinden karakter analizi gerçekleştirmektedir. Veritabanı entegrasyonu sayesinde analiz sonuçlarını güvenli bir şekilde depolayan, bilimsel tabanlı bir mühendislik çalışmasıdır.</p>
        </div>

        <div class="item-cat">
            <div class="item-header">
                <h3>Batman Belediyesi Mobil/Web Entegrasyonu</h3>
                <span class="badge">Front-End</span>
            </div>
            <p><strong>Teknoloji:</strong> React, Tailwind CSS, API Entegrasyonu</p>
            <p>Belediyenin dijital dönüşüm projesinde front-end ekibinde yer alarak, vatandaşların hizmetlere hızlı erişimini sağlayan kullanıcı dostu arayüzleri geliştirdim. Performans optimizasyonu ve responsive (mobil uyumlu) tasarım standartlarını en üst seviyede uyguladığım profesyonel bir saha deneyimidir.</p>
        </div>

        <div class="item-cat">
            <div class="item-header">
                <h3>Profesyonel Danışan Kayıt Otomasyonu</h3>
                <span class="badge">Full-Stack</span>
            </div>
            <p><strong>Teknoloji:</strong> C#, ASP.NET Core, MySQL, Entity Framework</p>
            <p>Kullanıcı verilerini güvenli bir mimaride yöneten bu web otomasyonu, randevu takibi, danışan geçmişi ve raporlama modüllerini içermektedir. SQL veritabanı optimizasyonu ile büyük veri setlerinde bile hızlı işlem yapabilen, siber güvenlik standartlarına uygun bir yönetim panelidir.</p>
        </div>

        <div class="item-cat">
            <div class="item-header">
                <h3>Siber Güvenlik CTF Takip Platformu</h3>
                <span class="badge">Cyber Security</span>
            </div>
            <p><strong>Teknoloji:</strong> HTML5, CSS3, JavaScript (Vanilla)</p>
            <p>Siber güvenlik yarışmaları (Capture The Flag) için tasarladığım bu web platformu, yarışmacıların skorlarını anlık olarak takip etmelerini sağlar. Dinamik sıralama algoritmaları ve siber güvenlik temalı karanlık mod (dark mode) tasarımıyla kullanıcı deneyimini ön planda tutar.</p>
        </div>

        <div class="item-cat">
            <div class="item-header">
                <h3>JavaScript Temelli Mühendislik Algoritmaları</h3>
                <span class="badge">JavaScript & Logic</span>
            </div>
            <p><strong>Teknoloji:</strong> Vanilla JavaScript, DOM Manipulation, CSS3 Animations</p>
            <p>Web geliştirme yetkinliklerimi pekiştirmek amacıyla; TYT Puan Hesaplama, Banka Hesap Yönetimi, Vücut Kitle Endeksi ve Asal Sayı Analizi gibi karmaşık mantıksal işlemleri içeren bir dizi uygulama geliştirdim. Kullanıcıdan alınan verilerin anlık işlenmesi ve dinamik sonuç üretimi üzerine kurgulanmış, algoritma odaklı web projeleridir.</p>
        </div>

        <div class="item-cat">
            <div class="item-header">
                <h3>Mühendislik Portfolyosu (V3.0)</h3>
                <span class="badge">Modern Web</span>
            </div>
            <p><strong>Teknoloji:</strong> Glassmorphism UI, Responsive Design, JS Architecture</p>
            <p>Modern web standartları olan Glassmorphism (cam efekti) mimarisiyle geliştirdiğim bu portfolyo, temiz kod yapısı ve dinamik içerik yükleme sistemine sahiptir. GitHub Pages üzerinden yayına alınan, yüksek hız ve erişilebilirlik skorlarına sahip kişisel mühendislik vitrinimdir.</p>
        </div>
    </div >
    `,
    contact: `
    <div div class="glass-card fade-in" >
        <h2 class="section-title"><i class="fas fa-paper-plane"></i> İLETİŞİM</h2>
        
        <form class="pro-form">
            <div class="form-row">
                <input type="text" placeholder="Ad Soyad" required>
                <input type="email" placeholder="E-posta" required>
            </div>
            
            <div class="form-bottom">
                <textarea placeholder="Mesajınız" rows="4" required></textarea>
                <button type="submit" class="btn send-btn">Gönder</button>
            </div>
        </form>
    </div>
`
};

function showSection(id) {
    document.getElementById('main-content').innerHTML = sections[id];
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const link = document.getElementById('link-' + id);
    if (link) link.classList.add('active');
    window.scrollTo(0, 0);
}


window.onload = () => showSection('home');
