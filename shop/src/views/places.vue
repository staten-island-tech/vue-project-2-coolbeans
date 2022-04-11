<template>
  <div class="home">
    <Card
      v-for="(vanguard, index) in vanguards"
      :key="index"
      :name="vanguard.name"
      :image="vanguard.img"
      :price="vanguard.price"
      class="card"
    >
      <Button @button-click="addCard(vanguard)">Add</Button>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/card.vue";
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
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1.25rem;
}

.card {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
