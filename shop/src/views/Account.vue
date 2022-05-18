<template>
  <div class="user">
    <div class="mask"></div>
    <h2>Hello, User</h2>
    <!-- <Card
      v-for="(vanguard, index) in vanguards"
      :key="index"
      :name="vanguard.name"
      :image="vanguard.img"
      :price="vanguard.price"
      class="card"
    >
      <Button @button-click="addCard(vanguard)">Add</Button>
    </Card> -->
    <router-link to="/create">
      <div class="create">
        <p>Create</p>
      </div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import Card from "../components/Card.vue";
import Button from "../components/Button.vue";

export default {
  name: "Home",
  components: {
    Card,
    Button,
  },
  methods: {
    addCard(vanguard) {
      this.$store.commit("add", vanguard);
      vanguard.name, vanguard.img, vanguard.price;
    },
  },
  computed: {},

  data() {
    return {
      vanguards: [
        {
          name: "",
          img: "https://cdn.britannica.com/71/73371-050-9DFAEC1E/Reykjavik-Iceland.jpg",
          price: "",
        },
        {
          name: "",
          img: "https://www.icelandairhotels.com/static/news/lg/midbaer-1__1486546974_185.56.12.2.jpg",
          price: "",
        },
        {
          name: "",
          img: "https://adventures.com/media/10846/s-iceland-town-summer-vik-i-myrdal.jpg",
          price: "",
        },
        {
          name: "",
          img: "https://old.myvisiticeland.is/reykjanes/wp-content/uploads/2016/08/reykjanesbaer-front-2-1.jpg",
          price: "",
        },
        {
          name: "",
          img: "https://guidetoiceland.imgix.net/566430/x/0/selfoss-waterfall.jpg",
          price: "",
        },
        {
          name: "",
          img: "https://adventures.com/media/208417/s-hafnarfjordur-town-seaside-view-buildings-houses-iceland-reykjavikjpg.jpg",
          price: "",
        },
        {
          name: "",
          img: "https://i.ytimg.com/vi/h-zsQChbVDA/maxresdefault.jpg",
          price: "",
        },
        {
          name: "",
          img: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/7ad92724232b2f2083f48175acb6a376deafe31f/big-32d5d9b36c847982ca39e22677429c01.jpg",
          price: "",
        },
        {
          name: "",
          img: "https://content.r9cdn.net/rimg/dimg/8e/f0/66aa3c21-city-7321-172d081a461.jpg?width=1200&height=630&crop=true",
          price: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.user {
  height: 100vh;
  background: url(https://images.unsplash.com/photo-1528837516156-0a7225a43641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

.mask {
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

h2 {
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  z-index: 2;
}

.create {
  position:fixed;
  background-color:blue;
  bottom: 5rem;
  right: 5rem;
  height:4rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;

}

p {
  font-size: 2rem; 
  color: #fff;
  text-decoration: none;
}
</style>
