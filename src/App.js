import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
