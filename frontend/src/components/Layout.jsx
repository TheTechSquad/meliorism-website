import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="App">
      {/* Navbar with links to all sections */}
      <Navbar bg="white" variant="light" expand="lg" fixed="top" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src="/logo1.png" alt="Meliorism Partners Foundation Logo" height="40" className="me-2" />
            Meliorism Partners Foundation
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/programs" className={location.pathname === '/programs' ? 'active' : ''}>
                Programs
              </Nav.Link>
              <Nav.Link as={Link} to="/donate" className={location.pathname === '/donate' ? 'active' : ''}>
                Donate
              </Nav.Link>
              <Nav.Link as={Link} to="/volunteer" className={location.pathname === '/volunteer' ? 'active' : ''}>
                Volunteer
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main content */}
      <main>
        {children}
      </main>

      {/* Footer with social media links */}
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col lg={4} className="mb-4">
              <h5>Meliorism Partners Foundation</h5>
              <p>
                Empowering the next generation through education, comprehensive support programs, 
                and community development initiatives. Together, we inspire a culture of empowerment 
                that uplifts minds and drives societal progress.
              </p>
            </Col>
            <Col lg={2} className="mb-4">
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
                <li><Link to="/programs" className="text-light text-decoration-none">Programs</Link></li>
                <li><Link to="/donate" className="text-light text-decoration-none">Donate</Link></li>
                <li><Link to="/volunteer" className="text-light text-decoration-none">Volunteer</Link></li>
              </ul>
            </Col>
            <Col lg={3} className="mb-4">
              <h6>Contact Info</h6>
              <p className="mb-1">📧 meliorismpartnersfoundation@gmail.com</p>
              <p className="mb-1">📞 +233(0)591517852</p>
              <p className="mb-1">📞 +233(0)556102456</p>
              <p>🌐 Meliorism Partners Foundation</p>
            </Col>
            <Col lg={3} className="mb-4">
              <h6>Follow Us</h6>
              <div className="d-flex gap-3">
                <button className="btn btn-link text-light text-decoration-none p-0 border-0">Facebook</button>
                <button className="btn btn-link text-light text-decoration-none p-0 border-0">Twitter</button>
                <button className="btn btn-link text-light text-decoration-none p-0 border-0">Instagram</button>
                <button className="btn btn-link text-light text-decoration-none p-0 border-0">LinkedIn</button>
              </div>
            </Col>
          </Row>
          <hr className="my-4" />
          <Row>
            <Col className="text-center">
              <p className="mb-0">
                &copy; 2024 Meliorism Partners Foundation. All rights reserved. | 
                <button className="btn btn-link text-light text-decoration-none p-0 border-0"> Privacy Policy</button> | 
                <button className="btn btn-link text-light text-decoration-none p-0 border-0"> Terms of Service</button>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Layout;