import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import NavbarComponent from './components/Navbar';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import ReviewsPage from './components/ReviewPage';
import GetQuotePage from './components/GetQuotePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AdminPage from './components/AdminPage';
import AdminGalleryPage from './components/AdminGalleryPage';
import AdminReviewsPage from './components/AdminReviewsPage';
import AdminQuotePage from './components/AdminQuotePage';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <NavbarComponent />
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/gallery' component={GalleryPage} />
			<Route exact path='/reviews' component={ReviewsPage} />
			<Route exact path='/getquote' component={GetQuotePage} />
			<Route exact path='/register' component={RegisterPage} />
			<Route exact path='/login' component={LoginPage} />
			<ProtectedRoute exact path='/admin' component={AdminPage} />
			<ProtectedRoute exact path='/admin/gallery' component={AdminGalleryPage} />
			<ProtectedRoute exact path='/admin/reviews' component={AdminReviewsPage} />
			<ProtectedRoute exact path='/admin/quote' component={AdminQuotePage} />
		</Switch>
    <Footer />
  </Router>
)

export default App;

