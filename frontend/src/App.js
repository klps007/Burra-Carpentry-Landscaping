import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import NavbarComponent from './components/Navbar';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import ReviewsPage from './components/ReviewPage';
import GetQuotePage from './components/GetQuotePage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/gallery' component={GalleryPage} />
      <Route exact path='/reviews' component={ReviewsPage} />
      <Route exact path='/getquote' component={GetQuotePage} />
      <Footer />
    </Router>
  );
}

export default App;
