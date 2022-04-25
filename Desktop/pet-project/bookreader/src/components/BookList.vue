<template>
  <div class="card" v-for="card in cards" :key="card.id">
    <div class="bottom">
      <h3 class="title"> {{ card.volumeInfo.title }}</h3>
      <p class="title"> <strong>Author:</strong> {{card.volumeInfo.authors}}</p>
      <p class="title"> <strong>Description: </strong>{{card.volumeInfo.description}}</p>
      <p class="title"> <strong>Language: </strong>{{card.volumeInfo.language}}</p>
      <p class="title"> <strong>Publisher: </strong>{{card.volumeInfo.publisher}}</p>
      <p class="title"> <strong>Published Date: </strong>{{card.volumeInfo.publishedDate}}</p>
      <p class="amount"><strong>PageCount: </strong>{{card.volumeInfo.pageCount}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background-color: var(--second-color);
  border-radius: 1rem;
  width: 70%;
  padding: 0.5rem;
  margin-bottom: 10px;
  box-shadow: 0 5px 5px rgba(212, 185, 150, 0.5);
  transition: 0.5s;
  text-align: left;
  border: 2px solid #003049;
  margin-left: 40px;
}
.card img {
  height: 150px;
  border-radius: 1rem 1rem 0 0;
}
.card .bottom {
  display: flex;
  flex-direction: column;
}
.card .bottom .title {
  font-size: 14px;
  margin-bottom: 12px;
  color: var(--first-color);
}
.card .bottom .amount {
  left: 10px;
  right: 10px;
  background-color: var(--fourth-color);
  font-size: 13px;
  font-weight: bold;
}
</style>
