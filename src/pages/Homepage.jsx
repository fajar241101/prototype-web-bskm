import React from 'react';
import '../style/style-homepage.css';
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

const Homepage = () => {
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
    <main className='content-home'>
        <div className='title1-img'>
            <div className='title1'>
                <h1>Pimpinan Cabang <br/> Ikatan Mahasiswa Muhammadiyah</h1>
                <h1 style={{marginTop: '-7px', marginBottom: '-7px'}}>Bulaksumur Karangmalang</h1>
                <p>Universitas Gadjah Mada dan Universitas Negeri Yogyakarta</p>
            </div>
            <div className='img'>
                <img src={logoImm} alt='' style={{width: '400px', height: '500px'}}/>
            </div>
        </div>
        <div className='profil-desa-wisata' style={{marginTop: '100px'}}>
            <h2>Profil Pimpinan Komisariat</h2>
            <div className='underline'></div>
            <div className='row-homepage'>
                <div className='columncard'>
                    <a href='https://instagram.com/immrizmi_ugm' target='_blank'>
                        <div class='content-body1'>
                            <img src={headerRizmi} alt='PK IMM Rizmi'/>
                            <h3 style={{textAlign: 'center'}}>Pimpinan Komisariat Al-Khawarizmi</h3>
                            <p>Menaungi kader Ikatan Mahasiswa Muhammadiyah Universitas Gadjah Mada kluster Saintek</p>
                        </div>
                    </a>
                </div>
                <div className='columncard'>
                    <a href='https://instagram.com/immbaitar_ugm' target='_blank'>
                        <div className='content-body1'>
                            <img src={logoBaitar} alt='PK IMM Ibnu Baitar'/>
                            <h3 style={{textAlign: 'center'}}>Pimpinan Komisariat Al-Baitar</h3>
                            <p>Menaungi kader Ikatan Mahasiswa Muhammadiyah Universitas Gadjah Mada kluster Agro</p>
                        </div>
                    </a>
                </div>
                <div className='columncard'>
                    <a href='https://instagram.com/immugm_ibnukhaldun' target='_blank'>
                        <div className='content-body1'>
                            <img src={headerKhaldun} alt='PK IMM Ibnu Khaldun'/>
                            <h3 style={{textAlign: 'center'}}>Pimpinan Komisariat Ibnu-Khaldun</h3>
                            <p>Menaungi kader Ikatan Mahasiswa Muhammadiyah Universitas Gadjah Mada kluster Sosial & Humaniora</p>
                        </div>
                    </a>
                </div>
                <div className='columncard'>
                    <a href='https://instagram.com/immahmadbadawi' target='_blank'>
                        <div className='content-body1'>
                            <img src={abadImg} alt='PK IMM Badawi'/>
                            <h3 style={{textAlign: 'center'}}>Pimpinan Komisariat Ahmad Badawi</h3>
                            <p>Menaungi kader Ikatan Mahasiswa Muhammadiyah Universitas Negeri Yogyakarta kluster Saintek</p>
                        </div>
                    </a>
                </div>
                <div className='columncard'>
                    <a href='https://instagram.com/immuny.suman' target='_blank'>
                        <div className='content-body1'>
                            <img src={sumanImg} alt='PK IMM Suman'/>
                            <h3 style={{textAlign: 'center'}}>Pimpinan Komisariat Sutan Mansyur</h3>
                            <p>Menaungi kader Ikatan Mahasiswa Muhammadiyah Universitas Negeri Yogyakarta kluster Sosial & Humaniora</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className='destinasi-wisata' style={{marginTop: '100px'}}>
            <h2 style={{textAlign: 'center'}}>Program di IMM</h2>
            <div className='underline'></div>
            <p style={{textAlign: 'center', marginTop: '30px', color: '#222', marginLeft: '5%', marginRight: '5%'}}><i>Pilihan destinasi wisata <b>terpopuler</b></i></p>
            <div className='row-homepage'>
                <div className='column-homepage'>
                    <a><Link to='/dad'>
                        <div className='content-body2'>
                            <img src={logoImm} alt='Dheling Asri di Tirtoadi'/>
                            <h3 style={{textAlign: 'left'}}>Darul Arqam Dasar</h3>
                            <p style={{textAlign: 'justify', color: '#CB4745', fontWeight: '600px'}}>Pengkaderan</p>
                            <p style={{textAlign: 'justify'}}>Bidang Kader</p>
                        </div>
                        </Link>
                    </a>
                </div>
                <div className='column-homepage'>
                    <a><Link to='/dam'>
                        <div className='content-body2'>
                            <img src={logoImm} alt='Dheling Asri di Tirtoadi'/>
                            <h3 style={{textAlign: 'left'}}>Darul Arqam Madya</h3>
                            <p style={{textAlign: 'justify', color: '#CB4745', fontWeight: '600px'}}>Pengkaderan</p>
                            <p style={{textAlign: 'justify'}}>Bidang Kader</p>
                        </div>
                        </Link>
                    </a>
                </div>
                <div className='column-homepage'>
                    <a href='embung-senja.html'>
                        <div className='content-body2'>
                            <img src={logoImm} alt='Dheling Asri di Tirtoadi'/>
                            <h3 style={{textAlign: 'left'}}>Musyawarah Cabang</h3>
                            <p style={{textAlign: 'justify', color: '#CB4745', fontWeight: '600px'}}>Keorganisasian</p>
                            <p style={{textAlign: 'justify'}}>Bidang Organisasi</p>
                        </div>
                    </a>
                </div>
                <div className='column-homepage'>
                    <a href='embung-lampeyan.html'>
                        <div className='content-body2'>
                            <img src={logoImm} alt='Dheling Asri di Tirtoadi'/>
                            <h3 style={{textAlign: 'left'}}>Evaluasi Tengah Periode</h3>
                            <p style={{textAlign: 'justify', color: '#CB4745', fontWeight: '600px'}}>Keorganisasian</p>
                            <p style={{textAlign: 'justify'}}>Bidang Organisasi</p>
                        </div>
                    </a>
                </div>
                <div className='column-homepage'>
                    <a href='sendang-nyamplungan.html'>
                        <div className='content-body2'>
                            <img src={logoImm} alt='Dheling Asri di Tirtoadi'/>
                            <h3 style={{textAlign: 'left'}}>Kajian Riset Isu Strategis</h3>
                            <p style={{textAlign: 'justify', color: '#CB4745', fontWeight: '600px'}}>Lorem</p>
                            <p style={{textAlign: 'justify'}}>Bidang Hikmah</p>
                        </div>
                    </a>
                </div>
                <div className='column-homepage'>
                    <a href='kampung-flory.html'>
                        <div className='content-body2'>
                            <img src={logoImm} alt='Dheling Asri di Tirtoadi'/>
                            <h3 style={{textAlign: 'left'}}>Lorem</h3>
                            <p style={{textAlign: 'justify', color: '#CB4745', fontWeight: '600px'}}>Lorem</p>
                            <p style={{textAlign: 'justify'}}>Lorem</p>
                        </div>
                    </a>
                </div>
                <div className='column-homepage'>
                    <a href='desa-wisata-budaya-rawe.html'>
                        <div className='content-body2'>
                            <img src={logoImm} alt='Dheling Asri di Tirtoadi'/>
                            <h3 style={{textAlign: 'left'}}>Lorem</h3>
                            <p style={{textAlign: 'justify', color: '#CB4745', fontWeight: '600px'}}>Lorem</p>
                            <p style={{textAlign: 'justify'}}>Lorem</p>
                        </div>
                    </a>
                </div>
                <div className='column-homepage'>
                    <a href='sentra-industri-batik-alusan.html'>
                        <div className='content-body2'>
                            <img src={logoImm} alt='Dheling Asri di Tirtoadi'/>
                            <h3 style={{textAlign: 'left'}}>Lorem</h3>
                            <p style={{textAlign: 'justify', color: '#CB4745', fontWeight: '600px'}}>Lorem</p>
                            <p style={{textAlign: 'justify'}}>Lorem</p>
                        </div>
                    </a>
                </div>
                <div className='column-homepage'>
                    <a href='sentra-industri-bambu-sendari.html'>
                        <div className='content-body2'>
                            <img src={logoImm} alt='Dheling Asri di Tirtoadi'/>
                            <h3 style={{textAlign: 'left'}}>Lorem</h3>
                            <p style={{textAlign: 'justify', color: '#CB4745', fontWeight: '600px'}}>Lorem</p>
                            <p style={{textAlign: 'justify'}}>Lorem</p>
                        </div>
                    </a>
                </div>
            </div><br/>
        </div>
        <div className='hikayat-jonggat' style={{marginTop: '100px', marginBottom: '100px', marginRight: '15%', marginLeft: '15%'}}>
            <a href='profil-kkn.html'>
                <div className='box-homepage'>
                    <div className='subtitle'>
                        <p>Kenal lebih dekat dengan</p>
                        <h2 style={{marginTop: 0}}>PC IMM BSKM</h2>
                    </div>
                    <img className='logo2' src={bskmImg} alt='Logo KKN Mentari Mlati'/>
                </div>
            </a>
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

export default Homepage