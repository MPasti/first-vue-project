<script setup lang="ts"></script>

<template>
  <header class="flex-header">
    <div class="container">
      <div class="logo">
        <img alt="Vue logo" class="logo" src="../assets/logo.svg" />
      </div>

      <nav>
        <ul>
          <li><a>About</a></li>
          <li><a>Services</a></li>
          <li><a>Products</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.flex-header {
  background-color: #333;
  color: #fff;
  display: flex;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
