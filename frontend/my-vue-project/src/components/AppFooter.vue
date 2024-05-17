<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">&copy; 2024 Movie Search App. All rights reserved.</p>
      <nav class="footer-nav">
        <a href="#" class="nav-link">Privacy Policy</a>
        <a href="#" class="nav-link">Terms of Service</a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
.footer {
  color: black;
  padding: 10px 0;
  width: 100%;
}

.footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-text {
  margin: 0;
}

.footer-nav {
  display: flex;
  gap: 15px;
}

.nav-link {
  color: black;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

/* Media query for mobile devices */
@media (max-width: 600px) {
  .footer .container {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .footer-nav {
    flex-direction: column;
    align-items: center;
  }
}
</style>
