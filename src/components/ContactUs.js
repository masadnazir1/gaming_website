import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './styles.css';

const ContactUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
  };

  return (
    <Container className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, please feel free to contact us using the form below:</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required className='input'/>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required className='input'/>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message" required className='input' />
          </Form.Group>
          <Button variant="primary" type="submit" className="join-now-button btn btn-primary">Submit</Button>
        </Form>
      </div>

      {/* <div className="contact-info mt-5">
        <h3>Contact Information</h3>
        <p>Email: contact@gamingportal.com</p>
        <p>Phone: 123-456-7890</p>
      </div> */}

    </Container>
  );
}

export default ContactUsPage;
