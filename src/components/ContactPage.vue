<script setup lang="ts">
</script>

<template>
  <h1>Contact</h1>
  <div class="box">
    <img alt="call us" src="https://img.freepik.com/free-photo/beautiful-asian-woman-uses-smartphone-app-sends-messages-social-media-chat-points-away-copy-space-wears-casual-jumper_273609-48643.jpg?t=st=1718720646~exp=1718724246~hmac=2e8685317e40312103d299f09a9e0a2575475ca4dc81b07ed4f9f7e1175b976c&w=1380">
<!--    https://www.freepik.com/free-photo/pleasant-looking-natural-brunette-girl-holds-smartphone-near-ear-enjoys-nice-phone-talk-looks-aside-wears-casual-t-shirt-discusses-something-interesting-with-friend-isolated-pink-wall_13187278.htm#fromView=search&page=1&position=4&uuid=0e47bf57-064a-48b4-a27a-1109fdea97f3-->
    <v-icon name="bi-chat-dots-fill" class="icon" scale="2" />
    <h2> Nos envie uma mensagem! </h2>
  </div>
  <div class="contact-form">
    <h2>Entre em contato!</h2>
    <form>

    </form>
  </div>
</template>

<style lang="scss" scoped>
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #41b883;
  width: 600px;
  margin: 0 auto;
}
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 1em;
  background: #f9f9f9;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 1em;

  label {
    display: block;
    margin-bottom: 0.5em;
  }
}

.form-group {
  input, textarea {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
  }
}

button {
  padding: 0.7em 1.5em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: #0056b3;
  }
}

img{
  width: 100%;
  max-height: 300px;
  object-fit: scale-down;
}
</style>
