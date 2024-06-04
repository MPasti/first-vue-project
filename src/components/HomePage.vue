<script setup lang="ts"></script>

<template>
  <main>
    <div class="container background-vue alternative">
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
      <div class="main-box">
        <div class="column">
          <h1>Teste</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis doloribus ea
            earum eveniet minus nihil nostrum sequi tempora velit. Deleniti deserunt doloribus eos
            obcaecati tempore? Deserunt nostrum pariatur sequi!
          </p>
          <br />
          <div>
            <p>
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
}

.main-box {
  justify-content: center;
  align-items: center;
  width: 40%;
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

.home-title {
  background: linear-gradient(315deg, #42d392 80%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
