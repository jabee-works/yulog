<template>
  <section>
    <h1>Blog</h1>

  </section>
</template>

<script>
import markdown from "@/assets/markdown.md";
export default {
  name: 'Blog',
  props: {
    msg: String
  },
  mounted() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 2em;
  margin: 0;
  padding-top: 1.5em;
}
</style>
