'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';

export default function AboutUsPage() {
  const leadership = [
        {
          name: 'Sheikh Mohammed Ibrahim',
          position: 'Director',
          description: 'With over 15 years in educational leadership, Sheikh Mohammed brings vision and innovation to guide our school towards academic excellence and holistic student development.',
          image: '/images/Director1.jpg'
        },
        {
          name: 'Sheikh Suleman Ibrahim',
          position: 'Head of Abrem Branch',
          description: 'A dedicated educator with expertise in curriculum development and student affairs, ensuring our academic programs meet the highest standards of quality education.',
          image: '/images/MallamSule.jpg'
        },
        {
          name: 'Sheikh Yahya Ibrahim',
          position: 'Head of Adukrom Branch',
          description: 'Passionate about student welfare and academic support, Mrs. Issah oversees pastoral care and creates a nurturing environment for all students to thrive.',
          image: '/images/MallamYahya.jpg'
        },
        {
          name: 'Mallam Abdul Mumin Jibreel',
          position: 'Imaam',
          description: 'Our spiritual guide who provides Islamic education and moral guidance, helping students develop strong character and values alongside their academic pursuits.',
          image: '/images/Placeholder.jpg'
        }
      ]
    
    
  return (
    <>
      {/* About Us Section */}
      <section className="py-5" style={{ backgroundColor: '#e8f5e9' }}>
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>About Us</h2>
              <p className="text-center text-muted mb-5 px-3">
              Discover our rich history, mission, and commitment to providing quality education that transforms lives and builds future leaders.
              </p>
            </Container>
      </section>

      <section className="py-5" >
        <Container className="px-3 px-md-0">
          <Row className="align-items-stretch">
            <Col lg={6} md={12} className="mb-4 mb-lg-0 order-2 order-lg-1">
            <Image 
                src="/images/Director.jpg" 
                alt="About Markazul Huda" 
                width={500}  
                height={1000}
                className="rounded about-image"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Col>

            <Col lg={6} md={12} className="order-1 order-lg-2">
              <Row>
                {/* History Card */}
                <Col md={12} className="mb-4">
                  <Card className="h-100 text-center border-0 shadow">
                    <Card.Body className="p-3.5">
                      <h3 className="text-center mb-3" style={{ color: 'var(--school-blue)'}}>History</h3>
                      <p className="mb-2 text-muted">
                      Markazul Huda is a basic school with locations in Adukrom and Abrem, Kumasi, established by IQRA Foundation, a non-governmental organization comprising Muslims residing and working in Saudi Arabia.
                      </p>
                      <p className="mb-2 text-muted">
                      The school&#39;s primary mission is to provide affordable, quality secondary education to poor and needy students in Kumasi, Ashanti Region, and throughout Ghana. 
                      </p>

                      <p className="mb-2" style={{ color: '#238b45', fontWeight: '700' }}>
                        Mission
                      </p>

                      <p className="mb-2 text-muted">
                      lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>

                      <p className="mb-2" style={{ color: '#238b45', fontWeight: '700' }}>
                        Vision
                      </p>

                      <p className="mb-2 text-muted">
                      lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {        /* Mission and Vision Section */ }
        <section className="py-5">
            <Container className="px-3 px-md-0">
                <Row className="text-center">
                    <Col>
                    <h2 className="mb-4" style={{
                        background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom',
                        backgroundSize: '80% 3px',
                        paddingBottom: '15px',
                        width: 'fit-content',
                        margin: '0 auto'
                    }}>
                        Mission and Vision
                    </h2>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col md={6} className="mb-4 d-flex">
                    <Card className="w-100 h-100 border-0 shadow">
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                            <h3 className="mb-3">Mission</h3>
                            <p className="text-muted">
                                To provide quality education that empowers students to achieve their full potential and become responsible citizens.
                            </p>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={6} className="mb-4 d-flex">
                    <Card className="w-100 h-100 border-0 shadow">
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                            <h3 className="mb-3">Vision</h3>
                            <p className="text-muted">
                                To be a leading educational institution recognized for excellence in academics, character development, and community service.
                            </p>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Founders Section */}
        <section className="py-5" style={{ backgroundColor: '#e8f5e9' }}>
        <Container className="px-4 px-md-0">
          <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Our Founders</h2>
          <p className="text-center text-muted mb-5 px-3">
          Meet our dedicated team of experienced educators and administrators committed to academic excellence and student success.
          </p>
          <Row>
            {leadership.map((leader, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="text-center border-0 shadow h-100">
                  <Card.Body className="p-4">
                    <div 
                      className="rounded-circle mx-auto mb-3"
                      style={{
                        width: '120px',
                        height: '120px',
                        padding: '8px',
                        backgroundColor: '#e9ecef',
                        backgroundImage: `url(${leader.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: 'transparent',
                        backgroundPosition: 'center'
                      }}
                    />
                    <h5 className="mb-1">{leader.name}</h5>
                    <p className="mb-3 founder-position">{leader.position}</p>
                    <p className="text-muted small">{leader.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
