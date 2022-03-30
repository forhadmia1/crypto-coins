import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import BdAddress from './components/BdAddress/BdAddress';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import UsAddress from './components/UsAddress/UsAddress';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='/coin/:id' element={<CoinDetails/>}/>
        <Route path='/contact' element={<Contact/>}>
          <Route path='bd-address' element={<BdAddress/>}/>
          <Route path='us-address' element={<UsAddress/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
