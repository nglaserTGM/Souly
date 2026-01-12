<template>
  <div class="tour-section">
    <h2>Live 2024</h2>
    <div v-for="concert in dates" :key="concert.id" class="tour-row">
      <span class="date">{{ concert.date }}</span>
      <span class="city">{{ concert.city }}</span>
      <span class="location">{{ concert.venue }}</span>
      <a :href="concert.link" class="ticket-link">Tickets</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dates: [
        { id: 1, date: '12.10.', city: 'Berlin', venue: 'Lido', link: '#' },
        { id: 2, date: '15.10.', city: 'Köln', venue: 'Gloria', link: '#' },
        { id: 3, date: '18.10.', city: 'Wien', venue: 'Flex', link: '#' },
      ]
    }
  }
}
</script>

<style scoped>
.tour-row {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1px solid #333;
  align-items: center;
}
.ticket-link {
  border: 1px solid white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: white;
  transition: 0.3s;
}
.ticket-link:hover {
  background: white;
  color: black;
}
</style>