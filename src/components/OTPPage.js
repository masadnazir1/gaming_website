// OTPPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const OTPPage = () => {
  const [otp, setOtp] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate OTP and perform any necessary checks
    // Redirect to home page
    history.push('/');
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="otp">
          <Form.Label>OTP</Form.Label>
          <Form.Control type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default OTPPage;
