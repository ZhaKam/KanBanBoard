<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Dc heros {{ herosCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="hero.name"
      >
        <div>
          {{ hero.name }}
        </div>
        <button @click="removeHero(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded"
        v-model="newHero"
        placeholder="Type Hero Name Here"
      />
      <button
        class="border rounded bg-gradient-to-t from-slate-500 to-fuchsia-300 text-white"
        type="submit"
      >
        Add hero
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: true,
      newHero: "",
      dcHeros: [
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "Arrow" },
        { name: "SuperMan" },
      ],
    };
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeros.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    removeHero(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i !== index);
    },
  },
  computed: {
    herosCount() {
      return this.dcHeros.length;
    },
  },
};
</script>

