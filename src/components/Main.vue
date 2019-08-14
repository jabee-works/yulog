<template>
  <main>
    <article>
      <Sidebar />
      <section id="contents">
        <h1>title</h1>
        <div>

          <Photo />
        </div>
      </section>
      <Home />
    </article>
  </main>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Home from './Home.vue'
import Photo from './Photo.vue'
export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {
    Sidebar,
    Home,
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
  text-align: left;
}
#contents {
  width: 1200px;
  margin: 0 auto;
}
h1 {
  font-size: 2em;
  margin: 0;
  padding-top: 1.5em;
}
</style>
