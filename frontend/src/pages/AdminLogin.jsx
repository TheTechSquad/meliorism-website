import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Check if user is admin
        if (data.data.user.role === 'admin') {
          localStorage.setItem('adminToken', data.data.token);
          localStorage.setItem('adminUser', JSON.stringify(data.data.user));
          navigate('/admin/dashboard');
        } else {
          setError('Admin access required');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Row>
        <Col>
          <Card className="shadow-lg" style={{ width: '400px' }}>
            <Card.Header className="text-center bg-primary text-white">
              <h4 className="mb-0">Admin Login</h4>
            </Card.Header>
            <Card.Body className="p-4">
              {error && <Alert variant="danger">{error}</Alert>}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter admin email"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter password"
                  />
                </Form.Group>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </Form>
              
              <div className="text-center mt-3">
                <small className="text-muted">
                  Default: admin@meliorismfoundation.org / admin123456
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminLogin;
