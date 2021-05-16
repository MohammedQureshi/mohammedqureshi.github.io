import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import AboutMe from './components/pages/About-Me';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/Contact-Me'

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-me' exact component={AboutMe} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact-me' exact component={ContactMe} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
