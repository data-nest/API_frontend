const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./authRoutes');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    res.send("Works fine")
})

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});