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
import AdminPage from './components/AdminPage'
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
			<ProtectedRoute path='/admin' component={AdminPage} />
			{/* <ProtectedRoute path='/admin/gallery' component={ProtectedRoute} />
			<ProtectedRoute path='/admin/reviews' component={ProtectedRoute} />
			<ProtectedRoute path='/admin/quotes' component={ProtectedRoute} /> */}
		</Switch>
    <Footer />
  </Router>
)

export default App;

