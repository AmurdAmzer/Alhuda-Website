// app/page.js
/* eslint-disable react/no-unescaped-entities */
'use client'

import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import ResponsiveCardGrid from '../components/ResponsiveCardGrid';
import Hero from '../components/Hero'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const departments = [
    {
      icon: '🔬',
      title: 'Monday to Friday',
      description: 'Arabic and English Section which has the students studying Arabic and Islamic Studies in the morning, and circular education after.'
    },
    {
      icon: '📚',
      title: 'Saturday and Sunday',
      description: 'This is designed for students who are not able to attend the Monday to Friday section because their parents sent them to different schools.'
    }
  ]

  const newsArticles = [
    {
      id: 1,
      title: 'Certificates for 2024 Candidates Available',
      description: 'The Markazul Huda administration wishes to inform all 2024 graduates that their official certificates are ready for collection at the school premises. Come with a valid ID from Monday to Friday 9:00am - 3:00pm.',
      image: '/images/WASSCEResults2024.jpg'
    },
    {
      id: 2,
      title: 'Academic Excellence Awards 2025',
      description: 'Celebrating outstanding academic achievements of our students. Join us as we recognize the hard work and dedication of our brilliant minds.',
      image: '/images/news2.jpg'
    },
    {
      id: 3,
      title: 'Sports Day Success',
      description: 'Our annual sports day was a tremendous success with students showcasing their athletic abilities and team spirit.',
      image: '/images/news3.jpg'
    }
  ]

  const leadership = [
    {
      name: 'Sheikh Mohammed Ibrahim',
      position: 'Director',
      description: 'With over 15 years in educational leadership, Sheikh Mohammed brings vision and innovation to guide our school towards academic excellence and holistic student development.',
      image: '/images/director1.jpg'
    },
    {
      name: 'Sheikh Suleman Ibrahim',
      position: 'Head of Abrem Branch',
      description: 'A dedicated educator with expertise in curriculum development and student affairs, ensuring our academic programs meet the highest standards of quality education.',
      image: '/images/mallamsule.jpg'
    },
    {
      name: 'Sheikh Yahya Ibrahim',
      position: 'Head of Adukrom Branch',
      description: 'Passionate about student welfare and academic support, Mrs. Issah oversees pastoral care and creates a nurturing environment for all students to thrive.',
      image: '/images/mallamyahya.jpg'
    },
    {
      name: 'Mallam Abdul Mumin Jibreel',
      position: 'Imaam',
      description: 'Our spiritual guide who provides Islamic education and moral guidance, helping students develop strong character and values alongside their academic pursuits.',
      image: '/images/ustaa.jpg'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <section className="py-5">
        <Container className="px-3 px-md-0">
        <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>About Us</h2>
          <p className="text-center text-muted mb-5 px-3">
          Discover our rich history, mission, and commitment to providing quality education that transforms lives and builds future leaders.
          </p>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="mb-4 mb-lg-0 order-2 order-lg-1">
              <Image 
                src="/images/director.jpg" 
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
            <Col lg={6} md={12} className='order-1 order-lg-2'>
              <Row>
                {/* About Us Card */}
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

      {/* Our Departments Section */}
      <section className="py-5" >
        <Container className="px-4 px-md-0">
          <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Departments</h2>
          <p className="text-center text-muted mb-5 px-3">
          Explore our diverse departments designed to nurture every student's potential and prepare them for successful futures.
          </p>
          <Row className="justify-content-center">
            {departments.map((dept, index) => (
              <Col lg={5} md={6} className="mb-4" key={index}>
                <Card className="h-100 text-center border-0 shadow">
                  <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>{dept.icon}</div>
                    <h5 className="mb-3">{dept.title}</h5>
                    <p className="text-muted small">{dept.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Link href="/academic" style={{ textDecoration: 'none' }}>
              <Button 
                variant="primary" 
                size="lg"
                style={{ backgroundColor: 'var(--school-blue)', border: 'none' }}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* News and Gallery Section - Carousel */}
      <section className="py-5" >
        <Container >
        <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>News and Gallery</h2>
          <Row>
            <Col lg={10} className="mx-auto">
              <Carousel indicators={true} controls={true} interval={5000}>
                {newsArticles.map((article) => (
                  <Carousel.Item key={article.id}>
                    <Card className="border-0 shadow mx-auto" style={{ maxWidth: '100%' }}>
                      <Card.Img 
                        variant="top" 
                        src={article.image} 
                        style={{ height: '400px', objectFit: 'cover' }}
                      />
                      <Card.Body className="p-4 text-center">
                        <h3>{article.title}</h3>
                        <p className="text-muted">
                          {article.description}
                        </p>
                        <Link href="/gallery?filter=news">
                          <Button variant="primary"
                                  className="px-4 py-2 fw-bold shadow-sm"
                                  style={{
                                    backgroundColor: 'var(--school-blue)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease-in-out',
                                  }}
                                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                                >
                            Read More →
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Founders Section */}
      <section className="py-5">
        <Container className="px-4 px-md-0">
        <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Founders</h2>
          <p className="text-center text-muted mb-5 px-3">
          Meet our dedicated team of experienced educators and administrators committed to academic excellence and student success.
          </p>
            <ResponsiveCardGrid 
              items={leadership}
              renderCard={(leader) => (
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
                    <p className="text-primary mb-3">{leader.position}</p>
                    <p className="text-muted small">{leader.description}</p>
                  </Card.Body>
                </Card>
              )}
            />
        </Container>
      </section>
    </>
  )
}