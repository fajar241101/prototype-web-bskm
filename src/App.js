import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Dad from './pages/Dad';
import Dam from './pages/Dam';
import Profile from './pages/Profile';
import Rizmi from './pages/Rizmi';
import Khaldun from './pages/Khaldun';
import Baitar from './pages/Baitar';
import Suman from './pages/Suman';
import Badawi from './pages/Badawi';
import Infocenter from './pages/Infocenter';
import Tulisan from './pages/Tulisan';
import Tulisan2 from './pages/Tulisan2';
import Tulisan3 from './pages/Tulisan3';
import Outputpimpinan from './output-halaman-satu/Outputpimpinan';
import Outputkader from './output-halaman-satu/Outputkader';
import Outputorganisasi from './output-halaman-satu/Outputorganisasi';
import Outputimmawati from './output-halaman-satu/Outputimmawati';
import Outputrpk from './output-halaman-satu/Outputrpk';
import Outputsbo from './output-halaman-satu/Outputsbo';
import Outputek from './output-halaman-satu/Outputek';
import Outputhikmah from './output-halaman-satu/Outputhikmah';
import Outputmedkom from './output-halaman-satu/Outputmedkom';
import Outputspm from './output-halaman-satu/Outputspm';
import Outputtkk from './output-halaman-satu/Outputtkk';
import Pimpinan from './proker/pimpinan';
import Orgsatu from './prokerorganisasi/orgsatu';
import Ekowir from './prokerek/ekowir';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/dad' element={<Dad/>}/>
          <Route path='/dam' element={<Dam/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/rizmi' element={<Rizmi/>}/>
          <Route path='/khaldun' element={<Khaldun/>}/>
          <Route path='/baitar' element={<Baitar/>}/>
          <Route path='/suman' element={<Suman/>}/>
          <Route path='/badawi' element={<Badawi/>}/>
          <Route path='/infocenter' element={<Infocenter/>}/>
          <Route path='/tulisan' element={<Tulisan/>}/>
          <Route path='/tulisan2' element={<Tulisan2/>}/>
          <Route path='/tulisan3' element={<Tulisan3/>}/>
          <Route path='/outputpimpinan' element={<Outputpimpinan/>}/>
          <Route path='/outputkader' element={<Outputkader/>}/>
          <Route path='/outputorganisasi' element={<Outputorganisasi/>}/>
          <Route path='/outputimmawati' element={<Outputimmawati/>}/>
          <Route path='/outputrpk' element={<Outputrpk/>}/>
          <Route path='/outputsbo' element={<Outputsbo/>}/>
          <Route path='/outputek' element={<Outputek/>}/>
          <Route path='/outputhikmah' element={<Outputhikmah/>}/>
          <Route path='/outputmedkom' element={<Outputmedkom/>}/>
          <Route path='/outputtkk' element={<Outputtkk/>}/>
          <Route path='/outputspm' element={<Outputspm/>}/>
          <Route path='/pimpinan' element={<Pimpinan/>}/>
          <Route path='/orgsatu' element={<Orgsatu/>}/>
          <Route path='/ekowir' element={<Ekowir/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
