<template>
  <div id="app">
    <sort>
      <sort-item
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="item">{{ item }}</div>
      </sort-item>
    </sort>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        1,
        2,
        3,
        4
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  min-height: 100vh;
  padding: 16px;
  background: #666;
}
.item {
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 12px;
  background: #fff;
}
</style>
