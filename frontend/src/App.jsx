import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

// Import Layout and Pages
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/meliorism-website">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;