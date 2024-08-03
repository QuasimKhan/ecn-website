import './App.css';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Books from './components/Books/Books';
import Footer from './components/Footer/Footer';
import Notices from './components/Notices/Notices';
import { GalleryWithTab } from './components/Gallery/Gallery';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/books' element={<Books />} />
        <Route path='/Notices' element={<Notices />} />
        <Route path="/gallery/:page" element={<GalleryWithTab />} />
        <Route path="/gallery" element={<GalleryWithTab />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
