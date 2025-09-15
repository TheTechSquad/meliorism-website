import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="App">
      {/* Navbar with links to all sections */}
      <Navbar bg="white" variant="light" expand="lg" fixed="top" style={{ 
        padding: '10px 0'
      }}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand-optimized">
            <img 
              src="logo1.png" 
              alt="Meliorism Partners Foundation Logo" 
              height="60"
              className="navbar-logo"
              loading="eager"
              style={{
                transform: 'translate3d(0,0,0)',
                backfaceVisibility: 'hidden',
                imageRendering: 'optimizeSpeed'
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="navbar-toggler-optimized"
            style={{
              border: 'none',
              padding: '4px 8px',
              backgroundColor: 'transparent',
              transform: 'translate3d(0,0,0)',
              backfaceVisibility: 'hidden'
            }}
          />
          <Navbar.Collapse 
            id="basic-navbar-nav"
            style={{
              transform: 'translate3d(0,0,0)',
              backfaceVisibility: 'hidden',
              contain: 'layout style paint'
            }}
          >
            <Nav className="ms-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                className={`nav-link-optimized ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/about" 
                className={`nav-link-optimized ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About Us
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/programs" 
                className={`nav-link-optimized ${location.pathname === '/programs' ? 'active' : ''}`}
              >
                Programs
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/volunteer" 
                className={`nav-link-optimized ${location.pathname === '/volunteer' ? 'active' : ''}`}
              >
                Volunteer
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/projects" 
                className={`nav-link-optimized ${location.pathname === '/projects' ? 'active' : ''}`}
              >
                Projects
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/contact" 
                className={`nav-link-optimized ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/donate" 
                className={`nav-donate-btn ${location.pathname === '/donate' ? 'active' : ''}`}
              >
                DONATE NOW
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
      <footer style={{
        background: 'linear-gradient(135deg, #175760 0%, #4F777F 100%)',
        color: 'white',
        padding: '80px 0 40px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '50%'
        }}></div>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="mb-5">
            <Col lg={4} className="mb-4">
              <div className="d-flex align-items-center mb-4">
                <img src="/logo.jpg" alt="Meliorism Partners Foundation Logo" height="50" className="me-3" style={{
                  borderRadius: '8px'
                }} />
                <h5 style={{
                  fontWeight: '700',
                  fontSize: '1.3rem',
                  margin: 0,
                  color: 'white'
                }}>
                  Meliorism Partners Foundation
                </h5>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '30px'
              }}>
                Empowering the next generation through education, comprehensive support programs, 
                and community development initiatives. Together, we inspire a culture of empowerment 
                that uplifts minds and drives societal progress.
              </p>
              
              {/* Social Media Icons */}
              <div>
                <h6 style={{
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: '#DDD6DD',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Follow Us
                </h6>
                <div className="d-flex gap-3">
                  {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                    <button 
                      key={platform}
                      style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'white';
                        e.target.style.color = '#175760';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      {platform[0]}
                    </button>
                  ))}
                </div>
              </div>
            </Col>
            
            <Col lg={2} className="mb-4">
              <h6 style={{
                fontWeight: '700',
                marginBottom: '25px',
                color: '#DDD6DD',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Quick Links
              </h6>
              <ul className="list-unstyled">
                {[
                  { text: 'About Us', path: '/about' },
                  { text: 'Programs', path: '/programs' },
                  { text: 'Donate Now', path: '/donate' },
                  { text: 'Volunteer', path: '/volunteer' },
                  { text: 'Projects', path: '/projects' },
                  { text: 'Contact', path: '/contact' }
                ].map((link) => (
                  <li key={link.path} style={{ marginBottom: '12px' }}>
                    <Link 
                      to={link.path} 
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        position: 'relative'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.color = '#DDD6DD';
                        e.target.style.paddingLeft = '10px';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.target.style.paddingLeft = '0';
                      }}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            
            <Col lg={3} className="mb-4">
              <h6 style={{
                fontWeight: '700',
                marginBottom: '25px',
                color: '#DDD6DD',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Contact Info
              </h6>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                <p style={{ 
                  marginBottom: '15px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    fontSize: '0.8rem'
                  }}>
                    📧
                  </span>
                  meliorismpartnersfoundation@gmail.com
                </p>
                <p style={{ 
                  marginBottom: '15px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    fontSize: '0.8rem'
                  }}>
                    📞
                  </span>
                  +233(0)591517852
                </p>
                <p style={{ 
                  marginBottom: '15px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    fontSize: '0.8rem'
                  }}>
                    📞
                  </span>
                  +233(0)556102456
                </p>
              </div>
            </Col>
            
            <Col lg={3} className="mb-4">
              <h6 style={{
                fontWeight: '700',
                marginBottom: '25px',
                color: '#DDD6DD',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Newsletter
              </h6>
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '20px'
              }}>
                Stay updated with our latest programs and initiatives.
              </p>
              <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '20px'
              }}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    flex: 1,
                    padding: '12px 15px',
                    borderRadius: '25px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                />
                <button style={{
                  padding: '12px 20px',
                  borderRadius: '25px',
                  border: 'none',
                  background: '#DDD6DD',
                  color: '#175760',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  →
                </button>
              </div>
            </Col>
          </Row>
          
          <hr style={{
            border: 'none',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.2)',
            margin: '40px 0'
          }} />
          
          <Row>
            <Col className="text-center">
              <p style={{
                margin: 0,
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                &copy; 2025 Meliorism Partners Foundation. All rights reserved. | 
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  margin: '0 5px',
                  cursor: 'pointer'
                }}> Privacy Policy</button> | 
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  margin: '0 5px',
                  cursor: 'pointer'
                }}> Terms of Service</button>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Layout;
