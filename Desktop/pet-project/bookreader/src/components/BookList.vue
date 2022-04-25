<template>
  <div v-if="cards.length > 0">
    <book-item v-for="card in cards" :key="card.id" :card="card" />
  </div>
  <h2 v-else style="margin-left: 20px; font-size:25px;">The list of books is empty!</h2>
</template>

<script>
import BookItem from "@/components/BookItem.vue";
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  components: {
    BookItem,
  },
};
</script>

<style scoped>

</style>
