import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';

function DonationSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState('loading');
  const [donationData, setDonationData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const reference = searchParams.get('reference');
    if (reference) {
      verifyPayment(reference);
    } else {
      setVerificationStatus('error');
      setError('No payment reference found');
    }
  }, [searchParams]);

  const verifyPayment = async (reference) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/verify-payment/${reference}`);
      const data = await response.json();

      if (response.ok) {
        setVerificationStatus('success');
        setDonationData(data.data);
      } else {
        setVerificationStatus('failed');
        setError(data.message || 'Payment verification failed');
      }
    } catch (err) {
      setVerificationStatus('error');
      setError('Error verifying payment');
    }
  };

  const handleViewHistory = () => {
    navigate('/donation-history');
  };

  const handleMakeAnotherDonation = () => {
    navigate('/donate');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  if (verificationStatus === 'loading') {
    return (
      <Container className="py-5 text-center" style={{ marginTop: '120px' }}>
        <Spinner animation="border" variant="primary" />
        <h3 className="mt-3">Verifying your payment...</h3>
        <p className="text-muted">Please wait while we confirm your donation.</p>
      </Container>
    );
  }

  return (
    <Container className="py-5" style={{ marginTop: '120px' }}>
      <Row className="justify-content-center">
        <Col lg={8}>
          {verificationStatus === 'success' && donationData && (
            <Card className="border-success">
              <Card.Body className="text-center p-5">
                <div className="mb-4">
                  <div 
                    className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <i className="fas fa-check fa-2x"></i>
                  </div>
                  <h1 className="text-success">Thank You!</h1>
                  <h4 className="text-muted mb-4">Your donation was successful</h4>
                </div>

                <Card className="bg-light border-0 mb-4">
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <h6 className="text-muted">Donation Amount</h6>
                        <h3 className="text-primary">${donationData.amount}</h3>
                      </Col>
                      <Col md={6}>
                        <h6 className="text-muted">Transaction Status</h6>
                        <h4 className="text-success">Completed</h4>
                      </Col>
                    </Row>
                    {donationData.donation && (
                      <Row className="mt-3">
                        <Col md={6}>
                          <h6 className="text-muted">Donation ID</h6>
                          <p className="font-monospace small">{donationData.donation._id}</p>
                        </Col>
                        <Col md={6}>
                          <h6 className="text-muted">Date</h6>
                          <p>{new Date(donationData.donation.createdAt).toLocaleDateString()}</p>
                        </Col>
                      </Row>
                    )}
                  </Card.Body>
                </Card>

                <div className="mb-4">
                  <h5>Your Impact</h5>
                  <p className="text-muted">
                    Your generous donation of ${donationData.amount} will help us continue our mission 
                    of creating positive change in communities. Thank you for being part of our journey 
                    to empower individuals and transform lives.
                  </p>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    onClick={handleViewHistory}
                    className="me-md-2"
                  >
                    View Donation History
                  </Button>
                  <Button 
                    variant="outline-primary" 
                    size="lg" 
                    onClick={handleMakeAnotherDonation}
                    className="me-md-2"
                  >
                    Make Another Donation
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    size="lg" 
                    onClick={handleGoHome}
                  >
                    Return Home
                  </Button>
                </div>

                <div className="mt-4 pt-4 border-top">
                  <p className="text-muted small">
                    A confirmation email has been sent to your email address. 
                    If you have any questions, please contact our support team.
                  </p>
                </div>
              </Card.Body>
            </Card>
          )}

          {(verificationStatus === 'failed' || verificationStatus === 'error') && (
            <Card className="border-danger">
              <Card.Body className="text-center p-5">
                <div className="mb-4">
                  <div 
                    className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <i className="fas fa-times fa-2x"></i>
                  </div>
                  <h1 className="text-danger">Payment Issue</h1>
                  <h4 className="text-muted mb-4">There was a problem with your donation</h4>
                </div>

                <Alert variant="danger">
                  {error}
                </Alert>

                <p className="text-muted mb-4">
                  Don't worry, if your card was charged, we'll investigate and refund any 
                  unsuccessful transactions within 2-3 business days.
                </p>

                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    onClick={handleMakeAnotherDonation}
                    className="me-md-2"
                  >
                    Try Again
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    size="lg" 
                    onClick={handleGoHome}
                  >
                    Return Home
                  </Button>
                </div>

                <div className="mt-4 pt-4 border-top">
                  <p className="text-muted small">
                    If you continue to experience issues, please contact our support team 
                    with your transaction reference for assistance.
                  </p>
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default DonationSuccess;
