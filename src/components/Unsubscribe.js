import React, { useState } from 'react';
import { Container, Form, Button ,Row, Col, Card } from 'react-bootstrap';
import './styles.css';

// UnsubscribeForm.js

const UnsubscribePage = () => {
  return (
    <div className="unsubscribe-form-container">
      <img src="https://us.123rf.com/450wm/arcady31/arcady312007/arcady31200700003/151473346-emoticon-with-sorry-sign-vector-illustration-on-white-background.jpg?ver=6" alt="Unsubscribe Image" className="unsubscribe-image" />


      
      <h2>Sorry to See You Go</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="msisdn">MSISDN:</label>
          <input type="text" id="msisdn" name="msisdn" placeholder="Enter MSISDN" />
        </div>
        <button type="submit" className='join-now-button btn btn-primary'>Unsubscribe</button>
      </form>
    </div>
  );
}

const handleSubmit = (event) => {
  event.preventDefault();
  const msisdn = event.target.elements.msisdn.value;
  // Perform unsubscribe action with msisdn
}



export default UnsubscribePage;
