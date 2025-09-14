import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Programs() {
  return (
    <>
      {/* Programs overview */}
      <section 
        className="py-5 position-relative" 
        style={{ 
          marginTop: '120px',
          minHeight: '75vh',
          backgroundImage: 'url(/images/prog1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1
          }}
        ></div>
        
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h1 
                className="fw-bold mb-4 text-white" 
                style={{ 
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '2px',
                  fontWeight: '900',
                  textTransform: 'uppercase'
                }}
              >
                Our Programs
              </h1>
              <p 
                className="text-white" 
                style={{ 
                  fontSize: '1.4rem',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}
              >
                Discover how we're making a difference through our various initiatives and programs 
                designed to empower individuals and strengthen communities.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Programs */}
      <section className="py-5" style={{ background: '#F4F2F5' }}>
        <Container>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-lg" style={{ border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/happy1.jpg"
                       alt="Education and learning"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                </div>
                <Card.Body className="p-4">
                  <Card.Title 
                    className="text-center mb-3" 
                    style={{ 
                      fontSize: '1.4rem',
                      fontWeight: '800',
                      color: '#2c3e50',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    Empowering Individuals Through Education
                  </Card.Title>
                  <Card.Text style={{ fontSize: '1rem', lineHeight: '1.6', color: '#495057' }}>
                    We dismantle barriers to high-quality education and skill development, ensuring
                    equitable access to lifelong learning opportunities through educational resources,
                    mentoring, and mentorship programs. We cultivate a generation of empowered leaders
                    ready to face the challenges of tomorrow.
                  </Card.Text>
                  <div className="text-center">
                    <Button 
                      variant="outline-primary" 
                      style={{ 
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        padding: '10px 25px',
                        borderWidth: '2px'
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-lg" style={{ border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/mscon3.jpg"
                       alt="Women empowerment and support"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                </div>
                <Card.Body className="p-4">
                  <Card.Title 
                    className="text-center mb-3" 
                    style={{ 
                      fontSize: '1.4rem',
                      fontWeight: '800',
                      color: '#2c3e50',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    Meliorism She Connects (MSCON)
                  </Card.Title>
                  <Card.Text style={{ fontSize: '1rem', lineHeight: '1.6', color: '#495057' }}>
                    Comprehensive support program aimed at empowering women and vulnerable populations
                    through mentorship, health education, and life skills training designed to foster
                    resilience and independence. MSCON incorporates holistic approaches to personal
                    development and community engagement.
                  </Card.Text>
                  <div className="text-center">
                    <Button 
                      variant="outline-primary" 
                      style={{ 
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        padding: '10px 25px',
                        borderWidth: '2px'
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-lg" style={{ border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/feed2.jpg"
                       alt="Health and wellness support"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                </div>
                <Card.Body className="p-4">
                  <Card.Title 
                    className="text-center mb-3" 
                    style={{ 
                      fontSize: '1.4rem',
                      fontWeight: '800',
                      color: '#2c3e50',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    Meliorism Health Synergy
                  </Card.Title>
                  <Card.Text style={{ fontSize: '1rem', lineHeight: '1.6', color: '#495057' }}>
                    Holistic health support program delivering comprehensive care and health education
                    to transform lives through wellness initiatives and community health advocacy.
                    This program focuses on preventive care, health literacy, and building healthier
                    communities through education and support.
                  </Card.Text>
                  <div className="text-center">
                    <Button 
                      variant="outline-primary" 
                      style={{ 
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        padding: '10px 25px',
                        borderWidth: '2px'
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Community Development */}
      <section 
        className="py-5 position-relative" 
        style={{
          backgroundImage: 'url(/images/prog2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Light overlay for better text readability */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            zIndex: 1
          }}
        ></div>
        
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="text-center mb-5">
                <h2 
                  className="fw-bold mb-4" 
                  style={{ 
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    color: '#2c3e50',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px'
                  }}
                >
                  Fostering Community Development and Social Impact
                </h2>
                <p 
                  className="lead" 
                  style={{ 
                    color: '#34495e',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    lineHeight: '1.6'
                  }}
                >
                  We advocate for social justice, equality, and sustainable solutions that promote thriving communities 
                  by engaging with local leaders, organizing community events, and partnering with other organizations.
                </p>
              </div>
              
              <Row>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-lg h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '15px' }}>
                    <Card.Body className="p-4">
                      <h5 
                        className="mb-3" 
                        style={{ 
                          color: '#007bff',
                          fontSize: '1.3rem',
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                      >
                        Community Partnerships
                      </h5>
                      <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#495057' }}>
                        We work closely with local organizations, government agencies, and community leaders 
                        to identify needs and develop sustainable solutions that address systemic issues.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-lg h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '15px' }}>
                    <Card.Body className="p-4">
                      <h5 
                        className="mb-3" 
                        style={{ 
                          color: '#007bff',
                          fontSize: '1.3rem',
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                      >
                        Community Events
                      </h5>
                      <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#495057' }}>
                        Regular workshops, seminars, and community gatherings that bring people together 
                        to learn, share experiences, and build stronger social connections.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-lg h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '15px' }}>
                    <Card.Body className="p-4">
                      <h5 
                        className="mb-3" 
                        style={{ 
                          color: '#007bff',
                          fontSize: '1.3rem',
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                      >
                       Social Justice Advocacy
                      </h5>
                      <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#495057' }}>
                        Active advocacy for policies and practices that promote equality, fairness, and 
                        social justice in all aspects of community life.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-lg h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '15px' }}>
                    <Card.Body className="p-4">
                      <h5 
                        className="mb-3" 
                        style={{ 
                          color: '#007bff',
                          fontSize: '1.3rem',
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                      >
                        Sustainable Solutions
                      </h5>
                      <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#495057' }}>
                        Development and implementation of long-term, sustainable initiatives that create 
                        lasting positive change in communities.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Program Impact */}
      <section 
        className="py-5 position-relative" 
        style={{ 
          backgroundImage: 'url(/images/prog3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Light overlay for better text readability */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1
          }}
        ></div>
        
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 
                className="fw-bold mb-4 text-white" 
                style={{ 
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}
              >
                Our Impact
              </h2>
              <p 
                className="mb-5 text-white" 
                style={{ 
                  fontSize: '1.3rem',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}
              >
                Through our comprehensive programs, we create measurable and lasting positive change 
                that enhances the lives of individuals and strengthens communities.
              </p>
              
              <Row>
                <Col md={4} className="mb-4">
                  <div className="text-center">
                    <h3 
                      className="fw-bold text-white mb-2" 
                      style={{ 
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
                        fontWeight: '900',
                        letterSpacing: '1px'
                      }}
                    >
                      500+
                    </h3>
                    <p 
                      className="text-white" 
                      style={{ 
                        fontSize: '1.2rem',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                    >
                      Lives Transformed
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="text-center">
                    <h3 
                      className="fw-bold text-white mb-2" 
                      style={{ 
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
                        fontWeight: '900',
                        letterSpacing: '1px'
                      }}
                    >
                      50+
                    </h3>
                    <p 
                      className="text-white" 
                      style={{ 
                        fontSize: '1.2rem',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                    >
                      Community Partners
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="text-center">
                    <h3 
                      className="fw-bold text-white mb-2" 
                      style={{ 
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
                        fontWeight: '900',
                        letterSpacing: '1px'
                      }}
                    >
                      100+
                    </h3>
                    <p 
                      className="text-white" 
                      style={{ 
                        fontSize: '1.2rem',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                    >
                      Programs Delivered
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Programs;