<template>
  <div class="home-container">
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="main-title">
          <img src="@/assets/Logo_Souly_Vector.png" alt="S" class="main-title-logo">OULY
        </h1>
        <p class="tagline">„ICH WÜNSCHTE, ES WÄR SO“</p>
        <div class="hero-cta">
          <a href="#music" class="btn primary">MUSIK HÖREN</a>
          <a href="#tour" class="btn secondary">TOUR DATEN</a>
        </div>
      </div>
    </section>

    <section id="pinwand" class="section pinwand-section" @mousemove="handleMouseMove" @mouseleave="resetImageTransforms">
      <img 
        v-for="(image, index) in pinwandImages" 
        :key="index"
        :src="image.src"
        class="pinwand-image"
        :style="imageStyles[index]"
        @mouseover="handleMouseOver(index)"
        @load="handleImageLoad"
      />
    </section>

    <section id="music" class="section music-section">
      <div class="content-wrapper">
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
      </div>
    </section>

    <section id="tour" class="section tour-section">
      <div class="content-wrapper">
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
      </div>
    </section>
  </div>
</template>

<script>
import { throttle } from 'lodash';

export default {
  name: 'HomeView',
  data() {
    return {
      tourDates: [],
      pinwandImages: [
        // Store positions as ratios, pixels will be calculated in mounted
        { src: require('@/assets/pinwand1.jpg'), top: 0.10, left: 0.12, rotation: -15, zIndex: 1, width: '18vw', maxWidth: '240px', topPx: 0, leftPx: 0, currentScale: 1, translateX: 0, translateY: 0 },
        { src: require('@/assets/pinwand2.jpg'), top: 0.40, left: 0.05, rotation: 10, zIndex: 2, width: '22vw', maxWidth: '290px', topPx: 0, leftPx: 0, currentScale: 1, translateX: 0, translateY: 0 },
        { src: require('@/assets/pinwand3.jpg'), top: 0.65, left: 0.15, rotation: -5, zIndex: 3, width: '25vw', maxWidth: '320px', topPx: 0, leftPx: 0, currentScale: 1, translateX: 0, translateY: 0 },
        { src: require('@/assets/pinwand4.jpg'), top: 0.08, left: 0.60, rotation: 20, zIndex: 4, width: '20vw', maxWidth: '260px', topPx: 0, leftPx: 0, currentScale: 1, translateX: 0, translateY: 0 },
        { src: require('@/assets/pinwand5.jpg'), top: 0.35, left: 0.70, rotation: -12, zIndex: 5, width: '24vw', maxWidth: '310px', topPx: 0, leftPx: 0, currentScale: 1, translateX: 0, translateY: 0 },
        { src: require('@/assets/pinwand6.jpg'), top: 0.68, left: 0.75, rotation: 8, zIndex: 6, width: '21vw', maxWidth: '280px', topPx: 0, leftPx: 0, currentScale: 1, translateX: 0, translateY: 0 },
        { src: require('@/assets/pinwand7.jpg'), top: 0.50, left: 0.45, rotation: -2, zIndex: 7, width: '28vw', maxWidth: '360px', topPx: 0, leftPx: 0, currentScale: 1, translateX: 0, translateY: 0 },
        { src: require('@/assets/pinwand8.jpg'), top: 0.15, left: 0.35, rotation: 5, zIndex: 8, width: '23vw', maxWidth: '300px', topPx: 0, leftPx: 0, currentScale: 1, translateX: 0, translateY: 0 },
        { src: require('@/assets/pinwand9.jpg'), top: 0.70, left: 0.40, rotation: 15, zIndex: 9, width: '19vw', maxWidth: '250px', topPx: 0, leftPx: 0, currentScale: 1, translateX: 0, translateY: 0 }
      ],
      maxZIndex: 9,
      imageElements: [],
      mouse: { x: 0, y: 0 },
      animationFrameId: null,
      loadedImagesCount: 0,
    }
  },
  computed: {
    imageStyles() {
      return this.pinwandImages.map(img => {
        const { zIndex, width, maxWidth, topPx, leftPx, currentScale, translateX, translateY, rotation } = img;
        return {
          top: `${topPx}px`,
          left: `${leftPx}px`,
          width,
          maxWidth,
          zIndex,
          transform: `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg) scale(${currentScale})`,
        };
      });
    }
  },
  mounted() {
    this.calculateInitialPositions();
    this.updateImageElements();
    this.startAnimationFrame();
    window.addEventListener('resize', this.handleResize);

    // Existing tour dates logic
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
    runningDate.setMonth(today.getMonth() + 2);
    this.tourDates = venues.map((venue, index) => {
      if (index > 0) runningDate.setDate(runningDate.getDate() + 3);
      return { ...venue, date: formatDate(new Date(runningDate)) };
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    this.stopAnimationFrame();
  },
  methods: {
    handleImageLoad() {
      this.loadedImagesCount++;
      if (this.loadedImagesCount === this.pinwandImages.length) {
        this.setSectionHeight();
      }
    },
    handleResize() {
      this.calculateInitialPositions();
      this.updateImageElements().then(() => {
        this.setSectionHeight();
      });
    },
    calculateInitialPositions() {
      const container = this.$el.querySelector('.pinwand-section');
      if (!container) return;
      this.pinwandImages.forEach(img => {
        img.topPx = container.clientHeight * img.top;
        img.leftPx = container.clientWidth * img.left;
      });
    },
    updateImageElements() {
      return this.$nextTick().then(() => {
        this.imageElements = this.$el.querySelectorAll('.pinwand-image');
      });
    },
    setSectionHeight() {
        if (!this.imageElements.length) return;
        
        let maxBottom = 0;
        this.imageElements.forEach((el, index) => {
            const img = this.pinwandImages[index];
            const restingBottom = img.topPx + el.offsetHeight;
            if (restingBottom > maxBottom) {
                maxBottom = restingBottom;
            }
        });

        const container = this.$el.querySelector('.pinwand-section');
        const minHeight = window.innerHeight;
        const requiredHeight = maxBottom + 50; // 50px padding
        container.style.height = `${Math.max(requiredHeight, minHeight)}px`;
    },
    handleMouseMove: throttle(function(event) {
      this.mouse.x = event.clientX;
      this.mouse.y = event.clientY;
    }, 16),

    startAnimationFrame() {
      const animate = () => {
        this.updateImageTransforms();
        this.animationFrameId = requestAnimationFrame(animate);
      };
      this.animationFrameId = requestAnimationFrame(animate);
    },

    stopAnimationFrame() {
      cancelAnimationFrame(this.animationFrameId);
    },

    lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    },

    updateImageTransforms() {
      if (!this.imageElements.length) return;

      this.imageElements.forEach((el, index) => {
        const image = this.pinwandImages[index];
        const rect = el.getBoundingClientRect();
        if (rect.width === 0) return;
        
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const dx = this.mouse.x - centerX;
        const dy = this.mouse.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDist = 400;
        const scaleFactor = Math.max(0, 1 - distance / maxDist);
        
        const baseScale = 1;
        const hoverScale = 1.2;
        image.currentScale = baseScale + (hoverScale - baseScale) * scaleFactor;
      });

      const translations = this.pinwandImages.map(() => ({x: 0, y: 0}));

      this.imageElements.forEach((el_i, i) => {
        const rect_i = el_i.getBoundingClientRect();
        if (rect_i.width === 0) return;
        const centerX_i = rect_i.left + rect_i.width / 2;
        const centerY_i = rect_i.top + rect_i.height / 2;

        this.imageElements.forEach((el_j, j) => {
          if (i === j) return;

          const rect_j = el_j.getBoundingClientRect();
          if (rect_j.width === 0) return;
          const centerX_j = rect_j.left + rect_j.width / 2;
          const centerY_j = rect_j.top + rect_j.height / 2;

          const pushDx = centerX_i - centerX_j;
          const pushDy = centerY_i - centerY_j;
          const pushDist = Math.sqrt(pushDx * pushDx + pushDy * pushDy);

          const maxPushDist = (rect_i.width + rect_j.width) / 2 + 30;
          
          if (pushDist < maxPushDist) {
            const scaleFactorOfPusher = this.pinwandImages[j].currentScale - 1;
            const pushFactor = (1 - pushDist / maxPushDist);
            const pushAmount = pushFactor * 150 * scaleFactorOfPusher;
            
            if (pushAmount > 0.1) {
              const angle = Math.atan2(pushDy, pushDx);
              translations[i].x += Math.cos(angle) * pushAmount;
              translations[i].y += Math.sin(angle) * pushAmount;
            }
          }
        });
      });

      this.pinwandImages.forEach((image, index) => {
        image.translateX = this.lerp(image.translateX, translations[index].x, 0.1);
        image.translateY = this.lerp(image.translateY, translations[index].y, 0.1);
      });
    },

    resetImageTransforms() {
      this.pinwandImages.forEach(img => {
        img.currentScale = 1;
        img.translateX = this.lerp(img.translateX, 0, 0.1);

        img.translateY = this.lerp(img.translateY, 0, 0.1);
      });
    },

    handleMouseOver(hoveredIndex) {
      this.maxZIndex += 1;
      this.pinwandImages.forEach((img, index) => {
        img.zIndex = index === hoveredIndex ? this.maxZIndex : img.zIndex;
      });
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
  scroll-margin-top: 5rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(4rem, 15vw, 10rem);
  font-weight: 900;
  margin: 0;
  letter-spacing: -2px;
}

.main-title-logo {
  height: 2em;
  width: auto;
  margin-right: -0.25em;
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

/* Pinwand Section */
.pinwand-section {
  min-height: 100vh;
  background: url('@/assets/PinWand.jpg') center/cover no-repeat;
  position: relative;
  padding: 0;
}

.pinwand-image {
  position: absolute;
  border: 4px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  cursor: pointer;
  /* Transitions are now handled by the JS animation loop */
  transition: z-index 0s;
}

.content-wrapper {
  border: 1px solid #666;
  border-radius: 20px;
  padding: 40px;
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