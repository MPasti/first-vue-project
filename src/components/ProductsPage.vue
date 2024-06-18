<script setup lang="ts">
import { productService } from '@/services/products'
import { onMounted, ref } from 'vue'
import { useToast } from 'vue-toastification'
import LoaderOverlay from '@/components/LoaderOverlay.vue'

const toast = useToast();

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
  } catch (error) {
    toast.error('Erro ao carregar produtos');
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getProdutos()
})
</script>

<template>
  <div class="background" />
  <main class="container">
    <h1 class="title">Produtos</h1>
    <div class="main-box">
      <div v-for="product in products" :key="product.id" class="product">
        <img :src="product.image" alt="product" width="200px" />
        <div class="link">
          <RouterLink to="produtos/camisa" class="none"> Veja mais detalhes </RouterLink>
        </div>
        <h4 class="title">{{ product.title }}</h4>
        <p>R$ {{ product.price.toFixed(2) }}</p>
      </div>
    </div>
    <LoaderOverlay :loading="isLoading"/>
  </main>
</template>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  z-index: -1;
}

.container {
  margin: auto;
  min-height: 500px;
  padding: 20px;
  width: 70%;

  .title {
    margin: 10px 0;
  }
}

.main-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  width: 100%;
}

.product {
  position: relative;
  background-color: #fff;
  text-align: justify;
  padding: 10px;
  box-sizing: border-box;
  align-content: space-around;
  transition: transform 0.2s ease;
  border-radius: 4%;
  box-shadow: 1px 6px 12px rgba(0, 0, 0, 0.1);

  .title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: scale-down;
  }
}

.link {
  display: none;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #fff;
  border-radius: 24px;
  padding: 10px;
  text-align: left;
  width: auto;
  height: 40px;

  &:hover {
    background-color: #07c973;
    transition: background-color 0.4s ease-in-out;
  }
}

.none {
  text-decoration: none;
  color: #fff;

  &:visited {
    text-decoration: none;
    color: #fff;
  }
}

.product:hover {
  transform: scale(1.03);
  cursor: pointer;

  .link {
    display: flex;
    animation: bounceInUp 0.5s forwards;
  }
}

@keyframes bounceInUp {
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>
