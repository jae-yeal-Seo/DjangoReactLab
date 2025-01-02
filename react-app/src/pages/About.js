import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.description}>
        We are a team of passionate developers dedicated to building amazing web applications.
        Our mission is to create solutions that make life easier and more enjoyable for everyone.
      </p>
      <ul style={styles.list}>
        <li>🎯 Focused on user-friendly design</li>
        <li>🚀 Committed to fast and efficient performance</li>
        <li>🌟 Driven by innovation and creativity</li>
      </ul>
      <p style={styles.contact}>
        Want to learn more? Feel free to reach out to us at <a href="mailto:contact@ourapp.com" style={styles.link}>contact@ourapp.com</a>.
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5em',
    color: '#333',
  },
  description: {
    fontSize: '1.2em',
    color: '#555',
    margin: '20px 0',
  },
  list: {
    textAlign: 'left',
    display: 'inline-block',
    margin: '20px 0',
    padding: '0',
    fontSize: '1.1em',
    color: '#444',
  },
  contact: {
    fontSize: '1em',
    color: '#555',
    marginTop: '30px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default About;
