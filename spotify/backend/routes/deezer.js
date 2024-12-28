const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    const response = await axios.get('https://deezerdevs-deezer.p.rapidapi.com/search', {
      params: { q: query },
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from RapidAPI:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from RapidAPI' });
  }
});

module.exports = router;
