<template>
  <section>
    <h1>Blog</h1>
    <div v-html="markdown"></div>
  </section>
</template>

<script>
import markdown from "../assets/_posts/2019-08-22-json.md";

export default {
  name: 'Blog',
  props: {
    msg: String
  },
  computed: {
    markdown() {
      return markdown;
    }
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
