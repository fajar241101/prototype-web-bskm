import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Rizmi from './pages/Rizmi';
import Khaldun from './pages/Khaldun';
import Baitar from './pages/Baitar';
import Suman from './pages/Suman';
import Badawi from './pages/Badawi';
import Infocenter from './pages/Infocenter'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/rizmi' element={<Rizmi/>}/>
          <Route path='/khaldun' element={<Khaldun/>}/>
          <Route path='/baitar' element={<Baitar/>}/>
          <Route path='/suman' element={<Suman/>}/>
          <Route path='/badawi' element={<Badawi/>}/>
          <Route path='/infocenter' element={<Infocenter/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
