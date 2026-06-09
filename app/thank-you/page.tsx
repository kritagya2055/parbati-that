export default function ThankYou() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0A0A0A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1.5rem',
      textAlign: 'center',
    }}>
      <p style={{
        fontSize: '0.72rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#A0A0A0',
        marginBottom: '1rem',
      }}>
        Consultation Booked
      </p>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        marginBottom: '1rem',
        color: '#FFFFFF',
      }}>
        You&apos;re In!
      </h1>
      <p style={{
        color: '#A0A0A0',
        fontSize: '1rem',
        lineHeight: 1.7,
        marginBottom: '2.5rem',
        maxWidth: '480px',
      }}>
        Watch this short message from Kritagya
      </p>

      <div style={{
        width: '100%',
        maxWidth: '720px',
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        borderRadius: '6px',
      }}>
        <iframe
          src="https://player.vimeo.com/video/1198966045"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Message from Kritagya Bhandari"
        />
      </div>
    </main>
  );
}
