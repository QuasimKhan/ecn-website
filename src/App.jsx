import './App.css';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import StudyMaterials from './components/StudyMaterials/StudyMaterials';
import Books from './components/Books/Books';
import Footer from './components/Footer/Footer';
import Notices from './components/Notices/Notices';
import { GalleryWithTab } from './components/Gallery/Gallery';
import PageNotFound from './components/PageNotFound/PageNotFound'
import AboutECN from './components/About/AboutECN/AboutECN';
import ArkaaneShura from './components/About/ArkaaneShura/ArkaaneShura';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/studymaterials' element={<StudyMaterials />} />
        <Route path='about'>
          <Route path='aboutECN' element={<AboutECN/>} />
          <Route path='arkaaneshura' element={<ArkaaneShura/>} />
        </Route>
        <Route path='/books' element={<Books />} />
        <Route path='/Notices' element={<Notices />} />
        <Route path="/gallery/:page" element={<GalleryWithTab />} />
        <Route path="/gallery" element={<GalleryWithTab />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
