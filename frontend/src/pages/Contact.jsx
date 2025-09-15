import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <>
      {/* Contact header */}
      <section className="py-5" style={{ 
        marginTop: '120px', 
        minHeight: '75vh', 
        display: 'flex', 
        alignItems: 'center',
        backgroundImage: 'url(/images/vol2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}>
        {/* Dark overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4" style={{
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'white'
              }}>Get In Touch</h1>
              <p className="lead" style={{
                fontWeight: '500',
                lineHeight: '1.6',
                color: 'white'
              }}>
                Have questions or want to learn more about our work? We'd love to hear from you. 
                Reach out to us through any of the channels below or send us a message using the form.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact information */}
      <section className="py-5" style={{ 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/backg2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}></div>
        {/* Light overlay for better readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(244, 242, 245, 0.3)',
          zIndex: 1
        }}></div>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5" style={{
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Contact Information</h2>
              <Row>
                <Col md={6} lg={3} className="mb-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '25px',
                    padding: '2.5rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    border: '1px solid rgba(79, 119, 127, 0.1)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(79, 119, 127, 0.2)';
                    e.currentTarget.style.background = 'rgba(79, 119, 127, 0.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  }}
                  >
                    {/* Animated gradient background */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #4F777F15, transparent)',
                      opacity: 0.3,
                      borderRadius: '25px'
                    }}></div>
                    
                    <div style={{
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #4F777F, #175760)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        margin: '0 auto 1.5rem auto',
                        boxShadow: '0 10px 30px rgba(79, 119, 127, 0.3)',
                        border: '3px solid rgba(255, 255, 255, 0.2)'
                      }}>
                        {/* Custom Email Icon */}
                        <div style={{
                          width: '45px',
                          height: '45px',
                          background: 'white',
                          borderRadius: '10px',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <div style={{
                            width: '32px',
                            height: '22px',
                            border: '3px solid #4F777F',
                            borderRadius: '4px',
                            position: 'relative'
                          }}>
                            <div style={{
                              position: 'absolute',
                              top: '2px',
                              left: '2px',
                              right: '2px',
                              height: '2px',
                              background: '#4F777F'
                            }}></div>
                            <div style={{
                              position: 'absolute',
                              top: '6px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '0',
                              height: '0',
                              borderLeft: '8px solid transparent',
                              borderRight: '8px solid transparent',
                              borderTop: '6px solid #4F777F'
                            }}></div>
                          </div>
                        </div>
                      </div>
                      <h5 style={{ 
                        fontWeight: '800', 
                        color: '#175760', 
                        marginBottom: '1rem',
                        fontSize: '1.3rem'
                      }}>Email</h5>
                      <p style={{ 
                        color: '#4F777F', 
                        marginBottom: '1.5rem',
                        fontSize: '0.95rem',
                        lineHeight: '1.5'
                      }}>meliorismpartnersfoundation@gmail.com</p>
                      <Button 
                        href="mailto:meliorismpartnersfoundation@gmail.com"
                        style={{
                          backgroundColor: 'transparent',
                          border: '2px solid #4F777F',
                          color: '#4F777F',
                          borderRadius: '25px',
                          fontWeight: '700',
                          padding: '8px 20px',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#4F777F';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#4F777F';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        Send Email
                      </Button>
                    </div>
                  </div>
                </Col>
                
                <Col md={6} lg={3} className="mb-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '25px',
                    padding: '2.5rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    border: '1px solid rgba(220, 53, 69, 0.1)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(220, 53, 69, 0.2)';
                    e.currentTarget.style.background = 'rgba(220, 53, 69, 0.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  }}
                  >
                    {/* Animated gradient background */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #DC354515, transparent)',
                      opacity: 0.3,
                      borderRadius: '25px'
                    }}></div>
                    
                    <div style={{
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #DC3545, #C82333)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        margin: '0 auto 1.5rem auto',
                        boxShadow: '0 10px 30px rgba(220, 53, 69, 0.3)',
                        border: '3px solid rgba(255, 255, 255, 0.2)'
                      }}>
                        {/* Custom Phone Icon */}
                        <div style={{
                          width: '45px',
                          height: '45px',
                          background: 'white',
                          borderRadius: '12px',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <div style={{
                            width: '20px',
                            height: '32px',
                            border: '3px solid #DC3545',
                            borderRadius: '8px',
                            position: 'relative'
                          }}>
                            <div style={{
                              position: 'absolute',
                              top: '3px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '8px',
                              height: '2px',
                              background: '#DC3545',
                              borderRadius: '1px'
                            }}></div>
                            <div style={{
                              position: 'absolute',
                              bottom: '3px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '6px',
                              height: '6px',
                              background: '#DC3545',
                              borderRadius: '50%'
                            }}></div>
                          </div>
                        </div>
                      </div>
                      <h5 style={{ 
                        fontWeight: '800', 
                        color: '#175760', 
                        marginBottom: '1rem',
                        fontSize: '1.3rem'
                      }}>Phone</h5>
                      <p style={{ 
                        color: '#4F777F', 
                        marginBottom: '1.5rem',
                        fontSize: '0.95rem',
                        lineHeight: '1.5'
                      }}>
                        +233(0)591517852<br />
                        +233(0)556102456
                      </p>
                      <Button 
                        href="tel:+233591517852"
                        style={{
                          backgroundColor: 'transparent',
                          border: '2px solid #DC3545',
                          color: '#DC3545',
                          borderRadius: '25px',
                          fontWeight: '700',
                          padding: '8px 20px',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#DC3545';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#DC3545';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        Call Us
                      </Button>
                    </div>
                  </div>
                </Col>
                
                <Col md={6} lg={3} className="mb-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '25px',
                    padding: '2.5rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    border: '1px solid rgba(52, 152, 219, 0.1)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(52, 152, 219, 0.2)';
                    e.currentTarget.style.background = 'rgba(52, 152, 219, 0.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  }}
                  >
                    {/* Animated gradient background */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #3498DB15, transparent)',
                      opacity: 0.3,
                      borderRadius: '25px'
                    }}></div>
                    
                    <div style={{
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #3498DB, #2980B9)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        margin: '0 auto 1.5rem auto',
                        boxShadow: '0 10px 30px rgba(52, 152, 219, 0.3)',
                        border: '3px solid rgba(255, 255, 255, 0.2)'
                      }}>
                        {/* Custom Globe/Social Icon */}
                        <div style={{
                          width: '45px',
                          height: '45px',
                          background: 'white',
                          borderRadius: '50%',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '3px solid #3498DB'
                        }}>
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            right: '0',
                            height: '2px',
                            background: '#3498DB',
                            transform: 'translateY(-50%)'
                          }}></div>
                          <div style={{
                            position: 'absolute',
                            top: '0',
                            bottom: '0',
                            left: '50%',
                            width: '2px',
                            background: '#3498DB',
                            transform: 'translateX(-50%)'
                          }}></div>
                          <div style={{
                            position: 'absolute',
                            top: '6px',
                            right: '6px',
                            width: '8px',
                            height: '8px',
                            background: '#3498DB',
                            borderRadius: '50%'
                          }}></div>
                        </div>
                      </div>
                      <h5 style={{ 
                        fontWeight: '800', 
                        color: '#175760', 
                        marginBottom: '1rem',
                        fontSize: '1.3rem'
                      }}>Social Media</h5>
                      <p style={{ 
                        color: '#4F777F', 
                        marginBottom: '1.5rem',
                        fontSize: '0.95rem',
                        lineHeight: '1.5'
                      }}>Follow us on social platforms</p>
                      <Button 
                        style={{
                          backgroundColor: 'transparent',
                          border: '2px solid #3498DB',
                          color: '#3498DB',
                          borderRadius: '25px',
                          fontWeight: '700',
                          padding: '8px 20px',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#3498DB';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#3498DB';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        Follow Us
                      </Button>
                    </div>
                  </div>
                </Col>
                
                <Col md={6} lg={3} className="mb-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '25px',
                    padding: '2.5rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    border: '1px solid rgba(243, 156, 18, 0.1)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(243, 156, 18, 0.2)';
                    e.currentTarget.style.background = 'rgba(243, 156, 18, 0.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  }}
                  >
                    {/* Animated gradient background */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #F39C1215, transparent)',
                      opacity: 0.3,
                      borderRadius: '25px'
                    }}></div>
                    
                    <div style={{
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #F39C12, #E67E22)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        margin: '0 auto 1.5rem auto',
                        boxShadow: '0 10px 30px rgba(243, 156, 18, 0.3)',
                        border: '3px solid rgba(255, 255, 255, 0.2)'
                      }}>
                        {/* Custom Clock Icon */}
                        <div style={{
                          width: '45px',
                          height: '45px',
                          background: 'white',
                          borderRadius: '50%',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '3px solid #F39C12'
                        }}>
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '2px',
                            height: '12px',
                            background: '#F39C12',
                            transformOrigin: 'bottom',
                            borderRadius: '1px'
                          }}></div>
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%) rotate(90deg)',
                            width: '2px',
                            height: '8px',
                            background: '#E67E22',
                            transformOrigin: 'bottom',
                            borderRadius: '1px'
                          }}></div>
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '4px',
                            height: '4px',
                            background: '#F39C12',
                            borderRadius: '50%'
                          }}></div>
                        </div>
                      </div>
                      <h5 style={{ 
                        fontWeight: '800', 
                        color: '#175760', 
                        marginBottom: '1rem',
                        fontSize: '1.3rem'
                      }}>Office Hours</h5>
                      <p style={{ 
                        color: '#4F777F', 
                        marginBottom: '1.5rem',
                        fontSize: '0.95rem',
                        lineHeight: '1.5'
                      }}>
                        Mon - Fri: 8:00 AM - 5:00 PM<br />
                        Sat: 9:00 AM - 2:00 PM
                      </p>
                      <Button 
                        disabled
                        style={{
                          backgroundColor: 'rgba(243, 156, 18, 0.1)',
                          border: '2px solid rgba(243, 156, 18, 0.3)',
                          color: '#F39C12',
                          borderRadius: '25px',
                          fontWeight: '700',
                          padding: '8px 20px',
                          fontSize: '0.9rem',
                          cursor: 'default'
                        }}
                      >
                        GMT+0
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact form */}
      <section className="py-5" style={{
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Blurred background image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/cont2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(2px)',
          zIndex: 0
        }}></div>
        {/* Dark overlay for better form readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}></div>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                <Card.Body className="p-5">
                  <h3 className="text-center mb-4">Send Us a Message</h3>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name *</Form.Label>
                          <Form.Control type="text" placeholder="Enter your name" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email *</Form.Label>
                          <Form.Control type="email" placeholder="Enter your email" required />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="tel" placeholder="Enter your phone number" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Organization</Form.Label>
                          <Form.Control type="text" placeholder="Your organization (optional)" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Subject *</Form.Label>
                      <Form.Select required>
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="donation">Donation Information</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="programs">Program Information</option>
                        <option value="media">Media Inquiry</option>
                        <option value="other">Other</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Check 
                        type="checkbox" 
                        label="I would like to receive updates about Meliorism Partners Foundation's work and impact" 
                      />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" size="lg" type="submit">
                        Send Message
                      </Button>
                    </div>
                    <p className="text-muted text-center mt-3 small">
                      We'll get back to you within 24-48 hours during business days.
                    </p>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ section */}
      <section className="py-5" style={{ 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/backg2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}></div>
        {/* Light overlay for better readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(244, 242, 245, 0.3)',
          zIndex: 1
        }}></div>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5">Frequently Asked Questions</h2>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How can I get involved with your programs?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      There are many ways to get involved! You can volunteer your time, make a donation, 
                      participate in our programs, or partner with us. Visit our Volunteer and Donate pages 
                      to learn more about specific opportunities.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      What areas do you serve?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We primarily serve communities in Ghana, with a focus on empowering women, youth, 
                      and vulnerable populations through education, health, and community development programs.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      How are donations used?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Donations directly support our programs including education initiatives, MSCON support for women, 
                      Health Synergy programs, and community development projects. We maintain transparency in our 
                      financial reporting and ensure maximum impact from every contribution.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      Can organizations partner with you?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! We welcome partnerships with organizations that share our values and mission. 
                      We believe in collaboration and the power of working together to create sustainable 
                      solutions. Contact us to discuss partnership opportunities.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
