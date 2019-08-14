<template>
  <main>
    <article>
      <Sidebar />
      <section>
        <h1>title</h1>
        <div>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          <Photo />
        </div>
      </section>
    </article>
  </main>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Photo from './Photo.vue'
export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {
    Sidebar,
    Photo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  background-color:#574b75;
  /* padding: 20px; */
  color: white;
}
h1 {
  font-size: 2em;
  margin: 0;
  padding-top: 1.5em;
}
</style>
