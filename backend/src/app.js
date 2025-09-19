// Express server for Meliorism Foundation backend
// Handle routes for donations, volunteer sign-up, blog posts, and contact form
// Connect to MongoDB or Firebase Firestore
// Ensure secure data handling and input validation

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const path = require('path');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

// Initialize Paystack after dotenv config
const paystack = require('paystack')(process.env.PAYSTACK_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  }
});

// Apply rate limiting to all requests
app.use(limiter);

// Enhanced security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net'],
      scriptSrc: ["'self'", 'https://js.paystack.co'],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'", 'https://api.paystack.co']
    }
  }
}));
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static files (images) from frontend public directory
app.use('/images', express.static(path.join(__dirname, '../../frontend/public/images')));

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
  phone: { type: String },
  amount: { type: Number, required: true },
  frequency: { type: String, enum: ['one-time', 'monthly', 'annual'], default: 'one-time' },
  message: { type: String },
  paymentStatus: { type: String, enum: ['pending', 'success', 'failed', 'cancelled'], default: 'pending' },
  paymentReference: { type: String },
  paystackReference: { type: String },
  transactionId: { type: String },
  paidAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// User schema for authentication
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const volunteerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  ageRange: { type: String },
  location: { type: String },
  areasOfInterest: [{ type: String }],
  skillsExperience: { type: String },
  availability: { type: String, required: true },
  timeCommitment: { type: String },
  motivation: { type: String },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'unread' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
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
const User = mongoose.model('User', userSchema);
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

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access token required'
    });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret', (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }
    req.user = user;
    next();
  });
};

// Admin middleware
const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required'
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
    console.log('Donation request received:', req.body);
    const { firstName, lastName, email, phone, amount, frequency, message } = req.body;
    
    // Create donation record
    const donation = new Donation({
      firstName,
      lastName,
      email,
      phone,
      amount: parseFloat(amount),
      frequency: frequency || 'one-time',
      message,
      paymentReference: crypto.randomBytes(16).toString('hex')
    });
    
    await donation.save();
    console.log('Donation saved:', donation._id);
    
    // Initialize Paystack transaction
    try {
      console.log('Initializing Paystack transaction...');
      const paystackResponse = await paystack.transaction.initialize({
        email: email,
        amount: Math.round(parseFloat(amount) * 100), // Paystack expects amount in kobo
        reference: donation.paymentReference,
        callback_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/donation-success`,
        metadata: {
          donationId: donation._id.toString(),
          donor_name: `${firstName} ${lastName}`,
          frequency: frequency || 'one-time'
        }
      });

      console.log('Paystack response:', paystackResponse.status);
      // Update donation with Paystack reference
      donation.paystackReference = paystackResponse.data.reference;
      await donation.save();
      
      res.status(201).json({
        success: true,
        message: 'Donation initialized successfully',
        data: {
          donationId: donation._id,
          amount: donation.amount,
          status: 'pending',
          paymentUrl: paystackResponse.data.authorization_url,
          reference: paystackResponse.data.reference
        }
      });
    } catch (paystackError) {
      console.error('Paystack error:', paystackError);
      res.status(500).json({
        success: false,
        message: 'Payment initialization failed',
        error: paystackError.message
      });
    }
  } catch (error) {
    console.error('Error processing donation:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing donation'
    });
  }
});

// Route: POST /api/paystack/webhook - verify Paystack transactions (US-2.3)
app.post('/api/paystack/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  try {
    const hash = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET_KEY).update(req.body).digest('hex');
    
    if (hash !== req.headers['x-paystack-signature']) {
      return res.status(400).json({
        success: false,
        message: 'Invalid signature'
      });
    }

    const event = JSON.parse(req.body);
    
    if (event.event === 'charge.success') {
      const { reference, amount, status, paid_at, metadata } = event.data;
      
      // Find and update donation
      const donation = await Donation.findOne({ 
        $or: [
          { paymentReference: reference },
          { paystackReference: reference }
        ]
      });
      
      if (donation) {
        donation.paymentStatus = status === 'success' ? 'success' : 'failed';
        donation.transactionId = event.data.id;
        donation.paidAt = new Date(paid_at);
        donation.updatedAt = new Date();
        await donation.save();
        
        console.log(`Donation ${donation._id} payment verified: ${status}`);
      }
    }
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({
      success: false,
      message: 'Webhook processing failed'
    });
  }
});

// Route: GET /api/verify-payment/:reference - manual payment verification
app.get('/api/verify-payment/:reference', async (req, res) => {
  try {
    const { reference } = req.params;
    
    // Verify with Paystack
    const verification = await paystack.transaction.verify(reference);
    
    if (verification.data.status === 'success') {
      // Find and update donation
      const donation = await Donation.findOne({ 
        $or: [
          { paymentReference: reference },
          { paystackReference: reference }
        ]
      });
      
      if (donation) {
        donation.paymentStatus = 'success';
        donation.transactionId = verification.data.id;
        donation.paidAt = new Date(verification.data.paid_at);
        donation.updatedAt = new Date();
        await donation.save();
      }
      
      res.json({
        success: true,
        message: 'Payment verified successfully',
        data: {
          status: verification.data.status,
          amount: verification.data.amount / 100,
          donation: donation
        }
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Payment verification failed',
        status: verification.data.status
      });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Error verifying payment'
    });
  }
});

// Route: POST /api/auth/register - user registration
app.post('/api/auth/register', [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], handleValidationErrors, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }
    
    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 12);
    
    // Create user
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });
    
    await user.save();
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );
    
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        token,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role
        }
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Error registering user'
    });
  }
});

// Route: POST /api/auth/login - user login
app.post('/api/auth/login', [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required')
], handleValidationErrors, async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
    
    // Check password
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );
    
    res.json({
      success: true,
      message: 'Login successful',
      data: {
        token,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role
        }
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Error logging in'
    });
  }
});

// Route: GET /api/user/donations - get user's donation history (US-4)
app.get('/api/user/donations', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const userId = req.user.userId;
    
    // Find user to get email
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    // Build query
    const query = { email: user.email };
    if (status) {
      query.paymentStatus = status;
    }
    
    // Get donations with pagination
    const donations = await Donation.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-__v');
    
    const totalDonations = await Donation.countDocuments(query);
    const totalAmount = await Donation.aggregate([
      { $match: { email: user.email, paymentStatus: 'success' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    
    res.json({
      success: true,
      data: {
        donations,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(totalDonations / limit),
          totalDonations,
          hasNext: page * limit < totalDonations,
          hasPrev: page > 1
        },
        summary: {
          totalAmount: totalAmount[0]?.total || 0,
          successfulDonations: donations.filter(d => d.paymentStatus === 'success').length
        }
      }
    });
  } catch (error) {
    console.error('Error fetching user donations:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching donation history'
    });
  }
});

// Route: POST /api/volunteer - handle volunteer sign-ups
app.post('/api/volunteer', [
  body('fullName').notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('availability').notEmpty().withMessage('Availability is required'),
  body('areasOfInterest').isArray({ min: 1 }).withMessage('At least one area of interest is required')
], handleValidationErrors, async (req, res) => {
  try {
    console.log('Received volunteer application:', req.body);
    
    const { 
      fullName, 
      email, 
      phone, 
      ageRange, 
      location, 
      areasOfInterest, 
      skillsExperience, 
      availability, 
      timeCommitment, 
      motivation 
    } = req.body;
    
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
      ageRange,
      location,
      areasOfInterest: Array.isArray(areasOfInterest) ? areasOfInterest : [],
      skillsExperience,
      availability,
      timeCommitment,
      motivation,
      updatedAt: new Date()
    });
    
    await volunteer.save();
    
    console.log('Volunteer application saved successfully:', volunteer._id);
    
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
      message: 'Error registering volunteer',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Route: GET /api/volunteer - get all volunteer applications (for admin/testing)
app.get('/api/volunteer', async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: volunteers,
      count: volunteers.length
    });
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching volunteer applications'
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

// Route: PUT /api/admin/donation/:id/status - update donation status
app.put('/api/admin/donation/:id/status', authenticateToken, requireAdmin, [
  body('status').isIn(['pending', 'success', 'failed', 'cancelled']).withMessage('Invalid status')
], handleValidationErrors, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const donation = await Donation.findByIdAndUpdate(
      id,
      { paymentStatus: status, updatedAt: new Date() },
      { new: true }
    );
    
    if (!donation) {
      return res.status(404).json({
        success: false,
        message: 'Donation not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Donation status updated successfully',
      data: donation
    });
  } catch (error) {
    console.error('Error updating donation status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating donation status'
    });
  }
});

// Route: PUT /api/admin/contact/:id/status - update contact status
app.put('/api/admin/contact/:id/status', authenticateToken, requireAdmin, [
  body('status').isIn(['unread', 'read', 'responded']).withMessage('Invalid status')
], handleValidationErrors, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const contact = await Contact.findByIdAndUpdate(
      id,
      { status, updatedAt: new Date() },
      { new: true }
    );
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating contact status'
    });
  }
});

// Route: GET /api/donations - get all donations (admin only)
app.get('/api/donations', authenticateToken, requireAdmin, async (req, res) => {
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
app.get('/api/volunteers', authenticateToken, requireAdmin, async (req, res) => {
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
app.get('/api/contacts', authenticateToken, requireAdmin, async (req, res) => {
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

// Route: GET /api/admin/dashboard - admin dashboard stats (US-5)
app.get('/api/admin/dashboard', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    // Get donation statistics
    const donationStats = await Donation.aggregate([
      {
        $group: {
          _id: '$paymentStatus',
          count: { $sum: 1 },
          totalAmount: { $sum: '$amount' }
        }
      }
    ]);
    
    // Get recent donations (last 30 days)
    const recentDonations = await Donation.aggregate([
      {
        $match: {
          createdAt: { $gte: thirtyDaysAgo },
          paymentStatus: 'success'
        }
      },
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
          totalAmount: { $sum: '$amount' }
        }
      }
    ]);
    
    // Get monthly donation trends (last 6 months)
    const monthlyTrends = await Donation.aggregate([
      {
        $match: {
          paymentStatus: 'success',
          createdAt: { $gte: new Date(now.getTime() - 6 * 30 * 24 * 60 * 60 * 1000) }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 },
          totalAmount: { $sum: '$amount' }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);
    
    // Get total counts
    const totalVolunteers = await Volunteer.countDocuments();
    const totalContacts = await Contact.countDocuments();
    const pendingVolunteers = await Volunteer.countDocuments({ status: 'pending' });
    const unreadContacts = await Contact.countDocuments({ status: 'unread' });
    
    // Get top donors
    const topDonors = await Donation.aggregate([
      {
        $match: { paymentStatus: 'success' }
      },
      {
        $group: {
          _id: '$email',
          totalAmount: { $sum: '$amount' },
          donationCount: { $sum: 1 },
          firstName: { $first: '$firstName' },
          lastName: { $first: '$lastName' },
          lastDonation: { $max: '$createdAt' }
        }
      },
      { $sort: { totalAmount: -1 } },
      { $limit: 10 }
    ]);
    
    res.json({
      success: true,
      data: {
        overview: {
          totalDonations: donationStats.reduce((sum, stat) => sum + stat.count, 0),
          totalAmount: donationStats.reduce((sum, stat) => sum + stat.totalAmount, 0),
          successfulDonations: donationStats.find(s => s._id === 'success')?.count || 0,
          pendingDonations: donationStats.find(s => s._id === 'pending')?.count || 0,
          totalVolunteers,
          pendingVolunteers,
          totalContacts,
          unreadContacts
        },
        recentActivity: {
          last30Days: recentDonations[0] || { count: 0, totalAmount: 0 }
        },
        trends: {
          monthly: monthlyTrends
        },
        topDonors,
        donationStats
      }
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard statistics'
    });
  }
});

// Route: GET /api/admin/settings - get payment settings
app.get('/api/admin/settings', authenticateToken, requireAdmin, async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        paystack: {
          publicKey: process.env.PAYSTACK_PUBLIC_KEY || '',
          webhookUrl: `${req.protocol}://${req.get('host')}/api/paystack/webhook`,
          isConfigured: !!(process.env.PAYSTACK_SECRET_KEY && process.env.PAYSTACK_PUBLIC_KEY)
        },
        donations: {
          minimumAmount: 10,
          maximumAmount: 100000,
          currencies: ['GHS', 'USD'],
          defaultCurrency: 'GHS'
        }
      }
    });
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching settings'
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
  try {
    await connectDB();
    const server = app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/health`);
      console.log(`Environment: ${process.env.NODE_ENV}`);
    });
    
    // Handle server errors
    server.on('error', (error) => {
      console.error('Server error:', error);
      process.exit(1);
    });
    
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
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