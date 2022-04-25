<template>
  <div id="app">
    <book-header />
    <div class="container">
      <book-list :cards="cards"/>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// import axios from "axios";
import BookHeader from "./components/BookHeader.vue";
import BookList from "./components/BookList.vue";
export default {
  data() {
    return {
      cards: [
        { title: "Vue. Js - Up and Running", totalItems: 410},
        { title: "Vue. Js - Up and Running", totalItems: 410},
        { title: "Vue. Js - Up and Running", totalItems: 410},
        { title: "Vue. Js - Up and Running", totalItems: 410},
      ],
    };
  },
  components: {
    BookHeader,
    BookList,
  },
  // mounted() {
  //   axios
  //     .get(
  //       "https://www.googleapis.com/books/v1/volumes?q=vue&key=AIzaSyBcxAxLFoOpZur2oazoRHPwcUtyU1xjl90"
  //     )
  //     .then((response) => {
  //       this.cards = response.data;
  //     });
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}
:root {
  --first-color: #003049;
  --second-color: #b1efe3;
  --third-color: #f9f3e3;
  --fourth-color: #ffab91;
}
html {
  font-size: 75%;
}

body {
  background: linear-gradient(
    90deg,
    rgba(249, 243, 227, 1) 0%,
    rgba(177, 239, 227, 1) 35%,
    rgba(255, 171, 145, 1) 100%
  );
}

.btn {
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #003049;
  font-weight: bold;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .btn {
    padding: 0.25em 0.75em;
  }
}
</style>
