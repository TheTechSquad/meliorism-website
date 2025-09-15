// API configuration for frontend
const API_BASE_URL = process.env.REACT_APP_API_URL || (
  process.env.NODE_ENV === 'production' 
    ? 'https://meliorism-website.railway.app' 
    : ''
);

export { API_BASE_URL };