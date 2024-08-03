import './App.css'
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Books from './components/Books/Books';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/about' component={About} />
          <Route exact path='/books' component={Books} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
