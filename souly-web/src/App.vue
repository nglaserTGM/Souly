<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="logo">SOULY</router-link>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Story</router-link>
        <router-link to="/#music">Music</router-link>
        <router-link to="/#tour" class="cta-button">Tickets</router-link>
      </div>
    </nav>
    <router-view />
    <footer class="site-footer">
      <div class="footer-row-1">
        <a href="https://www.instagram.com/soulyyyyyyy/" target="_blank">INSTAGRAM</a>
        <a href="https://www.tiktok.com/@soulyyyyyyy" target="_blank">TIKTOK</a>
        <a href="https://www.youtube.com/@soulyyyyyyy" target="_blank">YOUTUBE</a>
      </div>
      <div class="footer-row-2">
        <div class="copyright">
          © 2024 SOULY. ALL RIGHTS RESERVED.
        </div>
        <div class="legal-links">
          <router-link to="/impressum">IMPRESSUM</router-link>
          <router-link to="/datenschutz">DATENSCHUTZERKLÄRUNG</router-link>
          <router-link to="/agb">AGB</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  --primary: #ffffff;
  --bg: #0a0a0a;
  --accent: #555555;
}

body {
  margin: 0;
  background-color: var(--bg);
  color: var(--primary);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10%;
  position: fixed;
  width: 80%;
  z-index: 100;
  background: linear-gradient(to bottom, rgba(10,10,10,0.8), transparent);
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 5px;
  color: var(--primary);
  text-decoration: none;
}

.nav-links a {
  color: var(--primary);
  text-decoration: none;
  margin-left: 2rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: opacity 0.3s;
}

.nav-links a:hover {
  opacity: 0.6;
}

.cta-button {
  border: 1px solid var(--primary);
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
}

.site-footer {
  padding: 2rem 10%;
  border-top: 1px solid #222;
  font-size: 0.8rem;
}

.footer-row-1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.footer-row-1 a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.footer-row-2 {
  position: relative;
  text-align: center;
  padding: 1rem 0;
}

.copyright {
  position: absolute;
  left: 0;
  color: #888; /* Grayish */
  bottom: 1rem;
}

.legal-links a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

</style>