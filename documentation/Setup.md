# Developer Setup Guide

## Meliorism Foundation Website

A full-stack web application for the Meliorism Foundation, built with React frontend and Node.js/Express backend.

## Project Structure

```
meliorism-foundation/
├── frontend/           # React + Bootstrap frontend
├── backend/           # Node.js + Express + MongoDB backend
├── infrastructure/    # Docker + Nginx configuration
├── documentation/     # Project documentation
└── qa-testing/       # Test files and automation
```

## Technology Stack

### Frontend
- **React 18** - UI framework
- **Bootstrap 5** - CSS framework
- **React Bootstrap** - Bootstrap components for React

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy and load balancer

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **Docker** and **Docker Compose**
- **Git**

## Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd meliorism-foundation
```

### 2. Environment Setup

Copy the environment files and configure them:

```bash
# Backend environment
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your configuration:
- MongoDB connection string
- JWT secret
- Email credentials
- Payment gateway keys (Paystack/Flutterwave)

### 3. Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 4. Start with Docker (Recommended)

```bash
# From the infrastructure directory
cd infrastructure
docker-compose up --build
```

This will start:
- Frontend on http://localhost:3000
- Backend on http://localhost:5000
- MongoDB on localhost:27017
- Nginx proxy on http://localhost:80

### 5. Manual Setup (Alternative)

If you prefer to run services manually:

```bash
# Start MongoDB (if not using Docker)
mongod

# Start backend
cd backend
npm run dev

# Start frontend (in another terminal)
cd frontend
npm start
```

## API Endpoints

### Public Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `GET /api/posts` - Get published blog posts
- `POST /api/donate` - Process donations
- `POST /api/volunteer` - Volunteer registration
- `POST /api/contact` - Contact form submission

### Admin Endpoints

- `GET /api/donations` - Get all donations
- `GET /api/volunteers` - Get all volunteers
- `GET /api/contacts` - Get all contact messages
- `POST /api/posts` - Create blog post

## Database Schema

### Donations
```javascript
{
  firstName: String,
  lastName: String,
  email: String,
  amount: Number,
  message: String,
  paymentStatus: String,
  createdAt: Date
}
```

### Volunteers
```javascript
{
  fullName: String,
  email: String,
  phone: String,
  interests: [String],
  availability: String,
  status: String,
  createdAt: Date
}
```

### Contacts
```javascript
{
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String,
  createdAt: Date
}
```

### Blog Posts
```javascript
{
  title: String,
  content: String,
  author: String,
  published: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## Development Workflow

### Frontend Development

```bash
cd frontend
npm start
```

The React development server will start on http://localhost:3000 with hot reloading.

### Backend Development

```bash
cd backend
npm run dev
```

The Express server will start on http://localhost:5000 with nodemon for auto-restart.

### Database Management

Access MongoDB:
```bash
# Using Docker
docker exec -it meliorism_mongodb mongosh

# Local installation
mongosh
```

## Testing

### Frontend Tests
```bash
cd frontend
npm test
```

### Backend Tests
```bash
cd backend
npm test
```

### End-to-End Tests
```bash
cd qa-testing
npm test
```

## Deployment

### Production Build

```bash
# Build frontend
cd frontend
npm run build

# The build folder contains the production-ready files
```

### Docker Production

```bash
# Build and run production containers
docker-compose -f docker-compose.prod.yml up --build
```

## Environment Variables

### Backend (.env)

```env
# Database
MONGODB_URI=mongodb://localhost:27017/meliorism_foundation

# Server
PORT=5000
NODE_ENV=development

# Security
JWT_SECRET=your_jwt_secret_key
BCRYPT_SALT_ROUNDS=12

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Payment Gateways
PAYSTACK_SECRET_KEY=sk_test_your_key
PAYSTACK_PUBLIC_KEY=pk_test_your_key
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST-your_key
FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_TEST-your_key
```

### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_PAYSTACK_PUBLIC_KEY=pk_test_your_key
REACT_APP_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_TEST-your_key
```

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process using port 3000 or 5000
   npx kill-port 3000
   npx kill-port 5000
   ```

2. **MongoDB connection failed**
   - Ensure MongoDB is running
   - Check connection string in .env
   - Verify network connectivity

3. **Docker build fails**
   ```bash
   # Clean Docker cache
   docker system prune -a
   docker-compose down -v
   docker-compose up --build
   ```

4. **Frontend not loading**
   - Clear browser cache
   - Check console for errors
   - Verify API endpoints are accessible

### Logs

```bash
# Docker logs
docker-compose logs frontend
docker-compose logs backend
docker-compose logs mongodb

# Application logs
tail -f backend/logs/app.log
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## Support

For support and questions:
- Email: dev@meliorismfoundation.org
- Documentation: [Project Wiki]
- Issues: [GitHub Issues]

## License

This project is licensed under the MIT License - see the LICENSE file for details.