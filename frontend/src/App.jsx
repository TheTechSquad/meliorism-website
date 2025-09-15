import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

// Import Layout and Pages
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Donate from './pages/Donate';
import DonationSuccess from './pages/DonationSuccess';
import DonationHistory from './pages/DonationHistory';
import Volunteer from './pages/Volunteer';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donation-success" element={<DonationSuccess />} />
          <Route path="/donation-history" element={<DonationHistory />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Navigate to="/projects" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
