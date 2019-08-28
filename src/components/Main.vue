<template>
  <main>
    <article>
      <Menu @changetab="changetab" />
      <section id="contents">
        <Home v-if="activeName === 'Home'" />
        <Profile v-if="activeName === 'Profile'" />
        <Gallery v-if="activeName === 'Gallery'" />
        <Blog v-if="activeName === 'Blog'" />
        <Contact v-if="activeName === 'Contact'" />
      </section>

    </article>
  </main>
</template>

<script>
import Menu from './Menu.vue'
import Home from './Home.vue'
import Profile from './Profile.vue'
import Gallery from './Gallery.vue'
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
    Menu,
    Home,
    Profile,
    Gallery,
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
  padding: 0 0 20px 0;
  color: white;
  text-align: left;
  min-height: 400px;
}
#contents {
  width: 1200px;
  margin: 0 auto;
}

</style>
