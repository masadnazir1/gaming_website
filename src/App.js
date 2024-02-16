// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Favorites from './components/Favorites';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Unsubscribe from './components/Unsubscribe';





function App() {
  return (
    <Router>
      <Navigation />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;