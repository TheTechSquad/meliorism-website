import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

function Blog() {
  return (
    <>
      {/* Blog header */}
      <section className="py-5" style={{ marginTop: '150px' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Latest Updates</h1>
              <p className="lead">
                Stay informed about our latest projects, success stories, and community impact. 
                Discover how we're making a difference and the lives we're transforming together.
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
                      <img src="/images/bill-wegener-hs98_9hzTcU-unsplash.jpg"
                           alt="MSCON Program Launch - Women empowerment"
                           style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </Col>
                  <Col md={6}>
                    <Card.Body className="p-4">
                      <Badge bg="primary" className="mb-2">Featured</Badge>
                      <h3 className="mb-3">Meliorism She Connects Program Successfully Launches</h3>
                      <p className="text-muted mb-3">
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

      {/* Blog posts */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src="/images/stormseeker-rX12B5uX7QM-unsplash.jpg"
                       alt="Community garden and sustainable living"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Badge bg="success" className="mb-2">Community</Badge>
                  <Card.Title>New Community Garden Opens</Card.Title>
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
                  <img src="/images/khalil-radi-e1GHAnjzGgI-unsplash.jpg"
                       alt="Education and scholarship recipients"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Badge bg="info" className="mb-2">Education</Badge>
                  <Card.Title>Scholarship Recipients Announced</Card.Title>
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
                  <img src="/images/haziq-farooqi-SaWB3uFEEQA-unsplash.jpg"
                       alt="Digital literacy and skills workshop"
                       className="card-img-top"
                       style={{ height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Badge bg="warning" className="mb-2">Skills</Badge>
                  <Card.Title>Digital Literacy Workshop Success</Card.Title>
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
                <div className="bg-light d-flex align-items-center justify-content-center" 
                     style={{ height: '200px' }}>
                  <div className="text-center">
                    <h1 className="display-4 text-primary">🏥</h1>
                    <h6 className="text-muted">Health Program</h6>
                  </div>
                </div>
                <Card.Body>
                  <Badge bg="danger" className="mb-2">Health</Badge>
                  <Card.Title>Health Synergy Program Expansion</Card.Title>
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
                <div className="bg-light d-flex align-items-center justify-content-center" 
                     style={{ height: '200px' }}>
                  <div className="text-center">
                    <h1 className="display-4 text-primary">🤝</h1>
                    <h6 className="text-muted">Partnership</h6>
                  </div>
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
                <div className="bg-light d-flex align-items-center justify-content-center" 
                     style={{ height: '200px' }}>
                  <div className="text-center">
                    <h1 className="display-4 text-primary">🎯</h1>
                    <h6 className="text-muted">Impact Report</h6>
                  </div>
                </div>
                <Card.Body>
                  <Badge bg="primary" className="mb-2">Impact</Badge>
                  <Card.Title>2024 Impact Report Released</Card.Title>
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

export default Blog;