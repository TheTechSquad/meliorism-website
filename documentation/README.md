# Meliorism Foundation Website

> Building a better tomorrow through education, sustainability, and community development.

## Overview

The Meliorism Foundation website is a full-stack web application designed to support the foundation's mission of creating positive change in communities. The platform enables donations, volunteer registration, blog updates, and community engagement.

## Features

### 🏠 Homepage
- Responsive design inspired by modern foundation websites
- Hero section with mission statement and call-to-action
- About Us section highlighting core values
- Programs overview showcasing initiatives

### 💰 Donation System
- Secure donation processing
- Integration with Paystack and Flutterwave payment gateways
- Donation tracking and reporting
- Multiple donation amounts and custom options

### 🤝 Volunteer Management
- Volunteer registration form
- Interest-based categorization
- Availability tracking
- Volunteer database management

### 📝 Blog & Updates
- Dynamic blog post system
- Admin content management
- Community updates and success stories
- SEO-friendly content structure

### 📞 Contact System
- Contact form with validation
- Message categorization and status tracking
- Email notifications
- Admin dashboard for inquiries

## Technology Stack

- **Frontend**: React 18, Bootstrap 5, React Bootstrap
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Infrastructure**: Docker, Docker Compose, Nginx
- **Security**: JWT authentication, Bcrypt, Helmet.js
- **Payment**: Paystack, Flutterwave integration
- **Testing**: Jest, Playwright

## Quick Start

1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd meliorism-foundation
   ```

2. **Start with Docker**
   ```bash
   cd infrastructure
   docker-compose up --build
   ```

3. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Full Application: http://localhost:80

## Project Structure

```
meliorism-foundation/
├── frontend/              # React application
│   ├── src/
│   │   ├── App.jsx       # Main application component
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── Dockerfile
├── backend/               # Express API server
│   ├── src/
│   │   ├── app.js        # Main server file
│   │   └── ...
│   ├── .env              # Environment variables
│   ├── package.json
│   └── Dockerfile
├── infrastructure/        # Docker and deployment
│   ├── docker-compose.yml
│   ├── nginx.conf
│   └── mongo-init.js
├── documentation/         # Project documentation
│   ├── Setup.md          # Detailed setup guide
│   └── README.md         # This file
└── qa-testing/           # Test files
    ├── login.test.js
    └── ...
```

## API Endpoints

### Public Endpoints
- `GET /api/posts` - Fetch published blog posts
- `POST /api/donate` - Process donations
- `POST /api/volunteer` - Register volunteers
- `POST /api/contact` - Submit contact form

### Admin Endpoints
- `GET /api/donations` - View all donations
- `GET /api/volunteers` - View all volunteers
- `GET /api/contacts` - View all messages
- `POST /api/posts` - Create blog posts

## Development

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- MongoDB (if running locally)

### Local Development
```bash
# Install dependencies
cd frontend && npm install
cd ../backend && npm install

# Start services
npm run dev  # In both frontend and backend directories
```

### Testing
```bash
# Frontend tests
cd frontend && npm test

# Backend tests
cd backend && npm test

# E2E tests
cd qa-testing && npm test
```

## Deployment

The application is containerized and ready for deployment on any Docker-compatible platform:

- **Development**: `docker-compose up`
- **Production**: `docker-compose -f docker-compose.prod.yml up`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security

- Input validation on all forms
- SQL injection prevention
- XSS protection
- CORS configuration
- Rate limiting
- Secure headers with Helmet.js

## Payment Integration

The platform supports multiple payment gateways:

- **Paystack**: For card payments and bank transfers
- **Flutterwave**: Alternative payment processing
- **Secure**: PCI DSS compliant payment handling

## Support

- **Documentation**: See `documentation/Setup.md` for detailed setup instructions
- **Issues**: Report bugs and feature requests via GitHub Issues
- **Email**: Contact the development team at dev@meliorismfoundation.org

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Meliorism Foundation** - *Believing in the power of human action to improve the world.*