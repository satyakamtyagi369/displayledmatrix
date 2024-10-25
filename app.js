const express = require('express');
const path = require('path');
const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Render HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// API endpoint to handle message sending
app.post('/send-message', (req, res) => {
    const message = req.body.message;
    console.log(`Message received: ${message}`);
    
    // Simulate sending the message to the virtual hardware
    res.json({ success: true, message: message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
