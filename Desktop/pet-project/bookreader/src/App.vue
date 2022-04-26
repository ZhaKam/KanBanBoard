<template>
  <div id="app">
    <div class="header">
      <div class="row1">
        <h1 class="logo">Vue Book Catalog</h1>
      </div>
      <div class="row2">
        <input type="text" v-model="searchQuery" />
      </div>
      <div class="row3">
        <book-button class="btn">Search</book-button>
      </div>
    </div>
    <div class="footer">
      <book-list :cards="cards" v-if="!isCardsLoading" />
      <div v-else style="margin-left: 20px; font-size: 25px">Loading...</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BookList from "./components/BookList.vue";
import BookButton from './UI/BookButton.vue';
export default {
  data() {
    return {
      cards: [],
      isCardsLoading: false,
    };
  },
  components: {
    BookList,
    BookButton,
  },
  methods: {
    async fetchBooks() {
      try {
        this.isCardsLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://www.googleapis.com/books/v1/volumes?q=vue&key=AIzaSyBcxAxLFoOpZur2oazoRHPwcUtyU1xjl90"
          );
          console.log(response);
          this.cards = response.data.items;
          this.isCardsLoading = false;
        }, 1000);
      } catch (e) {
        alert("Error");
      }
    },
  },
  mounted() {
    this.fetchBooks();
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

</style>
