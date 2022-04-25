<template>
  <div id="app">
    <div class="header">
      <div class="row1">
        <h1 class="logo">Vue Book Catalog</h1>
      </div>
      <div class="row2">
        <input type="text" name="" id="" />
      </div>
      <div class="row3">
         <button class="btn">Search</button>
      </div>
    </div>
    <div class="container">
      <button @click="fetchBooks" class="btn">fetch</button>
    </div>

    <div class="footer">
      <book-list :cards="cards" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BookList from "./components/BookList.vue";
export default {
  data() {
    return {
      cards: [],
    };
  },
  components: {
    BookList,
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=vue&key=AIzaSyBcxAxLFoOpZur2oazoRHPwcUtyU1xjl90"
        );
        console.log(response);
        this.cards = response.data.items;
      } catch (e) {
        alert("Error");
      }
    },
  },
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
.header {
  width: 100%;
  height: 500px;
  align-items: center;
  position: relative;
}

.logo {
  font-size: 10vmin;
  line-height: 1.1;
  color: var(--first-color);
  text-shadow: 1px 1px 1px #ffab91, 2px 2px 1px #ffab91;
}

.container {
  margin-left: 25px;
  margin-bottom: 20px;
}
.row1 {
  position: absolute;
  top: 30%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.row2 {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.row2 input {
  width: 500px;
  height: 30px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #003049;
}
.row3 {
  position: absolute;
  top: 50%;
  left: 73%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
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
  margin-left: 10px;
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
