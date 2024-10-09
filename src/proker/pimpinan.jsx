import React from 'react'
import '../style/style-proker.css';
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

const Pimpinan = () => {
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
    <main className="content">
        <div className="bagian1">
            <div className="container-bagian1">
                <h2 style={{marginTop: 0}}>Daftar Program Kerja Pimpinan Inti</h2>
                <div className="list-proker">
                    {/* <a href="sumberadi_meningkatkan-minat-belajar-siswa-melalui-pengajaran-dan-pengadaan-buku-materi-tambahan-booklet-matematika-untuk-anak-anak-di-dukuh-jodag.html" className="active">Meningkatkan Minat Belajar Siswa Melalui Pengajaran dan Pengadaan Buku Materi Tambahan (Booklet) Matematika untuk Anak-anak di Dukuh Jodag</a> */}
                    <Link to='/pimpinan'>Pedoman Administrasi dan Organisasi Ikatan Mahasiswa Muhammadiyah Daerah Istimewa Yogyakarta</Link>
                    {/* <a href="sumberadi_pembuatan-dan-pemasangan-roadmap-pengelolaan-sampah-yang-baik-dan-benar-di-dukuh-jodag-sumberadi.html">Pembuatan dan Pemasangan Roadmap Pengelolaan Sampah yang Baik dan Benar di Dukuh Jodag Sumberadi</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_pembuatan-poster-dan-booklet-makanan-sehat-dan-bergizi-untuk-anak-anak-di-jodag.html">Pembuatan Poster dan Booklet Makanan Sehat dan Bergizi Untuk anak-anak di Jodag</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_pembuatan-poster-mengenai-produk-pangan-utama-pengganti-di-sd-wilayah-sumberadi.html">Pembuatan Poster Mengenai Produk Pangan Utama Pengganti di SD Wilayah Sumberadi</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_pembuatan-poster-perubahan-fisik-pada-hasil-pasca-panen-di-dukuh-jodag-sumberadi.html">Pembuatan Poster Perubahan Fisik Pada Hasil Pasca Panen di Dukuh Jodag Sumberadi</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_pembuatan-pupuk-organik-cair-atau-poc-dengan-memanfaatkan-sampah-dapur-rumah-tangga.html">Pembuatan Pupuk Organik Cair atau POC dengan Memanfaatkan Sampah Dapur Rumah Tangga</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_pendataan-dan-pembuatan-infografis-umkm-di-padukuhan-jodag.html">Pendataan dan Pembuatan Infografis UMKM di Padukuhan Jodag</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_pengenalan-teknologi-pertanian-melalui-aplikasi-desa-apps.html">Pengenalan Teknologi Pertanian Melalui Aplikasi Desa Apps</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_penyuluhan-dan-pembuatan-booklet-informasi-mengenai-kebiasan-kecil-dan-sederhana-yang-mengubah-hidup-menjadi-lebih-sehat.html">Penyuluhan dan Pembuatan Booklet Informasi Mengenai Kebiasan Kecil dan Sederhana yang Mengubah Hidup menjadi Lebih Sehat</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_penyuluhan-dan-pembuatan-booklet-mengenai-pendaftaran-perizinan-umkm-di-jodag.html">Penyuluhan dan Pembuatan Booklet Mengenai Pendaftaran Perizinan UMKM di Jodag</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_pola-hidup-bersih-dan-sehat-dengan-pemberantasan-jentik-nyamuk.html">Pola Hidup Bersih & Sehat Dengan Pemberantasan Jentik Nyamuk</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_poster-cuci-tangan-dengan-sabun-secara-benar-pada-area-fasilitas-umum-di-dukuh-jodag.html">Poster Cuci Tangan dengan Sabun secara benar pada Area Fasilitas Umum di Dukuh Jodag</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_poster-money-tracker-challenge.html">Poster Money Tracker Challenge</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_poster-saving-challenge.html">Poster Saving Challenge</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                    {/* <a href="sumberadi_sosialisasi-dan-pembuatan-booklet-mengenai-pentingnya-menabung-sejak-dini-beserta-pembuatan-tabungan.html">Sosialisasi dan pembuatan booklet mengenai pentingnya menabung sejak dini beserta pembuatan tabungan</a> */}
                    <Link to='/pimpinan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis qui asperiores quae veritatis ratione dolor dolorum cumque maiores officia neque itaque iste sequi deleniti? Placeat et explicabo amet sit!</Link>
                </div>
                <form action="">
                    <Link to='/homepage'>
                    <button type='button'>Proker Bidang Kader</button>
                    </Link>
                </form>
                <form action="">
                    <Link to='/homepage'>
                    <button type='orgsatu'>Proker Bidang Organisasi</button>
                    </Link>
                </form>
                <form action="">
                    <Link to='/homepage'>
                    <button type='button'>Proker Bidang Hikmah</button>
                    </Link>
                </form>
                {/* <form action="">
                    <Link to='/homepage'>
                    <button type='button'>Proker Bidang RPK</button>
                    </Link>
                </form>
                <form action="">
                    <Link to='/homepage'>
                    <button type='button'>Proker Bidang TKK</button>
                    </Link>
                </form>
                <form action="">
                    <Link to='/homepage'>
                    <button type='button'>Proker Bidang SPM</button>
                    </Link>
                </form>
                <form action="">
                    <Link to='/homepage'>
                    <button type='button'>Proker Bidang Ekowir</button>
                    </Link>
                </form>
                <form action="">
                    <Link to='/homepage'>
                    <button type='button'>Proker Bidang Immawati</button>
                    </Link>
                </form>
                <form action="">
                    <Link to='/homepage'>
                    <button type='button'>Proker Bidang SBO</button>
                    </Link>
                </form>
                <form action="">
                    <Link to='/homepage'>
                    <button type='button'>Proker Bidang Medkom</button>
                    </Link>
                </form> */}
            </div>
        </div>
        <div className="bagian2">
            <div className="container">
                {/* <h1 style={{textAlign: 'center', marginTop: 0}}>Meningkatkan Minat Belajar Siswa Melalui Pengajaran dan Pengadaan Buku Materi Tambahan (Booklet) Matematika untuk Anak-anak di Dukuh Jodag</h1> */}
                <div className="bookWrapper">
                    <iframe src="https://drive.google.com/file/d/1O__2LuRKuZiDr7uZL-Qi6SntGbc5MIRt/preview" width="100%" allow="autoplay" style={{border: 'none'}}></iframe>
                </div>
                <p>Published: Sekretaris Umum PC IMM BSKM</p>
                <p>Source: Dewan Pimpinan Daerah IMM Daerah Istimewa Yogyakarta</p>
                <p className="deskripsi">Sebagai organisasi formal, Ikatan Mahasiswa Muhammadiyah (IMM) membutuhkan pedoman administrasi
                    dan organisasi dalam rangka membangun keteraturan, baik dari segi pemikiran maupun perilaku organisasi para pengurus.
                    Kepemimpinan IMM sama perlunya dengan kemapanan administrasi. Melalui administrasi yang baik, kepemimpinan akan berjalan
                    secara efektif dan efisien.
                </p>
                <div className="previous-next-btn" style={{marginTop: '40px', display: 'flex', justifyContent: 'space-between'}}>
                    <form action="sumberadi_sosialisasi-dan-pembuatan-booklet-mengenai-pentingnya-menabung-sejak-dini-beserta-pembuatan-tabungan.html">
                        <button className="previous"><i className="fas fa-angle-left"></i> Sebelumnya</button>
                    </form>
                    <form action="sumberadi_pembuatan-dan-pemasangan-roadmap-pengelolaan-sampah-yang-baik-dan-benar-di-dukuh-jodag-sumberadi.html">
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

export default Pimpinan