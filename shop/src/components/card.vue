<template>
    <!-- <img :src="image" alt="" class="item-img" />
    <div class="container">
      <h3 class="location">{{ name }}</h3>
      <p class="description">{{ description }}</p>
      <h5 class="author">{{ author }}</h5>
    </div> -->
  <div class="card">
    <img src="https://images.unsplash.com/photo-1652785179637-2cf785eaa652?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587" alt="" class="image"/>
    <div class="m">
      <div class="location">
        <img src="../components/icons/location.svg" alt="pin">
        <h5 class="name">Tokyo, Japan</h5>
      </div>
      <h5 class="author">Jason Chen</h5>
      <div class="fav">
        <img class="love" src="../components/icons/love-w.svg" alt="favorite">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    price: Number,
  },
  components: {
    },
};
</script>

<style scoped>
.card {
  width: auto;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  color: #fff;
  grid-column-start: auto;
  grid-row-start: auto;
  transition: box-shadow 0.3s ease-in-out;
  cursor: zoom-in;
}
.image {
  width: auto;
  height: auto;
  object-fit: cover;
  z-index: 1;
}
.m {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 2;
  display: none;
  transition: 0.3s;
}

.location{
  position:absolute;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* position: relative; */
  top: 1rem;
  left: 1rem;
}
.name {
  padding-left: 0.3rem;
  color: #fff;
}
.author {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: #fff;
}

.fav {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.card:hover .m {
  /* opacity: 1; */
  display: block;
}
/* .item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background: #0c9a9a;
  color: #fff;
  grid-column-start: auto;
  grid-row-start: auto;
  color: #fff;
  background:  url('https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=');
  background-size: cover;
  background-position: center;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}
  
.item:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out;
  }
  
.item:hover {
    transform: scale(1.05);
  }
.item:hover:after {
  opacity:0;
}
.item--medium {
    grid-row-end: span 2;
  }
.item--large {
    grid-row-end: span 3;
  }
  
.item__details {
    position: relative;
    z-index: 1;
    padding: 15px;
    color: #444;
    background: #fff;
    text-transform: lowercase;
    letter-spacing: 1px;
    color: #828282;
  }
 .item__details:before {
      font-weight: bold;
      font-size: 1.1rem;
      padding-right: 0.5em;
      color: #444;
    } */
</style>
