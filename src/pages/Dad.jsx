import React from 'react';
import '../style/style-program-imm.css';
import bskmImg from '../assets/bskm.png';
import logoImm from '../assets/Logo IMM Terbaru.png';
import logoUGM from '../assets/Logo UGM.png';
import logoUNY from '../assets/uny.png';
import logoBaitar from '../assets/baitar.jpeg';
import headerRizmi from '../assets/rizmi.jpeg';
import headerKhaldun from '../assets/khaldun.jpeg';
import abadImg from '../assets/abad.jpg';
import sumanImg from '../assets/suman.jpeg';
import { Link } from 'react-router-dom';

const Dad = () => {
    function barFunction() {
        document.getElementById('menu-bar').classList.toggle('change');
        document.getElementById('navbar').classList.toggle('show-navbar');
    }
  return (
    <div>
        <header>
        <div className='logo'>
            <a href='index.html'><img src={bskmImg} alt='Logo KKN Mentari Mlati' style={{width:'48px'}}/></a>
        </div>
        <nav id='navbar'>
            <ul className='navbar'>
                <li><a className='active-navbar'><Link to="/homepage">Beranda</Link></a></li>
                <li><a><Link to="/profile">Profile</Link></a></li>
                <li><a><Link to="/tulisan">Tulisan Kader</Link></a></li>
                <li className='dropdown'>
                    <a>Profil Komsat<i class='fas fa-angle-down' style={{fontSize: '17px', fontWeight: 600}}></i></a>
                    <ul className='dropdown-content'>
                        <li><a><Link to="/rizmi">Pimpinan Komisariat Al-Khawarizmi</Link></a></li>
                        <li><a><Link to="/khaldun">Pimpinan Komisariat Ibnu-Khaldun</Link></a></li>
                        <li><a><Link to="/baitar">Pimpinan Komisariat Al-Baitar</Link></a></li>
                        <li><a><Link to="/suman">Pimpinan Komisariat Sutan Mansyur</Link></a></li>
                        <li><a><Link to="/badawi">Pimpinan Komisariat Ahmad Badawi</Link></a></li>
                    </ul>
                </li>
                <li><a><Link to='/infocenter'>Information Center</Link></a></li>
                {/* <li><a href="kontak.html">Kontak</a></li> */}
            </ul>
        </nav>
        <div className='menu-bar' id='menu-bar' onClick={barFunction}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </header>
    <main className="content">
        <div className="bagian1">
            <div className="container-bagian1">
                <h2 style={{marginTop: 0}}>Daftar Program di IMM</h2>
                <div className="list-destinasi-wisata">
                    <a><Link to='/' className='active'>Darul Arqam Dasar</Link></a>
                    <a><Link to='/' className=''>Darul Arqam Madya</Link></a>
                    <a><Link to='/' className=''>Musyawarah Cabang</Link></a>
                    <a><Link to='/' className=''>Evaluasi Tengah Periode</Link></a>
                    <a><Link to='/' className=''>Kajian Riset Isu Strategis</Link></a>
                    <a><Link to='/' className=''>Desa Wisata Budaya Rawe</Link></a>
                    <a><Link to='/' className=''>Desa Wisata Budaya Rawe</Link></a>
                    <a><Link to='/' className=''>Desa Wisata Budaya Rawe</Link></a>
                    <a><Link to='/' className=''>Desa Wisata Budaya Rawe</Link></a>
                </div>
            </div>
        </div>
        <div className="bagian2">
            <div className="container-bagian2">
                <h1 style={{marginTop: 0, textAlign: 'center'}}>Darul Arqam Dasar</h1>
                <div className=" img-container">
                    <img src={logoImm} alt="Desa Wisata Ketingan"/>
                </div>
                <p className="sumber">Sumber gambar: https://id.wikipedia.org/wiki/Tirtoadi,_Mlati,_Sleman</p>
                <div className="paragraf">
                    <p>Darul Arqam Dasar (DAD) merupakan program perkaderan yang penting dalam Ikatan Mahasiswa Muhammadiyah (IMM) yang
                        bertujuan untuk membentuk kader-kader yang memiliki pemahaman mendalam tentang ideologi Muhammadiyah dan
                        nilai-nilai keorganisasian. Kegiatan ini menjadi langkah awal bagi mahasiswa untuk bergabung dengan IMM, yang
                        berfungsi sebagai gerbang menuju kepemimpinan di organisasi tersebut.</p>
                    <p>Nama "Darul Arqam" diambil dari tempat yang digunakan oleh Rasulullah SAW, yaitu rumah Arqam Ibnu Abil Arqam,
                        sebagai pusat pembelajaran dan pengkaderan pada masa awal perkembangan Islam. Di tempat ini, banyak tokoh-tokoh
                        besar Islam dilahirkan, seperti Abu Bakar dan Ali Ibnu Thalib. Dengan mengadopsi nama ini, DAD diharapkan dapat
                        menciptakan kader-kader yang tidak hanya cerdas secara intelektual tetapi juga kuat dalam moral dan akhlak.</p>
                    <p>DAD memiliki beberapa tujuan utama: (1) Internalisasi Ideologi: Menanamkan nilai-nilai dasar Muhammadiyah dan
                        trilogi IMM kepada para kader, sehingga mereka memahami dan dapat mengamalkan prinsip-prinsip tersebut dalam
                        kehidupan sehari-hari. (2) Pengembangan Karakter: Membangun karakter kader yang berakhlak mulia, memiliki jiwa
                        sosial, serta mampu berkontribusi positif bagi masyarakat. (3) Peningkatan Kapasitas: Meningkatkan kemampuan
                        intelektual para kader agar dapat berperan aktif dalam berbagai aspek kehidupan sosial dan keagamaan.</p>
                    <p>Kegiatan ini biasanya berlangsung selama beberapa hari dengan berbagai sesi materi yang mencakup keislaman,
                        kemuhammadiyahan, analisis sosial, serta motivasi. Peserta juga diajak untuk terlibat dalam diskusi interaktif
                        dan kegiatan luar ruangan yang mendukung pembentukan tim dan solidaritas antar kader.</p>
                    <p>Di Universitas Gadjah Mada (UGM) dan Universitas Negeri Yogyakarta (UNY), DAD dilaksanakan secara rutin dengan
                        melibatkan mahasiswa dari berbagai fakultas. Kegiatan ini tidak hanya terbatas pada mahasiswa yang berasal dari
                        latar belakang Muhammadiyah, tetapi juga terbuka untuk semua mahasiswa yang ingin belajar dan berkontribusi dalam
                        gerakan ini. Dengan tema-tema yang relevan dan menarik, DAD diharapkan dapat menarik minat mahasiswa untuk bergabung
                        dan aktif dalam IMM.</p>
                    <p>
                    Darul Arqam Dasar adalah langkah strategis dalam membentuk generasi muda yang tidak hanya memiliki pengetahuan akademis
                    tetapi juga kesadaran sosial dan spiritual. Melalui program ini, IMM berkomitmen untuk mencetak kader-kader unggul yang
                    siap menghadapi tantangan zaman dengan semangat dakwah dan pengabdian kepada masyarakat. Dengan demikian, DAD menjadi
                    fondasi penting bagi keberlangsungan organisasi serta pergerakan Muhammadiyah di kalangan mahasiswa.
                    </p>
                </div><br></br>
                <div className="referensi">
                    <p>Referensi:</p>
                    <p>https://id.wikipedia.org/wiki/Tirtoadi,_Mlati,_Sleman</p>
                </div>
                <div className="previous-next-btn" style={{marginTop: '40px', display: 'flex', justifyContent: 'space-between'}}>
                    <form action="desa-wisata-budaya-rawe.html">
                        <button className="previous"><i className="fas fa-angle-left"></i> Sebelumnya</button>
                    </form>
                    <form action="embung-lampeyan.html">
                        <button className="next">Selanjutnya <i className="fas fa-angle-right"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </main>
    <footer className='footer'>
        <div className='bottom-nav-and-logo'>
            <div className='bottom-nav'>
                <div className='bottom-nav-member'>
                    <div className='member'>Peta</div>
                    <div className='submember'><a href='peta.html'>Peta Lokasi</a></div>
                    <div className='submember'><a href='peta.html'>Kontak Infografis</a></div>
                </div>
                <div className='bottom-nav-member'>
                    <div className='member'>Profil</div>
                    <div className='submember'><a href='kalurahan-sumberadi.html'>Filosofi Logo</a></div>
                    <div className='submember'><a href='kalurahan-tirtoadi.html'>Anggota Tim</a></div>
                    <div className='submember'><a href='kalurahan-tlogoadi.html'>Program Kerja</a></div>
                </div>
                <div className='bottom-nav-member'>
                    <div className='member'>Profil Komsat</div>
                    <div className='submember'><a href='profil-kkn.html'>Al-Khawarizmi</a></div>
                    <div className='submember'><a href='profil-kkn.html'>Al-Baitar</a></div>
                    <div className='submember'><a href='profil-kkn.html'>Ibnu-Khaldun</a></div>
                    <div className='submember'><a href='profil-kkn.html'>Sutan Mansyur</a></div>
                    <div className='submember'><a href='profil-kkn.html'>Ahmad Badawi</a></div>
                </div>
                <div className='bottom-nav-member'>
                    <div className='member'>Kontak Kami</div>
                    <div className='submember'><a href='kontak.html'>Admin BSKM</a></div>
                    <div className='submember'><a href='kontak.html'>Admin IMM UGM</a></div>
                    <div className='submember'><a href='kontak.html'>Admin IMM UNY</a></div>
                    <div className='submember'><a href='kontak.html'>Admin Korkom</a></div>
                </div>
            </div>
            <div className='text-logo'>
                <div className='simple-text'>Didukung dan Diselenggarakan Oleh</div>
                <div className='list-logo'>
                    <a href='https://www.ugm.ac.id/' target='_blank'><img src={logoUGM} alt='Logo UGM' height='90px'/></a>
                    <a href='https://www.uny.ac.id/' target='_blank'><img src={logoUNY} alt='Logo KKN PPM' height='90px'/></a>
                    <a href='https://dpp-imm.or.id/' target='_blank'><img src={logoImm} alt='Logo Mlati Sleman DIY' height='90px'/></a>
                    <a href='https://instagram.com/immbskm' target='_blank'><img src={bskmImg} alt='Logo KKN' height='60px'/></a>
                </div>
            </div>
        </div>
        <div className='copyright'>© Tim Media Komunikasi Pimpinan Cabang <br/> Ikatan Mahasiswa Muhammadiyah Bulaksumur Karangmalang <br/> 2024</div>
    </footer>
    </div>
  )
}

export default Dad