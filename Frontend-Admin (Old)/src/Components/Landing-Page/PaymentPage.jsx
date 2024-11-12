import React, { useState } from 'react';
import { Form, Button, InputGroup, Row, Col, Card } from 'react-bootstrap';
import './LandingPage.css'; // Import for custom styles

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to an API
    alert('Payment submitted');
  };

  return (
    <div className="paymentpage">
    <div className="container payment-container" style={{justifyContent:'center',alignItems:'center'}}>
      <h3 className="my-4">Payment Information</h3>
      <Row>
        <Col md={7}>
          <Form onSubmit={handleSubmit}>
            <h5>Credit/Debit Card</h5>
            <Form.Group controlId="cardNumber" className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group controlId="expiryDate" className="mb-3">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control type="text" placeholder="MM/YY" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="cvv" className="mb-3">
                  <Form.Label>CVC/CVV</Form.Label>
                  <Form.Control type="text" placeholder="3 digits" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="nameOnCard" className="mb-3">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control type="text" placeholder="J. Smith" required />
            </Form.Group>

            <h5 className="mt-4">Other Payment Methods</h5>
            <Form.Group className="mb-3">
            <Form.Check
              type="radio"
              label="Google Pay"
              name="paymentMethod"
              id="googlePay"
              value="google-pay"
              checked={paymentMethod === 'google-pay'}
              onChange={handlePaymentMethodChange}
            />
            <Form.Check
              type="radio"
              label="PhonePe"
              name="paymentMethod"
              id="paypal"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={handlePaymentMethodChange}
            />
             <Form.Check
              type="radio"
              label="Net Banking"
              name="paymentMethod"
              id="netbanking"
              value="netbanking"
              checked={paymentMethod === 'netbanking'}
              onChange={handlePaymentMethodChange}
            />
            
            <Button type="submit" className="btn me-4">
              Pay
            </Button>
          </Form.Group>
          </Form>

{/*         
          <Form.Group className="mb-3">
            <Form.Check
              type="radio"
              label="Google Pay"
              name="paymentMethod"
              id="googlePay"
              value="google-pay"
              checked={paymentMethod === 'google-pay'}
              onChange={handlePaymentMethodChange}
            />
            <Form.Check
              type="radio"
              label="PayPal"
              name="paymentMethod"
              id="paypal"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={handlePaymentMethodChange}
            />
          </Form.Group> */}
        </Col>

        {/* <Col md={5}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Subscription Features</Card.Title>
              <Card.Text>
                <ul>
                  <li>No ads</li>
                  <li>Set custom alerts for flights</li>
                  <li>Access 365 days of past flights</li>
                  <li>Over 50 premium-only features</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Subscription Details</Card.Title>
              <Card.Text>
                <strong>Flightradar24 Gold plan</strong><br />
                Billed annually<br />
                US $34.99<br />
                <small>For personal use only.</small>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Account Information</Card.Title>
              <Card.Text>
                <strong>Email:</strong> anirbit16@gmail.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </div>
    </div>
  );
};

export default PaymentForm;
