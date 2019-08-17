<template>
  <article>
    <section>
      <h1>Home</h1>
    </section>
    <section class="contents">
      HomeHomeHome
    </section>
  </article>
</template>

<script>
export default {
  name: 'Home',
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
section.contents {
  height: 200px;
}
</style>
