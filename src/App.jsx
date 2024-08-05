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
import { Helmet } from 'react-helmet';



function App() {
  return (
    <BrowserRouter>
     <Helmet>
        <title>Home - ECN</title>
        <meta name="description" content="The Educational Committee of Naseerpur (ECN), based in Naseerpur, is dedicated to spreading education and awareness. The Committee tirelessly work to teach and support learning, making a positive imapact on the society" />
        <meta name="keywords" content="ecn, Educational Committee of Naseerpur, ECNaseerpur, Naseerpur, Naseerpur Azamgarh, Naseerpur Educational society, Naseerpur Educational Committee, Quasim Khan" />
        <link rel="canonical" href="https://ecnaseerpur.in" />
        <meta name="robots" content="index,follow"/>
        <meta name="author" content="Quasim Khan, ECN"/>
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - ECN" />
        <meta property="og:description" content="The Educational Committee of Naseerpur (ECN), based in Naseerpur, is dedicated to spreading education and awareness. The Committee tirelessly work to teach and support learning, making a positive imapact on the society." />
        <meta property="og:image" content="https://ecnaseerpur.in/assets/logo-CCgY3ykc.png" />
        <meta property="og:url" content="https://ecnaseerpur.in" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - ECN" />
        <meta name="twitter:description" content="The Educational Committee of Naseerpur (ECN), based in Naseerpur, is dedicated to spreading education and awareness. The Committee tirelessly work to teach and support learning, making a positive imapact on the society" />
        <meta name="twitter:image" content="https://ecnaseerpur.in/assets/logo-CCgY3ykc.png" />
      </Helmet>


      
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
