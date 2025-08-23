import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Volunteer() {
  return (
    <>
      {/* Volunteer header */}
      <section className="py-5" style={{ marginTop: '76px' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Volunteer With Us</h1>
              <p className="lead">
                Join our team of dedicated volunteers and help make a direct impact in your community. 
                Whether you have a few hours a week or can commit to regular involvement, there's a 
                place for you in our mission to empower minds and transform lives.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Volunteer Hero Image */}
      <section className="py-3">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="text-center">
                <img src="/images/helping-hands-volunteer-support-community-service-graphic.jpg"
                     alt="Volunteer hands coming together in support"
                     className="img-fluid rounded shadow-lg"
                     style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Volunteer opportunities */}
      <section className="py-5" style={{ background: '#F4F2F5' }}>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5">Volunteer Opportunities</h2>
              <Row>
                <Col md={6} lg={4} className="mb-4">
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="text-center">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">🎓</h4>
                      </div>
                      <h5>Education Programs</h5>
                      <p>
                        Help with tutoring, mentoring, curriculum development, and educational 
                        workshop facilitation for students of all ages.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="text-center">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">👥</h4>
                      </div>
                      <h5>MSCON Support</h5>
                      <p>
                        Assist with our Meliorism She Connects program by providing mentorship, 
                        life skills training, and support to women and vulnerable populations.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="text-center">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">🏥</h4>
                      </div>
                      <h5>Health & Wellness</h5>
                      <p>
                        Support our Health Synergy program through health education, wellness 
                        workshops, and community health advocacy initiatives.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="text-center">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">📅</h4>
                      </div>
                      <h5>Event Organization</h5>
                      <p>
                        Help plan and execute community events, fundraisers, workshops, and 
                        awareness campaigns that support our mission.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="text-center">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">💼</h4>
                      </div>
                      <h5>Administrative Support</h5>
                      <p>
                        Provide behind-the-scenes support with data entry, communications, 
                        social media management, and general administrative tasks.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="text-center">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: '60px', height: '60px' }}>
                        <h4 className="mb-0">🎨</h4>
                      </div>
                      <h5>Creative & Marketing</h5>
                      <p>
                        Use your creative skills in graphic design, content creation, photography, 
                        videography, or marketing to help spread our message.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Volunteer application form */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="shadow">
                <Card.Body className="p-5">
                  <h3 className="text-center mb-4">Volunteer Application</h3>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control type="text" placeholder="Enter your full name" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number *</Form.Label>
                          <Form.Control type="tel" placeholder="Enter your phone number" required />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" required />
                    </Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Age Range</Form.Label>
                          <Form.Select>
                            <option value="">Select age range</option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36-45">36-45</option>
                            <option value="46-55">46-55</option>
                            <option value="56+">56+</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Location</Form.Label>
                          <Form.Control type="text" placeholder="City, Region" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Areas of Interest *</Form.Label>
                      <div>
                        <Form.Check type="checkbox" label="Education Programs" className="mb-2" />
                        <Form.Check type="checkbox" label="MSCON Support" className="mb-2" />
                        <Form.Check type="checkbox" label="Health & Wellness" className="mb-2" />
                        <Form.Check type="checkbox" label="Event Organization" className="mb-2" />
                        <Form.Check type="checkbox" label="Administrative Support" className="mb-2" />
                        <Form.Check type="checkbox" label="Creative & Marketing" className="mb-2" />
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Skills & Experience</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Tell us about your relevant skills, experience, or qualifications..." />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Availability *</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Tell us about your availability (days, times, frequency)..." required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Time Commitment</Form.Label>
                      <div>
                        <Form.Check type="radio" name="commitment" label="1-2 hours per week" value="1-2" className="mb-2" />
                        <Form.Check type="radio" name="commitment" label="3-5 hours per week" value="3-5" className="mb-2" />
                        <Form.Check type="radio" name="commitment" label="6-10 hours per week" value="6-10" className="mb-2" />
                        <Form.Check type="radio" name="commitment" label="More than 10 hours per week" value="10+" className="mb-2" />
                        <Form.Check type="radio" name="commitment" label="Flexible/As needed" value="flexible" className="mb-2" />
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Why do you want to volunteer with us?</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Share your motivation and what you hope to contribute..." />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" size="lg" type="submit">
                        Submit Application
                      </Button>
                    </div>
                    <p className="text-muted text-center mt-3 small">
                      We'll review your application and get back to you within 5-7 business days.
                    </p>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Volunteer benefits */}
      <section className="py-5" style={{ background: '#F4F2F5' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5">Why Volunteer With Us?</h2>
              <Row>
                <Col md={6} className="mb-4">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <span>🌟</span>
                    </div>
                    <div>
                      <h5>Make a Real Impact</h5>
                      <p>See the direct results of your efforts in transforming lives and strengthening communities.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <span>🤝</span>
                    </div>
                    <div>
                      <h5>Build Connections</h5>
                      <p>Connect with like-minded individuals and build lasting relationships within our community.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <span>📚</span>
                    </div>
                    <div>
                      <h5>Develop Skills</h5>
                      <p>Gain new skills, experience, and knowledge while contributing to meaningful causes.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <span>🏆</span>
                    </div>
                    <div>
                      <h5>Recognition & Growth</h5>
                      <p>Receive recognition for your contributions and opportunities for leadership development.</p>
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

export default Volunteer;