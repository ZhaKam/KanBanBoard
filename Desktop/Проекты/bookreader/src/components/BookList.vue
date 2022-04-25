<template>
  <div class="card" v-for="card in cards" :key="card.id">
    <img src="src/assets/book.jpg" />
    <div class="bottom">
      <h3 class="title">{{ card.title }}</h3>
      <p class="amount">&#8377; {{ card.totalItems }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background-color: var(--second-color);
  border-radius: 1rem;
  width: 10%;
  padding: 0.5rem;
  margin-bottom: 10px;
  box-shadow: 0 5px 5px rgba(212, 185, 150, 0.5);
  transition: 0.5s;
  text-align: center;
  display: inline-block;
  margin-right: 10px;
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
