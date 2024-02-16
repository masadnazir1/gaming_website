import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.css';

const AboutPage = () => {
  return (
    <Container className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>Welcome to Gaming Portal, your number one source for all things gaming. We're dedicated to providing you the very best of games, with an emphasis on quality, entertainment, and innovation.</p>
        <p>Founded in 2021 by a team of passionate gamers, Gaming Portal has come a long way from its beginnings. We now serve customers all over the world and are thrilled to be a part of the gaming industry.</p>
        <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
      </div>

      <div className="policy-section">
        <hr />
        <h3>Privacy Policy</h3>
        <p>This privacy policy ("Policy") describes how Gaming Portal ("Gaming Portal", "we", "us" or "our") collects, protects and uses the personally identifiable information ("Personal Information") you ("User", "you" or "your") may provide on the gamingportal.com website and any of its products or services (collectively, "Website" or "Services").</p>
      </div>

      <div className="policy-section">
        <hr />
        <h3>Cookie Policy</h3>
        <p>Our website uses cookies. By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.</p>
      </div>

      <div className="policy-section">
        <hr />
        <h3>Terms and Conditions</h3>
        <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
      </div>
    </Container>
  );
}

export default AboutPage;
