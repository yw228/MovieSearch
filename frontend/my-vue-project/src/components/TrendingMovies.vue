<template>
  <div class="trending-movies">
    <h2 class="text-center mb-4">Popular Movies</h2>
    <div class="d-flex flex-wrap justify-content-center">
      <div v-for="movie in trendingMovies" :key="movie.id" class="card m-2" style="width: 18rem;">
        <img
            :src="movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''"
            class="card-img-top"
            alt="Poster"
        />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ movie.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TrendingMovies',
  data() {
    return {
      trendingMovies: []
    };
  },
  mounted() {
    this.fetchTrendingMovies();
  },
  methods: {
    async fetchTrendingMovies() {
      try {
        const response = await axios.get('http://localhost:3000/popular');
        this.trendingMovies = response.data.results;
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    }
  }
};
</script>

<style>
.trending-movies {
  text-align: center;
  background-color: #f8f9fa; /* Light gray background color */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card {
  border: none;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
