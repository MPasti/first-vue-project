<script setup lang="ts">
import { productService } from '@/services/products'
import { onMounted, ref } from 'vue'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const isLoading = ref<boolean>(false)
const products = ref<Product[]>([])

async function getProdutos() {
  isLoading.value = true
  try {
    products.value = await productService.getProducts()
    console.log('produtos', products)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getProdutos()
})
</script>

<template>
  <main class="container">
    <h1 class="title">Produtos</h1>
    <div class="main-box">
      <div v-for="product in products" :key="product.id" class="product">
        <img :src="product.image" alt="product" width="200px" />
        <h4 class="title">{{ product.title }}</h4>
        <p>R$ {{ product.price.toFixed(2) }}</p>
      </div>
    </div>
    <div v-if="isLoading" class="sidebar-overlay">
      <v-icon name="ri-loader-2-fill" class="icon" scale="10" animation="spin" color="white" />
    </div>
  </main>
</template>

<style scoped>
.container {
  margin: auto;
  min-height: 500px;
  padding: 20px;
  width: 70%;
}
.container .title {
  margin: 10px 0;
}

.main-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  width: 100%;
}

.product {
  text-align: justify;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  align-content: space-around;
  transition: transform 0.2s ease;
}

.product .title {
  font-weight: bold;
  margin-bottom: 10px;
}
.product img {
  width: 100%;
  max-height: 200px;
  object-fit: scale-down;
}

.product:hover {
  transform: scale(1.05);
  cursor: pointer;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s;
}
</style>
