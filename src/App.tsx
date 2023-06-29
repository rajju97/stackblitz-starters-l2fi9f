import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navigation from './components/Navigation';
import About from './components/pages/about';
import Dashboard from './components/pages/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Footer from './footer';
import Registration from './components/pages/registration';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
