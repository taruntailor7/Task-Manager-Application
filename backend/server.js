const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

app.get('/', function (req, res) {
  console.log("Hello, Welcome Voosh!");
  res.send("Hello, Welcome Voosh!");
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Connect to MongoDB
mongoose.connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
