import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    ageRange: '',
    location: '',
    areasOfInterest: [],
    skillsExperience: '',
    availability: '',
    timeCommitment: '',
    motivation: ''
    });
      
    const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedInterests = checked
        ? [...formData.areasOfInterest, value]
        : formData.areasOfInterest.filter(interest => interest !== value);
      
      setFormData(prev => ({
        ...prev,
        areasOfInterest: updatedInterests
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phone || !formData.email || !formData.availability) {
    setAlertMessage('Please fill in all required fields.');
    setAlertVariant('danger');
    setShowAlert(true);
    return;
    }
    
    if (formData.areasOfInterest.length === 0) {
      setAlertMessage('Please select at least one area of interest.');
      setAlertVariant('danger');
      setShowAlert(true);
      return;
    }

    try {
      // For now, just show success message
      // In a real app, you would send data to backend
      
      setAlertMessage('Thank you for your volunteer application! We will review it and get back to you within 5-7 business days.');
      setAlertVariant('success');
      setShowAlert(true);
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        ageRange: '',
        location: '',
        areasOfInterest: [],
        skillsExperience: '',
        availability: '',
        timeCommitment: '',
        motivation: ''
      });
      
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      setAlertMessage('There was an error submitting your application. Please try again.');
      setAlertVariant('danger');
      setShowAlert(true);
    }
  };

  return (
    <>
      {showAlert && (
        <Alert 
          variant={alertVariant} 
          dismissible 
          onClose={() => setShowAlert(false)}
          style={{ 
            position: 'fixed', 
            top: '80px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            zIndex: 1050, 
            width: '90%', 
            maxWidth: '500px' 
          }}
        >
          {alertMessage}
        </Alert>
      )}

      {/* Volunteer header */}
      <section 
        className="py-5 position-relative" 
        style={{ 
          marginTop: '120px',
          backgroundImage: 'url(/images/vol4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '75vh'
        }}
      >
        {/* Dark overlay for better text readability */}
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
              <h1 className="display-4 fw-bold mb-4" style={{
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}>Volunteer With Us</h1>
              <p className="lead" style={{
                fontWeight: '500',
                lineHeight: '1.6',
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}>
                Join our team of dedicated volunteers and help make a direct impact in your community. 
                Whether you have a few hours a week or can commit to regular involvement, there's a 
                place for you in our mission to empower minds and transform lives.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Mission Section */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3" style={{
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#175760'
              }}>Our Mission</h2>
              <p className="lead mb-0" style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                lineHeight: '1.6',
                color: '#666'
              }}>
                Empowering communities through dedicated volunteer service and transformative programs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Volunteer opportunities with images */}
      <section className="py-5" style={{ background: '#F8F9FA' }}>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5" style={{
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#175760'
              }}>Ways to Volunteer</h2>
              
              {/* Row 1 */}
              <Row className="mb-5">
                <Col lg={6} className="mb-4">
                  <Card className="border-0 shadow h-100" style={{ overflow: 'hidden' }}>
                    <div 
                      style={{
                        height: '250px',
                        backgroundImage: 'url(/images/vol1.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                      }}
                    >
                      <div 
                        className="position-absolute bottom-0 start-0 w-100 p-4"
                        style={{
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                          color: 'white'
                        }}
                      >
                        <h4 className="mb-2" style={{ fontWeight: '700' }}>Education Programs</h4>
                        <p className="mb-0" style={{ fontSize: '0.95rem' }}>
                          Help with tutoring, mentoring, curriculum development, and educational workshop facilitation.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col lg={6} className="mb-4">
                  <Card className="border-0 shadow h-100" style={{ overflow: 'hidden' }}>
                    <div 
                      style={{
                        height: '250px',
                        backgroundImage: 'url(/images/vol2.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                      }}
                    >
                      <div 
                        className="position-absolute bottom-0 start-0 w-100 p-4"
                        style={{
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                          color: 'white'
                        }}
                      >
                        <h4 className="mb-2" style={{ fontWeight: '700' }}>MSCON Support</h4>
                        <p className="mb-0" style={{ fontSize: '0.95rem' }}>
                          Assist with our Meliorism She Connects program providing mentorship and life skills training.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>

              {/* Row 2 */}
              <Row className="mb-5">
                <Col lg={6} className="mb-4">
                  <Card className="border-0 shadow h-100" style={{ overflow: 'hidden' }}>
                    <div 
                      style={{
                        height: '250px',
                        backgroundImage: 'url(/images/vol3.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                      }}
                    >
                      <div 
                        className="position-absolute bottom-0 start-0 w-100 p-4"
                        style={{
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                          color: 'white'
                        }}
                      >
                        <h4 className="mb-2" style={{ fontWeight: '700' }}>Health & Wellness</h4>
                        <p className="mb-0" style={{ fontSize: '0.95rem' }}>
                          Support our Health Synergy program through health education and wellness workshops.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col lg={6} className="mb-4">
                  <Card className="border-0 shadow h-100" style={{ overflow: 'hidden' }}>
                    <div 
                      style={{
                        height: '250px',
                        backgroundImage: 'url(/images/vol4.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                      }}
                    >
                      <div 
                        className="position-absolute bottom-0 start-0 w-100 p-4"
                        style={{
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                          color: 'white'
                        }}
                      >
                        <h4 className="mb-2" style={{ fontWeight: '700' }}>Community Outreach</h4>
                        <p className="mb-0" style={{ fontSize: '0.95rem' }}>
                          Help plan and execute community events, fundraisers, and awareness campaigns.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>

              {/* Row 3 - Additional opportunities as image cards */}
              <Row>
                <Col lg={6} className="mb-4">
                  <Card className="border-0 shadow h-100" style={{ overflow: 'hidden' }}>
                    <div 
                      style={{
                        height: '250px',
                        backgroundImage: 'url(/images/prog1.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                      }}
                    >
                      <div 
                        className="position-absolute bottom-0 start-0 w-100 p-4"
                        style={{
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                          color: 'white'
                        }}
                      >
                        <h4 className="mb-2" style={{ fontWeight: '700' }}>Administrative Support</h4>
                        <p className="mb-0" style={{ fontSize: '0.95rem' }}>
                          Provide behind-the-scenes support with data entry, communications, and general tasks.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col lg={6} className="mb-4">
                  <Card className="border-0 shadow h-100" style={{ overflow: 'hidden' }}>
                    <div 
                      style={{
                        height: '250px',
                        backgroundImage: 'url(/images/prog2.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                      }}
                    >
                      <div 
                        className="position-absolute bottom-0 start-0 w-100 p-4"
                        style={{
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                          color: 'white'
                        }}
                      >
                        <h4 className="mb-2" style={{ fontWeight: '700' }}>Creative & Marketing</h4>
                        <p className="mb-0" style={{ fontSize: '0.95rem' }}>
                          Use your creative skills in design, content creation, photography, or marketing.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Volunteer application form */}
      <section 
        className="py-5 position-relative"
        style={{
          backgroundImage: 'url(/images/vol1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for better form readability */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1
          }}
        ></div>
        
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="shadow" style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <Card.Body className="p-5">
                  <h3 className="text-center mb-4" style={{
                    fontWeight: '800',
                    letterSpacing: '1px',
                    color: '#175760'
                  }}>Volunteer Application</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name" 
                            required 
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number *</Form.Label>
                          <Form.Control 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number" 
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
                        onChange={handleInputChange}
                        placeholder="Enter your email" 
                        required 
                      />
                    </Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Age Range</Form.Label>
                          <Form.Select 
                            name="ageRange"
                            value={formData.ageRange}
                            onChange={handleInputChange}
                          >
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
                          <Form.Control 
                            type="text" 
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="City, Region" 
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Areas of Interest *</Form.Label>
                      <div>
                        <Form.Check 
                          type="checkbox" 
                          label="Education Programs" 
                          value="Education Programs"
                          checked={formData.areasOfInterest.includes("Education Programs")}
                          onChange={handleInputChange}
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="checkbox" 
                          label="MSCON Support" 
                          value="MSCON Support"
                          checked={formData.areasOfInterest.includes("MSCON Support")}
                          onChange={handleInputChange}
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="checkbox" 
                          label="Health & Wellness" 
                          value="Health & Wellness"
                          checked={formData.areasOfInterest.includes("Health & Wellness")}
                          onChange={handleInputChange}
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="checkbox" 
                          label="Event Organization" 
                          value="Event Organization"
                          checked={formData.areasOfInterest.includes("Event Organization")}
                          onChange={handleInputChange}
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="checkbox" 
                          label="Administrative Support" 
                          value="Administrative Support"
                          checked={formData.areasOfInterest.includes("Administrative Support")}
                          onChange={handleInputChange}
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="checkbox" 
                          label="Creative & Marketing" 
                          value="Creative & Marketing"
                          checked={formData.areasOfInterest.includes("Creative & Marketing")}
                          onChange={handleInputChange}
                          className="mb-2" 
                        />
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Skills & Experience</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="skillsExperience"
                        value={formData.skillsExperience}
                        onChange={handleInputChange}
                        placeholder="Tell us about your relevant skills, experience, or qualifications..." 
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Availability *</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        placeholder="Tell us about your availability (days, times, frequency)..." 
                        required 
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Time Commitment</Form.Label>
                      <div>
                        <Form.Check 
                          type="radio" 
                          name="timeCommitment" 
                          label="1-2 hours per week" 
                          value="1-2" 
                          checked={formData.timeCommitment === "1-2"}
                          onChange={handleInputChange}
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="radio" 
                          name="timeCommitment" 
                          label="3-5 hours per week" 
                          value="3-5" 
                          checked={formData.timeCommitment === "3-5"}
                          onChange={handleInputChange}
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="radio" 
                          name="timeCommitment" 
                          label="6-10 hours per week" 
                          value="6-10" 
                          checked={formData.timeCommitment === "6-10"}
                          onChange={handleInputChange}
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="radio" 
                          name="timeCommitment" 
                          label="More than 10 hours per week" 
                          value="10+" 
                          checked={formData.timeCommitment === "10+"}
                          onChange={handleInputChange}
                          className="mb-2" 
                        />
                        <Form.Check 
                          type="radio" 
                          name="timeCommitment" 
                          label="Flexible/As needed" 
                          value="flexible" 
                          checked={formData.timeCommitment === "flexible"}
                          onChange={handleInputChange}
                          className="mb-2" 
                        />
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Why do you want to volunteer with us?</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        placeholder="Share your motivation and what you hope to contribute..." 
                      />
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