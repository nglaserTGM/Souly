<template>
  <div class="ticket-view-container">
    <div class="ticket-box">
      <div class="concert-image-container" v-if="selectedConcert && selectedConcert.image">
        <img :src="selectedConcert.image" alt="Concert Image" class="concert-image">
      </div>
      <div class="ticket-details">
        <h1>Tickets</h1>
        <div class="concert-selector" v-if="venues && venues.length">
          <label for="concert-select">Wähle ein Konzert:</label>
          <select id="concert-select" v-model="selectedCity" @change="updateConcert">
            <option v-for="venue in availableVenues" :key="venue.city" :value="venue.city">
              {{ venue.date }} - {{ venue.city }} - {{ venue.venue }}
            </option>
          </select>
        </div>
        <div class="selected-concert-details" v-if="selectedConcert">
          <h2>{{ selectedConcert.city }}</h2>
          <p>{{ selectedConcert.date }} @ {{ selectedConcert.venue }}</p>
          <a :href="selectedConcert.link" class="ticket-purchase-btn">Jetzt Ticket kaufen</a>
        </div>
        <div v-else>
          <p>Konzert nicht gefunden oder ausverkauft.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketView',
  data() {
    return {
      selectedCity: null,
      venues: [
        { date: '', city: 'Berlin', venue: 'Huxleys', soldOut: false, link: '#', image: require('@/assets/Berlin.jpg') },
        { date: '', city: 'Hamburg', venue: 'Uebel & Gefährlich', soldOut: true, link: '#', image: require('@/assets/Hamburg.jpg') },
        { date: '', city: 'Köln', venue: 'Live Music Hall', soldOut: false, link: '#', image: require('@/assets/köln.jpg') },
        { date: '', city: 'München', venue: 'Backstage', soldOut: false, link: '#', image: require('@/assets/münchen.jpg') },
        { date: '', city: 'Wien', venue: 'Flex', soldOut: false, link: '#', image: require('@/assets/wien.jpg') },
      ]
    };
  },
  computed: {
    availableVenues() {
      return this.venues.filter(v => !v.soldOut);
    },
    selectedConcert() {
      return this.venues.find(v => v.city === this.selectedCity);
    }
  },
  methods: {
    updateConcert() {
        this.$router.push({ name: 'tickets', params: { city: this.selectedCity } });
    },
    setInitialConcert() {
        const initialCity = this.$route.params.city;
        const concertExists = this.availableVenues.some(v => v.city === initialCity);
        if (concertExists) {
            this.selectedCity = initialCity;
        } else if (this.availableVenues.length > 0) {
            this.selectedCity = this.availableVenues[0].city;
            this.$router.replace({ name: 'tickets', params: { city: this.selectedCity } });
        }
    },
    formatDates() {
        const formatDate = (date) => {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        };

        const today = new Date();
        let runningDate = new Date();
        runningDate.setMonth(today.getMonth() + 2);

        this.venues.forEach((venue, index) => {
            if (index > 0) {
                runningDate.setDate(runningDate.getDate() + 3);
            }
            venue.date = formatDate(new Date(runningDate));
        });
    }
  },
  created() {
    this.formatDates();
    this.setInitialConcert();
  },
  watch: {
    '$route.params.city'(newCity) {
      const concertExists = this.availableVenues.some(v => v.city === newCity);
       if (concertExists) {
            this.selectedCity = newCity;
        }
    }
  }
};
</script>

<style scoped>
.ticket-view-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding: 4rem 2rem;
  color: white;
  background-color: #000;
}

.ticket-box {
  display: flex;
  background-color: #111;
  border-radius: 15px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 15px 40px rgba(0,0,0,0.7);
  overflow: hidden;
  height: 500px;
}

.concert-image-container {
  flex: 1;
}

.concert-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.ticket-details {
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.ticket-details h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.concert-selector {
  margin-bottom: 2rem;
}

.concert-selector label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.concert-selector select {
  padding: 0.8rem;
  font-size: 1rem;
  width: 100%;
  background-color: #333;
  color: white;
  border: 1px solid #555;
  border-radius: 5px;
  cursor: pointer;
}
.concert-selector select:focus {
  outline: none;
  border-color: #fff;
}

.selected-concert-details h2 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.selected-concert-details p {
    font-size: 1.2rem;
    color: #aaa;
    margin-bottom: 2rem;
}

.ticket-purchase-btn {
  display: inline-block;
  background-color: #fff;
  color: #000;
  padding: 1rem 2.5rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 50px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.ticket-purchase-btn:hover {
    transform: scale(1.05);
    background-color: #ccc;
}
</style>
