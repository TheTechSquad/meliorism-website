// Express server for Meliorism Foundation backend
// Handle routes for donations, volunteer sign-up, blog posts, and contact form
// Connect to MongoDB or Firebase Firestore
// Ensure secure data handling and input validation

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/meliorism_foundation';
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Schemas
const donationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  message: { type: String },
  paymentStatus: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const volunteerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  interests: [{ type: String }],
  availability: { type: String },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'unread' },
  createdAt: { type: Date, default: Date.now }
});

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  published: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Models
const Donation = mongoose.model('Donation', donationSchema);
const Volunteer = mongoose.model('Volunteer', volunteerSchema);
const Contact = mongoose.model('Contact', contactSchema);
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Validation middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation errors',
      errors: errors.array()
    });
  }
  next();
};

// Routes

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Meliorism Foundation Backend is running',
    version: '1.0.0',
    endpoints: {
      donations: '/api/donate',
      volunteers: '/api/volunteer',
      contact: '/api/contact',
      posts: '/api/posts'
    }
  });
});

// Route: GET /api/posts - fetch blog updates
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await BlogPost.find({ published: true })
      .sort({ createdAt: -1 })
      .limit(10);
    
    res.json({
      success: true,
      data: posts
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blog posts'
    });
  }
});

// Route: POST /api/posts - create blog post (admin only)
app.post('/api/posts', [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('author').notEmpty().withMessage('Author is required')
], handleValidationErrors, async (req, res) => {
  try {
    const { title, content, author, published = false } = req.body;
    
    const newPost = new BlogPost({
      title,
      content,
      author,
      published
    });
    
    await newPost.save();
    
    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: newPost
    });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating blog post'
    });
  }
});

// Route: POST /api/donate - process donations
app.post('/api/donate', [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('amount').isNumeric().withMessage('Valid amount is required')
], handleValidationErrors, async (req, res) => {
  try {
    const { firstName, lastName, email, amount, message } = req.body;
    
    // Create donation record
    const donation = new Donation({
      firstName,
      lastName,
      email,
      amount: parseFloat(amount),
      message
    });
    
    await donation.save();
    
    // Here you would integrate with Paystack/Flutterwave
    // For now, we'll simulate a successful payment
    
    res.status(201).json({
      success: true,
      message: 'Donation received successfully',
      data: {
        donationId: donation._id,
        amount: donation.amount,
        status: 'pending'
      }
    });
  } catch (error) {
    console.error('Error processing donation:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing donation'
    });
  }
});

// Route: POST /api/volunteer - handle volunteer sign-ups
app.post('/api/volunteer', [
  body('fullName').notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone number is required')
], handleValidationErrors, async (req, res) => {
  try {
    const { fullName, email, phone, interests, availability } = req.body;
    
    // Check if volunteer already exists
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({
        success: false,
        message: 'Email already registered as volunteer'
      });
    }
    
    const volunteer = new Volunteer({
      fullName,
      email,
      phone,
      interests: Array.isArray(interests) ? interests : [],
      availability
    });
    
    await volunteer.save();
    
    res.status(201).json({
      success: true,
      message: 'Volunteer registration successful',
      data: {
        volunteerId: volunteer._id,
        fullName: volunteer.fullName,
        status: volunteer.status
      }
    });
  } catch (error) {
    console.error('Error registering volunteer:', error);
    res.status(500).json({
      success: false,
      message: 'Error registering volunteer'
    });
  }
});

// Route: POST /api/contact - handle inquiries
app.post('/api/contact', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('message').notEmpty().withMessage('Message is required')
], handleValidationErrors, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });
    
    await contact.save();
    
    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: {
        contactId: contact._id,
        status: contact.status
      }
    });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({
      success: false,
      message: 'Error sending message'
    });
  }
});

// Route: GET /api/donations - get all donations (admin only)
app.get('/api/donations', async (req, res) => {
  try {
    const donations = await Donation.find()
      .sort({ createdAt: -1 })
      .select('-__v');
    
    const totalAmount = await Donation.aggregate([
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    
    res.json({
      success: true,
      data: {
        donations,
        totalAmount: totalAmount[0]?.total || 0,
        count: donations.length
      }
    });
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching donations'
    });
  }
});

// Route: GET /api/volunteers - get all volunteers (admin only)
app.get('/api/volunteers', async (req, res) => {
  try {
    const volunteers = await Volunteer.find()
      .sort({ createdAt: -1 })
      .select('-__v');
    
    res.json({
      success: true,
      data: {
        volunteers,
        count: volunteers.length
      }
    });
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching volunteers'
    });
  }
});

// Route: GET /api/contacts - get all contact messages (admin only)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-__v');
    
    res.json({
      success: true,
      data: {
        contacts,
        count: contacts.length
      }
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
  });
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception:', err);
  process.exit(1);
});

if (require.main === module) {
  startServer();
}

module.exports = app;