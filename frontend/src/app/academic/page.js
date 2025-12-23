'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function DepartmentPage() {
    return (
        <>
          {/* Academic Section */}
        
        <section className="py-5" style={{ backgroundColor: '#e8f5e9' }}>
            <Container className="px-4 px-md-0">
            <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Departments</h2>
            <p className="text-center text-muted mb-5 px-3">
            Explore our diverse departments designed to nurture every student's potential and prepare them for successful futures.
            </p>
            </Container>
        </section>
        {/* General Science Department */}
        <section className="py-5">
        <Container className="px-4 px-md-0">
            <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Monday to Friday</h2>
            <p className="text-center text-muted mb-5 px-3">
            Arabic and English Section which has the students studying Arabic and Islamic Studies in the morning, and circular education after.
            </p>
            <Row className="justify-content-center">
            <Col lg={4} md={6}>
                <Card className="h-100 text-center border-0 shadow">
                <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>🔬</div>
                    <h5 className="mb-3">Monday to Friday</h5>
                    <p className="text-muted small">Arabic and English Section which has the students studying Arabic and Islamic Studies in the morning, and circular education after.</p>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </section>

        {/* General Arts Department */}
        <section className="py-5">
        <Container className="px-4 px-md-0">
            <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Saturday and Sunday</h2>
            <p className="text-center text-muted mb-5 px-3">
            This is designed for students who are not able to attend the Monday to Friday section because their parents sent them to different schools.
            </p>
            <Row className="justify-content-center">
            <Col lg={4} md={6}>
                <Card className="h-100 text-center border-0 shadow">
                <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>📚</div>
                    <h5 className="mb-3">Saturday and Sunday</h5>
                    <p className="text-muted small">This is designed for students who are not able to attend the Monday to Friday section because their parents sent them to different schools.</p>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </section>      
        </>
    )
}