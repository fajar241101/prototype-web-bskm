import React from 'react';
import '../style/style-profile.css';
import akramImg from '../assets/EK/akram.png';
import hanaImg from '../assets/EK/hana.png';
import alamImg from '../assets/Hikmah/alam.png';
import rizalImg from '../assets/Hikmah/rizal.png';
import saipImg from '../assets/Hikmah/saip.png';
import avisImg from '../assets/Immawati/avis.png';
import itsnaImg from '../assets/Immawati/itsna.png';
import triImg from '../assets/Kader/tri.png';
import caturImg from '../assets/Medkom/catur.png';
import ilhamImg from '../assets/Medkom/ilham.png';
import jarqImg from '../assets/Medkom/jarq.png';
import etriImg from '../assets/Organisasi/etri.png';
import ranaImg from '../assets/Organisasi/rana.png';
import asriImg from '../assets/PI/asri.png';
import ianImg from '../assets/PI/ian.png';
import sintaImg from '../assets/PI/sinta.png';
import annasImg from '../assets/RPK/annas.png';
import fajarImg from '../assets/RPK/fajar.png';
import bayuImg from '../assets/SBO/bayu.png';
import dickyImg from '../assets/SBO/dicky.png';
import hilmyImg from '../assets/SBO/hilmy.png';
import ririsImg from '../assets/SBO/riris.png';
import luthfiImg from '../assets/SPM/luthfi.png';
import imoImg from '../assets/TKK/imo.png';
import lalakImg from '../assets/TKK/lalak.png';
import ainiImg from '../assets/Immawati/aini.png';
import nafisImg from '../assets/Kader/nafis.png';
import putriImg from '../assets/SPM/Putri.png';
import rizmiImg from '../assets/rizmi-logo.png';
import khaldunImg from '../assets/imm-khaldun.png';
import sumanImg from '../assets/imm-suman.png';
import badawiImg from '../assets/badawi-imm.png';
import abadImg from '../assets/abad.jpg';
import bskmImg from '../assets/bskm.png';
import logoImm from '../assets/Logo IMM Terbaru.png';
import logoUGM from '../assets/Logo UGM.png';
import logoUNY from '../assets/uny.png';
import logoBaitar from '../assets/baitar-logo.png'
import { Link } from 'react-router-dom';

const Profile = () => {
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
                <li><a><Link to="/homepage">Beranda</Link></a></li>
                <li><a className='active-navbar'><Link to="/profile">Profile</Link></a></li>
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
    <main className="content-profile">
        <h1 className="title-profile">PIMPINAN CABANG IMM BULAKSUMUR KARANGMALANG 2024</h1>
        <br />
        <div className="tema-profile">EDUKATIF MENGGEMBIRAKAN SEBAGAI PERWUJUDAN DARI SEMANGAT BELAJAR DAN MEMBELAJARKAN DENGAN CARA-CARA
            YANG CERDAS, ETIS, DAN BISA DITERIMA SEMUA KALANGAN SECARA MENYENANGKAN
        </div>
        {/* <img src={bskmImg} alt="Logo KKN Mentari Mlati" className="logo2"/> */}
        <div className="filosofi-logo" style={{marginTop: '100px'}}>
            <h2>Pimpinan Komisariat IMM Bulaksumur Karangmalang</h2>
            <div className="underline"></div>
            <div className="row">
                <div className="column-bidang">
                    <div className="content-body">
                        <div><img src={rizmiImg} alt="Warna Biru"/></div>
                        <h3>PK Al-Khawarizmi</h3>
                        <p>Menaungi kader Ikatan Mahasiswa Muhammadiyah Universitas Gadjah Mada kluster Saintek</p>
                    </div>
                </div>
                <div className="column-bidang">
                    <div className="content-body">
                        <div><img src={logoBaitar} alt="Warna Hijau" width="150px" height="150px"/></div>
                        <h3>PK Al-Baitar</h3>
                        <p>Menaungi kader Ikatan Mahasiswa Muhammadiyah Universitas Gadjah Mada kluster Agro</p>
                    </div>
                </div>
                <div className="column-bidang">
                    <div className="content-body">
                        <div><img src={khaldunImg} alt="Matahari" width="150px" height="150px"/></div>
                        <h3>PK Ibnu-Khaldun</h3>
                        <p>Menaungi kader Ikatan Mahasiswa Muhammadiyah Universitas Gadjah Mada kluster Soshum</p>
                    </div>
                </div>
                <div className="column-bidang">
                    <div className="content-body">
                        <div><img src={badawiImg} alt="Hewan" width="150px" height="150px"/></div>
                        <h3>PK Ahmad Badawi</h3>
                        <p>Menaungi kader Ikatan Mahasiswa Muhammadiyah Universitas Negeri Yogyakarta kluster Saintek
                        </p>
                    </div>
                </div>
                <div className="column-bidang">
                    <div className="content-body">
                        <div><img src={sumanImg} alt="Bunga" width="150px" height="150px"/></div>
                        <h3>PK Sutan Mansyur</h3>
                        <p>Menaungi kader Ikatan Mahasiswa Muhammadiyah Universitas Negeri Yogyakarta kluster Soshum</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="tim" style={{marginTop: "100px"}}>
            <h2>Pimpinan Cabang IMM BSKM periode 2024</h2>
            {/* <div className="underline"></div>
            <div className="row-profile">
                <div className="column3">
                    <div className="content-body">
                        <img src="assets/Unan-Yusmaniar.png" alt="Unan Yusmaniar Oktiawati, S.T., M,Sc., Ph.D." width="225px" height="225px">
                        <h3>Unan Yusmaniar Oktiawati, S.T., M,Sc., Ph.D.</h3>
                        <p>Dosen Pembimbing Lapangan</p>
                    </div>
                </div>
            </div> */}
            <span className="sub-sub-title">--Pengurus Inti--</span>
            <div className="row-profile">
                <div className="column-profile">
                    <div className="content-body">
                        <img src={asriImg} alt="" width="225px" height="225px"/>
                        <h3>Asri Puspita Sari</h3>
                        <p>Sekretaris Umum</p>
                        <p>Universitas Gadjah Mada</p>
                    </div>
                </div>
                <div className="column-profile">
                    <div className="content-body">
                        <img src={ianImg} alt="" width="225px" height="225px"/>
                        <h3>Muhammad Novianto Putro</h3>
                        <p>Ketua Umum</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column-profile">
                    <div className="content-body">
                        <img src={sintaImg} alt="" width="225px" height="225px"/>
                        <h3>Haniifah Nur Shinta Dewi</h3>
                        <p>Bendahara Umum</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
            </div>
            <span className="sub-sub-title">--Bidang Organisasi--</span>
            <div className="row3">
                <div className="column4first">
                    <div className="content-body">
                        <img src={etriImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Etri Suryani</h3>
                        <p>Ketua Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column4second">
                    <div className="content-body">
                        <img src={ranaImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Rana Labiba Azzahra</h3>
                        <p>Sekretaris Bidang</p>
                        <p>Universitas Gadjah Mada</p>
                    </div>
                </div>
            </div>
            <span className="sub-sub-title">--Bidang Kader--</span>
            <div className="row3">
                <div className="column4first">
                    <div className="content-body">
                        <img src={triImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Tri Susanto</h3>
                        <p>Ketua Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column4second">
                    <div className="content-body">
                        <img src={nafisImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Nafis Muthmainnah</h3>
                        <p>Sekretaris Bidang</p>
                        <p>Universitas Gadjah Mada</p>
                    </div>
                </div>
            </div>
            <span className="sub-sub-title">--Bidang Hikmah--</span>
            <div className="row-profile">
                <div className="column-profile">
                    <div className="content-body">
                        <img src={rizalImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Fahrurizal Mahendra</h3>
                        <p>Sekretaris Umum</p>
                        <p>Universitas Gadjah Mada</p>
                    </div>
                </div>
                <div className="column-profile">
                    <div className="content-body">
                        <img src={saipImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Faqih Saifudin</h3>
                        <p>Ketua Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column-profile">
                    <div className="content-body">
                        <img src={alamImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Ahmad Nur Alamsyah</h3>
                        <p>Anggota Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
            </div>
            <span className="sub-sub-title">--Bidang Riset dan Pengembangan Keilmuan--</span>
            <div className="row3">
                <div className="column4first">
                    <div className="content-body">
                        <img src={annasImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Annas Hafidz Ihsanudin</h3>
                        <p>Ketua Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column4second">
                    <div className="content-body">
                        <img src={fajarImg} style={{width:"225px", height:"225px"}}/>
                        <h3>MF Fajar Ramadhan SH</h3>
                        <p>Sekretaris Bidang</p>
                        <p>Universitas Gadjah Mada</p>
                    </div>
                </div>
            </div>
            <span className="sub-sub-title">--Bidang Tabligh dan Kajian Keislaman--</span>
            <div className="row3">
                <div className="column4first">
                    <div className="content-body">
                        <img src={lalakImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Fathul Laili Khoirunnisa</h3>
                        <p>Ketua Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column4second">
                    <div className="content-body">
                        <img src={imoImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Anggraini Puspita Imani</h3>
                        <p>Sekretaris Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
            </div>
            <span className="sub-sub-title">--Bidang Sosial dan Pemberdayaan Masyarakat--</span>
            <div className="row3">
                <div className="column4first">
                    <div className="content-body">
                        <img src={luthfiImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Luthfiyyah Ariana</h3>
                        <p>Ketua Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column4second">
                    <div className="content-body">
                        <img src={putriImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Putri Nabilah Aqilah</h3>
                        <p>Sekretaris Bidang</p>
                        <p>Universitas Gadjah Mada</p>
                    </div>
                </div>
            </div>
            <span className="sub-sub-title">--Bidang Ekonomi dan Kewirausahaan--</span>
            <div className="row3">
                <div className="column4first">
                    <div className="content-body">
                        <img src={akramImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Akram Putra Pratama</h3>
                        <p>Ketua Bidang</p>
                        <p>Universitas Gadjah Mada</p>
                    </div>
                </div>
                <div className="column4second">
                    <div className="content-body">
                        <img src={hanaImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Siti Rohanah</h3>
                        <p>Sekretaris Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
            </div>
            <span className="sub-sub-title">--Bidang Immawati--</span>
            <div className="row-profile">
                <div className="column-profile">
                    <div className="content-body">
                        <img src={ainiImg} alt="" style={{width:"225px", height:"225px"}}/>
                        <h3>Qurotul Aini</h3>
                        <p>Sekretaris Umum</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column-profile">
                    <div className="content-body">
                        <img src={itsnaImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Itsna Naziihah</h3>
                        <p>Ketua Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column-profile">
                    <div className="content-body">
                        <img src={avisImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Avicenna Putri Hamidah</h3>
                        <p>Anggota Bidang</p>
                        <p>Universitas Gadjah Mada</p>
                    </div>
                </div>
            </div>
            <span className="sub-sub-title">--Bidang Seni Budaya dan Olahraga--</span>
            <div className="row-profile">
                <div className="column-profile">
                    <div className="content-body">
                        <img src={dickyImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Dicky Nur Fauzi</h3>
                        <p>Sekretaris Bidang</p>
                        <p>Universitas Gadjah Mada</p>
                    </div>
                </div>
                <div className="column-profile">
                    <div className="content-body">
                        <img src={ririsImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Rizqy Nur Laili</h3>
                        <p>Ketua Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column-profile">
                    <div className="content-body">
                        <img src={hilmyImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Hilmy Azizah Retna</h3>
                        <p>Anggota Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column-profile">
                    <div className="content-body">
                        <img src={bayuImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Ardiansyah Hasan Bayu</h3>
                        <p>Anggota Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
            </div>
            <span className="sub-sub-title">--Bidang Media dan Komunikasi--</span>
            <div className="row-profile">
                <div className="column-profile">
                    <div className="content-body">
                        <img src={jarqImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Fauzan Jarqi</h3>
                        <p>Sekretaris Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column-profile">
                    <div className="content-body">
                        <img src={ilhamImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Ahmad Ilham Arrozi</h3>
                        <p>Ketua Bidang</p>
                        <p>Universitas Negeri Yogyakarta</p>
                    </div>
                </div>
                <div className="column-profile">
                    <div className="content-body">
                        <img src={caturImg} style={{width:"225px", height:"225px"}}/>
                        <h3>Catur Ari Firmansyah</h3>
                        <p>Anggota Bidang</p>
                    <p>Universitas Gadjah Mada</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="proker" style={{marginTop: "100px"}}>
            <h2>Output Program Kerja</h2>
            <div className="underline"></div>
            <div className="row1">
                <div className="column1">
                    <div className="content-body1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 style={{textAlign: "center"}} className="subunit">PENGURUS<br/>INTI</h3>
                        <Link to='/outputpimpinan' style={{textAlign: "center"}}>Klik di sini</Link>
                    </div>
                </div>
                <div className="column1">
                    <div className="content-body1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 style={{textAlign: "center"}} className="subunit">BIDANG<br/>KADER</h3>
                        <Link to='/outputkader' style={{textAlign: "center"}}>Klik di sini</Link>
                    </div>
                </div>
                <div className="column1">
                    <div className="content-body1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 style={{textAlign: "center"}} className="subunit">BIDANG<br/>ORGANISASI</h3>
                        <Link to='/outputorganisasi' style={{textAlign: "center"}}>Klik di sini</Link>
                    </div>
                </div>
                <div className="column1">
                    <div className="content-body1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 style={{textAlign: "center"}} className="subunit">BIDANG<br/>IMMAWATI</h3>
                        <Link to='/outputimmawati' style={{textAlign: "center"}}>Klik di sini</Link>
                    </div>
                </div>
                <div className="column1">
                    <div className="content-body1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 style={{textAlign: "center"}} className="subunit">BIDANG<br/>RPK</h3>
                        <Link to='/outputrpk' style={{textAlign: "center"}}>Klik di sini</Link>
                    </div>
                </div>
                <div className="column1">
                    <div className="content-body1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 style={{textAlign: "center"}} className="subunit">BIDANG<br/>HIKMAH</h3>
                        <Link to='/outputhikmah' style={{textAlign: "center"}}>Klik di sini</Link>
                    </div>
                </div>
                <div className="column1">
                    <div className="content-body1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 style={{textAlign: "center"}} className="subunit">BIDANG<br/>SPM</h3>
                        <Link to='/outputspm' style={{textAlign: "center"}}>Klik di sini</Link>
                    </div>
                </div>
                <div className="column1">
                    <div className="content-body1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 style={{textAlign: "center"}} className="subunit">BIDANG<br/>TKK</h3>
                        <Link to='/outputtkk' style={{textAlign: "center"}}>Klik di sini</Link>
                    </div>
                </div>
                <div className="column1">
                    <div className="content-body1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 style={{textAlign: "center"}} className="subunit">BIDANG<br/>EK</h3>
                        <Link to='/outputek' style={{textAlign: "center"}}>Klik di sini</Link>
                    </div>
                </div>
                <div className="column1">
                    <div className="content-body1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 style={{textAlign: "center"}} className="subunit">BIDANG<br/>SBO</h3>
                        <Link to='/outputsbo' style={{textAlign: "center"}}>Klik di sini</Link>
                    </div>
                </div>
                <div className="column1">
                    <div className="content-body1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <h3 style={{textAlign: "center"}} className="subunit">BIDANG<br/>MEDKOM</h3>
                        <Link to='/outputmedkom' style={{textAlign: "center"}}>Klik di sini</Link>
                    </div>
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

export default Profile