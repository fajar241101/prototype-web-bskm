import React from 'react';
import '../style/style-infocenter.css';
import bskmImg from '../assets/bskm.png';
import logoImm from '../assets/Logo IMM Terbaru.png';
import logoUGM from '../assets/Logo UGM.png';
import logoUNY from '../assets/uny.png';
import logoBaitar from '../assets/baitar.jpeg';
import headerRizmi from '../assets/rizmi.jpeg';
import headerKhaldun from '../assets/khaldun.jpeg';
import abadImg from '../assets/abad.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Infocenter = () => {
    const [selectedImage1, setSelecteImage1]=useState(false);
    const [selectedImage2, setSelecteImage2]=useState(false);
    function barFunction() {
        document.getElementById("menu-bar").classList.toggle("change");
        document.getElementById("navbar").classList.toggle("show-navbar");
    }

    const showImg1 =()=>{
        setSelecteImage1(true);
        setSelecteImage2(false);
    }

    const showImg2 =()=>{
        setSelecteImage2(true);
        setSelecteImage1(false);
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
                <li><a><Link to="/profile">Profile</Link></a></li>
                <li><a href='peta.html'>Tulisan Kader</a></li>
                <li className='dropdown'>
                    <a>Profil Komsat<i className='fas fa-angle-down' style={{fontSize: '17px', fontWeight: 600}}></i></a>
                    <ul className='dropdown-content'>
                        <li><a><Link to="/rizmi">Pimpinan Komisariat Al-Khawarizmi</Link></a></li>
                        <li><a><Link to="/khaldun">Pimpinan Komisariat Ibnu-Khaldun</Link></a></li>
                        <li><a><Link to="/baitar">Pimpinan Komisariat Al-Baitar</Link></a></li>
                        <li><a><Link to="/suman">Pimpinan Komisariat Sutan Mansyur</Link></a></li>
                        <li><a><Link to="/badawi">Pimpinan Komisariat Ahmad Badawi</Link></a></li>
                    </ul>
                </li>
                <li><a className='active-navbar'><Link to='/infocenter'>Information Center</Link></a></li>
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
        <div className="peta-lokasi">
            <h1>Peta Lokasi Sekretariat IMM BSKM</h1>
            <div className="map-text-button">
                <div className="row">
                    {
                        selectedImage1 ? <div className="column2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2409214157474!2d110.38114107506694!3d-7.764255677007403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59adf632e781%3A0x7bfe80235cfc90ca!2sMasjid%20al-Muttaqin%20Tawangsari!5e0!3m2!1sid!2sid!4v1720876014236!5m2!1sid!2sid" width="600" height="500" style={{border: 0, borderRadius: '10px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> : <></>
                    }
                    {
                        selectedImage2 ? <div className="column2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.184888499988!2d110.37851827930669!3d-7.770209557068974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b43d6578a7%3A0x876e16d8782eb573!2sTK%20ABA%20Karangmalang!5e0!3m2!1sid!2sid!4v1720876272462!5m2!1sid!2sid" width="600" height="500" style={{border: 0, borderRadius: '10px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> : <></>
                    }
                </div>
                <div className="text-button">
                    <div className="text">Pilih lokasi <br></br>yang ingin Anda ketahui</div>
                    <div id="three-button">
                        <button className='btn' onClick={showImg1}>Masjid Al-Muttaqin Tawangsari</button>
                        <button className='btn' onClick={showImg2}>TK ABA Karangmalang</button>
                    </div>
                </div>
            </div>
        </div>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <div className="peta-infografis">
            <h1 style={{marginTop: 0}}>Information Center Cabang dan Komisariat</h1>
            <div className="row-infocenter">
                
                {/* <div className="column2">
                    {
                        selectedImage1 ? <img src={{bskmImg}} alt="Infografis Kalurahan Sumberadi" style={{width: '100%'}}/> : <></>
                    }
                    
                </div>
                <div className="column2">
                    {
                        selectedImage2 ? <img src={{bskmImg}} alt="Infografis Kalurahan Tirtoadi" style={{width: '100%'}}/> : <></>
                    }
                </div> */}
                {/* <div className="column2">
                    <img src={{bskmImg}} alt="Infografis Kalurahan Tlogoadi" style={{width: '100%'}}/>
                </div> */}
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

export default Infocenter