const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for incoming requests
app.use(bodyParser.json());

// Love Calculator endpoint
app.post('/calculate-love', (req, res) => {
    const { name1, name2 } = req.body;
    if (!name1 || !name2) {
        return res.status(400).json({ error: 'Names are required' });
    }

    // Simple love calculation logic
    const loveScore = Math.floor(Math.random() * 101);
    res.json({ loveScore, message: `Love score between ${name1} and ${name2} is ${loveScore}%` });
});

// Admin controls (for demonstration)
app.get('/admin', (req, res) => {
    // This is where admin features could be added
    res.send('Admin panel coming soon!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
