# Meliorism Partners Foundation Website

A full-stack web application for the Meliorism Partners Foundation, built with React (frontend) and Node.js/Express (backend).

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- MongoDB (local or cloud)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheTechSquad/meliorism-website.git
   cd meliorism-website
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your actual values
   ```

5. **Start the development servers**

   **Option 1: Using the root package.json**
   ```bash
   npm run dev  # Starts frontend only
   ```

   **Option 2: Start services individually**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev

   # Terminal 2 - Frontend  
   cd frontend
   npm start
   ```

## 🏗️ Project Structure

```
meliorism-website/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   └── ...
│   ├── public/           # Static assets
│   └── package.json
├── backend/            # Node.js/Express backend
│   ├── src/
│   │   └── app.js        # Main server file
│   ├── scripts/          # Utility scripts
│   └── package.json
├── infrastructure/     # Docker and deployment configs
│   ├── docker-compose.yml
│   ├── nginx.conf
│   └── mongo-init.js
├── qa-testing/        # Test files and configurations
└── documentation/     # Project documentation
```

## 🛠️ Available Scripts

### Root Level
- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm install` - Install frontend dependencies

### Backend (`cd backend`)
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests
- `npm run create-admin` - Create admin user

### Frontend (`cd frontend`)
- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests

## 🐳 Docker Development

```bash
cd infrastructure
docker-compose up -d
```

This will start:
- MongoDB on port 27017
- Backend on port 5000
- Frontend on port 3000
- Nginx on port 80

## 🔧 Environment Configuration

Copy `backend/.env.example` to `backend/.env` and configure:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/meliorism_foundation
JWT_SECRET=your-super-secret-jwt-key
CORS_ORIGIN=http://localhost:3000
PAYSTACK_SECRET_KEY=your-paystack-secret-key
PAYSTACK_PUBLIC_KEY=your-paystack-public-key
```

## 📚 API Documentation

### Public Endpoints
- `GET /` - API information
- `POST /api/donate` - Process donations
- `POST /api/volunteer` - Volunteer registration
- `POST /api/contact` - Contact form submission
- `GET /api/posts` - Get blog posts

### Admin Endpoints (Requires Authentication)
- `POST /api/auth/login` - Admin login
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/donations` - Get all donations
- `GET /api/volunteers` - Get all volunteers
- `GET /api/contacts` - Get all contacts

## 🧪 Testing

```bash
cd qa-testing
npm test
```

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd frontend
npm run build

# Start backend in production
cd ../backend
NODE_ENV=production npm start
```

### Docker Production
```bash
cd infrastructure
docker-compose -f docker-compose.prod.yml up -d
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@meliorismpartnersfoundation.org or create an issue in this repository.

## 🏢 About Meliorism Partners Foundation

Meliorism Partners Foundation is dedicated to improving communities through education, healthcare, and sustainable development programs.

Visit us at: [www.meliorismpartnersfoundation.org](https://www.meliorismpartnersfoundation.org)