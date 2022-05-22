<template>
  <div class="user">
    <h2>Hello, User</h2>
    <h4>Your Posts</h4>
    <div class="grid">
      <Card/>
      <Card/>
    </div>
    <router-link to="/create">
      <div class="create">
        <p>Create</p>
      </div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/Card.vue";
// import Button from "../components/Button.vue";

export default {
  name: "Home",
  components: {
    Card,
    // Button,
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

.user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  
  /* @supports(display: grid) {
    display: block;
  } */
}

/* .section {
  display: block;
  padding: 2rem;
  
  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
  
  @supports(display: grid) {
    display: block;
  }
} */

.grid {
  width: 100%;
  display: grid;
  grid-gap: 1.5rem;
  /* grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
}

h2 {
  color: #151515;
  padding-bottom: 3rem;
  /* letter-spacing: 0.1rem; */
}
h4 {
  color:#151515;
  padding-bottom: 1rem;
}

.create {
  position: fixed;
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
