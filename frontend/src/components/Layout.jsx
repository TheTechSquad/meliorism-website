import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css'; // Import the new CSS file

function Layout({ children }) {
  const location = useLocation();

  // Function to close dropdown and mobile menu when a link is clicked
  const handleLinkClick = () => {
    // Close the dropdown menu
    const showDropCheckbox = document.getElementById('showDrop');
    if (showDropCheckbox) {
      showDropCheckbox.checked = false;
    }
    
    // Close the mobile menu
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    if (menuBtn) menuBtn.checked = false;
    if (closeBtn) closeBtn.checked = false;
  };

  return (
    <div className="App">
      {/* Custom Navigation */}
      <nav>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img 
                src="/logo1.png" 
                alt="Meliorism Partners Foundation Logo" 
                style={{ height: '80px' }}
              />
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/programs" 
                className={location.pathname === '/programs' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link 
                to="/volunteer" 
                className={location.pathname === '/volunteer' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Volunteer
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={location.pathname === '/projects' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/donate" 
                className={`donate-btn ${location.pathname === '/donate' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                DONATE NOW
              </Link>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>

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
                  {[
                    { name: 'Facebook', icon: '/images/facebook.png', url: 'https://www.facebook.com/LambertIsreal' },
                    { name: 'LinkedIn', icon: '/images/linkedin.png', url: 'https://www.linkedin.com/company/meliorism-partners-foundation' },
                    { name: 'Instagram', icon: '/images/instagram.png', url: 'https://www.instagram.com/meliorism_partners_foundation?igsh=MWU1bzc2b2I2cGR0Ng%3D%3D&utm_source=qr' },
                    { name: 'X', icon: '/images/X.png', url: 'https://x.com/meliorismpf?s=21' },
                    { name: 'TikTok', icon: '/images/tiktok.png', url: 'https://www.tiktok.com/@meliorism.partner?_t=ZM-8znr2VCkaKj&_r=1' }
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        padding: '8px'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <img 
                        src={platform.icon} 
                        alt={platform.name} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          transition: 'transform 0.3s ease, opacity 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'scale(1.1)';
                          e.target.style.opacity = '0.8';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'scale(1)';
                          e.target.style.opacity = '1';
                        }}
                      />
                    </a>
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
                <div style={{ 
                  marginBottom: '15px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'flex-start'
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
                    padding: '8px',
                    flexShrink: 0
                  }}>
                    <img 
                      src="/images/email.png" 
                      alt="Email" 
                      style={{
                        width: '18px',
                        height: '18px',
                        objectFit: 'contain'
                      }}
                    />
                  </span>
                  <span style={{
                    wordBreak: 'break-all',
                    fontSize: '0.85rem',
                    lineHeight: '1.4'
                  }}>
                    meliorismpartnersfoundation@gmail.com
                  </span>
                </div>
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
                    padding: '8px'
                  }}>
                    <img 
                      src="/images/phone-call.png" 
                      alt="Phone" 
                      style={{
                        width: '18px',
                        height: '18px',
                        objectFit: 'contain'
                      }}
                    />
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
                    padding: '8px'
                  }}>
                    <img 
                      src="/images/phone-call.png" 
                      alt="Phone" 
                      style={{
                        width: '18px',
                        height: '18px',
                        objectFit: 'contain'
                      }}
                    />
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
                  className="newsletter-input"
                  style={{
                    flex: 1,
                    padding: '12px 15px',
                    borderRadius: '25px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '2px solid rgba(255, 255, 255, 0.4)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
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