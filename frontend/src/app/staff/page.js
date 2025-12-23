'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function StaffPage() {
    const managementTeam = [
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
    ];

    const teachingStaff = [
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
    ];

    const nonTeachingStaff = [
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
    ];

    return (
        <>
          {/* Staff Overview Section */}
          <section className="py-5" style={{backgroundColor: '#e8f5e9'}}>
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Staff</h2>
              <p className="text-center text-muted mb-5 px-3">
                Meet our dedicated team of professionals committed to providing quality education and comprehensive support for student success.
              </p>
            </Container>
          </section>

          {/* Management Team Section */}
          <section className="py-5">
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Management Team</h2>
              <p className="text-center text-muted mb-5 px-3">
                Our experienced leadership team guiding the school towards academic excellence and holistic development.
              </p>
              <Row>
                {managementTeam.map((member, index) => (
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
                            backgroundImage: `url(${member.image})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: 'transparent',
                            backgroundPosition: 'center'
                          }}
                        />
                        <h5 className="mb-1">{member.name}</h5>
                        <p className="mb-3" style={{ color: '#D4AF37' }}>{member.position}</p>
                        <p className="text-muted small">{member.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          {/* Teaching Staff Section */}
          <section className="py-5" style={{backgroundColor: '#e8f5e9'}}>
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Teaching Staff</h2>
              <p className="text-center text-muted mb-5 px-3">
                Qualified and passionate educators dedicated to inspiring and nurturing student learning across all subjects.
              </p>
              <Row>
                {teachingStaff.map((teacher, index) => (
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
                            backgroundImage: `url(${teacher.image})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: 'transparent',
                            backgroundPosition: 'center'
                          }}
                        />
                        <h5 className="mb-1">{teacher.name}</h5>
                        <p className="mb-3" style={{ color: '#D4AF37' }}>{teacher.position}</p>
                        <p className="text-muted small">{teacher.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          {/* Non-Teaching Staff Section */}
          <section className="py-5">
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Non-Teaching Staff</h2>
              <p className="text-center text-muted mb-5 px-3">
                Essential support staff ensuring smooth school operations and comprehensive student services.
              </p>
              <Row>
                {nonTeachingStaff.map((staff, index) => (
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
                            backgroundImage: `url(${staff.image})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: 'transparent',
                            backgroundPosition: 'center'
                          }}
                        />
                        <h5 className="mb-1">{staff.name}</h5>
                        <p className="mb-3" style={{ color: '#D4AF37' }}>{staff.position}</p>
                        <p className="text-muted small">{staff.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        </>
    )
}