<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo">SOULY</div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Story</router-link>
        <a href="#music">Music</a>
        <a href="#tour" class="cta-button">Tickets</a>
      </div>
    </nav>
    <router-view />
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
</style>