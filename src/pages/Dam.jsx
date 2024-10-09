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

const Dam = () => {
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
                    <a><Link to='/dad' className=''>Darul Arqam Dasar</Link></a>
                    <a><Link to='/dam' className='active'>Darul Arqam Madya</Link></a>
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
                <h1 style={{marginTop: 0, textAlign: 'center'}}>Darul Arqam Madya</h1>
                <div className=" img-container">
                    <img src={logoImm} alt="Desa Wisata Ketingan"/>
                </div>
                <p className="sumber">Sumber gambar: https://id.wikipedia.org/wiki/Tirtoadi,_Mlati,_Sleman</p>
                <div className="paragraf">
                    <p>Darul Arqam Madya (DAM) adalah salah satu program penting dalam sistem perkaderan Ikatan Mahasiswa Muhammadiyah (IMM),
                        yang berfungsi sebagai lanjutan dari proses perkaderan dasar.</p>
                    <p>DAM adalah bagian dari jenjang perkaderan IMM yang terstruktur. Setelah melewati Latihan Dasar Organisasi (LDO) dan
                        Latihan Dasar Ikatan (LDI), calon kader melanjutkan ke Darul Arqam Dasar (DAD), dan kemudian ke Darul Arqam Madya (DAM)
                        sebelum mencapai tingkat perkaderan yang lebih tinggi</p>
                    <p>Tujuan utama DAM adalah untuk mengembangkan kader-kader IMM yang memiliki karakter, kepribadian, dan mutu yang unggul.
                        DAM bertujuan untuk membentuk kader yang siap menjadi pimpinan di tingkat komisariat dan cabang, dengan internalisasi
                        ideologi Muhammadiyah, menumbuhkan wacana intelektual, dan membentuk kader yang kritis terhadap fenomena sosial.</p>
                    <p>DAM biasanya diadakan selama beberapa hari dan melibatkan serangkaian kegiatan seperti pembekalan materi oleh para ahli,
                        diskusi, dan aktivitas lainnya. Tema-tema yang diangkat pada DAM dapat bervariasi, tetapi umumnya terkait dengan isu-isu
                        kontemporer dan strategi pemajuan organisasi. Contohnya, DAM Nasional di Universitas Muhammadiyah Gresik mengangkat tema
                        "Revitalisasi keberpihakan IMM di tengah ancaman krisis ekonomi nasional", sementara DAM di Malang Raya fokus pada
                        "Digitalisasi Gerakan: Menakar Kebaruan Langkah IMM".</p>
                    <p>Partisipan DAM adalah kader-kader IMM yang telah melewati tahap perkaderan dasar dan memenuhi prasyarat tertentu, seperti lolos
                        tahap administrasi, membuat esai, dan mengikuti skrining wawancara. Seleksi ini bertujuan untuk memastikan bahwa kader yang
                        mengikuti DAM memiliki sifat, persepsi, dan motivasi yang sesuai dengan standar IMM</p>
                    <p>
                    Dengan mengikuti DAM, diharapkan kader IMM dapat menjadi lebih dewasa dalam pola pikir dan sikap, serta lebih komitmen dalam memajukan
                    organisasi. Kader madya diharapkan dapat memberikan kontribusi signifikan kepada masyarakat, tidak hanya dalam lingkup internal organisasi
                    tetapi juga dalam ranah kebijakan publik dan masyarakat luas. Mereka diharapkan dapat menjadi "cetak kader umat, cetak kader bangsa, dan
                    cetak kader persyarikatan" yang mampu mengambil peran aktif dalam berbagai aspek kehidupan
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

export default Dam