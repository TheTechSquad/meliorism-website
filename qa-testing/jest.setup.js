// Jest setup file for Meliorism Foundation testing
// This file runs before each test suite

// Set test timeout
jest.setTimeout(30000);

// Mock environment variables for testing
process.env.NODE_ENV = 'test';
process.env.MONGODB_URI = 'mongodb://localhost:27017/meliorism_foundation_test';
process.env.JWT_SECRET = 'test_jwt_secret_key';
process.env.PORT = '5001';

// Global test utilities
global.testUtils = {
  // Helper function to generate test data
  generateTestUser: () => ({
    firstName: 'Test',
    lastName: 'User',
    email: `test${Date.now()}@example.com`,
    amount: Math.floor(Math.random() * 1000) + 10
  }),

  generateTestVolunteer: () => ({
    fullName: 'Test Volunteer',
    email: `volunteer${Date.now()}@example.com`,
    phone: '+1234567890',
    interests: ['Education Programs', 'Community Gardens'],
    availability: 'Weekends and evenings'
  }),

  generateTestContact: () => ({
    name: 'Test Contact',
    email: `contact${Date.now()}@example.com`,
    subject: 'Test Subject',
    message: 'This is a test message for contact form.'
  }),

  generateTestBlogPost: () => ({
    title: `Test Blog Post ${Date.now()}`,
    content: 'This is test content for a blog post.',
    author: 'Test Author',
    published: true
  })
};

// Console log suppression for cleaner test output
const originalConsoleError = console.error;
const originalConsoleLog = console.log;

beforeAll(() => {
  console.error = jest.fn();
  console.log = jest.fn();
});

afterAll(() => {
  console.error = originalConsoleError;
  console.log = originalConsoleLog;
});

// Database cleanup helpers
global.cleanupDatabase = async (mongoose) => {
  if (mongoose && mongoose.connection && mongoose.connection.readyState === 1) {
    const collections = await mongoose.connection.db.collections();
    
    for (let collection of collections) {
      await collection.deleteMany({});
    }
  }
};

// Test data validation helpers
global.validateApiResponse = (response, expectedStatus = 200) => {
  expect(response.status).toBe(expectedStatus);
  expect(response.body).toBeDefined();
  
  if (expectedStatus >= 200 && expectedStatus < 300) {
    expect(response.body.success).toBe(true);
  } else {
    expect(response.body.success).toBe(false);
  }
};

global.validateDonationResponse = (response) => {
  global.validateApiResponse(response, 201);
  expect(response.body.data).toBeDefined();
  expect(response.body.data.donationId).toBeDefined();
  expect(response.body.data.amount).toBeDefined();
  expect(response.body.data.status).toBe('pending');
};

global.validateVolunteerResponse = (response) => {
  global.validateApiResponse(response, 201);
  expect(response.body.data).toBeDefined();
  expect(response.body.data.volunteerId).toBeDefined();
  expect(response.body.data.fullName).toBeDefined();
  expect(response.body.data.status).toBe('pending');
};

global.validateContactResponse = (response) => {
  global.validateApiResponse(response, 201);
  expect(response.body.data).toBeDefined();
  expect(response.body.data.contactId).toBeDefined();
  expect(response.body.data.status).toBe('unread');
};

global.validateBlogPostResponse = (response) => {
  global.validateApiResponse(response, 201);
  expect(response.body.data).toBeDefined();
  expect(response.body.data.title).toBeDefined();
  expect(response.body.data.content).toBeDefined();
  expect(response.body.data.author).toBeDefined();
};

// Error response validation
global.validateErrorResponse = (response, expectedStatus = 400) => {
  expect(response.status).toBe(expectedStatus);
  expect(response.body.success).toBe(false);
  expect(response.body.message).toBeDefined();
};

// Validation error response validation
global.validateValidationErrorResponse = (response) => {
  global.validateErrorResponse(response, 400);
  expect(response.body.message).toBe('Validation errors');
  expect(response.body.errors).toBeDefined();
  expect(Array.isArray(response.body.errors)).toBe(true);
};