import './App.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Faq from './Components/Faq';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='contact' element={<Contact />} />
          <Route path='faq' element={<Faq />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
