<template>
  <div id="app">
    <AppHeader />
    <div class="main-content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #e9ecef; /* Light gray background color for main content */
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

/* Media query for mobile devices */
@media (max-width: 600px) {
  .main-content {
    padding: 10px;
  }
}
</style>
