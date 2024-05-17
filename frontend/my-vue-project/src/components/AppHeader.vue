<template>
  <header class="header">
    <div class="container">
      <h1 class="header-title">Movie Search App</h1>
      <nav class="header-nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
.header {
  color: black;
  padding: 15px 0; /* Add padding for better spacing */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 28px; /* Slightly larger font size */
  margin: 0;
}

.header-nav {
  display: flex;
  gap: 20px; /* Increase gap for better spacing */
}

.nav-link {
  color: #000000; /* Lighter color for better contrast */
  font-size: 16px; /* Ensure font size is readable */
  text-decoration: none;
  transition: color 0.3s ease; /* Smooth transition effect */
}

.nav-link:hover {
  color: #17a2b8; /* Change to a lighter shade on hover */
}

/* Media query for mobile devices */
@media (max-width: 600px) {
  .header .container {
    flex-direction: column;
  }

  .header-nav {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
