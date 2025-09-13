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
                  <Card className="text-center border-0 shadow-sm h-100">
                    <Card.Body>
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">📧</h4>
                      </div>
                      <h5>Email</h5>
                      <p className="text-muted">meliorismpartnersfoundation@gmail.com</p>
                      <Button variant="outline-primary" size="sm" href="mailto:meliorismpartnersfoundation@gmail.com">
                        Send Email
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Card className="text-center border-0 shadow-sm h-100">
                    <Card.Body>
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">📞</h4>
                      </div>
                      <h5>Phone</h5>
                      <p className="text-muted">
                        +233(0)591517852<br />
                        +233(0)556102456
                      </p>
                      <Button variant="outline-primary" size="sm" href="tel:+233591517852">
                        Call Us
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Card className="text-center border-0 shadow-sm h-100">
                    <Card.Body>
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">🌐</h4>
                      </div>
                      <h5>Social Media</h5>
                      <p className="text-muted">Follow us on social platforms</p>
                      <Button variant="outline-primary" size="sm">
                        Follow Us
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Card className="text-center border-0 shadow-sm h-100">
                    <Card.Body>
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">⏰</h4>
                      </div>
                      <h5>Office Hours</h5>
                      <p className="text-muted">
                        Mon - Fri: 8:00 AM - 5:00 PM<br />
                        Sat: 9:00 AM - 2:00 PM
                      </p>
                      <Button variant="outline-primary" size="sm" disabled>
                        GMT+0
                      </Button>
                    </Card.Body>
                  </Card>
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