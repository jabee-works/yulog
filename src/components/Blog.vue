<template>
  <article>
    <section>
      <h1>Blog</h1>
      <div id="blog"></div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Blog',
  props: {
    msg: String
  }
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
