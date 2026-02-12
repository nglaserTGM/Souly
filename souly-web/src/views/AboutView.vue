<template>
  <div class="story-container">
    <div class="story-hero">
      <h1>Die Geschichte von SOULY</h1>
      <p>Vom Keller zum Chartstürmer:  Eine Reise durch die Musik</p>
    </div>

    <div class="story-grid">
      <div 
        v-for="item in storyItems" 
        :key="item.title" 
        class="story-card" 
        :style="{ backgroundImage: `url(${item.imageUrl})` }"
      >
        <div class="card-content">
          <span class="card-year">{{ item.year }}</span>
          <h2 class="card-title">{{ item.title }}</h2>
          <div class="card-hover-content">
            <p class="card-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Hier können die Bilder und Texte für die Story-Seite angepasst werden.
      //
      // Es gibt zwei Möglichkeiten, Bilder einzubinden:
      //
      // 1. Bilder im `public` Ordner (empfohlen für einfache Anwendung):
      //    - Erstellen Sie einen Ordner `souly-web/public/images/`.
      //    - Legen Sie Ihre Bilder dort ab.
      //    - Tragen Sie den Pfad hier als String ein, z.B. `imageUrl: '/images/mein-bild.jpg'`.
      //
      // 2. Bilder im `src/assets` Ordner (für fortgeschrittene Anwendung):
      //    - Legen Sie Ihre Bilder in den Ordner `souly-web/src/assets/`.
      //    - Verwenden Sie `require`, um das Bild zu laden. Dies ist notwendig, damit Vue das Bild korrekt verarbeiten kann.
      //
      // Beispiel für ein Bild im `assets` Ordner:
      // imageUrl: require('@/assets/jugendzentrum.jpg'), 
      // WICHTIG: Ersetzen Sie 'jugendzentrum.jpg' mit Ihrem exakten Dateinamen. 
      // Wenn die Datei nicht existiert, wird die Anwendung nicht kompilieren.
      storyItems: [
        {
          year: 'Frühe Jahre',
          title: 'Die Anfänge',
          text: 'Aufgewachsen mit deutsch-italienischen Wurzeln in Nordrhein-Westfalen, entdeckte Luca Carlo Politano schon früh seine Leidenschaft für die Musik. Als Teenager gründete er seine erste Band im Keller eines Jugendzentrums und legte den Grundstein für seine musikalische Zukunft.',
          imageUrl: require('@/assets/Anfang.png') // Beispiel für ein Bild im `assets` Ordner/assets/Anfang.png' // Beispiel für ein Bild im `assets` Ordner
        },
        {
          year: '2019',
          title: 'Ein neuer Name, eine neue Stadt',
          text: 'Nach einem Psychologiestudium in Osnabrück traf er Anfang 20 die Entscheidung, alles auf die Musik zu setzen. Er zog nach Berlin und begann 2019, unter dem Namen Souly Musik zu veröffentlichen, die sich zwischen verdrehten R&B-Tunes und modernem Trap-Sound bewegt.',
          imageUrl: require('@/assets/erstes.jpg') // Beispiel für ein Bild im `assets` Ordner
        },
        {
          year: '2023',
          title: 'Das Debüt',
          text: 'Mit seinem Debütalbum "Ich wünschte, es würd\' mich kümmern" markierte Souly einen Meilenstein in seiner Karriere. Das Album spiegelte die Wünsche einer ganzen Generation wider, die in einer hyperdigitalen Gesellschaft nach Identität sucht.',
          imageUrl: require('@/assets/Debüt.jpg') // Beispiel für ein Bild im `assets` Ordner
        },
        {
          year: '2024',
          title: 'Durch die Decke',
          text: 'Souly sprengt Genregrenzen und schafft seine eigene Nische. Seine Single "Bundeswehr" chartete auf Platz 1 der TikTok-Trends, und seine Konzerte sorgten mit abgeklebten Handykameras für Furore und Einlassstopps wegen zu hohen Andrangs.',
          imageUrl: require('@/assets/Live.png') // Beispiel für ein Bild im `assets` Ordner
        },
        {
          year: '2025',
          title: 'Die Zukunft',
          text: 'Mit dem Album "traence" und der Integration von Techno- und Metal-Elementen in seinen Sound blickt Souly in eine Zukunft, in der er seine künstlerische Vision weiter ausbaut und die Grenzen der Musik neu definiert.',
          imageUrl: require('@/assets/zuekunft.jpg') // Beispiel für ein Bild im `assets` Ordner
        }
      ]
    }
  }
}
</script>

<style scoped>
.story-container {
  color: white;
  padding: 4rem 2rem;
}

.story-hero {
  text-align: center;
  margin-bottom: 4rem;
}

.story-hero h1 {
  font-size: 4.5rem;
  margin-bottom: 1rem;
}

.story-hero p {
  font-size: 1.2rem;
  color: #aaa;
}

.story-grid {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
}

.story-card {
  position: relative;
  height: 500px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.story-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent, transparent);
  transition: background 0.4s ease;
  z-index: 1;
}

.story-card:hover::before {
  background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5));
}

.card-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 2;
}

.card-title {
  font-size: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

.card-hover-content {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
  width: 80%;
}

.story-card:hover .card-title {
  top: 35%;
}

.story-card:hover .card-hover-content {
  opacity: 1;
  transform: translateY(0);
  margin-top: 150px;
}

.card-year {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: rgba(0,0,0,0.5);
  padding: 1rem 0.75rem;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.4s ease;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

.story-card:hover .card-year {
  opacity: 1;
}

.card-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #ccc;
  margin-top: 1rem; /* Add some space between title (when it moves up) and text */
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
</style>
