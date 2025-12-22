'use client'

import { Container, Row, Col } from 'react-bootstrap'
import logo from '/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const pageLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about-us' },
    { name: 'Academic', url: '/academic' },
    { name: 'Staff', url: '/staff' },
    { name: 'Students', url: '/students' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Contact Us', url: '/contact-us' }
  ]

  return (
    <>
      <footer style={{ backgroundColor: '#142c14', color: 'white', padding: '60px 0 30px' }}>
        <Container>
          <Row>
            {/* Logo and Contact Info */}
            <Col lg={4} md={6} className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Image
                  src={logo}
                  alt='Markazul Huda Logo'
                  width={40}
                  height={40}
                  style={{ objectFit: 'contain', borderRadius: '50%' }}
                />
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  Markazul Huda
                </span>
              </div>
              <p className="text-white-50 mb-4" style={{ lineHeight: '1.6' }}>
                Providing quality education that combines traditional values with modern academic excellence to shape tomorrow&apos;s leaders.
              </p>
              
              {/* Contact Info */}
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">📞</span>
                  <span>+233 54 786 5221</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">✉️</span>
                  <span>markazulhuda@gmail.com</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-2">📍</span>
                  <span>Adukrom, Kumasi, Ghana</span>
                </div>
              </div>

              {/* Social Media */}
              {/*<div className="d-flex gap-2 mt-3">
                <a href="#" style={{ color: '#4267B2', fontSize: '1.5rem' }}>📘</a>
                <a href="#" style={{ color: '#FF0000', fontSize: '1.5rem' }}>📺</a>
                <a href="#" style={{ color: '#000000', fontSize: '1.5rem' }}>🎵</a>
                <a href="#" style={{ color: '#0A66C2', fontSize: '1.5rem' }}>💼</a>
              </div>*/}
            </Col>

            <Col lg={1}></Col> {/* Spacer */}

            {/* Page Links */}
            <Col lg={3} md={6} className="mb-4">
              <h5 className="mb-3 text-white">Page Links</h5>
              <div className="d-flex flex-column">
                {pageLinks.map((link, index) => (
                  <Link
                    key={index} 
                    href={link.url}
                    className="text-white-50 text-decoration-none mb-2 hover-link"
                    style={{ transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = 'white'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </Col>

            {/* Location & Map */}
            <Col lg={4} md={6} className="mb-4">
              <h5 className="mb-3 text-white">Location</h5>
              
              {/* Contact Details */}
              <div className="mb-3">
                <div className="d-flex align-items-start mb-2">
                  <span className="me-2 mt-1">📍</span>
                  <div>
                    <p className="mb-1 text-white">Adukrom, Kumasi, Ghana</p>
                    <p className="text-white-50 small mb-0">Adukrom Municipality</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">📞</span>
                  <span className="text-white-50">+233 54 786 5221</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-2">💬</span>
                  <span className="text-white-50">markazulhuda@gmail.com</span>
                </div>
              </div>

              {/* Mini Map */}
              <div style={{ 
                height: '120px', 
                borderRadius: '8px', 
                overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.1)'
              }}>
                <iframe
                  src="https://maps.app.goo.gl/jXhYqXGrwXhWVJ6U6?g_st=ic"
                  width="100%"
                  height="120"
                  style={{ border: 0, filter: 'grayscale(1) opacity(0.8)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Markazul Huda Location"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Copyright Section */}
      <section style={{ backgroundColor: '#000', color: 'white', padding: '20px 0', textAlign: 'center' }}>
        <Container>
          <Row className="align-items-center">
              <p className="mb-0 text-white-50">
                © 2025 Markazul Huda. <br/> All rights reserved.
              </p> <br />
              <p className="mb-0 text-white-50">
                Designed by:  <span style={{ color: 'white' }}>Kusuntu AI Lab</span>
              </p>
          </Row>
        </Container>
      </section>
    </>
  )
}