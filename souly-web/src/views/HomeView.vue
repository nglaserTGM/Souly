<template>
  <div class="home-container">
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="main-title">SOULY</h1>
        <p class="tagline">„ICH WÜNSCHTE, ES WÄR SO“</p>
        <div class="hero-cta">
          <a href="#music" class="btn primary">MUSIK HÖREN</a>
          <a href="#tour" class="btn secondary">TOUR DATEN</a>
        </div>
      </div>
    </section>

    <section id="music" class="section music-section">
      <h2 class="section-label">Latest Releases</h2>
      <div class="music-grid">
        <div class="spotify-container">
          <iframe 
            src="https://open.spotify.com/embed/artist/3S8jF8fWlK6u0n7yC7X0p0?utm_source=generator&theme=0" 
            width="100%" 
            height="380" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>
        
        <div class="featured-info">
          <h3>SOULEYMAN</h3>
          <p>Das neue Projekt ist jetzt auf allen Streaming-Plattformen verfügbar. Einzigartiger Sound, tiefgreifende Texte – die Evolution eines Künstlers.</p>
          <div class="links">
            <a href="#" class="platform-link">Apple Music</a>
            <a href="#" class="platform-link">Spotify</a>
            <a href="#" class="platform-link">Deezer</a>
          </div>
        </div>
      </div>
    </section>

    <section id="tour" class="section tour-section">
      <h2 class="section-label">Live</h2>
      <div class="tour-list">
        <div v-for="(show, index) in tourDates" :key="index" class="tour-item">
          <div class="tour-date">{{ show.date }}</div>
          <div class="tour-city">{{ show.city }}</div>
          <div class="tour-venue">{{ show.venue }}</div>
          <div class="tour-status">
            <a v-if="!show.soldOut" :href="show.link" class="ticket-btn">TICKETS</a>
            <span v-else class="sold-out">AUSVERKAUFT</span>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2024 SOULY. ALL RIGHTS RESERVED.</p>
      <div class="socials">
        <a href="#">INSTAGRAM</a>
        <a href="#">TIKTOK</a>
        <a href="#">YOUTUBE</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      tourDates: [
        { date: '15.11.2024', city: 'Berlin', venue: 'Huxleys', soldOut: false, link: '#' },
        { date: '17.11.2024', city: 'Hamburg', venue: 'Uebel & Gefährlich', soldOut: true, link: '#' },
        { date: '20.11.2024', city: 'Köln', venue: 'Live Music Hall', soldOut: false, link: '#' },
        { date: '22.11.2024', city: 'München', venue: 'Backstage', soldOut: false, link: '#' },
        { date: '25.11.2024', city: 'Wien', venue: 'Flex', soldOut: false, link: '#' },
      ]
    }
  }
}
</script>

<style scoped>
/* Container & Allgemeines */
.home-container {
  background-color: #000;
  color: #fff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.section {
  padding: 100px 10%;
}

.section-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #666;
  margin-bottom: 50px;
  border-bottom: 1px solid #222;
  padding-bottom: 10px;
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: url('https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80') center/cover; /* Platzhalterbild */
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
}

.hero-content {
  position: relative;
  text-align: center;
  z-index: 1;
}

.main-title {
  font-size: clamp(4rem, 15vw, 10rem);
  font-weight: 900;
  margin: 0;
  letter-spacing: -2px;
}

.tagline {
  font-size: 1.2rem;
  letter-spacing: 5px;
  margin-top: -10px;
  margin-bottom: 40px;
  color: #ccc;
}

.btn {
  padding: 15px 35px;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 2px;
  transition: 0.3s;
  margin: 0 10px;
  display: inline-block;
}

.primary {
  background-color: #fff;
  color: #000;
}

.secondary {
  border: 1px solid #fff;
  color: #fff;
}

.btn:hover {
  opacity: 0.7;
  transform: translateY(-2px);
}

/* Music Section */
.music-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.featured-info h3 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.featured-info p {
  color: #aaa;
  line-height: 1.6;
  max-width: 400px;
}

.platform-link {
  display: block;
  color: #fff;
  margin-top: 15px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
}

/* Tour Section */
.tour-item {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  padding: 25px 0;
  border-bottom: 1px solid #222;
  align-items: center;
}

.tour-date { color: #888; }
.tour-city { font-weight: bold; font-size: 1.2rem; }
.ticket-btn {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 8px 20px;
  text-decoration: none;
  font-size: 0.8rem;
}

.sold-out {
  color: #ff4444;
  font-size: 0.8rem;
  text-transform: uppercase;
}

/* Footer */
.footer {
  padding: 50px 10%;
  border-top: 1px solid #222;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #444;
}

.socials a {
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
}

/* Mobile Optimierung */
@media (max-width: 768px) {
  .music-grid, .tour-item {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .tour-item > div { margin-bottom: 10px; }
  .music-grid { gap: 30px; }
}
</style>