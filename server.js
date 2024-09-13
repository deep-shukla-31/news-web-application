// backend/server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

// Fetch news from NewsAPI
app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=https://gnews.io/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching news');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
