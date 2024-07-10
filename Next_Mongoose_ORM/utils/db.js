// db.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
console.log("MONGODB_URI", MONGODB_URI); // Check if MONGODB_URI is logged correctly

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Ensure MONGODB_URI is defined and accessible
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Additional mongoose configurations and schema definitions
