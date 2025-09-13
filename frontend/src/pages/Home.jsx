import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero section with compelling background */}
      <section className="hero-section" style={{
        marginTop: '120px',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(
          135deg,
          rgba(23, 87, 96, 0.9) 0%,
          rgba(79, 119, 127, 0.85) 50%,
          rgba(23, 87, 96, 0.9) 100%
        ),
        url('/images/vol1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Animated overlay elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '8%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(221, 214, 221, 0.1), transparent)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(175, 186, 188, 0.15), transparent)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
        <Container style={{ position: 'relative', zIndex: 3 }}>
          <Row className="align-items-center">
            <Col lg={7}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.98)',
                borderRadius: '25px',
                padding: '50px 40px',
                boxShadow: '0 25px 80px rgba(0,0,0,0.15)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transform: 'translateY(-10px)'
              }}>
                <h1 style={{
                  fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                  fontWeight: '900',
                  color: '#175760',
                  lineHeight: '1.2',
                  marginBottom: '1.5rem',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  BELIEVE IN THE <br/>
                  <span style={{ 
                    background: 'linear-gradient(135deg, #4F777F, #175760)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    BOUNDLESS POTENTIAL
                  </span> <br/>
                  OF YOUNG PEOPLE.
                </h1>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#2c5963',
                  marginBottom: '2rem',
                  lineHeight: '1.6',
                  maxWidth: '580px',
                  fontWeight: '500'
                }}>
                  Meliorism Partners Foundation nurtures and empowers individuals by providing knowledge, 
                  skills, and resources necessary to thrive in a rapidly changing world through education, 
                  holistic support, and community development.
                </p>
                <div style={{
                  borderLeft: '5px solid #4F777F',
                  paddingLeft: '1.5rem',
                  marginBottom: '2.5rem',
                  background: 'linear-gradient(135deg, rgba(79, 119, 127, 0.08), rgba(175, 186, 188, 0.05))',
                  padding: '18px 25px',
                  borderRadius: '0 12px 12px 0'
                }}>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#175760',
                    fontWeight: '700',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Engage, Don't Rage - Discover Our Impact Programs
                  </p>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <Button 
                    size="lg" 
                    as={Link} 
                    to="/donate"
                    style={{
                      backgroundColor: '#C8D633',
                      border: 'none',
                      color: '#1F5F3F',
                      borderRadius: '50px',
                      padding: '15px 35px',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      boxShadow: '0 8px 25px rgba(200, 214, 51, 0.4)',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#B5C42E';
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 12px 35px rgba(200, 214, 51, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#C8D633';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 25px rgba(200, 214, 51, 0.4)';
                    }}
                  >
                    DONATE NOW
                  </Button>
                  <Button 
                    variant="outline-dark" 
                    size="lg" 
                    as={Link} 
                    to="/volunteer"
                    style={{
                      borderRadius: '50px',
                      padding: '15px 35px',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      borderWidth: '2px',
                      borderColor: '#175760',
                      color: '#175760',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#175760';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#175760';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Get Involved
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                {/* Background decorative elements */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, rgba(221, 214, 221, 0.6), rgba(79, 119, 127, 0.4))',
                  borderRadius: '50%',
                  zIndex: 1
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '-10px',
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, rgba(175, 186, 188, 0.5), #4F777F)',
                  borderRadius: '50%',
                  zIndex: 1
                }}></div>
                
                <img 
                  src="/images/home1.jpg" 
                  alt="Happy children - representing hope, joy and transformation through education"
                  style={{
                    width: '100%',
                    maxWidth: '420px',
                    height: '380px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                    transform: 'rotate(1deg)',
                    transition: 'all 0.5s ease',
                    zIndex: 2,
                    position: 'relative',
                    border: '6px solid white'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'rotate(0deg) scale(1.02)';
                    e.target.style.boxShadow = '0 25px 70px rgba(0,0,0,0.25)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'rotate(1deg) scale(1)';
                    e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.2)';
                  }}
                />
                
                {/* Impact stats card */}
                <div style={{
                  position: 'absolute',
                  bottom: '15px',
                  right: '-25px',
                  background: 'white',
                  borderRadius: '15px',
                  padding: '18px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                  zIndex: 3,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                  <div style={{
                    fontSize: '2.2rem',
                    fontWeight: '900',
                    color: '#4F777F',
                    marginBottom: '3px',
                    lineHeight: '1'
                  }}>
                    500+
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#175760',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Lives Changed
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Inspirational Quote Section */}
      <section style={{
        padding: '60px 0',
        background: 'linear-gradient(135deg, #F4F2F5 0%, #ffffff 100%)',
        textAlign: 'center'
      }}>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '900',
                color: '#175760',
                marginBottom: '2rem',
                lineHeight: '1.2'
              }}>
                THE WORLD OUT THERE <br/>
                <span style={{
                  background: 'linear-gradient(135deg, #4F777F, #175760)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  STARTS HERE.
                </span>
              </h2>
              <p style={{
                fontSize: '1.4rem',
                color: '#4F777F',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7',
                fontWeight: '500'
              }}>
                Since our foundation, we've been dedicated to dismantling barriers to high-quality education 
                and fostering critical thinking, creativity, and lifelong learning. We create supportive 
                environments that enable individuals to overcome challenges and achieve their full potential.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Achievement Highlights Section */}
      <section style={{
        padding: '80px 0',
        background: `linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.95) 0%,
          rgba(244, 242, 245, 0.9) 100%
        ),
        url('/images/edu1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '25px',
                padding: '40px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    fontSize: '4rem',
                    fontWeight: '900',
                    color: '#4F777F',
                    marginRight: '20px',
                    lineHeight: '1'
                  }}>
                    95%
                  </div>
                  <div>
                    <h4 style={{
                      color: '#175760',
                      fontWeight: '700',
                      marginBottom: '5px',
                      fontSize: '1.3rem'
                    }}>
                      of participants
                    </h4>
                    <p style={{
                      color: '#4F777F',
                      margin: 0,
                      fontSize: '1.1rem',
                      lineHeight: '1.5'
                    }}>
                      report improved critical thinking and problem-solving skills through our programs
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    fontSize: '4rem',
                    fontWeight: '900',
                    color: '#175760',
                    marginRight: '20px',
                    lineHeight: '1'
                  }}>
                    88%
                  </div>
                  <div>
                    <h4 style={{
                      color: '#175760',
                      fontWeight: '700',
                      marginBottom: '5px',
                      fontSize: '1.3rem'
                    }}>
                      of women
                    </h4>
                    <p style={{
                      color: '#4F777F',
                      margin: 0,
                      fontSize: '1.1rem',
                      lineHeight: '1.5'
                    }}>
                      in our MSCON program achieve greater independence and leadership skills
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    fontSize: '4rem',
                    fontWeight: '900',
                    color: '#4F777F',
                    marginRight: '20px',
                    lineHeight: '1'
                  }}>
                    92%
                  </div>
                  <div>
                    <h4 style={{
                      color: '#175760',
                      fontWeight: '700',
                      marginBottom: '5px',
                      fontSize: '1.3rem'
                    }}>
                      of communities
                    </h4>
                    <p style={{
                      color: '#4F777F',
                      margin: 0,
                      fontSize: '1.1rem',
                      lineHeight: '1.5'
                    }}>
                      show measurable improvement in health awareness and social cohesion
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <img 
                src="/images/mscon.jpg"
                alt="Young people engaged in learning and development activities"
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover',
                  borderRadius: '25px',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
                  border: '8px solid white'
                }}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <Button 
                size="lg" 
                as={Link} 
                to="/impact"
                style={{
                  backgroundColor: '#4F777F',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  boxShadow: '0 8px 25px rgba(79, 119, 127, 0.3)',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(79, 119, 127, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(79, 119, 127, 0.3)';
                }}
              >
                Discover Our Full Impact & Communities
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section style={{
        padding: '80px 0',
        background: `linear-gradient(135deg, rgba(23, 87, 96, 0.95) 0%, rgba(79, 119, 127, 0.9) 100%),
        url('/images/edu2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '25px',
                padding: '50px 40px',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '30px',
                  opacity: 0.8
                }}>
                  💭
                </div>
                <blockquote style={{
                  fontSize: '1.4rem',
                  fontStyle: 'italic',
                  lineHeight: '1.7',
                  marginBottom: '30px',
                  fontWeight: '400'
                }}>
                  "Working with Meliorism Partners Foundation has been transformational. Their approach 
                  to empowering individuals through education and holistic support creates lasting change. 
                  I've witnessed firsthand how their programs build resilience, foster critical thinking, 
                  and inspire people to contribute positively to their communities."
                </blockquote>
                <div style={{
                  borderTop: '2px solid rgba(255, 255, 255, 0.3)',
                  paddingTop: '25px'
                }}>
                  <h5 style={{
                    fontWeight: '700',
                    fontSize: '1.3rem',
                    marginBottom: '8px'
                  }}>
                    Dr. Akosua Mensah
                  </h5>
                  <p style={{
                    opacity: 0.9,
                    fontSize: '1rem',
                    margin: 0
                  }}>
                    Community Development Specialist & MSCON Program Coordinator
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <img
                src="/images/edu2.jpg"
                alt="Dr. Akosua Mensah - Community Development Specialist"
                style={{
                  width: '100%',
                  height: '450px',
                  objectFit: 'cover',
                  borderRadius: '25px',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                  border: '8px solid rgba(255,255,255,0.1)'
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Stories Section */}
      <section style={{
        padding: '80px 0',
        background: `linear-gradient(
          135deg,
          rgba(23, 87, 96, 0.95) 0%,
          rgba(79, 119, 127, 0.9) 50%,
          rgba(23, 87, 96, 0.95) 100%
        ),
        url('/images/help.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle overlay pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="20" cy="20" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }}></div>
        
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '900',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, white, #DDD6DD)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Our Impact Stories
              </h2>
              <p style={{ 
                fontSize: '1.25rem', 
                opacity: 0.95,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                Real transformation happening in communities across the region through our life-changing programs
              </p>
            </Col>
          </Row>
          <Row>
            {[
              { number: '500+', label: 'Lives Transformed', icon: '👥', description: 'Young people empowered' },
              { number: '25+', label: 'Active Programs', icon: '🎓', description: 'Across multiple sectors' },
              { number: '10+', label: 'Communities Served', icon: '🌍', description: 'Rural & urban areas' },
              { number: '100%', label: 'Commitment', icon: '💪', description: 'To lasting change' }
            ].map((stat, index) => (
              <Col md={3} className="text-center mb-4" key={index}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  borderRadius: '20px',
                  padding: '35px 20px',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{
                    fontSize: '2.5rem',
                    marginBottom: '12px'
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: '3.5rem',
                    fontWeight: '900',
                    color: '#DDD6DD',
                    marginBottom: '10px',
                    lineHeight: '1'
                  }}>
                    {stat.number}
                  </div>
                  <h5 style={{ 
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '8px'
                  }}>
                    {stat.label}
                  </h5>
                  <p style={{
                    fontSize: '0.9rem',
                    opacity: 0.9,
                    margin: 0,
                    fontWeight: '400'
                  }}>
                    {stat.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Beautiful Photo Gallery Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #ffffff 0%, #F4F2F5 100%)',
        overflow: 'hidden'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: '#175760',
                marginBottom: '1.5rem'
              }}>
                Moments That Matter
              </h2>
              <p style={{
                fontSize: '1.3rem',
                color: '#4F777F',
                lineHeight: '1.6',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Capturing the joy, hope, and transformation in every moment of our mission
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '350px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
              }}
              >
                <img
                  src="/images/edu1.jpg"
                  alt="African children enjoying life and learning"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                  padding: '30px 20px 20px',
                  textAlign: 'left'
                }}>
                  <h5 style={{ fontWeight: '700', marginBottom: '8px' }}>Education That Inspires</h5>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Creating joyful learning environments</p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '350px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
              }}
              >
                <img
                  src="/images/feed1.jpg"
                  alt="Community development and empowerment"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                  padding: '30px 20px 20px',
                  textAlign: 'left'
                }}>
                  <h5 style={{ fontWeight: '700', marginBottom: '8px' }}>Community Strength</h5>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Building bonds that last</p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '350px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
              }}
              >
                <img
                  src="/images/vol3.jpg"
                  alt="Hands working together for positive change"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                  padding: '30px 20px 20px',
                  textAlign: 'left'
                }}>
                  <h5 style={{ fontWeight: '700', marginBottom: '8px' }}>Together We Rise</h5>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Collaborative transformation</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Do Section */}
      <section style={{
        padding: '80px 0',
        background: `linear-gradient(135deg, rgba(23, 87, 96, 0.95) 0%, rgba(79, 119, 127, 0.9) 100%),
        url('/images/don3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white'
      }}>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto text-center mb-5">
              <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '900',
                marginBottom: '2rem',
                lineHeight: '1.2',
                background: 'linear-gradient(135deg, white, #DDD6DD)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                WHAT <span style={{
                  background: 'linear-gradient(135deg, #DDD6DD, white)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>WE DO.</span>
              </h2>
              <p style={{
                fontSize: '1.4rem',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7',
                fontWeight: '500',
                opacity: 0.95
              }}>
                Meliorism Partners Foundation delivers comprehensive support through programs like 
                MSCON and Health Synergy, empowering individuals and communities. We are dedicated 
                to creating educational resources, mentoring programs, and sustainable solutions 
                that foster lifelong learning and community development.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center mt-5">
            <Col lg={6} className="mb-4">
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '25px',
                padding: '40px',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '25px'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #DDD6DD, rgba(255,255,255,0.9))',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    fontSize: '1.5rem'
                  }}>
                    🎓
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '700', marginBottom: '5px' }}>Educational Excellence</h4>
                    <p style={{ margin: 0, opacity: 0.9 }}>Critical thinking & lifelong learning</p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '25px'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #DDD6DD, rgba(255,255,255,0.9))',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    fontSize: '1.5rem'
                  }}>
                    💪
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '700', marginBottom: '5px' }}>Women's Empowerment</h4>
                    <p style={{ margin: 0, opacity: 0.9 }}>MSCON leadership development</p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #DDD6DD, rgba(255,255,255,0.9))',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    fontSize: '1.5rem'
                  }}>
                    🏥
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '700', marginBottom: '5px' }}>Health Synergy</h4>
                    <p style={{ margin: 0, opacity: 0.9 }}>Community wellness initiatives</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <img
                src="/images/feed2.jpg"
                alt="Inspiring individuals working together for community development"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '25px',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                  border: '8px solid rgba(255,255,255,0.1)'
                }}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <Button 
                size="lg" 
                as={Link} 
                to="/contact"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid white',
                  color: 'white',
                  borderRadius: '50px',
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#175760';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                🤝 Bring Our Programs to Your Community
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Programs Section */}
      <section style={{ 
        padding: '80px 0', 
        background: `linear-gradient(135deg, #F4F2F5 0%, rgba(244, 242, 245, 0.95) 100%),
        url('/images/foraboutus.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 style={{
                fontSize: '2.8rem',
                fontWeight: '800',
                color: '#175760',
                marginBottom: '1rem'
              }}>
                Our Core Programs
              </h2>
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#4F777F',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Comprehensive initiatives guided by our values of integrity, collaboration, and measurable impact
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '25px',
                padding: '2.5rem 2rem',
                height: '100%',
                boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.18)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.12)';
              }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #4F777F, #175760)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <span style={{ fontSize: '2rem' }}>🎓</span>
                </div>
                <h4 style={{ 
                  fontWeight: '700', 
                  color: '#175760', 
                  marginBottom: '1rem',
                  fontSize: '1.3rem'
                }}>
                  Empowering Through Education
                </h4>
                <p style={{ 
                  color: '#4F777F', 
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  marginBottom: '20px'
                }}>
                  Dismantling barriers to high-quality education and skill development, ensuring equitable 
                  access to lifelong learning opportunities through mentoring and educational resources.
                </p>
                <Button 
                  as={Link}
                  to="/education"
                  variant="outline-primary"
                  size="sm"
                  style={{
                    borderRadius: '20px',
                    borderColor: '#4F777F',
                    color: '#4F777F',
                    fontWeight: '600'
                  }}
                >
                  Learn More
                </Button>
              </div>
            </Col>
            
            <Col md={6} lg={4} className="mb-4">
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '25px',
                padding: '2.5rem 2rem',
                height: '100%',
                boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.18)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.12)';
              }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #DDD6DD, #CFCED3)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <span style={{ fontSize: '2rem' }}>👥</span>
                </div>
                <h4 style={{ 
                  fontWeight: '700', 
                  color: '#175760', 
                  marginBottom: '1rem',
                  fontSize: '1.3rem'
                }}>
                  Meliorism She Connects (MSCON)
                </h4>
                <p style={{ 
                  color: '#4F777F', 
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  marginBottom: '20px'
                }}>
                  Comprehensive support program empowering women and vulnerable populations through 
                  mentorship, life skills training, and resources to foster resilience and independence.
                </p>
                <Button 
                  as={Link}
                  to="/mscon"
                  variant="outline-primary"
                  size="sm"
                  style={{
                    borderRadius: '20px',
                    borderColor: '#4F777F',
                    color: '#4F777F',
                    fontWeight: '600'
                  }}
                >
                  Learn More
                </Button>
              </div>
            </Col>
            
            <Col md={6} lg={4} className="mb-4">
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '25px',
                padding: '2.5rem 2rem',
                height: '100%',
                boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.18)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.12)';
              }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #CFCED3, #DDD6DD)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <span style={{ fontSize: '2rem' }}>🏥</span>
                </div>
                <h4 style={{ 
                  fontWeight: '700', 
                  color: '#175760', 
                  marginBottom: '1rem',
                  fontSize: '1.3rem'
                }}>
                  Meliorism Health Synergy
                </h4>
                <p style={{ 
                  color: '#4F777F', 
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  marginBottom: '20px'
                }}>
                  Holistic health education and wellness initiatives that promote thriving, healthy 
                  communities through comprehensive health support and awareness programs.
                </p>
                <Button 
                  as={Link}
                  to="/health-synergy"
                  variant="outline-primary"
                  size="sm"
                  style={{
                    borderRadius: '20px',
                    borderColor: '#4F777F',
                    color: '#4F777F',
                    fontWeight: '600'
                  }}
                >
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Button 
                size="lg" 
                as={Link} 
                to="/programs"
                style={{
                  backgroundColor: '#4F777F',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  boxShadow: '0 8px 25px rgba(79, 119, 127, 0.3)',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(79, 119, 127, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(79, 119, 127, 0.3)';
                }}
              >
                🔍 Explore All Programs
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Be a Game Changer Section */}
      <section style={{
        padding: '80px 0',
        background: `linear-gradient(135deg, rgba(244, 242, 245, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%),
        url('/images/happy2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 style={{
                fontSize: '2.8rem',
                fontWeight: '800',
                color: '#175760',
                marginBottom: '1.5rem'
              }}>
                BE A <span style={{
                  background: 'linear-gradient(135deg, #4F777F, #175760)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>GAME CHANGER.</span>
              </h2>
              <p style={{
                fontSize: '1.3rem',
                color: '#4F777F',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Our comprehensive programs create measurable and lasting positive change in individuals 
                and communities. Through education, MSCON, and Health Synergy initiatives, we've transformed 
                lives across multiple communities. Here's how you can join our mission.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={3} className="mb-4 text-center">
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '30px 20px',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  💝
                </div>
                <h5 style={{
                  fontWeight: '700',
                  color: '#175760',
                  marginBottom: '15px'
                }}>
                  Support Education Access
                </h5>
                <p style={{
                  color: '#4F777F',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Help us dismantle barriers to high-quality education and provide learning opportunities for all.
                </p>
                <Button 
                  as={Link}
                  to="/donate"
                  size="sm"
                  style={{
                    backgroundColor: '#C8D633',
                    border: 'none',
                    color: '#1F5F3F',
                    borderRadius: '20px',
                    padding: '8px 20px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    letterSpacing: '0.5px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#B5C42E';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#C8D633';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  DONATE NOW
                </Button>
              </div>
            </Col>
            
            <Col md={6} lg={3} className="mb-4 text-center">
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '30px 20px',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  🏢
                </div>
                <h5 style={{
                  fontWeight: '700',
                  color: '#175760',
                  marginBottom: '15px'
                }}>
                  Empower Women (MSCON)
                </h5>
                <p style={{
                  color: '#4F777F',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Support our Meliorism She Connects program empowering women and vulnerable populations.
                </p>
                <Button 
                  as={Link}
                  to="/corporate"
                  variant="outline-primary"
                  size="sm"
                  style={{
                    borderColor: '#4F777F',
                    color: '#4F777F',
                    borderRadius: '20px',
                    padding: '8px 20px',
                    fontWeight: '600'
                  }}
                >
                  Learn More
                </Button>
              </div>
            </Col>
            
            <Col md={6} lg={3} className="mb-4 text-center">
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '30px 20px',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  🤝
                </div>
                <h5 style={{
                  fontWeight: '700',
                  color: '#175760',
                  marginBottom: '15px'
                }}>
                  Health & Wellness
                </h5>
                <p style={{
                  color: '#4F777F',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Join our Health Synergy initiative promoting holistic health education and community wellness.
                </p>
                <Button 
                  as={Link}
                  to="/volunteer"
                  variant="outline-primary"
                  size="sm"
                  style={{
                    borderColor: '#4F777F',
                    color: '#4F777F',
                    borderRadius: '20px',
                    padding: '8px 20px',
                    fontWeight: '600'
                  }}
                >
                  Get Involved
                </Button>
              </div>
            </Col>
            
            <Col md={6} lg={3} className="mb-4 text-center">
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '30px 20px',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  🎯
                </div>
                <h5 style={{
                  fontWeight: '700',
                  color: '#175760',
                  marginBottom: '15px'
                }}>
                  Community Development
                </h5>
                <p style={{
                  color: '#4F777F',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Collaborate with us on sustainable solutions that promote social justice and thriving communities.
                </p>
                <Button 
                  as={Link}
                  to="/partnership"
                  variant="outline-primary"
                  size="sm"
                  style={{
                    borderColor: '#4F777F',
                    color: '#4F777F',
                    borderRadius: '20px',
                    padding: '8px 20px',
                    fontWeight: '600'
                  }}
                >
                  Partner Up
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section style={{
        padding: '90px 0',
        background: `linear-gradient(
          135deg,
          rgba(23, 87, 96, 0.95) 0%,
          rgba(79, 119, 127, 0.9) 100%
        ),
        url('/images/TeamPic.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(23, 87, 96, 0.7)',
          backdropFilter: 'blur(2px)'
        }}></div>
        
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 style={{
                fontSize: '3.2rem',
                fontWeight: '900',
                marginBottom: '1.5rem',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Ready to Empower Minds?
              </h2>
              <p style={{
                fontSize: '1.4rem',
                marginBottom: '3rem',
                opacity: 0.95,
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto 3rem auto'
              }}>
                Join our mission to empower minds and transform lives through education, holistic support, 
                and community development. Together, we can create lasting positive change that strengthens 
                communities and unlocks human potential.
              </p>
              <div className="d-flex gap-4 justify-content-center flex-wrap">
                <Button 
                  size="lg" 
                  as={Link} 
                  to="/donate"
                  style={{
                    backgroundColor: '#C8D633',
                    border: 'none',
                    color: '#1F5F3F',
                    borderRadius: '50px',
                    padding: '18px 40px',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    boxShadow: '0 8px 25px rgba(200, 214, 51, 0.4)',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#B5C42E';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 12px 35px rgba(200, 214, 51, 0.5)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#C8D633';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 25px rgba(200, 214, 51, 0.4)';
                  }}
                >
                  SUPPORT OUR CAUSE
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  as={Link} 
                  to="/about"
                  style={{
                    borderRadius: '50px',
                    padding: '18px 40px',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    borderWidth: '2px',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#175760';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Learn Our Story
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;