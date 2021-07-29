import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/home_page/HomePage'
import ExperiancePage from "./pages/experiance_page/ExperiancePage";
import Projects from "./pages/projects/Projects";
import ContactMe from "./pages/contact_me/ContactMe";
import NotFound from "./pages/not_found/NotFound";
import SocialBar from "./components/socialbar/SocialBar";
import './components/shared/_DefaultColours.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SocialBar />
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/experience" exact component={ExperiancePage}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/contact" exact component={ContactMe} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
