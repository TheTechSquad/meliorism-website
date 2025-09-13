import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <>

      {/* Team Photo - Full Width Hero */}
      <section className="p-0" style={{ marginTop: '120px' }}>
        <div className="position-relative">
          <img src="/images/foraboutus.jpg"
               alt="Meliorism Partners Foundation Team"
               className="w-100"
               style={{
                 height: '75vh',
                 minHeight: '500px',
                 objectFit: 'cover',
                 objectPosition: 'center'
               }} />
          <div className="position-absolute top-0 start-0 w-100 h-100"
               style={{
                 background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2))',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center'
               }}>
            <div className="text-center text-white">
              <h1 
                className="fw-bold mb-4" 
                style={{ 
                  fontSize: 'clamp(2rem, 6vw, 4rem)',
                  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '1.5px',
                  fontWeight: '900',
                  textTransform: 'uppercase'
                }}
              >
                About Meliorism Partners Foundation
              </h1>
              <div className="d-flex justify-content-center">
                <p 
                  className="fs-5" 
                  style={{ 
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', 
                    maxWidth: '700px',
                    fontSize: '1.2rem',
                    fontWeight: '500',
                    lineHeight: '1.6',
                    textAlign: 'center',
                    margin: '0 auto'
                  }}
                >
                  Empowering minds, transforming lives through education and community development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Statement */}
      <section style={{ padding: '80px 0', background: '#F4F2F5' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: '900',
                color: '#175760',
                marginBottom: '2rem',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
              }}>
                Our Foundation Story
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#4F777F',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                We strive to create a supportive environment that fosters critical thinking, creativity, and
                lifelong learning. By investing in education and personal growth, we aim to transform
                lives, enabling individuals to overcome challenges, achieve their full potential, and
                contribute positively to their communities.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Statement */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #4F777F 0%, #175760 100%)',
        color: 'white'
      }}>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '900',
                textAlign: 'center',
                marginBottom: '3rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textShadow: '2px 2px 4px rgba(255, 255, 255, 0.3)'
              }}>
                Our Mission
              </h2>
              <Row>
                <Col md={4} className="mb-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '2rem',
                    height: '100%',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: '#DDD6DD',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>🎓</span>
                    </div>
                    <h4 style={{ 
                      fontWeight: '800', 
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '1.3rem'
                    }}>
                      Empowering Through Education
                    </h4>
                    <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
                      Dismantling barriers to high-quality education and skill development, ensuring
                      equitable access to lifelong learning opportunities for all individuals.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '2rem',
                    height: '100%',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: '#DDD6DD',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>💪</span>
                    </div>
                    <h4 style={{ 
                      fontWeight: '800', 
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '1.3rem'
                    }}>
                      Holistic Life Transformation
                    </h4>
                    <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
                      Comprehensive support through MSCON and Health Synergy programs,
                      empowering women and vulnerable populations with resilience and independence.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '2rem',
                    height: '100%',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: '#DDD6DD',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>🌍</span>
                    </div>
                    <h4 style={{ 
                      fontWeight: '800', 
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '1.3rem'
                    }}>
                      Community Development
                    </h4>
                    <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
                      Advocating for social justice and sustainable solutions, partnering with
                      local leaders to address systemic issues and create meaningful impact.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section style={{ padding: '80px 0', background: '#F4F2F5' }}>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: '900',
                textAlign: 'center',
                color: '#175760',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
              }}>
                Our Core Values
              </h2>
              <p style={{
                fontSize: '1.2rem',
                textAlign: 'center',
                color: '#4F777F',
                marginBottom: '3rem',
                maxWidth: '600px',
                margin: '0 auto 3rem'
              }}>
                At the Meliorism Partners Foundation, our actions are profoundly guided by a strong
                set of values that form the foundation of our work:
              </p>
              <Row>
                <Col md={6} lg={3} className="text-center mb-4">
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #4F777F, #175760)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem'
                    }}>
                      <span style={{ fontSize: '2rem' }}>👂</span>
                    </div>
                    <h4 style={{ 
                      fontWeight: '800', 
                      color: '#175760', 
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '1.2rem'
                    }}>
                      Listen, Understand & Respond
                    </h4>
                    <p style={{ color: '#4F777F', lineHeight: '1.6' }}>
                      We prioritize genuine engagement with the communities we serve, understanding their unique needs.
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={3} className="text-center mb-4">
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #DDD6DD, #CFCED3)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem'
                    }}>
                      <span style={{ fontSize: '2rem' }}>🛡️</span>
                    </div>
                    <h4 style={{ 
                      fontWeight: '800', 
                      color: '#175760', 
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '1.2rem'
                    }}>
                      Integrity
                    </h4>
                    <p style={{ color: '#4F777F', lineHeight: '1.6' }}>
                      We uphold the highest ethical standards, ensuring transparency and accountability in all our endeavors.
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={3} className="text-center mb-4">
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #CFCED3, #DDD6DD)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem'
                    }}>
                      <span style={{ fontSize: '2rem' }}>🤝</span>
                    </div>
                    <h4 style={{ 
                      fontWeight: '800', 
                      color: '#175760', 
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '1.2rem'
                    }}>
                      Collaboration
                    </h4>
                    <p style={{ color: '#4F777F', lineHeight: '1.6' }}>
                      We believe in the power of partnerships, working together to harness collective strengths.
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={3} className="text-center mb-4">
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem 1.5rem',
                    height: '100%',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #F4F2F5, #DDD6DD)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem'
                    }}>
                      <span style={{ fontSize: '2rem' }}>💥</span>
                    </div>
                    <h4 style={{ 
                      fontWeight: '800', 
                      color: '#175760', 
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '1.2rem'
                    }}>
                      Impact
                    </h4>
                    <p style={{ color: '#4F777F', lineHeight: '1.6' }}>
                      Our commitment lies in creating measurable and lasting positive change that enhances lives.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="text-center">
                  <div style={{
                    background: 'linear-gradient(135deg, #4F777F, #175760)',
                    borderRadius: '50px',
                    padding: '1rem 2rem',
                    display: 'inline-block',
                    color: 'white',
                    fontWeight: '800',
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
                  }}>
                    Our Motto: "Engage, Don't Rage"
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Vision Statement */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #175760 0%, #4F777F 100%)',
        color: 'white'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '900',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textShadow: '2px 2px 4px rgba(255, 255, 255, 0.3)'
              }}>
                Our Vision
              </h2>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: '#DDD6DD',
                marginBottom: '2rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Empowering Minds, Transforming Lives
              </h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                opacity: 0.95
              }}>
                The Meliorism Partners Foundation stands as a beacon of hope for the next generation.
                Our vision is to nurture and empower individuals by providing them with the
                knowledge, skills, and resources necessary to thrive in a rapidly changing world. We
                strive to create a supportive environment that fosters critical thinking, creativity, and
                lifelong learning. By investing in education and personal growth, we aim to transform
                lives, enabling individuals to overcome challenges, achieve their full potential, and
                contribute positively to their communities. Together, we seek to inspire a culture of
                empowerment that uplifts minds and drives societal progress.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Meet Our Team */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 
                className="fw-bold text-center mb-5" 
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
                }}
              >
                Meet Our Team
              </h2>
              <p className="lead text-center mb-5">
                Our dedicated team of professionals works tirelessly to make our mission a reality.
                Each member brings unique expertise and passion to drive positive change in our communities.
              </p>
              <Row className="g-4">
                {/* First Row: CEO, Administrator, General Secretary */}
                <Col md={6} lg={4} className="text-center">
                  <div className="team-member">
                    <img src="/images/team/CEO-Founder.jpg"
                         alt="CEO & Founder"
                         className="img-fluid rounded-circle mb-3 shadow"
                         style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h5 
                      className="fw-bold" 
                      style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem',
                        fontWeight: '800'
                      }}
                    >
                      CEO & Founder
                    </h5>
                    <p className="text-muted">Israel Lambert Hodzi</p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="text-center">
                  <div className="team-member">
                    <img src="/images/team/Administrator.jpg"
                         alt="Administrator"
                         className="img-fluid rounded-circle mb-3 shadow"
                         style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h5 
                      className="fw-bold" 
                      style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem',
                        fontWeight: '800'
                      }}
                    >
                      Administrator
                    </h5>
                    <p className="text-muted">Rev. Joshua Marrion Addae-Williams</p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="text-center">
                  <div className="team-member">
                    <img src="/images/team/Gen Secretary.jpg"
                         alt="General Secretary"
                         className="img-fluid rounded-circle mb-3 shadow"
                         style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h5 
                      className="fw-bold" 
                      style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem',
                        fontWeight: '800'
                      }}
                    >
                      General Secretary
                    </h5>
                    <p className="text-muted">Ms. Stephanie Mensah</p>
                  </div>
                </Col>
                
                {/* Second Row */}
                <Col md={6} lg={4} className="text-center">
                  <div className="team-member">
                    <img src="/images/team/Programs Director.jpg"
                         alt="Programs Director"
                         className="img-fluid rounded-circle mb-3 shadow"
                         style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h5 
                      className="fw-bold" 
                      style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem',
                        fontWeight: '800'
                      }}
                    >
                      Programs Director
                    </h5>
                    <p className="text-muted">Emmanuel Adjei</p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="text-center">
                  <div className="team-member">
                    <img src="/images/team/Campus Director.jpg"
                         alt="Campus Director"
                         className="img-fluid rounded-circle mb-3 shadow"
                         style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h5 
                      className="fw-bold" 
                      style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem',
                        fontWeight: '800'
                      }}
                    >
                      Campus Director
                    </h5>
                    <p className="text-muted">Mr. Ransford Amoako</p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="text-center">
                  <div className="team-member">
                    <img src="/images/team/Financial Controller.jpg"
                         alt="Financial Controller"
                         className="img-fluid rounded-circle mb-3 shadow"
                         style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h5 
                      className="fw-bold" 
                      style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem',
                        fontWeight: '800'
                      }}
                    >
                      Financial Controller
                    </h5>
                    <p className="text-muted">Jennifer Naki Batsa</p>
                  </div>
                </Col>
                
                {/* Third Row */}
                <Col md={6} lg={4} className="text-center">
                  <div className="team-member">
                    <img src="/images/team/Dep Secretary.jpg"
                         alt="Deputy Secretary"
                         className="img-fluid rounded-circle mb-3 shadow"
                         style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h5 
                      className="fw-bold" 
                      style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem',
                        fontWeight: '800'
                      }}
                    >
                      Deputy Secretary
                    </h5>
                    <p className="text-muted">Theola Awen</p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="text-center">
                  <div className="team-member">
                    <img src="/images/team/Health Admin.jpg"
                         alt="Health Administrator"
                         className="img-fluid rounded-circle mb-3 shadow"
                         style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h5 
                      className="fw-bold" 
                      style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem',
                        fontWeight: '800'
                      }}
                    >
                      Health Administrator
                    </h5>
                    <p className="text-muted">Dr. Priscilla Arthur-Johnson</p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="text-center">
                  <div className="team-member">
                    <img src="/images/team/MSCON Admin.jpg"
                         alt="MSCON Administrator"
                         className="img-fluid rounded-circle mb-3 shadow"
                         style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h5 
                      className="fw-bold" 
                      style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem',
                        fontWeight: '800'
                      }}
                    >
                      MSCON Administrator
                    </h5>
                    <p className="text-muted">Mrs. Juliiet Koudonu Seglah</p>
                  </div>
                </Col>
                
                {/* Fourth Row */}
                <Col md={6} lg={4} className="text-center">
                  <div className="team-member">
                    <img src="/images/team/Counselling-Career Dev. Coach.jpg"
                         alt="Counselling & Career Development Coach"
                         className="img-fluid rounded-circle mb-3 shadow"
                         style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h5 
                      className="fw-bold" 
                      style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem',
                        fontWeight: '800'
                      }}
                    >
                      Counselling & Career Dev. Coach
                    </h5>
                    <p className="text-muted">Mrs Steffi Korsah</p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="text-center">
                  <div className="team-member">
                    <img src="/images/team/Relationship-Personality Dev. Coach.jpg"
                         alt="Relationship & Personality Development Coach"
                         className="img-fluid rounded-circle mb-3 shadow"
                         style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h5 
                      className="fw-bold" 
                      style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem',
                        fontWeight: '800'
                      }}
                    >
                      Relationship & Personality Dev. Coach
                    </h5>
                    <p className="text-muted">Miriam Kimani</p>
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

export default About;