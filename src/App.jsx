
import './App.css'
import NavBar from './components/Navbar/NavBar '
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Books from './components/Books/Books'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound'
function App() {

  return (
    <>
    <NavBar/>
    <Router>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/services' component={Services}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/Books' component={Books}/>
        <Route component={PageNotFound}/>
    </Switch>
      </Router>
    <Footer/>
    </>
  )
}

export default App
