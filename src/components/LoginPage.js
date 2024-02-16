// LoginPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  const [msisdn, setMsisdn] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate MSISDN and perform any necessary checks
    // Redirect to OTP page
    history.push('/otp');
  };

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="msisdn">
          <Form.Label>MSISDN</Form.Label>
          <Form.Control type="text" value={msisdn} onChange={(e) => setMsisdn(e.target.value)} placeholder="Enter your MSISDN" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default LoginPage;
