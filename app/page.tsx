'use client';

import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FlodeskForm from '@/components/FlodeskForm';

function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll('.fade-in');
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const clients = ['Ayush Baral', 'Prabhakar Kafle', 'Arun Ramtel', 'Chetan Pun'];

export default function Home() {
  useFadeIn();

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav />

      {/* SECTION 1 — HERO */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '8rem 1.5rem 5rem',
        }}
      >
        <div className="fade-in visible" style={{ maxWidth: '760px' }}>
          <p style={{
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#A0A0A0',
            marginBottom: '1.75rem',
          }}>
            Digital Marketing Consultant &nbsp;·&nbsp; Nepal
          </p>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}>
            Grow Your Business With The Right Marketing Strategy
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#A0A0A0',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 2.5rem',
          }}>
            Book a free 1:1 consultation call with Kritagya Bhandari —
            Nepal&apos;s digital marketing consultant
          </p>
          <button
            onClick={scrollToForm}
            style={{
              background: '#FFFFFF',
              color: '#0A0A0A',
              border: 'none',
              padding: '0.85rem 2.25rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              borderRadius: '4px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* SECTION 2 — TRUSTED CLIENTS */}
      <section style={{
        borderTop: '1px solid #222222',
        padding: '6rem 1.5rem',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#A0A0A0',
              marginBottom: '0.75rem',
            }}>
              Social Proof
            </p>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}>
              Brands I&apos;ve Worked With
            </h2>
          </div>

          <div
            className="fade-in"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
            }}
          >
            {clients.map(name => (
              <div
                key={name}
                style={{
                  border: '1px solid #222222',
                  borderRadius: '6px',
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  color: '#FFFFFF',
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — FLODESK FORM */}
      <section
        id="form-section"
        style={{
          borderTop: '1px solid #222222',
          padding: '6rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#A0A0A0',
              marginBottom: '0.75rem',
            }}>
              Free 1:1 Session
            </p>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              marginBottom: '0.85rem',
            }}>
              Book Your Free 1:1 Consultation
            </h2>
            <p style={{ color: '#A0A0A0', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Limited spots available. Fill the form and I&apos;ll get back to you.
            </p>
          </div>
          <FlodeskForm />
        </div>
      </section>

      {/* SECTION 4 — FOOTER */}
      <Footer />
    </>
  );
}
