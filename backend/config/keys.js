require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.JWT_SECRET,
  googleClientID: 'your_google_client_id',
  googleClientSecret: 'your_google_client_secret'
};
