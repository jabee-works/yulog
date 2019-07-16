<template>
  <main class="hello">
    Main
  </main>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  background-color: bisque;
}
</style>
