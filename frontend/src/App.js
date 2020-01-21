import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import GalleryPage from "./components/GalleryPage";
import ReviewsPage from "./components/ReviewPage";
import GetQuotePage from "./components/GetQuotePage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/gallery" component={GalleryPage} />
      <Route exact path="/reviews" component={ReviewsPage} />
      <Route exact path="/getquote" component={GetQuotePage} />
      <Footer />
    </Router>
  );
}

export default App;
