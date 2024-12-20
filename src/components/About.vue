<template>
  <div class="about">
    <div class="info-box">
      <img src="../assets/playstation-logo.png"/>
      <h2>PlayStation</h2>
      <p>PlayStation adalah konsol game yang dikembangkan oleh Sony Interactive Entertainment, pertama kali diluncurkan pada tahun 1994. PlayStation telah berevolusi menjadi salah satu platform gaming paling populer di dunia, dengan jutaan pengguna global dan berbagai game eksklusif berkualitas tinggi. Produk-produk unggulannya, seperti PlayStation 5, terus menghadirkan inovasi teknologi, termasuk dukungan untuk VR (Virtual Reality) dan layanan berlangganan game yang memperkuat posisi PlayStation di industri game.</p>
    </div>
    <div class="info-box">
      <img src="../assets/steam-logo.jpg"/>
      <h2>Steam</h2>
      <p>Steam adalah platform distribusi digital untuk game PC yang dikembangkan oleh Valve Corporation, pertama kali dirilis pada tahun 2003. Steam telah menjadi pusat distribusi utama bagi game digital di seluruh dunia, dengan lebih dari 120 juta pengguna aktif bulanan. Steam menyediakan ribuan judul game dari berbagai genre, komunitas gamer yang aktif, serta fitur inovatif seperti Steam Workshop dan penjualan diskon besar yang menarik banyak gamer.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-around;
  padding: 50px;
}

.info-box {
  border: 1px solid #ddd;
  padding: 20px;
  width: 45%;
  background-color: #f9f9f9;
  text-align: center;
}

.image {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

h2 {
  font-size: 24px;
  color: #333;
}

p {
  font-size: 16px;
  color: #666;
}
</style>