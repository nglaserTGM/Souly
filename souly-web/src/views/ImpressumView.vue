<template>
  <div class="impressum-container">
    <div class="impressum-box">
      <h1>Impressum</h1>
      
      <div class="impressum-section">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          iszhai GmbH<br>
          Weitlingstr. 40<br>
          10317 Berlin
        </p>
      </div>

      <div class="impressum-section">
        <h2>Kontakt</h2>
        <p>
          Telefon: +491636713373<br>
          E-Mail: souly@iszhai.com
        </p>
      </div>

      <div class="impressum-section">
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br>
          DE355868285
        </p>
      </div>

      <div class="impressum-section">
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          iszhai GmbH<br>
          Weitlingstr. 40<br>
          10317 Berlin
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.impressum-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 4rem 2rem;
  color: white;
}

.impressum-box {
  background-color: #1a1a1a;
  padding: 3rem;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.impressum-box h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  letter-spacing: 2px;
}

.impressum-section {
  margin-bottom: 2rem;
}

.impressum-section:last-child {
  margin-bottom: 0;
}

.impressum-section h2 {
  font-size: 1.2rem;
  color: #aaa;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.impressum-section p {
  font-size: 1rem;
  line-height: 1.6;
}
</style>
