import React from 'react';
import '../style/style-output.css';
import bskmImg from '../assets/bskm.png';
import logoImm from '../assets/Logo IMM Terbaru.png';
import logoUGM from '../assets/Logo UGM.png';
import logoUNY from '../assets/uny.png';
import logoBaitar from '../assets/baitar.jpeg';
import headerRizmi from '../assets/rizmi.jpeg';
import headerKhaldun from '../assets/khaldun.jpeg';
import abadImg from '../assets/abad.jpg';
import sumanImg from '../assets/suman.jpeg';
import blank from '../assets/blank.jpg';
import { Link } from 'react-router-dom';

const Outputkader = () => {
    function barFunction() {
        document.getElementById("menu-bar").classList.toggle("change");
        document.getElementById("navbar").classList.toggle("show-navbar");
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
    <main className="content-output">
        <h1>Bidang Kader</h1>
        <div className="row-output">
            <div className="column-output">
                <div className="kotak-output">
                    <img src={blank} alt="Pembuatan Pupuk Organik Cair atau POC dengan Memanfaatkan Sampah Dapur Rumah Tangga"/>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel</h3>
                    <p>lorem</p>
                    <p>lorem ipsum</p>
                    <p>Memberikan edukasi mengenai pembuatan pupuk organik cair bagi para petani untuk mengurangi limbah dapur dan membantu menyuburkan tanaman melalui
                        pembagian booklet dan sosialisasi kepada para anggota kelompok tani.</p>
                    <a href="sumberadi_pembuatan-pupuk-organik-cair-atau-poc-dengan-memanfaatkan-sampah-dapur-rumah-tangga.html">Lihat selengkapnya</a>
                </div>
                <div className="kotak-output">
                    <img src={blank} alt="Penyuluhan dan Pembuatan Booklet Mengenai Pendaftaran Perizinan UMKM di Jodag"/>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel</h3>
                    <p>lorem</p>
                    <p>lorem ipsum</p>
                    <p>Memberikan edukasi mengenai regulasi dan tahapan pendaftaran perizinan UMKM kepada UMKM yang ada di Padukuhan Jodag melalui penyuluhan dan pembagian booklet.</p>
                    <a href="sumberadi_penyuluhan-dan-pembuatan-booklet-mengenai-pendaftaran-perizinan-umkm-di-jodag.html">Lihat selengkapnya</a>
                </div>
            </div>
            <div className="column-output">
                <div className="kotak-output">
                    <img src={blank} alt="Pola Hidup Bersih dan Sehat dengan Pemberantasan Jentik Nyamuk"/>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel</h3>
                    <p>lorem</p>
                    <p>lorem ipsum</p>
                    <p>Memberikan edukasi mengenai pemberantasan jentik nyamuk dengan cara 3M PLUS berdasarkan anjuran Kementrian Kesehatan RI
                        kepada masyarakat Padukuhan Jodag melalui booklet yang akan disosialisasikan kepada ibu-ibu Padukuhan Jodag.
                    </p>
                    <a href="sumberadi_pola-hidup-bersih-dan-sehat-dengan-pemberantasan-jentik-nyamuk.html">Lihat selengkapnya</a>
                </div>
                <div className="kotak-output">
                    <img src={blank} alt="Kebiasan Kecil dan Sederhana yang Mengubah Hidup menjadi Lebih Sehat"/>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel</h3>
                    <p>lorem</p>
                    <p>lorem ipsum</p>
                    <p>Memberikan informasi mengenai pentingnya pengaruh kebiasaan kecil dan sederhana dalam perilaku hidup bersih dan sehat bagi
                        masyarakat Dukuh Jodag, Desa Sumberadi melalui pemberian booklet dan sosialisasi kepada ibu-ibu warga RW 11, Dukuh Jodag,
                        Desa Sumberadi.</p>
                    <a href="sumberadi_penyuluhan-dan-pembuatan-booklet-informasi-mengenai-kebiasan-kecil-dan-sederhana-yang-mengubah-hidup-menjadi-lebih-sehat.html">Lihat selengkapnya</a>
                </div>
            </div>
            <div className="column-output">
                <div className="kotak-output">
                    <img src={blank} alt="Poster Saving Challenge"/>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel</h3>
                    <p>lorem</p>
                    <p>lorem ipsum</p>
                    <p>Memberikan edukasi kepada siswa-siswi SD N Sumberadi kelas 3, 4, dan 5 mengenai pentingnya menabung sejak dini dengan pemberian booklet,
                        sosialisasi di kelas dan pembagian poster money tracker untuk setiap siswa agar termotivasi untuk menabung</p>
                    <a href="sumberadi_poster-saving-challenge.html">Lihat selengkapnya</a>
                </div>
                <div className="kotak-output">
                    <img src={blank} alt="Poster Cuci Tangan dengan Sabun secara benar pada Area Fasilitas Umum di Dukuh Jodag"/>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel</h3>
                    <p>lorem</p>
                    <p>lorem ipsum</p>
                    <p>Memberikan edukasi mengenai tata cara cuci tangan pakai sabun dengan baik dan benar berdasarkan anjuran dari Kementrian Kesehatan RI kepada
                        masyarakat Padukuhan Jodag melalui poster yang ditempelkan pada area fasilitas umum di Padukuhan Jodag.</p>
                    <a href="sumberadi_poster-cuci-tangan-dengan-sabun-secara-benar-pada-area-fasilitas-umum-di-dukuh-jodag.html">Lihat selengkapnya</a>
                </div>
            </div>
            <div className="column-output">
                <div className="kotak-output">
                    <img src={blank} alt="Poster Money Tracker Challenge"/>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel</h3>
                    <p>lorem</p>
                    <p>lorem ipsum</p>
                    <p>Memberikan edukasi kepada siswa-siswi SD N Sumberadi kelas 3, 4, dan 5 mengenai pentingnya menabung sejak dini dengan
                        pemberian booklet, sosialisasi di kelas dan pembagian poster money tracker untuk setiap siswa agar termotivasi untuk menabung.</p>
                    <a href="sumberadi_poster-money-tracker-challenge.html">Lihat selengkapnya</a>
                </div>
                <div className="kotak-output">
                    <img src={blank} alt="Meningkatkan Minat Belajar Siswa Melalui Pengajaran dan Pengadaan Buku Materi Tambahan (Booklet) Matematika untuk Anak-anak di Dukuh Jodag"/>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel</h3>
                    <p>lorem</p>
                    <p>lorem ipsum</p>
                    <p>Memberikan rangkuman materi mata pelajaran matematika untuk siswa-siswi kelas 6 SD N Sumberadi untuk memudahkan dalam memahami materi yang
                        disampaikan di sekolah melalui pemberian booklet.</p>
                    <a href="sumberadi_meningkatkan-minat-belajar-siswa-melalui-pengajaran-dan-pengadaan-buku-materi-tambahan-booklet-matematika-untuk-anak-anak-di-dukuh-jodag.html">Lihat selengkapnya</a>
                </div>
            </div>
        </div>
        <div className="previous-next-btn" style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <a href="output-program-kerja-subunit-sumberadi-halaman-kedua.html" className="previous"><i className="fas fa-angle-left"></i> Previous</a>
            </div>
            <div>
                <a href="output-program-kerja-subunit-sumberadi-halaman-kedua.html" className="next">Next <i className="fas fa-angle-right"></i></a>
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

export default Outputkader