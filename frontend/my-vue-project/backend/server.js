const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

// Use the CORS middleware to allow cross-origin requests
app.use(cors());

// Your TMDB access token
const TMDB_ACCESS_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzdhMjQ5YzQwZWFkMjE1YmU5MjM0MTY3OWE2YWI3OSIsInN1YiI6IjY2NDdjYTg5ZWQ0MWNlZTU1NDI1YmZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MQUDmyq7wMtksH9q_u_g6B7Wc1KecFMYy9N7wmlh8oo';
const TMDB_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const TMDB_POPULAR_URL = 'https://api.themoviedb.org/3/search/movie';

app.get('/', (req, res) => {
    res.send('Welcome to the Movie Search API');
});

app.get('/movies', async (req, res) => {
    const searchQuery = req.query.search;
    if (!searchQuery) {
        return res.status(400).json({ error: 'Search query is required' });
    }

    try {
        const response = await axios.get(TMDB_SEARCH_URL, {
            headers: {
                Authorization: TMDB_ACCESS_TOKEN,
                accept: 'application/json'
            },
            params: {
                query: searchQuery,
                include_adult: false,
                language: 'en-US',
                page: 1
            }
        });

        const movies = response.data.results.slice(0, 100).map(movie => ({
            movie_id: movie.id,
            title: movie.title,
            poster_image_url: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
            popularity_summary: `${movie.popularity} out of ${movie.vote_count}`
        }));

        res.json(movies);
    } catch (error) {
        console.error('Error fetching data from TMDB:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'An error occurred while fetching data from TMDB' });
    }
});

// Popular movies endpoint
app.get('/popular', async (req, res) => {
    try {
        console.log('Fetching popular movies...');
        const response = await axios.get(TMDB_POPULAR_URL, {
            headers: {
                Authorization: TMDB_ACCESS_TOKEN,
                accept: 'application/json'
            },
            params: {
                language: 'en-US',
                page: 1,
                region: 1,
            }
        });

        console.log('TMDB API response:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching popular movies from TMDB:', error.message);
        res.status(500).json({ error: 'An error occurred while fetching popular movies from TMDB' });
    }
});


if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
} else {
    module.exports = app;
}
