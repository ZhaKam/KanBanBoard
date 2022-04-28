<template>
  <div id="app">
    <div class="header">
      <div class="row1">
        <h1 class="logo">Vue Book Catalog</h1>
      </div>
      <div class="row2">
        <book-select
          v-model="selectedSort"
          :options="sortOptions"
          class="app_select"
        />

        <input type="text" />
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
import BookButton from "./UI/BookButton.vue";
import BookSelect from "./UI/BookSelect.vue";
export default {
  data() {
    return {
      cards: [],
      isCardsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "by name" },
        { value: "authors", name: "by author" },
        { value: "description", name: "according to the description" },
        { value: "language", name: "by language" },
        { value: "publisher", name: "by publisher" },
        { value: "publishedDate", name: "by published Date" },
        { value: "PageCount", name: "by page Count" },
      ],
    };
  },
  components: {
    BookList,
    BookButton,
    BookSelect,
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
  width: 600px;
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

.app_select {
  position: absolute;
  margin-left: -50%;
  display:block;
  padding: 0.75rem 1rem;
  background: none;
  border: 1px solid var(--first-color);
  -webkit-appearance: none;
  appearance: none;
  font-family: inherit;
  font-size: 1.5rem;
  color: var(--first-color);
}
</style>
