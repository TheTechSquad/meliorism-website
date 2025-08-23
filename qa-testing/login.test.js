// Test case: Successful login and donation flow
// Use Jest or Playwright for automation
// Validate form inputs and API responses

const request = require('supertest');
const app = require('../backend/src/app');

describe('Meliorism Foundation API Tests', () => {
  
  // Test donation flow
  describe('Donation flow', () => {
    it('should allow valid users to donate successfully', async () => {
      const donationData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        amount: 100,
        message: 'Keep up the great work!'
      };

      const response = await request(app)
        .post('/api/donate')
        .send(donationData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Donation received successfully');
      expect(response.body.data.amount).toBe(100);
      expect(response.body.data.status).toBe('pending');
    });

    it('should reject donation with invalid email', async () => {
      const invalidDonationData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'invalid-email',
        amount: 100
      };

      const response = await request(app)
        .post('/api/donate')
        .send(invalidDonationData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Validation errors');
    });

    it('should reject donation with missing required fields', async () => {
      const incompleteDonationData = {
        firstName: 'John',
        email: 'john.doe@example.com'
        // Missing lastName and amount
      };

      const response = await request(app)
        .post('/api/donate')
        .send(incompleteDonationData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  // Test volunteer registration flow
  describe('Volunteer registration flow', () => {
    it('should allow valid volunteer registration', async () => {
      const volunteerData = {
        fullName: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1234567890',
        interests: ['Education Programs', 'Community Gardens'],
        availability: 'Weekends and evenings'
      };

      const response = await request(app)
        .post('/api/volunteer')
        .send(volunteerData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Volunteer registration successful');
      expect(response.body.data.fullName).toBe('Jane Smith');
      expect(response.body.data.status).toBe('pending');
    });

    it('should reject duplicate volunteer email', async () => {
      const volunteerData = {
        fullName: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1234567890',
        interests: ['Education Programs'],
        availability: 'Weekends'
      };

      // First registration should succeed
      await request(app)
        .post('/api/volunteer')
        .send(volunteerData)
        .expect(201);

      // Second registration with same email should fail
      const response = await request(app)
        .post('/api/volunteer')
        .send(volunteerData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Email already registered as volunteer');
    });
  });

  // Test contact form flow
  describe('Contact form flow', () => {
    it('should accept valid contact form submission', async () => {
      const contactData = {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        subject: 'Question about programs',
        message: 'I would like to know more about your education programs.'
      };

      const response = await request(app)
        .post('/api/contact')
        .send(contactData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Message sent successfully');
      expect(response.body.data.status).toBe('unread');
    });

    it('should reject contact form with missing fields', async () => {
      const incompleteContactData = {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com'
        // Missing subject and message
      };

      const response = await request(app)
        .post('/api/contact')
        .send(incompleteContactData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  // Test blog posts retrieval
  describe('Blog posts', () => {
    it('should retrieve published blog posts', async () => {
      const response = await request(app)
        .get('/api/posts')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('should create new blog post with valid data', async () => {
      const postData = {
        title: 'Test Blog Post',
        content: 'This is a test blog post content.',
        author: 'Test Author',
        published: true
      };

      const response = await request(app)
        .post('/api/posts')
        .send(postData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Blog post created successfully');
      expect(response.body.data.title).toBe('Test Blog Post');
    });
  });

  // Test API health and status
  describe('API Health', () => {
    it('should return API status', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);

      expect(response.body.message).toBe('Meliorism Foundation Backend is running');
      expect(response.body.version).toBe('1.0.0');
      expect(response.body.endpoints).toBeDefined();
    });

    it('should return health check status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body.status).toBe('OK');
      expect(response.body.timestamp).toBeDefined();
      expect(response.body.uptime).toBeDefined();
    });
  });

  // Test error handling
  describe('Error handling', () => {
    it('should return 404 for non-existent routes', async () => {
      const response = await request(app)
        .get('/api/nonexistent')
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Route not found');
    });
  });

  // Test admin endpoints
  describe('Admin endpoints', () => {
    it('should retrieve all donations', async () => {
      const response = await request(app)
        .get('/api/donations')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.donations).toBeDefined();
      expect(response.body.data.totalAmount).toBeDefined();
      expect(response.body.data.count).toBeDefined();
    });

    it('should retrieve all volunteers', async () => {
      const response = await request(app)
        .get('/api/volunteers')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.volunteers).toBeDefined();
      expect(response.body.data.count).toBeDefined();
    });

    it('should retrieve all contact messages', async () => {
      const response = await request(app)
        .get('/api/contacts')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.contacts).toBeDefined();
      expect(response.body.data.count).toBeDefined();
    });
  });
});

// Integration tests for form validation
describe('Form Validation Tests', () => {
  
  describe('Email validation', () => {
    const testCases = [
      { email: 'valid@example.com', valid: true },
      { email: 'invalid-email', valid: false },
      { email: 'test@', valid: false },
      { email: '@example.com', valid: false },
      { email: '', valid: false }
    ];

    testCases.forEach(({ email, valid }) => {
      it(`should ${valid ? 'accept' : 'reject'} email: ${email}`, async () => {
        const donationData = {
          firstName: 'Test',
          lastName: 'User',
          email: email,
          amount: 50
        };

        const response = await request(app)
          .post('/api/donate')
          .send(donationData);

        if (valid) {
          expect(response.status).toBe(201);
        } else {
          expect(response.status).toBe(400);
        }
      });
    });
  });

  describe('Amount validation', () => {
    const testCases = [
      { amount: 10, valid: true },
      { amount: 100.50, valid: true },
      { amount: 'invalid', valid: false },
      { amount: -10, valid: true }, // Backend should handle negative amounts
      { amount: 0, valid: true }
    ];

    testCases.forEach(({ amount, valid }) => {
      it(`should handle amount: ${amount}`, async () => {
        const donationData = {
          firstName: 'Test',
          lastName: 'User',
          email: 'test@example.com',
          amount: amount
        };

        const response = await request(app)
          .post('/api/donate')
          .send(donationData);

        if (valid && typeof amount === 'number') {
          expect(response.status).toBe(201);
        } else {
          expect(response.status).toBe(400);
        }
      });
    });
  });
});