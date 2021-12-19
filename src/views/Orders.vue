<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="border" v-for="order in orders" :key="order.id">
    <h1>OMA TILISI</h1>
      <router-link :to="{ name: 'OrderDetails', params: { id: order.id } }">
        <h2>{{ order.title }}</h2>
      </router-link>

      <h2>{{ order.description }}</h2>
      <div v-for="todo in allTodos" :key="todo.id">
        <Email :todo="todo" />
      </div>
      <router-link :to="{ name: 'OrderDetails', params: { id: order.id } }">
        <button>
        <h3>Muokkaa tietojasi</h3>
        </button>
      </router-link>

    </div>
    <br>
    <h1>Viimeisimmät tilaukset</h1>
    <div class="row">

    <div class="border" v-for="order in orders" :key="order.id">
      <h2>{{ order.date }}</h2>
      <router-link :to="{ name: 'OrderDetails', params: { id: order.id } }">
        <div class="status">
        <p>{{ order.status }}</p>
        <img alt="Vue logo" src="../assets/seoul.jpg" />
        </div>
        <button>Kaikki tilaukset</button>
      </router-link>
      </div>
    <div class="border" v-for="order in orders" :key="order.id">
      <h2>{{ order.date }}</h2>
        <div class="status2">
        <p>{{ order.status2 }}</p>
        <img alt="Vue logo" src="../assets/logo.png" />
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
      <h1>Markkinointiluvat</h1>
  </div>

</template>

<script>
import Email from "../components/email.vue";
import { mapGetters } from "vuex";

export default {
  components: { Email },
  computed: {
    ...mapGetters(["allTodos"]),
  },
  data() {
    return {
      orders: [
        {
          id: 1,
          title: "Asiakastiedot",
          description: "Tilattu tuote:",
          date: new Date().toLocaleDateString("fi-FI"),
          status: "Vastaanotettu",
          status2: "Käsittelyssä",
        }
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 7rem;
  height: 7rem;
  position: relative;
  left: 4rem;
}

button {
  background: white;
  color: #0d9759;
  font-size: 1.2em;
  padding: 10px 20px;
  border: solid 1px #0d9759;
  border-radius: 3px;
  cursor: pointer;
}

.status {
  background-color: #42b983;
  width: 1vw;
  height: 1vw;
  border-radius: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 6vw;
  margin-bottom: 1rem;
}

.status2 {
  background-color: orange;
  width: 1vw;
  height: 1vw;
  border-radius: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 6vw;
  margin-bottom: 1rem;
}

a {
  color: #42b983;
  text-decoration: none;
  padding: 1rem;
  margin: 1rem;
  margin-right: 1rem;
}

.border {
  border: 1px solid #e0e2e2;
  padding: 10px;
  margin: 10px;
  width: 30vw;
}
</style>
