// components/Hero.js
'use client'

import { useState } from 'react'
import { Container, Carousel } from 'react-bootstrap'
import Link from 'next/link'

export default function Hero() {
  const [index, setIndex] = useState(0)

  const slides = [
    {
      title: "Welcome to",
      titleHighlight: "MARKAZUL HUDA",
      description: "Integrity, Belief, Accountability, Discipline, Unity of purpose and Responsibility are our Core Values.",
      image: "/images/Graduation2.jpg"
    },
    {
      title: "Excellence in",
      titleHighlight: "ISLAMIC EDUCATION",
      description: "Combining traditional Islamic values with modern academic excellence to shape tomorrow's leaders.",
      image: "/images/hero-bg2.jpg"
    },
    {
      title: "Building",
      titleHighlight: "FUTURE LEADERS",
      description: "Empowering students with knowledge, character, and skills for success in this world and the hereafter.",
      image: "/images/Graduation1.jpg"
    }
  ]

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect}
      interval={5000}
      fade
      controls={true}
      indicators={true}
      className="hero-carousel"
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <section 
            className="hero-section text-white d-flex align-items-center position-relative"
            style={{
              minHeight: '85vh',
              padding: '0 1rem',
              background: `linear-gradient(rgba(0, 20, 10, 0.80), rgba(0, 60, 10, 0.5)), url(${slide.image}) center/cover no-repeat`,
              overflowX: 'hidden',
            }}
          >
            <div 
              className="position-absolute w-100 h-100"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
                top: 0,
                left: 0,
                zIndex: 1
              }}
            />
            <Container className="position-relative" style={{ zIndex: 3 }}>
              <div className="text-center">
                <h3 
                  className="display-4 mb-4 text-white" 
                  style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)' }}
                >
                  {slide.title}
                </h3>
                <h1 
                  className="display-3 display-md-1 fw-bold mb-4 text-white" 
                  style={{
                    fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                    textAlign: 'center',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  {slide.titleHighlight}
                </h1>
                <p 
                  className="lead mb-5 text-white" 
                  style={{ fontSize: 'clamp(1rem, 3.5vw, 1.4rem)', lineHeight: '1.6' }}
                >
                  {slide.description}
                </p>
                <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                  <button 
                    className="btn btn-lg px-5 py-3 position-relative"
                    style={{
                      backgroundColor: 'white',
                      color: '#238b45',
                      border: 'none',
                      borderRadius: '50px',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    Reach Out
                    <span style={{
                      position: 'absolute',
                      top: '50%',
                      right: '25px',
                      transform: 'translateY(-50%)',
                      fontSize: '1.4rem'
                    }}>→</span>
                  </button>
                </Link>
              </div>
            </Container>
          </section>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}