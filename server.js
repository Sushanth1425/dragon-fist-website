const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// MongoDB connection setup
mongoose.connect('mongodb://127.0.0.1:27017/selfDefenseDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index5.html');
});

// Define a Mongoose schema for form data
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  session: { type: String, required: true },
});

// Create a Mongoose model for the schema
const User = mongoose.model('User', userSchema);

// Handle form submission
app.post('/register', (req, res) => {
  console.log('Received data:', req.body);

  const { name, email, session } = req.body;
  if (!name || !email || !session) {
    return res.status(400).json({ message: 'Please fill out all fields.' });
  }

  const newUser = new User({ name, email, session });

  newUser.save()
    .then(() => res.json({ message: `Thank you, ${name}! You have successfully registered for the ${session}.` }))
    .catch(err => {
      console.error('Error saving to MongoDB:', err);
      res.status(500).json({ message: 'Error submitting the form' });
    });
});
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Assuming 'User' is your Mongoose model
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
