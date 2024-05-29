<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="logo">
            <img alt="Vue logo" class="logo" src="../assets/logo.svg" />
            <p>Privacidade e LGPD.</p>
          </div>
        </div>
        <div class="footer-section">
          <h3>Sobre nós</h3>
          <p>We are a company dedicated to providing the best services.</p>
        </div>
        <div class="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Nos siga nas redes sociais</h3>
          <ul class="socials">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">&copy; 2024 MPasti - Todos os direitos reservados.</div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 1rem;
}

.footer-section h3 {
  border-bottom: 2px solid #777;
  padding-bottom: 0.5rem;
}

.footer-section p {
  margin-top: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 0.5rem 0;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  margin-top: 2rem;
  border-top: 1px solid #777;
  padding-top: 1rem;
}
</style>
