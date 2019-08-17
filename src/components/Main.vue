<template>
  <main>
    <article id="menu">
      <Sidebar @changetab="changetab" />
    </article>
    <Home v-if="activeName === 'Home'" />
    <Profile v-if="activeName === 'Profile'" />
    <Photo v-if="activeName === 'Photo'" />
    <Blog v-if="activeName === 'Blog'" />
    <Contact v-if="activeName === 'Contact'" />
  </main>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Home from './Home.vue'
import Profile from './Profile.vue'
import Photo from './Photo.vue'
import Blog from './Blog.vue'
import Contact from './Contact.vue'
export default {
  name: 'Main',
  props: {
    msg: String
  },
  data: function() {
    return {
      activeName: "Home"
    }
  },
  components: {
    Sidebar,
    Home,
    Profile,
    Photo,
    Blog,
    Contact
  },
  methods: {
    changetab: function(name) {
      this.activeName = name;
    }
  },
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
main >>> article:not(#menu) {
  width: 1200px;
  margin: 0 auto;
}

</style>
