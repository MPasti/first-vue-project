<script setup lang="ts">
import { onMounted, ref } from 'vue'

const ideaMainBox = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.text').forEach((text) => {
            text.classList.add('animate')
          })
          entry.target.querySelector('.image')!.classList.add('animate')
        }
      })
    },
    { threshold: 0.1 }
  )

  if (ideaMainBox.value) {
    observer.observe(ideaMainBox.value)
  }
})
</script>

<template>
  <main>
    <div class="container background-white">
      <div class="background-white-overlay"></div>
      <div class="main-box">
        <div class="column">
          <h1 class="home-title">Progressive</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis doloribus
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias asperiores, assumenda
            doloremque eligendi enim expedita fugiat iste laborum magni nobis porro qui quia quis
            quod repellendus sed soluta unde. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Adipisci, blanditiis vitae. Animi deserunt dolorem eveniet ex facere, fugiat id in
            labore laboriosam molestiae odit quos saepe sit tempore vel velit.
          </p>
        </div>
      </div>
    </div>
    <div class="container alternative">
      <div class="main-box">
        <img src="../assets/logo.svg" alt="idea" style="height: 300px; margin-right: 100px" />
        <div class="column">
          <h2>Teste</h2>
          <p class="justified">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores exercitationem
            harum quibusdam quis quod recusandae. At culpa explicabo magni pariatur quia
            reprehenderit voluptates. Corporis dolore neque officia quam repellendus. Doloribus?
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div ref="ideaMainBox" class="main-box idea-main-box">
        <div class="column">
          <h1 class="text">Teste</h1>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis doloribus ea
            earum eveniet minus nihil nostrum sequi tempora velit. Deleniti deserunt doloribus eos
            obcaecati tempore? Deserunt nostrum pariatur sequi!
          </p>
          <br />
          <div>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <span>Asperiores exercitationem harum quibusdam quis quod recusandae.</span> At culpa
              explicabo magni pariatur quia reprehenderit voluptates. Corporis dolore neque officia
              quam repellendus. Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              At corporis culpa
              <span>dicta eos hic incidunt inventore minima nostrum possimus</span> recusandae
              sapiente, sequi ullam unde veritatis voluptatibus? Distinctio ipsum officiis
              voluptatum.
            </p>
          </div>
        </div>
        <img
          class="image"
          src="https://static.vecteezy.com/system/resources/thumbnails/021/353/223/small_2x/light-bulb-with-rays-shine-energy-and-idea-symbol-icon-greeting-cards-prints-for-badges-posters-png.png"
          alt="idea"
        />
      </div>
    </div>
    <div class="container background-vue alternative">
      <div class="main-box">
        <div class="column">
          <h1>Teste</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis doloribus
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias asperiores, assumenda
            doloremque eligendi enim expedita fugiat iste laborum magni nobis porro qui quia quis
            quod repellendus sed soluta unde. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Adipisci, blanditiis vitae. Animi deserunt dolorem eveniet ex facere, fugiat id in
            labore laboriosam molestiae odit quos saepe sit tempore vel velit.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  margin: auto;
  justify-content: center;
  min-height: 500px;
  position: relative;
}

.background-white-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.pexels.com/photos/1843717/pexels-photo-1843717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-attachment: fixed;
  filter: brightness(90%);
  z-index: -1;
}

.main-box {
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 70%;
  display: flex;
}

.main-box h1 {
  margin-right: 30%;
}

.column {
  display: flex;
  flex-direction: column;
}

span {
  color: #41b883;
}

.alternative {
  background: #333333;
  color: #fff;
}

.background-vue {
  background-image: url('https://coreui.io/vue/docs/images/vue.jpg');
  background-attachment: fixed;
  filter: brightness(95%);
}

.background-white {
  font-weight: bolder;
}

.home-title {
  font-size: 3rem;
  background: linear-gradient(315deg, #65b792 70%, #6473be);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

img {
  max-width: 100%;
  height: auto;
  width: auto\9; /* ie8 */
}

.idea-main-box {
  position: relative;
  overflow: hidden;
}

.text {
  visibility: hidden;
  transform: translateY(-100%);
  transition: transform 1.5s ease-in-out;
}

.text.animate {
  visibility: visible;
  transform: translateY(0);
  animation: fadeIn 3s;
}

.image {
  visibility: hidden;
  transform: translateX(15%);
  transition: transform 1.5s ease-in;
}

.image.animate {
  visibility: visible;
  transform: translateX(0);
  animation: fadeIn 4s;
}

@media (max-width: 850px) {
  .main-box {
    flex-direction: column;
    max-width: 90%;
  }
  .container {
    padding: 5rem;
  }

  img {
    padding: 2rem;
  }

  .background-vue {
    background-image: url('https://coreui.io/vue/docs/images/vue.jpg');
    background-attachment: fixed;
    filter: brightness(95%);
    background-position: top;
  }
}

@media (min-width: 1900px) {
  .main-box {
    max-width: 100%;
    padding: 0 24%;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
