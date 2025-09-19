// Railway-specific server startup
require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

console.log('Starting Railway server...');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', PORT);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ Health check: http://localhost:${PORT}/health`);
}).on('error', (err) => {
  console.error('❌ Server failed to start:', err);
  process.exit(1);
});