<template>
  <div class="home">
    <h2>Welcome to the Movie Search App</h2>
    <p>Use the search bar to find your favorite movies.</p>
    <MovieSearch />
    <TrendingMovies />
  </div>
</template>

<script>
import MovieSearch from '../components/MovieSearch.vue';
import TrendingMovies from '../components/TrendingMovies.vue';

export default {
  name: 'AppHome',
  components: {
    MovieSearch,
    TrendingMovies
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  background-color: #e9ecef; /* Light gray background color */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Media query for mobile devices */
@media (max-width: 600px) {
  .home {
    padding: 10px;
  }
}
</style>
