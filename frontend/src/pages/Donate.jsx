import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { API_BASE_URL } from '../config/api';

function Donate() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    amount: '',
    frequency: 'one-time',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      console.log('Submitting donation:', formData);
      const response = await fetch(`${API_BASE_URL}/api/donate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        // Redirect to Paystack payment page
        if (data.data.paymentUrl) {
          window.location.href = data.data.paymentUrl;
        } else {
          setSuccess('Donation initiated successfully!');
        }
      } else {
        setError(data.message || 'Error processing donation');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(`Error connecting to server: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* Donation header */}
      <section 
        className="py-5 position-relative" 
        style={{ 
          marginTop: '120px',
          backgroundImage: 'url(/images/don2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: '60% 40%',
          backgroundRepeat: 'no-repeat',
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Overlay for better text readability */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1
          }}
        ></div>
        
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row>
            <Col lg={10} className="mx-auto text-center">
              <h1 className="display-3 fw-bold mb-4 text-white" style={{
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)'
              }}>Make a Donation</h1>
              <p className="text-white" style={{
                fontWeight: '500',
                lineHeight: '1.7',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Your contribution helps us continue our mission of creating positive change in communities. 
                Every donation, no matter the size, makes a meaningful impact in transforming lives and 
                empowering individuals to reach their full potential.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Donation impact */}
      <section className="py-5" style={{ background: '#F4F2F5' }}>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5">Your Impact</h2>
              <Row>
                <Col md={4} className="mb-4">
                  <Card className="text-center border-0 shadow-sm h-100">
                    <Card.Body>
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">$25</h4>
                      </div>
                      <h5>Educational Resources</h5>
                      <p>Provides learning materials and resources for one student for a month.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card className="text-center border-0 shadow-sm h-100">
                    <Card.Body>
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">$50</h4>
                      </div>
                      <h5>Health & Wellness</h5>
                      <p>Supports health education and wellness programs for vulnerable populations.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card className="text-center border-0 shadow-sm h-100">
                    <Card.Body>
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">$100</h4>
                      </div>
                      <h5>Mentorship Programs</h5>
                      <p>Funds mentorship and life skills training for women and youth.</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Donation form */}
      <section 
        className="py-5 position-relative" 
        style={{
          backgroundImage: 'url(/images/don4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      >
        {/* Overlay for better form readability */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            zIndex: 1
          }}
        ></div>
        
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="shadow border-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
                <Card.Body className="p-5">
                  <h3 className="text-center mb-4">Donation Details</h3>
                  
                  {error && <Alert variant="danger">{error}</Alert>}
                  {success && <Alert variant="success">{success}</Alert>}
                  
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name *</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name" 
                            required 
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name *</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name" 
                            required 
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email" 
                        required 
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number" 
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Donation Amount *</Form.Label>
                      <Form.Control
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter amount"
                        min="10"
                        required
                      />
                      <Form.Text className="text-muted">
                        Minimum donation amount is $10
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Donation Frequency</Form.Label>
                      <div>
                        <Form.Check 
                          type="radio" 
                          name="frequency" 
                          label="One-time donation" 
                          value="one-time"
                          checked={formData.frequency === 'one-time'}
                          onChange={handleChange}
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="radio" 
                          name="frequency" 
                          label="Monthly recurring" 
                          value="monthly"
                          checked={formData.frequency === 'monthly'}
                          onChange={handleChange}
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="radio" 
                          name="frequency" 
                          label="Annual recurring" 
                          value="annual"
                          checked={formData.frequency === 'annual'}
                          onChange={handleChange}
                          className="mb-2" 
                        />
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Message (Optional)</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Leave a message or dedication..." 
                      />
                    </Form.Group>
                    <div className="d-grid">
                      <Button 
                        variant="primary" 
                        size="lg" 
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : 'Proceed to Payment'}
                      </Button>
                    </div>
                    <p className="text-muted text-center mt-3 small">
                      Your donation is secure and will be processed through Paystack.
                    </p>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Other ways to give */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, #F4F2F5 0%, #E8E6EA 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5" style={{
                background: 'linear-gradient(135deg, #175760, #4F777F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Other Ways to Give</h2>
              <Row>
                <Col md={6} className="mb-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '20px',
                    padding: '1.8rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid rgba(23, 87, 96, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    minHeight: '220px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(23, 87, 96, 0.15)';
                    e.currentTarget.style.background = 'rgba(23, 87, 96, 0.03)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  }}
                  >
                    {/* Subtle gradient background */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #175760 0%, transparent 100%)',
                      opacity: 0.02,
                      borderRadius: '20px'
                    }}></div>
                    
                    <div style={{
                      position: 'relative',
                      zIndex: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <div>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #175760, #4F777F)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.2rem',
                          boxShadow: '0 8px 20px rgba(23, 87, 96, 0.2)'
                        }}>
                          {/* Bank Icon */}
                          <div style={{
                            width: '30px',
                            height: '30px',
                            background: 'white',
                            borderRadius: '6px',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <div style={{
                              width: '22px',
                              height: '16px',
                              background: 'white',
                              borderRadius: '3px',
                              position: 'relative',
                              border: '2px solid #175760'
                            }}>
                              <div style={{
                                position: 'absolute',
                                top: '2px',
                                left: '2px',
                                right: '2px',
                                height: '1px',
                                background: '#175760'
                              }}></div>
                              <div style={{
                                position: 'absolute',
                                top: '6px',
                                left: '2px',
                                right: '2px',
                                height: '1px',
                                background: '#175760'
                              }}></div>
                              <div style={{
                                position: 'absolute',
                                top: '10px',
                                left: '2px',
                                width: '6px',
                                height: '1px',
                                background: '#175760'
                              }}></div>
                            </div>
                          </div>
                        </div>
                        <h5 style={{ 
                          color: '#175760', 
                          marginBottom: '0.8rem',
                          fontWeight: '700',
                          fontSize: '1.2rem'
                        }}>Bank Transfer</h5>
                        <p style={{
                          color: '#4F777F',
                          lineHeight: '1.5',
                          fontSize: '0.95rem',
                          marginBottom: '1.2rem'
                        }}>
                          Make a direct bank transfer to our foundation account. 
                          Contact us for banking details and transfer instructions.
                        </p>
                      </div>
                      <Button 
                        style={{
                          backgroundColor: 'transparent',
                          border: '2px solid #175760',
                          color: '#175760',
                          borderRadius: '20px',
                          fontWeight: '600',
                          padding: '8px 20px',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          alignSelf: 'flex-start'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#175760';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#175760';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        Get Bank Details
                      </Button>
                    </div>
                  </div>
                </Col>
                
                <Col md={6} className="mb-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '20px',
                    padding: '1.8rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid rgba(230, 126, 34, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    minHeight: '220px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(230, 126, 34, 0.15)';
                    e.currentTarget.style.background = 'rgba(230, 126, 34, 0.03)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  }}
                  >
                    {/* Subtle gradient background */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #E67E22 0%, transparent 100%)',
                      opacity: 0.02,
                      borderRadius: '20px'
                    }}></div>
                    
                    <div style={{
                      position: 'relative',
                      zIndex: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <div>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #E67E22, #F39C12)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.2rem',
                          boxShadow: '0 8px 20px rgba(230, 126, 34, 0.2)'
                        }}>
                          {/* Mobile Money Icon */}
                          <div style={{
                            width: '30px',
                            height: '30px',
                            background: 'white',
                            borderRadius: '8px',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <div style={{
                              width: '18px',
                              height: '24px',
                              background: 'white',
                              borderRadius: '4px',
                              position: 'relative',
                              border: '2px solid #E67E22'
                            }}>
                              <div style={{
                                position: 'absolute',
                                top: '2px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '8px',
                                height: '1px',
                                background: '#E67E22',
                                borderRadius: '1px'
                              }}></div>
                              <div style={{
                                position: 'absolute',
                                bottom: '2px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '6px',
                                height: '6px',
                                background: '#E67E22',
                                borderRadius: '50%'
                              }}></div>
                            </div>
                          </div>
                        </div>
                        <h5 style={{ 
                          color: '#175760', 
                          marginBottom: '0.8rem',
                          fontWeight: '700',
                          fontSize: '1.2rem'
                        }}>Mobile Money</h5>
                        <p style={{
                          color: '#4F777F',
                          lineHeight: '1.5',
                          fontSize: '0.95rem',
                          marginBottom: '1.2rem'
                        }}>
                          Donate using mobile money services. We accept various mobile payment 
                          platforms for your convenience.
                        </p>
                      </div>
                      <Button 
                        style={{
                          backgroundColor: 'transparent',
                          border: '2px solid #E67E22',
                          color: '#E67E22',
                          borderRadius: '20px',
                          fontWeight: '600',
                          padding: '8px 20px',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          alignSelf: 'flex-start'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#E67E22';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#E67E22';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        Mobile Payment Info
                      </Button>
                    </div>
                  </div>
                </Col>
                
                <Col md={6} className="mb-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '20px',
                    padding: '1.8rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid rgba(39, 174, 96, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    minHeight: '220px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(39, 174, 96, 0.15)';
                    e.currentTarget.style.background = 'rgba(39, 174, 96, 0.03)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  }}
                  >
                    {/* Subtle gradient background */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #27AE60 0%, transparent 100%)',
                      opacity: 0.02,
                      borderRadius: '20px'
                    }}></div>
                    
                    <div style={{
                      position: 'relative',
                      zIndex: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <div>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #27AE60, #2ECC71)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.2rem',
                          boxShadow: '0 8px 20px rgba(39, 174, 96, 0.2)'
                        }}>
                          {/* In-Kind Donations Icon */}
                          <div style={{
                            width: '30px',
                            height: '30px',
                            background: 'white',
                            borderRadius: '6px',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <div style={{
                              width: '20px',
                              height: '20px',
                              background: 'white',
                              borderRadius: '3px',
                              position: 'relative',
                              border: '2px solid #27AE60'
                            }}>
                              <div style={{
                                position: 'absolute',
                                top: '4px',
                                left: '4px',
                                width: '8px',
                                height: '8px',
                                border: '1px solid #27AE60',
                                borderRadius: '1px'
                              }}></div>
                              <div style={{
                                position: 'absolute',
                                top: '6px',
                                left: '6px',
                                width: '4px',
                                height: '4px',
                                background: '#2ECC71',
                                borderRadius: '50%'
                              }}></div>
                            </div>
                          </div>
                        </div>
                        <h5 style={{ 
                          color: '#175760', 
                          marginBottom: '0.8rem',
                          fontWeight: '700',
                          fontSize: '1.2rem'
                        }}>In-Kind Donations</h5>
                        <p style={{
                          color: '#4F777F',
                          lineHeight: '1.5',
                          fontSize: '0.95rem',
                          marginBottom: '1.2rem'
                        }}>
                          Donate goods, services, or equipment that can support our programs 
                          and community initiatives.
                        </p>
                      </div>
                      <Button 
                        style={{
                          backgroundColor: 'transparent',
                          border: '2px solid #27AE60',
                          color: '#27AE60',
                          borderRadius: '20px',
                          fontWeight: '600',
                          padding: '8px 20px',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          alignSelf: 'flex-start'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#27AE60';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#27AE60';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Col>
                
                <Col md={6} className="mb-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '20px',
                    padding: '1.8rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid rgba(142, 68, 173, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    minHeight: '220px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(142, 68, 173, 0.15)';
                    e.currentTarget.style.background = 'rgba(142, 68, 173, 0.03)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  }}
                  >
                    {/* Subtle gradient background */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #8E44AD 0%, transparent 100%)',
                      opacity: 0.02,
                      borderRadius: '20px'
                    }}></div>
                    
                    <div style={{
                      position: 'relative',
                      zIndex: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <div>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #8E44AD, #9B59B6)',
                          borderRadius: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.2rem',
                          boxShadow: '0 8px 20px rgba(142, 68, 173, 0.2)'
                        }}>
                          {/* Corporate Partnership Icon */}
                          <div style={{
                            width: '30px',
                            height: '30px',
                            background: 'white',
                            borderRadius: '6px',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <div style={{
                              width: '20px',
                              height: '20px',
                              background: 'white',
                              borderRadius: '3px',
                              position: 'relative'
                            }}>
                              <div style={{
                                position: 'absolute',
                                top: '3px',
                                left: '3px',
                                width: '6px',
                                height: '6px',
                                background: '#8E44AD',
                                borderRadius: '50%'
                              }}></div>
                              <div style={{
                                position: 'absolute',
                                top: '3px',
                                right: '3px',
                                width: '6px',
                                height: '6px',
                                background: '#9B59B6',
                                borderRadius: '50%'
                              }}></div>
                              <div style={{
                                position: 'absolute',
                                bottom: '3px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '12px',
                                height: '2px',
                                background: '#8E44AD',
                                borderRadius: '1px'
                              }}></div>
                            </div>
                          </div>
                        </div>
                        <h5 style={{ 
                          color: '#175760', 
                          marginBottom: '0.8rem',
                          fontWeight: '700',
                          fontSize: '1.2rem'
                        }}>Corporate Partnerships</h5>
                        <p style={{
                          color: '#4F777F',
                          lineHeight: '1.5',
                          fontSize: '0.95rem',
                          marginBottom: '1.2rem'
                        }}>
                          Partner with us as a corporate sponsor to make a larger impact 
                          in community development and social change.
                        </p>
                      </div>
                      <Button 
                        style={{
                          backgroundColor: 'transparent',
                          border: '2px solid #8E44AD',
                          color: '#8E44AD',
                          borderRadius: '20px',
                          fontWeight: '600',
                          padding: '8px 20px',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          alignSelf: 'flex-start'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#8E44AD';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#8E44AD';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        Partnership Info
                      </Button>
                    </div>
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

export default Donate;