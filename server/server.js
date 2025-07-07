require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const petRouter = require('./Routes/PetRoute');
const AdoptFormRoute = require('./Routes/AdoptFormRoute');
const AdminRoute = require('./Routes/AdminRoute');
const cors = require('cors');
const path = require('path');

// ✅ Define app first
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static image serving
app.use('/images', express.static(path.join(__dirname, 'images')));

// API Routes
app.use(petRouter);
app.use('/form', AdoptFormRoute);
app.use('/admin', AdminRoute);

// ✅ Serve React frontend (after routes)
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to DB');
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
