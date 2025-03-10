const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/api/images', async (req, res) => {
    const query = req.query.query || 'memes';
    
    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
                query,
                client_id: process.env.UNSPLASH_API_KEY,
                per_page: 10,
            },
        });

        const images = response.data.results.map(img => img.urls.regular);
        res.json({ images });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching images' });
    }
});

app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('API_URL_HERE');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
