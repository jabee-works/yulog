<template>
  <article>
    <section>
      <h1>Photo</h1>
    </section>
    <section>
      <ul>
        <li>aaa</li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Photo',
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
ul {
  margin: 0;
}
</style>
