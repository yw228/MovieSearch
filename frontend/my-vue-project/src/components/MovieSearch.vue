<template>
  <div class="movie-search container">
    <h1 class="text-center mb-4">Movie Search</h1>
    <div class="input-group mb-4">
      <input
          v-model="query"
          @keyup.enter="searchMovies"
          class="form-control"
          placeholder="Enter movie title"
      />
      <div class="input-group-append">
        <button @click="searchMovies" class="btn btn-primary">Search</button>
      </div>
    </div>
    <div v-if="movies.length > 0" class="search-results">
      <h2 class="text-center mb-4">Search Results</h2>
      <div class="d-flex flex-wrap justify-content-center">
        <div v-for="movie in displayedMovies" :key="movie.movie_id" class="card m-2" style="width: 18rem;">
          <img
              :src="movie.poster_image_url"
              class="card-img-top"
              alt="Poster"
              v-if="movie.poster_image_url"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.popularity_summary }}</p>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button @click="previousPage" class="btn btn-secondary" :disabled="page === 1">Previous</button>
        <button @click="nextPage" class="btn btn-secondary" :disabled="!hasMoreResults">Next</button>
      </div>
    </div>
    <div v-else-if="searched" class="text-center">
      <p>No results found.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      query: '',
      movies: [],
      displayedMovies: [],
      searched: false,
      page: 1,
      hasMoreResults: false
    };
  },
  methods: {
    async searchMovies() {
      if (this.query.trim() === '') {
        return;
      }
      try {
        const response = await axios.get('http://localhost:3000/movies', {
          params: {
            search: this.query,
            page: this.page
          }
        });
        console.log('Response data:', response.data);
        this.movies = response.data || [];
        this.displayedMovies = this.movies.slice(0, 10);
        this.hasMoreResults = this.movies.length > 10;
        this.searched = true;
      } catch (error) {
        console.error('Error fetching movies:', error);
        this.movies = [];
        this.displayedMovies = [];
        this.hasMoreResults = false;
        this.searched = true;
      }
    },
    nextPage() {
      this.page++;
      this.updateDisplayedMovies();
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
        this.updateDisplayedMovies();
      }
    },
    updateDisplayedMovies() {
      const start = (this.page - 1) * 10;
      this.displayedMovies = this.movies.slice(start, start + 10);
      this.hasMoreResults = this.movies.length > start + 10;
    }
  }
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #e9ecef; /* Light gray background color */
}

.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #dee2e6; /* Light gray background color for the container */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.movie-search {
  text-align: center;
}

.input-group, .filters {
  margin-bottom: 20px;
}

.search-results {
  margin-top: 20px;
}

.card {
  border: none;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 400px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
}

/* Media query for mobile devices */
@media (max-width: 600px) {
  .container {
    padding: 10px;
  }

  .card {
    width: 100%;
    margin: 10px 0;
  }

  .card-img-top {
    height: auto;
  }
}
</style>
