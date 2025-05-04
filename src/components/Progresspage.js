import React from 'react';

const UnderConstruction = () => {
  const styles = {
    body: {
      margin: 0,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      overflow: 'hidden',
      textAlign: 'center',
    },
    container: {
      animation: 'float 3s ease-in-out infinite',
    },
    heading: {
      fontSize: '3em',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '3px',
    },
    paragraph: {
      fontSize: '1.2em',
      marginTop: 0,
      opacity: 0.8,
    },
    gear: {
      fontSize: '4em',
      animation: 'spin 4s linear infinite',
    },
    // Add keyframes as global styles
    keyframes: `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `,
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <div style={styles.body}>
        <div style={styles.container}>
          <div style={styles.gear}>⚙️</div>
          <h1 style={styles.heading}>We're Building Something Awesome</h1>
          <p style={styles.paragraph}>
            This page is currently under construction.<br />
            Please check back soon!
          </p>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
