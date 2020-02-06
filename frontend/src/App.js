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
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute'
import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends React.Component {
//   async componentDidMount() {
//     const response = await fetch(`${process.env.REACT_APP_API_URL}/hello`)
//     const data = await response.json()
//     console.log(data)
//   }

// ,netlfy   
// {
// 	"siteId": "85a10751-abd7-48dd-908b-9ea65f241745"
// }

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
		</Switch>
    <Footer />
  </Router>
)

export default App;

