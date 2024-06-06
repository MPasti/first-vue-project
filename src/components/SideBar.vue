<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { getUser } from '@/services/usuario'

const props = defineProps({
  isSidebarOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['toggleSidebar'])

const user = getUser()
const { name, lastName, username } = user

function getInitials() {
  const first = name.charAt(0)
  const second = lastName.charAt(0)
  return first + second
}

const initials = getInitials()

const toggleSidebar = () => {
  emit('toggleSidebar')
}
</script>

<template>
  <aside :class="{ 'sidebar-open': isSidebarOpen }" class="sidebar">
    <div class="flex-container">
      <div class="pic">{{ initials }}</div>
      <div>
        <h4>{{ username }}</h4>
        <p>{{ name + ' ' + lastName }}</p>
      </div>
    </div>
    <hr />
    <ul style="margin-top: 14px">
      <li><RouterLink to="/perfil">Perfil</RouterLink></li>
      <li><RouterLink to="/configuracoes">Configurações</RouterLink></li>
      <li><RouterLink to="/ajuda">Ajuda</RouterLink></li>
    </ul>
    <hr />
    <ul style="margin-top: 14px">
      <li><RouterLink to="/">Início</RouterLink></li>
      <li><RouterLink to="/sobre">Sobre</RouterLink></li>
      <li><RouterLink to="/servicos">Serviços</RouterLink></li>
      <li><RouterLink to="/produtos">Produtos</RouterLink></li>
      <li><RouterLink to="/contato">Contato</RouterLink></li>
    </ul>
    <hr />

    <RouterLink to="/login" class="flex-container leave link">
      <v-icon name="ri-logout-box-line" class="icon" scale="1.5" />
      <h4>Sair</h4>
    </RouterLink>
  </aside>
  <div v-if="isSidebarOpen" class="sidebar-overlay" @click="toggleSidebar"></div>
</template>

<style scoped>
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

.flex-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
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
  box-shadow: 0 0 6px rgba(20, 20, 20, 0.6);
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
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

hr {
  border-top: 1px solid rgba(121, 121, 121, 0.65);
  border-radius: 100%;
}

.leave {
  margin-top: auto;
  cursor: pointer;
}

.link {
  color: #000;
}
</style>
