<template>
  <div class="ticket-view-container">
    <div class="ticket-box">
      <h1>Tickets</h1>
      <div class="concert-selector" v-if="venues && venues.length">
        <label for="concert-select">Wähle ein Konzert:</label>
        <select id="concert-select" v-model="selectedCity">
          <option v-for="venue in venues" :key="venue.city" :value="venue.city">
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
</template>

<script>
export default {
  name: 'TicketView',
  data() {
    return {
      selectedCity: this.$route.params.city,
      venues: [
        { date: '', city: 'Berlin', venue: 'Huxleys', soldOut: false, link: '#' },
        { date: '', city: 'Hamburg', venue: 'Uebel & Gefährlich', soldOut: true, link: '#' },
        { date: '', city: 'Köln', venue: 'Live Music Hall', soldOut: false, link: '#' },
        { date: '', city: 'München', venue: 'Backstage', soldOut: false, link: '#' },
        { date: '', city: 'Wien', venue: 'Flex', soldOut: false, link: '#' },
      ]
    };
  },
  computed: {
    selectedConcert() {
      return this.venues.find(v => v.city === this.selectedCity && !v.soldOut);
    }
  },
  created() {
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
};
</script>

<style scoped>
.ticket-view-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 4rem 2rem;
  color: white;
}
.ticket-box {
  background-color: #1a1a1a;
  padding: 3rem;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  text-align: center;
}
.ticket-box h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
.concert-selector {
  margin-bottom: 2rem;
}
.concert-selector label {
  margin-right: 1rem;
}
.concert-selector select {
  padding: 0.5rem;
  font-size: 1rem;
  min-width: 300px;
}
.selected-concert-details h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.ticket-purchase-btn {
  display: inline-block;
  background-color: #fff;
  color: #000;
  padding: 1rem 2rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 50px;
  margin-top: 1rem;
  transition: transform 0.3s;
}
.ticket-purchase-btn:hover {
    transform: scale(1.05);
}
</style>
