import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Programs() {
  return (
    <>
      {/* Programs overview */}
      <section className="py-5" style={{ marginTop: '150px' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h1 className="display-4 fw-bold mb-4">Our Programs</h1>
              <p className="lead">
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
              <Card className="h-100">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg"
                       alt="Education and learning"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">Empowering Individuals Through Education</Card.Title>
                  <Card.Text>
                    We dismantle barriers to high-quality education and skill development, ensuring
                    equitable access to lifelong learning opportunities through educational resources,
                    mentoring, and mentorship programs. We cultivate a generation of empowered leaders
                    ready to face the challenges of tomorrow.
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="outline-primary">Learn More</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/annie-spratt-OIuCXxx08yg-unsplash.jpg"
                       alt="Women empowerment and support"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">Meliorism She Connects (MSCON)</Card.Title>
                  <Card.Text>
                    Comprehensive support program aimed at empowering women and vulnerable populations
                    through mentorship, health education, and life skills training designed to foster
                    resilience and independence. MSCON incorporates holistic approaches to personal
                    development and community engagement.
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="outline-primary">Learn More</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/michael-ali-JswtleKTsFY-unsplash.jpg"
                       alt="Health and wellness support"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">Meliorism Health Synergy</Card.Title>
                  <Card.Text>
                    Holistic health support program delivering comprehensive care and health education
                    to transform lives through wellness initiatives and community health advocacy.
                    This program focuses on preventive care, health literacy, and building healthier
                    communities through education and support.
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="outline-primary">Learn More</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Community Development */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-4">Fostering Community Development and Social Impact</h2>
                <p className="lead">
                  We advocate for social justice, equality, and sustainable solutions that promote thriving communities 
                  by engaging with local leaders, organizing community events, and partnering with other organizations.
                </p>
              </div>
              
              <Row>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="text-primary mb-3">🤝 Community Partnerships</h5>
                      <p>
                        We work closely with local organizations, government agencies, and community leaders 
                        to identify needs and develop sustainable solutions that address systemic issues.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="text-primary mb-3">📅 Community Events</h5>
                      <p>
                        Regular workshops, seminars, and community gatherings that bring people together 
                        to learn, share experiences, and build stronger social connections.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="text-primary mb-3">⚖️ Social Justice Advocacy</h5>
                      <p>
                        Active advocacy for policies and practices that promote equality, fairness, and 
                        social justice in all aspects of community life.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="text-primary mb-3">🌱 Sustainable Solutions</h5>
                      <p>
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
      <section className="py-5" style={{ background: '#F4F2F5' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Our Impact</h2>
              <p className="lead mb-5">
                Through our comprehensive programs, we create measurable and lasting positive change 
                that enhances the lives of individuals and strengthens communities.
              </p>
              
              <Row>
                <Col md={4} className="mb-4">
                  <div className="text-center">
                    <h3 className="display-6 fw-bold text-primary">500+</h3>
                    <p className="lead">Lives Transformed</p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="text-center">
                    <h3 className="display-6 fw-bold text-primary">50+</h3>
                    <p className="lead">Community Partners</p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="text-center">
                    <h3 className="display-6 fw-bold text-primary">100+</h3>
                    <p className="lead">Programs Delivered</p>
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