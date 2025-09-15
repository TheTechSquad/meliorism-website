import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Badge, Alert, Spinner, Pagination } from 'react-bootstrap';

function DonationHistory() {
  const [donations, setDonations] = useState([]);
  const [summary, setSummary] = useState({});
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchDonationHistory(currentPage);
  }, [currentPage]);

  const fetchDonationHistory = async (page = 1) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('userToken');
      const response = await fetch(`${API_BASE_URL}/api/user/donations?page=${page}&limit=10`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setDonations(data.data.donations);
        setSummary(data.data.summary);
        setPagination(data.data.pagination);
      } else {
        setError('Failed to fetch donation history');
      }
    } catch (err) {
      setError('Error connecting to server');
    } finally {
      setLoading(false);
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

  const getStatusText = (status) => {
    const texts = {
      success: 'Completed',
      pending: 'Processing',
      failed: 'Failed',
      cancelled: 'Cancelled'
    };
    return texts[status] || status;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading && currentPage === 1) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" />
        <p>Loading donation history...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5" style={{ marginTop: '120px' }}>
      <Row>
        <Col>
          <h1 className="mb-4">My Donation History</h1>
          
          {error && <Alert variant="danger">{error}</Alert>}
          
          {/* Summary Cards */}
          <Row className="mb-4">
            <Col md={4}>
              <Card className="text-center border-primary">
                <Card.Body>
                  <h3 className="text-primary mb-2">${summary.totalAmount || 0}</h3>
                  <p className="text-muted mb-0">Total Donated</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center border-success">
                <Card.Body>
                  <h3 className="text-success mb-2">{summary.successfulDonations || 0}</h3>
                  <p className="text-muted mb-0">Successful Donations</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center border-info">
                <Card.Body>
                  <h3 className="text-info mb-2">{donations.length}</h3>
                  <p className="text-muted mb-0">Total Transactions</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Donations Table */}
          <Card>
            <Card.Header>
              <h5 className="mb-0">Donation History</h5>
            </Card.Header>
            <Card.Body>
              {donations.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-muted">No donations found.</p>
                </div>
              ) : (
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Frequency</th>
                      <th>Status</th>
                      <th>Payment Reference</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map((donation) => (
                      <tr key={donation._id}>
                        <td>
                          <div>
                            <div>{new Date(donation.createdAt).toLocaleDateString()}</div>
                            <small className="text-muted">
                              {new Date(donation.createdAt).toLocaleTimeString()}
                            </small>
                          </div>
                        </td>
                        <td>
                          <strong>${donation.amount}</strong>
                        </td>
                        <td>
                          <Badge bg="light" text="dark">
                            {donation.frequency || 'one-time'}
                          </Badge>
                        </td>
                        <td>
                          <div>
                            {getStatusBadge(donation.paymentStatus)}
                            <div>
                              <small className="text-muted">
                                {getStatusText(donation.paymentStatus)}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <small className="font-monospace">
                            {donation.paymentReference || donation.paystackReference || 'N/A'}
                          </small>
                        </td>
                        <td>
                          {donation.message ? (
                            <small className="text-muted">
                              {donation.message.length > 50 
                                ? `${donation.message.substring(0, 50)}...` 
                                : donation.message
                              }
                            </small>
                          ) : (
                            <span className="text-muted">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <Pagination>
                <Pagination.First 
                  disabled={!pagination.hasPrev}
                  onClick={() => handlePageChange(1)}
                />
                <Pagination.Prev 
                  disabled={!pagination.hasPrev}
                  onClick={() => handlePageChange(currentPage - 1)}
                />
                
                {[...Array(pagination.totalPages)].map((_, index) => {
                  const page = index + 1;
                  if (
                    page === 1 || 
                    page === pagination.totalPages || 
                    (page >= currentPage - 2 && page <= currentPage + 2)
                  ) {
                    return (
                      <Pagination.Item
                        key={page}
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </Pagination.Item>
                    );
                  } else if (
                    page === currentPage - 3 || 
                    page === currentPage + 3
                  ) {
                    return <Pagination.Ellipsis key={page} />;
                  }
                  return null;
                })}
                
                <Pagination.Next 
                  disabled={!pagination.hasNext}
                  onClick={() => handlePageChange(currentPage + 1)}
                />
                <Pagination.Last 
                  disabled={!pagination.hasNext}
                  onClick={() => handlePageChange(pagination.totalPages)}
                />
              </Pagination>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default DonationHistory;
