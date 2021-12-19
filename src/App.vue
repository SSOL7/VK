<template>
  <div class="bg-img">
    <span class="emblem">Veke</span>
    <div id="nav">
      <router-link to="/">Etusivu</router-link> |
      <router-link :to="{ name: 'Orders' }">Yhteenveto</router-link>
      <router-link :to="{ name: 'OrderHistory' }">Tilaukseni</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
.emblem {
  position: relative;
  left: 40vw;
  background-color: red;
  color: white;
  text-align: center;
  font-size: 3rem;
  margin-top: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-bottom: 10rem;
}

.bg-img {
  background-image: url("seoul.jpg");
  background-repeat: no-repeat;
  background-position: right;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-left: 80vw;
  margin-top: 22vh;
}

#nav a {
  font-weight: bold;
  color: #f2f6fa;
  margin-bottom: 2rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
}

#nav a.router-link-exact-active {
  color: black;
  background-color: rgb(226, 223, 223);
}
</style>
