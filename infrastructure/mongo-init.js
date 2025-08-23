// MongoDB initialization script for Meliorism Foundation
// This script runs when the MongoDB container starts for the first time

// Switch to the meliorism_foundation database
db = db.getSiblingDB('meliorism_foundation');

// Create collections with initial data
db.createCollection('donations');
db.createCollection('volunteers');
db.createCollection('contacts');
db.createCollection('blogposts');

// Insert sample blog posts
db.blogposts.insertMany([
  {
    title: "New Community Garden Opens",
    content: "We're excited to announce the opening of our third community garden, providing fresh produce to 200+ families in the downtown area. This garden features sustainable growing practices and educational workshops for community members.",
    author: "Sarah Johnson",
    published: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Scholarship Recipients Announced",
    content: "Congratulations to our 15 new scholarship recipients who will be pursuing higher education this fall. These bright students represent the future of our community and we're proud to support their educational journey.",
    author: "Michael Chen",
    published: true,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
    updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  },
  {
    title: "Skills Workshop Success",
    content: "Our recent digital literacy workshop helped 50+ community members develop essential computer skills. Participants learned everything from basic computer operations to online job searching and digital communication.",
    author: "Emily Rodriguez",
    published: true,
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 2 weeks ago
    updatedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
  }
]);

// Create indexes for better performance
db.donations.createIndex({ "email": 1 });
db.donations.createIndex({ "createdAt": -1 });
db.volunteers.createIndex({ "email": 1 }, { unique: true });
db.volunteers.createIndex({ "createdAt": -1 });
db.contacts.createIndex({ "createdAt": -1 });
db.contacts.createIndex({ "status": 1 });
db.blogposts.createIndex({ "published": 1 });
db.blogposts.createIndex({ "createdAt": -1 });

print('Database initialized successfully with sample data');