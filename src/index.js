import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import Footer from './components/Footer';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

const routing = (
  <Router>
    <nav>
      <Link to="/" className="button">Home</Link>
      <Link to="/About" className="button">About</Link>
      <Link to="/Contact" className="button">Contact</Link>
    </nav>
    <Route exact path="/" component={App} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Footer />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();