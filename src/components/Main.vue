<template>
  <main>
    <article>
      <Sidebar @changetab="changetab" />
      <section id="contents">
        <Home v-if="activeName === 'Home'" />
        <Profile v-if="activeName === 'Profile'" />
        <Photo v-if="activeName === 'Photo'" />
        <Art v-if="activeName === 'Art'" />
        <Contact v-if="activeName === 'Contact'" />
      </section>

    </article>
  </main>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Home from './Home.vue'
import Profile from './Profile.vue'
import Photo from './Photo.vue'
import Art from './Art.vue'
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
    Art,
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
#contents {
  width: 1200px;
  margin: 0 auto;
}

</style>
