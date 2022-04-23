<template>
  <div class="splash">
    <div class="scroll"></div>
    <div class="container">
      <svg viewBox="0 0 1200 800">
        <mask id="m">
          <g class="cloud1">
            <rect fill="#fff" width="100%" height="801" y="799" />
            <image href="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
          </g>
        </mask>
        
        <image class="bg" href="https://images.unsplash.com/41/LGhxuAbT5Wop4JYcrMpV_IMG_3808.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"  width="1200" height="800"/>
        <image class="cloud2" href="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800"/>    
        <image class="cloud1" href="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800"/>
        <image class="cloud3" href="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800"/>
        
        <text class="explore" fill="#151515" x="350" y="220">Explore</text>
        <text class="go" fill="#151515" x="450" y="300"><RouterLink to="/home">Let's Go</RouterLink></text>
        <!-- <image class="arrow-down" href="/arrow-down.svg" width="60" height="60" x="565" y="230" opacity="0.5"/> -->
        
        <!-- <g mask="url(#m)">
          <rect fill="#fff" width="100%" height="100%" />      
          <text class="iceland" x="360" y="220" fill="#151515">ICELAND</text>
          <g class="go">
            <text x="450" y="320" opacity="0.9" fill="#234090"><RouterLink to="/home">LET'S GO</RouterLink></text>
            <image class="arrow-right" href="/arrow-right.svg" width="50" height="50" x="720" y="275" opacity="0"/>
          </g>
        </g> -->
        
        <rect class="down-btn" width="60" height="60" opacity="0" x="565" y="230"/>
      </svg>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import scrollTo from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(scrollTo, ScrollTrigger);

console.log(ScrollTrigger)

export default {
  methods: {
    scrollAnimation () {
      console.log('hello')
    //   gsap.timeline({
    //     ScrollTrigger: {
    //       trigger: ".container",
    //       start: "top top",
    //       end: "bottom bottom",
    //       scrub: 1,
    //     },
    //   })
    //   .fromTo(".bg", { y: 0 }, { y: -250 }, 0)
    //   .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
    //   .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
    //   .fromTo(".cloud3", { y: -50 }, { y: -575 }, 0)
    //   .to(".explore", { opacity: 0.3 }, 0)
    //   .to(".arrow-down", { opacity: 0 }, 0)
    //   .from(".iceland", { opacity: 0.3 }, 0)
    //   .from(".go", { y: -20, opacity: 0 }, "-=.35");
    }
  },

  mounted() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    gsap.timeline({ defaults: { duration: 1 } })
    .from(".explore", { y: -50, opacity: 0, ease: "power2.out" }, 0)
    .from(
        ".go",
        {
          y: -25,
          opacity: 0,
          ease: "power1.out",
        },
        "-=.4"
      );

    this.scrollAnimation()
  } 
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #151515;
  text-align: center;
}

.scroll {
  width: 100%;
  height: 100vh;
}

.container {
  position: fixed;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  top: 0;
}

.explore {
  font-size: 100px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase
}

.go {
    font-size: 60px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
}

a {
  font-size: 60px;
  font-family: "Montserrat", sans-serif;
}

.down-btn {
  cursor: pointer;
  transition: all 0.7s;
}

.down-btn:hover ~ .arrow-down {
  transform: translateX(-10);
}

/* .go {
  cursor: pointer;
} */
</style>
