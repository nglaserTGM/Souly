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
            src="https://open.spotify.com/embed/artist/1fImPZoBVjmYrBFzCHh0N3?utm_source=generator&theme=0" 
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
            <a href="https://music.apple.com/at/artist/souly/1451179227" target="_blank" class="platform-link">Apple Music</a>
            <a href="https://open.spotify.com/intl-de/artist/1fImPZoBVjmYrBFzCHh0N3" target="_blank" class="platform-link">Spotify</a>
            <a href="https://www.deezer.com/de/artist/12523984" target="_blank" class="platform-link">Deezer</a>
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
            <router-link v-if="!show.soldOut" :to="`/tickets/${show.city}`" class="ticket-btn">TICKETS</router-link>
            <span v-else class="sold-out">AUSVERKAUFT</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      tourDates: []
    }
  },
  mounted() {
    const venues = [
      { city: 'Berlin', venue: 'Huxleys', soldOut: false, link: '#' },
      { city: 'Hamburg', venue: 'Uebel & Gefährlich', soldOut: true, link: '#' },
      { city: 'Köln', venue: 'Live Music Hall', soldOut: false, link: '#' },
      { city: 'München', venue: 'Backstage', soldOut: false, link: '#' },
      { city: 'Wien', venue: 'Flex', soldOut: false, link: '#' },
    ];

    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };

    const today = new Date();
    let runningDate = new Date();
    runningDate.setMonth(today.getMonth() + 2); // First date is 2 months from today

    this.tourDates = venues.map((venue, index) => {
      if (index > 0) {
        runningDate.setDate(runningDate.getDate() + 3);
      }
      return {
        ...venue,
        date: formatDate(new Date(runningDate))
      };
    });
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
  /* Hier wurde der Pfad zu deinem neuen Bild angepasst */
  background: url('@/assets/Souly_main.jpg') center/cover; 
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