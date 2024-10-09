import React from 'react';
import '../style/style-rizmi.css';
import bskmImg from '../assets/bskm.png';
import logoImm from '../assets/Logo IMM Terbaru.png';
import logoUGM from '../assets/Logo UGM.png';
import logoUNY from '../assets/uny.png';
import logoBaitar from '../assets/baitar.jpeg';
import headerRizmi from '../assets/rizmi.jpeg';
import headerKhaldun from '../assets/khaldun.jpeg';
import sumanImg from '../assets/imm-suman.png';
import badawiImg from '../assets/badawi-imm.png';
import abadImg from '../assets/abad.jpg';
import headerSuman from '../assets/suman.jpeg';
import { Link } from 'react-router-dom';

const Rizmi = () => {
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
                <li><a ><Link to="/homepage">Beranda</Link></a></li>
                <li><a><Link to="/profile">Profile</Link></a></li>
                <li><a><Link to="/tulisan">Tulisan Kader</Link></a></li>
                <li className='dropdown'>
                    <a>Kabar Terkini <i className='fas fa-angle-down' style={{fontSize: '17px', fontWeight: 600}}></i></a>
                    <ul className='dropdown-content'>
                        <li><a className='active-navbar'><Link to="/rizmi">Pimpinan Komisariat Al-Khawarizmi</Link></a></li>
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
    <main className="content-rizmi">
        <div className="artikel">
            <h1 style={{marginTop: 0 , textAlign: 'center'}}>Pimpinan Komisariat Al-Khawarizmi</h1>
            <div className="paragraf">
                <div className="img-container-rizmi">
                    <img className="slides" src={headerRizmi} alt="Festival Begawe Jelo Nyensek 2019 di Desa Sukarara"/>
                </div>
                <div>
                <p>
                <p className="sumber">Sumber gambar: Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos, deserunt numquam cupiditate architecto perferendis saepe velit est id eveniet ut aliquam dolore sunt tempore unde deleniti, qui, excepturi harum!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, in ipsam? Eveniet expedita cum voluptatum fugit sunt, illum assumenda omnis cupiditate esse, explicabo quis, quibusdam nulla exercitationem quae natus repudiandae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi explicabo necessitatibus dolore voluptatibus alias laudantium omnis culpa odio officia dolorum, animi, sit sint temporibus nemo nulla voluptatum incidunt cupiditate!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam iusto incidunt velit illo corporis quos sequi! Accusantium ipsa neque, atque cupiditate non illo maiores id a qui iure praesentium maxime. </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id natus pariatur fugiat! Sint suscipit consectetur cum aspernatur quia quidem, voluptatum minus ratione, neque quae eveniet, non qui ex amet modi.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aliquid voluptates nam accusamus ullam. Illum eos, debitis perferendis, dignissimos atque quo numquam magni ut neque vitae accusantium voluptatem quia? Ab!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perferendis voluptate quod, ea ducimus, voluptates fugiat ab eum eos aspernatur corporis hic amet, illo nostrum exercitationem excepturi alias dolores. Similique!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae natus saepe accusantium? Molestias fugiat omnis placeat necessitatibus rem consequatur! Ratione praesentium, veniam autem ipsum sapiente beatae deleniti esse nesciunt.</p>
                    <a href="kantin-21.html" style={{textDecoration: 'none'}}>Lorem</a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt consequatur, architecto in deleniti expedita autem mollitia officia, repellat officiis nobis natus dicta quae veniam eaque, praesentium magnam! Voluptatibus, facere.
                    <a href="pasar-bambu.html" style={{textDecoration: 'none'}}>Lorem</a>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet placeat praesentium cum, distinctio reprehenderit rerum incidunt natus atque illo ipsa? Ducimus excepturi rerum quo a saepe quasi! Aliquid, quae.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptates eligendi dolor sequi totam corrupti ut mollitia voluptatem ex sunt? Voluptatum doloribus, quo tempora natus minus aliquam excepturi culpa consectetur!
                    <a href="tebing-purba.html" style={{textDecoration: 'none'}}>Lorem</a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim facere eos exercitationem esse error doloribus tempore illo unde in ab repellendus temporibus, dolor voluptates accusamus maiores, adipisci optio quidem. <a href="hamparan-sawah.html" style={{textDecoration: 'none'}}>Lorem</a> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, exercitationem! Veniam modi, natus magnam, consequuntur velit aperiam reprehenderit cum tempore dignissimos animi qui! Modi, facere necessitatibus? Dolor ipsum perspiciatis sed!</p>
            </div>
        </div>
        </div>
        <div className="list-artikel">
            <div>
                <p className=".title-komsat" style={{textAlign: 'center', fontStyle: 'italic', fontSize: 20, fontFamily: '-moz-initial'}}>Profil Komsat</p>
                <div className="row-rizmi">
                    <div className="column-rizmi">
                        <a><Link to='/khaldun'>
                            <div className="content-body-rizmi">
                                <img src={headerKhaldun} alt="Kalurahan Tirtoadi" style={{width:"100%"}}/>
                                <p>Pimpinan Komisariat Ibnu Khaldun</p>
                            </div>
                            </Link>
                        </a>
                    </div>
                    <div className="column-rizmi">
                        <a><Link to='/baitar'>
                            <div className="content-body-rizmi">
                                <img src={logoBaitar} alt="Kalurahan Tirtoadi" style={{width:"100%"}}/>
                                <p>Pimpinan Komisariat Al-Baitar</p>
                            </div>
                            </Link>
                        </a>
                    </div>
                    <div className="column-baitar">
                        <a><Link to='/suman'>
                            <div className="content-body-baitar">
                                <img src={headerSuman} alt="Kalurahan Tirtoadi" style={{width:"100%"}}/>
                                <p>Pimpinan Komisariat Sutan Mansyur</p>
                            </div>
                            </Link>
                        </a>
                    </div>
                    <div className="column-baitar">
                        <a><Link to='/badawi'>
                            <div className="content-body-baitar">
                                <img src={badawiImg} alt="Kalurahan Tirtoadi" style={{width:"100%"}}/>
                                <p>Pimpinan Komisariat Ahmad Badawi</p>
                            </div>
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <p className=".title-komsat" style={{marginTop: '60px', textAlign: 'center', fontStyle: 'italic', fontSize: 20, fontFamily: '-moz-initial'}}>Destinasi Wisata Terpopuler</p>
                <div className="row-rizmi">
                    <div className="column-rizmi">
                        <a href="desa-wisata-ketingan.html">
                            <div className="content-body-rizmi">
                                <img src={headerRizmi} alt="Desa Wisata Ketingan" style={{width:"100%"}}/>
                                <p>Desa Wisata Ketingan</p>
                            </div>
                        </a>
                    </div>
                    <div className="column-rizmi">
                        <a href="desa-wisata-budaya-rawe.html">
                            <div className="content-body-rizmi">
                                <img src={headerRizmi} alt="Dewi Rawe" style={{width:"100%"}}/>
                                <p>Desa Wisata Rawe</p>
                            </div>
                        </a>
                    </div>
                    <div className="column-rizmi">
                        <a href="embung-lampeyan.html">
                            <div className="content-body-rizmi">
                                <img src={headerRizmi} alt="Embung Lampeyan" style={{width:"100%"}}/>
                                <p>Embung Lampeyan</p>
                            </div>
                        </a>
                    </div>
                    <div className="column-rizmi">
                        <a href="embung-senja.html">
                            <div className="content-body-rizmi">
                                <img src={headerRizmi} alt="Embung Senja" style={{width:"100%"}}/>
                                <p>Embung Senja</p>
                            </div>
                        </a>
                    </div>
                    <div className="column-rizmi">
                        <a href="sentra-industri-bambu-sendari.html">
                            <div className="content-body-rizmi">
                                <img src={headerRizmi} alt="Sentra Industri Bambu Sendari" style={{width:"100%"}}/>
                                <p>Industri Bambu Sendari</p>
                            </div>
                        </a>
                    </div>
                    <div className="column-rizmi">
                        <a href="sentra-industri-batik-alusan.html">
                            <div className="content-body-rizmi">
                                <img src={headerRizmi} alt="Sentra Industri Batik Alusan" style={{width:"100%"}}/>
                                <p>Industri Batik Alusan</p>
                            </div>
                        </a>
                    </div>
                    <div className="column-rizmi">
                        <a href="dheling-asri-tirtoadi.html">
                            <div className="content-body-rizmi">
                                <img src={headerRizmi} alt="Dheling Asri di Tirtoadi" style={{width:"100%"}}/>
                                <p>Industri Mebel Bambu Dheling Asri</p>
                            </div>
                        </a>
                    </div>
                    <div className="column-rizmi">
                        <a href="kampung-flory.html">
                            <div class="content-body-rizmi">
                                <img src={headerRizmi} alt="Kampung Flory" style={{width:"100%"}}/>
                                <p>Kampung Flory</p>
                            </div>
                        </a>
                    </div>
                    <div className="column-rizmi">
                        <a href="sendang-nyamplungan.html">
                            <div className="content-body-rizmi">
                                <img src={headerRizmi} alt="Sendang Nyamplungan" style={{width:"100%"}}/>
                                <p>Sendang Nyamplungan</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <p className=".title-komsat" style={{marginTop: '60px'}}>Artikel Tim KKN PPM UGM Mentari Mlati 2023</p>
                <div className="artikel-lain">
                    <a href="artikel-agro.html">Jurnal Kluster Agro Tim KKN PPM UGM Mentari Mlati</a>
                </div>
                <div className="artikel-lain">
                    <a href="artikel-saintek.html">Jurnal Kluster Sains dan Teknologi Tim KKN PPM UGM Mentari Mlati</a>
                </div>
                <div className="artikel-lain">
                    <a href="artikel-soshum.html">Jurnal Kluster Sosial dan Humaniora Tim KKN PPM UGM Mentari Mlati</a>
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

export default Rizmi