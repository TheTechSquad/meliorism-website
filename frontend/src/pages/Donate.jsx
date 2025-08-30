import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

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
      const response = await fetch('/api/donate', {
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
          marginTop: '150px',
          backgroundImage: 'url(/images/don1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '500px',
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
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4 text-white">Make a Donation</h1>
              <p className="lead text-white">
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
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="shadow">
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
      <section className="py-5" style={{ background: '#F4F2F5' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5">Other Ways to Give</h2>
              <Row>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body>
                      <h5 className="text-primary mb-3">🏦 Bank Transfer</h5>
                      <p>
                        Make a direct bank transfer to our foundation account. 
                        Contact us for banking details and transfer instructions.
                      </p>
                      <Button variant="outline-primary" size="sm">Get Bank Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body>
                      <h5 className="text-primary mb-3">📱 Mobile Money</h5>
                      <p>
                        Donate using mobile money services. We accept various mobile payment 
                        platforms for your convenience.
                      </p>
                      <Button variant="outline-primary" size="sm">Mobile Payment Info</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body>
                      <h5 className="text-primary mb-3">🎁 In-Kind Donations</h5>
                      <p>
                        Donate goods, services, or equipment that can support our programs 
                        and community initiatives.
                      </p>
                      <Button variant="outline-primary" size="sm">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body>
                      <h5 className="text-primary mb-3">🏢 Corporate Partnerships</h5>
                      <p>
                        Partner with us as a corporate sponsor to make a larger impact 
                        in community development and social change.
                      </p>
                      <Button variant="outline-primary" size="sm">Partnership Info</Button>
                    </Card.Body>
                  </Card>
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