
import './App.css'
import NavBar from './components/Navbar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Books from './components/Books/Books'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Books' element={<Books/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
