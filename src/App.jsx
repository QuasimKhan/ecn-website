import './App.css';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Books from './components/Books/Books';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/books' element={<Books />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
