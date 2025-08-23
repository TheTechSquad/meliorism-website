import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Donate() {
  return (
    <>
      {/* Donation header */}
      <section className="py-5" style={{ marginTop: '76px' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Make a Donation</h1>
              <p className="lead">
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
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name *</Form.Label>
                          <Form.Control type="text" placeholder="Enter your first name" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name *</Form.Label>
                          <Form.Control type="text" placeholder="Enter your last name" required />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="Enter your phone number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Donation Amount *</Form.Label>
                      <Form.Select required>
                        <option value="">Select amount</option>
                        <option value="25">$25 - Educational Resources</option>
                        <option value="50">$50 - Health & Wellness</option>
                        <option value="100">$100 - Mentorship Programs</option>
                        <option value="250">$250 - Community Development</option>
                        <option value="500">$500 - Program Expansion</option>
                        <option value="custom">Custom Amount</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Donation Frequency</Form.Label>
                      <div>
                        <Form.Check 
                          type="radio" 
                          name="frequency" 
                          label="One-time donation" 
                          value="one-time" 
                          defaultChecked 
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="radio" 
                          name="frequency" 
                          label="Monthly recurring" 
                          value="monthly" 
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="radio" 
                          name="frequency" 
                          label="Annual recurring" 
                          value="annual" 
                          className="mb-2" 
                        />
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Message (Optional)</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Leave a message or dedication..." />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" size="lg" type="submit">
                        Proceed to Payment
                      </Button>
                    </div>
                    <p className="text-muted text-center mt-3 small">
                      Your donation is secure and will be processed through our trusted payment partners.
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