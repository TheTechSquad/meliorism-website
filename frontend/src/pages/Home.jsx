import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero section with gradient background */}
      <section className="hero-gradient" style={{
        marginTop: '76px',
        background: 'linear-gradient(135deg, #F4F2F5 0%, #CFCED3 50%, #DDD6DD 100%)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}></div>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="align-items-center">
            <Col lg={7}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: '900',
                color: '#175760',
                lineHeight: '1.1',
                marginBottom: '2rem',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
              }}>
                BELIEVE IN THE <span style={{ color: '#4F777F' }}>BOUNDLESS POTENTIAL</span> OF YOUNG PEOPLE.
              </h1>
              <p style={{
                fontSize: '1.3rem',
                color: '#175760',
                marginBottom: '2.5rem',
                lineHeight: '1.6',
                maxWidth: '600px'
              }}>
                Meliorism Partners Foundation prepares young people for future success through 
                hands-on, immersive learning in education, community development, and empowerment 
                using high-impact programs and transformational models.
              </p>
              <div style={{
                borderLeft: '4px solid #4F777F',
                paddingLeft: '1.5rem',
                marginBottom: '2.5rem'
              }}>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#4F777F',
                  fontWeight: '600',
                  margin: 0
                }}>
                  Learn About Our pathways and learning experiences
                </p>
              </div>
              <div className="d-flex gap-3 flex-wrap">
                <Button 
                  size="lg" 
                  as={Link} 
                  to="/donate"
                  style={{
                    backgroundColor: '#4F777F',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    boxShadow: '0 4px 15px rgba(79, 119, 127, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(79, 119, 127, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(79, 119, 127, 0.3)';
                  }}
                >
                  Donate Now
                </Button>
                <Button 
                  variant="outline-dark" 
                  size="lg" 
                  as={Link} 
                  to="/volunteer"
                  style={{
                    borderRadius: '50px',
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    borderWidth: '2px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get Involved
                </Button>
              </div>
            </Col>
            <Col lg={5}>
              <div style={{ position: 'relative' }}>
                <img 
                  src="/images/african-children-enjoying-life.jpg" 
                  alt="Children enjoying life - representing hope and transformation"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    transform: 'rotate(2deg)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  width: '80px',
                  height: '80px',
                  background: '#DDD6DD',
                  borderRadius: '50%',
                  zIndex: -1
                }}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Stats Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(45deg, #4F777F 0%, #175760 100%)',
        color: 'white'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '800',
                marginBottom: '1rem'
              }}>
                Our Impact in Numbers
              </h2>
              <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Making a difference in communities across the region
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="text-center mb-4">
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                color: '#DDD6DD',
                marginBottom: '0.5rem'
              }}>
                500+
              </div>
              <h5 style={{ fontWeight: '600' }}>Lives Transformed</h5>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                color: '#DDD6DD',
                marginBottom: '0.5rem'
              }}>
                25+
              </div>
              <h5 style={{ fontWeight: '600' }}>Programs Running</h5>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                color: '#DDD6DD',
                marginBottom: '0.5rem'
              }}>
                10+
              </div>
              <h5 style={{ fontWeight: '600' }}>Communities Served</h5>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                color: '#DDD6DD',
                marginBottom: '0.5rem'
              }}>
              100%
              </div>
              <h5 style={{ fontWeight: '600' }}>Commitment</h5>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Programs Section */}
      <section style={{ padding: '80px 0', background: '#F4F2F5' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#175760',
                marginBottom: '1rem'
              }}>
                Our Key Programs
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#4F777F' }}>
                Comprehensive initiatives designed to create lasting change
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #4F777F, #175760)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>🎓</span>
                </div>
                <h4 style={{ fontWeight: '700', color: '#175760', marginBottom: '1rem' }}>
                  Education Excellence
                </h4>
                <p style={{ color: '#4F777F', lineHeight: '1.6' }}>
                  Dismantling barriers to high-quality education and skill development, 
                  ensuring equitable access to lifelong learning opportunities.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #DDD6DD, #CFCED3)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>👥</span>
                </div>
                <h4 style={{ fontWeight: '700', color: '#175760', marginBottom: '1rem' }}>
                  Community Empowerment
                </h4>
                <p style={{ color: '#4F777F', lineHeight: '1.6' }}>
                  Empowering women and vulnerable populations through comprehensive 
                  support programs including MSCON and health initiatives.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #CFCED3, #DDD6DD)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>🏥</span>
                </div>
                <h4 style={{ fontWeight: '700', color: '#175760', marginBottom: '1rem' }}>
                  Health & Wellness
                </h4>
                <p style={{ color: '#4F777F', lineHeight: '1.6' }}>
                  Delivering holistic health support and wellness initiatives 
                  that promote thriving, healthy communities.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Button 
                size="lg" 
                as={Link} 
                to="/programs"
                style={{
                  backgroundColor: '#4F777F',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '12px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 15px rgba(79, 119, 127, 0.3)'
                }}
              >
                Explore All Programs
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #175760 0%, #4F777F 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '800',
                marginBottom: '1.5rem'
              }}>
                Ready to Make a Difference?
              </h2>
              <p style={{
                fontSize: '1.3rem',
                marginBottom: '2.5rem',
                opacity: 0.9
              }}>
                Join us in our mission to empower minds and transform lives. 
                Every contribution makes a meaningful impact.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button 
                  size="lg" 
                  as={Link} 
                  to="/donate"
                  style={{
                    backgroundColor: '#DDD6DD',
                    border: 'none',
                    color: '#175760',
                    borderRadius: '50px',
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    boxShadow: '0 4px 15px rgba(221, 214, 221, 0.3)'
                  }}
                >
                  Support Our Cause
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  as={Link} 
                  to="/about"
                  style={{
                    borderRadius: '50px',
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    borderWidth: '2px'
                  }}
                >
                  Learn More About Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;