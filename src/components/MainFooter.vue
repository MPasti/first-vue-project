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
          <p>Os melhores produtos você encontra aqui!</p>
        </div>
        <div class="footer-section">
          <h3>Atalhos</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="sobre">Sobre</a></li>
            <li><a href="servicos">Serviços</a></li>
            <li><a href="produtos">Produtos</a></li>
            <li><a href="contato">Contato</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Nos siga nas redes sociais</h3>
          <ul class="socials">
            <li>
              <a href="https://facebook.com" target="_blank">
                <v-icon name="fa-facebook" class="icon" scale="2" />
              </a>
            </li>
            <li>
              <a href="https://x.com/" target="_blank"
                ><v-icon name="fa-twitter" class="icon" scale="2"
              /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank"
                ><v-icon name="fa-instagram" class="icon" scale="2"
              /></a>
            </li>
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
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  margin-top: 2rem;
  border-top: 1px solid #777;
  padding-top: 1rem;
}

.socials li a:hover {
  opacity: 0.8;
}
</style>
