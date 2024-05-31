<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { getUser } from '@/services/usuario'
import SideBar from '@/components/SideBar.vue'

const router = useRouter()

const navigateTo = (routeName: string) => {
  router.push({ name: routeName })
}

const user = getUser()

const { name, lastName } = user

function getInitials() {
  const first = name.charAt(0)
  const second = lastName.charAt(0)

  return first + second
}

const initials = getInitials()

const handleScroll = () => {
  const header = document.querySelector('.flex-header')
  if (header && window.scrollY > 0) {
    header.classList.add('is-scrolled')
  } else if (header) {
    header.classList.remove('is-scrolled')
  }
}

window.addEventListener('scroll', handleScroll)

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <header class="flex-header">
    <div class="container">
      <div class="logo" @click="navigateTo('Home')">
        <img alt="Vue logo" class="logo-img" src="../assets/logo.svg" />
      </div>

      <nav>
        <ul>
          <li><RouterLink to="/sobre">Sobre</RouterLink></li>
          <li><RouterLink to="/servicos">Serviços</RouterLink></li>
          <li><RouterLink to="/produtos">Produtos</RouterLink></li>
          <li><RouterLink to="/contato">Contato</RouterLink></li>
        </ul>
      </nav>
    </div>
    <div class="user">
      <div class="pic" @click="toggleSidebar">{{ initials }}</div>
    </div>
  </header>
  <SideBar :is-sidebar-open="isSidebarOpen" :closeSidebar="toggleSidebar" />
  <div v-if="isSidebarOpen" class="sidebar-overlay" @click="toggleSidebar"></div>
</template>

<style scoped>
.flex-header {
  background-color: #333;
  color: #fff;
  width: 100%;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  transition:
    box-shadow 0.3s,
    transform 0.3s;
}

.is-scrolled {
  box-shadow: 0 8px 6px rgba(0, 0, 0, 0.2);
}

.logo-img {
  height: 60px;
}

.logo:hover {
  opacity: 0.8;
  cursor: pointer;
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

.user {
  justify-content: space-around;
  align-items: center;
  display: flex;
  margin-right: 50px;
}

.pic {
  border-radius: 50%;
  background-color: #cccccc;
  width: 2em;
  height: 2em;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #ffffff;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  cursor: pointer;
}

.leave:hover {
  cursor: pointer;
  opacity: 0.7;
}

nav ul li a:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #41b883;
}

.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.sidebar-open {
  transform: translateX(0);
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  margin-bottom: 1rem;
}

.sidebar ul li a {
  color: #333;
  text-decoration: none;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
