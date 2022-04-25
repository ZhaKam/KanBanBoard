<template>
    <div class="header">
      <div class="row1">
        <h1 class="logo">Vue Book Catalog</h1>
      </div>
      <div class="row2">
        <input type="text" name="" id="" />
      </div>
      <div class="row3">
        <button @click="fetchBooks" class="btn">Search</button>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
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
  margin-left: 20px;
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