import React from 'react';
import '../App.css'; // Ensure styles are applied

const HomeContent = () => {
  console.log('Rendering HomeContent'); // This prints, so the component is called
  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to SecureApp</h1>
      <p className="home-subtitle">Your secure gateway to a seamless experience.</p>
      <div className="home-features">
        <div className="feature-item">
          <h3>Fast & Secure Login</h3>
          <p>Access your account quickly with industry-leading security measures to keep your data safe.</p>
        </div>
        <div className="feature-item">
          <h3>Easy Registration</h3>
          <p>Get started in minutes with a simple, intuitive sign-up process designed for everyone.</p>
        </div>
        <div className="feature-item">
          <h3>Personalized Dashboards</h3>
          <p>Enjoy tailored experiences with dashboards built for users and administrators alike.</p>
        </div>
      </div>
      <div className="home-cta">
        <p>Join thousands of users who trust SecureApp for their daily needs.</p>
        <p className="cta-text">Get started today and explore what SecureApp has to offer!</p>
      </div>
    </div>
  );
};

export default HomeContent;