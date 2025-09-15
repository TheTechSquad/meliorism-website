import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, Badge, Alert, Spinner } from 'react-bootstrap';

function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [donations, setDonations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardData();
    fetchDonations();
    fetchContacts();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(\${API_BASE_URL}/api/admin/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setDashboardData(data.data);
      } else {
        setError('Failed to fetch dashboard data');
      }
    } catch (err) {
      setError('Error connecting to server');
    }
  };

  const fetchDonations = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(\${API_BASE_URL}/api/donations', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setDonations(data.data.donations);
      }
    } catch (err) {
      console.error('Error fetching donations:', err);
    }
  };

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(\${API_BASE_URL}/api/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data.data.contacts);
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateDonationStatus = async (donationId, status) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/admin/donation/${donationId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        fetchDonations();
        fetchDashboardData();
      }
    } catch (err) {
      console.error('Error updating donation status:', err);
    }
  };

  const updateContactStatus = async (contactId, status) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/admin/contact/${contactId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        fetchContacts();
        fetchDashboardData();
      }
    } catch (err) {
      console.error('Error updating contact status:', err);
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      success: 'success',
      pending: 'warning',
      failed: 'danger',
      cancelled: 'secondary'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" />
        <p>Loading dashboard...</p>
      </Container>
    );
  }

  return (
    <Container fluid className="py-4" style={{ marginTop: '120px' }}>
      <Row>
        <Col>
          <h1 className="mb-4">Admin Dashboard</h1>
          
          {error && <Alert variant="danger">{error}</Alert>}
          
          {dashboardData && (
            <>
              {/* Overview Cards */}
              <Row className="mb-4">
                <Col md={3}>
                  <Card className="text-center">
                    <Card.Body>
                      <h5 className="text-primary">${dashboardData.overview.totalAmount}</h5>
                      <p className="mb-0">Total Donations</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="text-center">
                    <Card.Body>
                      <h5 className="text-success">{dashboardData.overview.successfulDonations}</h5>
                      <p className="mb-0">Successful</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="text-center">
                    <Card.Body>
                      <h5 className="text-warning">{dashboardData.overview.pendingDonations}</h5>
                      <p className="mb-0">Pending</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="text-center">
                    <Card.Body>
                      <h5 className="text-info">{dashboardData.overview.totalVolunteers}</h5>
                      <p className="mb-0">Volunteers</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Recent Activity */}
              <Row className="mb-4">
                <Col md={6}>
                  <Card>
                    <Card.Header>
                      <h5>Recent Activity (Last 30 Days)</h5>
                    </Card.Header>
                    <Card.Body>
                      <p><strong>Donations:</strong> {dashboardData.recentActivity.last30Days.count}</p>
                      <p><strong>Amount:</strong> ${dashboardData.recentActivity.last30Days.totalAmount}</p>
                      <p><strong>Unread Messages:</strong> {dashboardData.overview.unreadContacts}</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Header>
                      <h5>Top Donors</h5>
                    </Card.Header>
                    <Card.Body>
                      {dashboardData.topDonors.slice(0, 3).map((donor, index) => (
                        <div key={index} className="d-flex justify-content-between mb-2">
                          <span>{donor.firstName} {donor.lastName}</span>
                          <span>${donor.totalAmount}</span>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {/* Donations Table */}
          <Row className="mb-4">
            <Col>
              <Card>
                <Card.Header>
                  <h5>Recent Donations</h5>
                </Card.Header>
                <Card.Body>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Donor</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donations.slice(0, 10).map((donation) => (
                        <tr key={donation._id}>
                          <td>{donation.firstName} {donation.lastName}</td>
                          <td>${donation.amount}</td>
                          <td>{getStatusBadge(donation.paymentStatus)}</td>
                          <td>{new Date(donation.createdAt).toLocaleDateString()}</td>
                          <td>
                            {donation.paymentStatus === 'pending' && (
                              <>
                                <Button 
                                  size="sm" 
                                  variant="success" 
                                  className="me-2"
                                  onClick={() => updateDonationStatus(donation._id, 'success')}
                                >
                                  Approve
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="danger"
                                  onClick={() => updateDonationStatus(donation._id, 'failed')}
                                >
                                  Reject
                                </Button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Contact Messages */}
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h5>Recent Contact Messages</h5>
                </Card.Header>
                <Card.Body>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.slice(0, 10).map((contact) => (
                        <tr key={contact._id}>
                          <td>{contact.name}</td>
                          <td>{contact.subject}</td>
                          <td>
                            <Badge bg={contact.status === 'unread' ? 'danger' : 'success'}>
                              {contact.status}
                            </Badge>
                          </td>
                          <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                          <td>
                            {contact.status === 'unread' && (
                              <Button 
                                size="sm" 
                                variant="primary"
                                onClick={() => updateContactStatus(contact._id, 'read')}
                              >
                                Mark Read
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
