import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

function Projects() {
  return (
    <>
      {/* Projects header */}
      <section 
        className="py-5" 
        style={{ 
          marginTop: '100px', 
          minHeight: '75vh', 
          display: 'flex', 
          alignItems: 'center',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/vol3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4" style={{
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
              }}>Our Projects</h1>
              <p className="lead" style={{
                fontWeight: '500',
                lineHeight: '1.6',
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
              }}>
                Explore our ongoing initiatives and completed projects that are making a difference. 
                Discover how we're creating positive change and the communities we're transforming together.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured post */}
      <section className="py-5" style={{ background: '#F4F2F5' }}>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <Card className="border-0 shadow-lg">
                <Row className="g-0">
                  <Col md={6}>
                    <div style={{ height: '300px', overflow: 'hidden' }}>
                      <img src="/images/mscon.jpg"
                           alt="MSCON Program Launch - Women empowerment"
                           style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </Col>
                  <Col md={6}>
                    <Card.Body className="p-4">
                      <Badge bg="primary" className="mb-2">Featured</Badge>
                      <h3 className="mb-3" style={{
                        fontWeight: '800',
                        letterSpacing: '1px'
                      }}>Meliorism She Connects Program Successfully Launches</h3>
                      <p className="text-muted mb-3" style={{
                        lineHeight: '1.6',
                        fontWeight: '500'
                      }}>
                        We're thrilled to announce the successful launch of our Meliorism She Connects (MSCON)
                        program, which has already begun transforming the lives of over 200 women in our community.
                        This comprehensive support program provides mentorship, health education, and life skills
                        training designed to foster resilience and independence.
                      </p>
                      <small className="text-muted">Posted 3 days ago • By Foundation Team</small>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project posts */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/comm1.jpg"
                       alt="Community garden and sustainable living"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Badge bg="success" className="mb-2">Community</Badge>
                  <Card.Title style={{
                    fontWeight: '800',
                    letterSpacing: '1px'
                  }}>New Community Garden Opens</Card.Title>
                  <Card.Text>
                    We're excited to announce the opening of our third community garden,
                    providing fresh produce to 200+ families and creating a sustainable
                    source of nutrition for our community.
                  </Card.Text>
                  <small className="text-muted">Posted 2 days ago</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/feed1.jpg"
                       alt="Education and scholarship recipients"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Badge bg="info" className="mb-2">Education</Badge>
                  <Card.Title style={{
                    fontWeight: '800',
                    letterSpacing: '1px'
                  }}>Scholarship Recipients Announced</Card.Title>
                  <Card.Text>
                    Congratulations to our 15 new scholarship recipients who will be
                    pursuing higher education this fall. These bright minds represent
                    the future leaders of our community.
                  </Card.Text>
                  <small className="text-muted">Posted 1 week ago</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/don3.jpg"
                       alt="Digital literacy and skills workshop"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Badge bg="warning" className="mb-2">Skills</Badge>
                  <Card.Title style={{
                    fontWeight: '800',
                    letterSpacing: '1px'
                  }}>Digital Literacy Workshop Success</Card.Title>
                  <Card.Text>
                    Our recent digital literacy workshop helped 50+ community members
                    develop essential computer skills, opening new opportunities for
                    employment and personal growth.
                  </Card.Text>
                  <small className="text-muted">Posted 2 weeks ago</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/prog1.jpg"
                       alt="Health Synergy Program"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Badge bg="danger" className="mb-2">Health</Badge>
                  <Card.Title style={{
                    fontWeight: '800',
                    letterSpacing: '1px'
                  }}>Health Synergy Program Expansion</Card.Title>
                  <Card.Text>
                    We're expanding our Meliorism Health Synergy program to reach 
                    more communities, providing comprehensive health education and 
                    wellness support to vulnerable populations.
                  </Card.Text>
                  <small className="text-muted">Posted 3 weeks ago</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/comm2.jpg"
                       alt="Community Partnership"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Badge bg="secondary" className="mb-2">Partnership</Badge>
                  <Card.Title>New Community Partnership</Card.Title>
                  <Card.Text>
                    We've partnered with local organizations to strengthen our 
                    community development initiatives and create more sustainable 
                    solutions for social challenges.
                  </Card.Text>
                  <small className="text-muted">Posted 1 month ago</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/prog2.jpg"
                       alt="2024 Impact Report"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Badge bg="primary" className="mb-2">Impact</Badge>
                  <Card.Title>2025 Impact Report Released</Card.Title>
                  <Card.Text>
                    Our annual impact report showcases the incredible progress we've 
                    made together, highlighting key achievements and the lives we've 
                    transformed throughout the year.
                  </Card.Text>
                  <small className="text-muted">Posted 1 month ago</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter signup */}
      <section className="py-5" style={{ background: '#F4F2F5' }}>
        <Container>
          <Row>
            <Col lg={6} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Stay Updated</h2>
              <p className="lead mb-4">
                Subscribe to our newsletter to receive the latest updates, success stories, 
                and opportunities to get involved in our mission.
              </p>
              <div className="d-flex gap-2 justify-content-center">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email address" 
                  style={{ maxWidth: '300px' }}
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
              <p className="text-muted mt-2 small">
                We respect your privacy and will never share your information.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Projects;
