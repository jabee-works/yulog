<template>
  <section>
    <ul>
      <li v-on:click="change('Home')"><span>Home</span></li>
      <li v-on:click="change('Profile')"><span>Profile</span></li>
      <li v-on:click="change('Photo')"><span>Photo</span></li>
      <li v-on:click="change('Art')"><span>Art</span></li>
      <li v-on:click="change('Contact')"><span>Contact</span></li>
    </ul>
    <div class="clear"></div>
  </section>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  },
  data: function() {
    return {
      scrollY: 0,
      fixedHeight: 135,
      isActive: "Home"
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
        this.scrollY = window.scrollY;
        
        document.getElementsByTagName("ul")[0].classList.remove("fixed");
        if(this.scrollY > this.fixedHeight) {
          document.getElementsByTagName("ul")[0].classList.add("fixed");
        }
    },
    change(tab) {
      this.isActive = tab;
      this.$emit('changetab', this.isActive);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0;
  margin: 0;
  /* position: fixed;
  top: 135px;
  left: 0;
  opacity: 0.5; */
}
ul.fixed {
  position: fixed;
  top: 0;
  left: 0;
}
ul li {
  list-style-type: none;
  display: inline-grid;
  width: 20vw;
  text-align: center;
}
ul li span {
  background: #183b58;
  color: #fff;
  padding: 5px;
  border: 1px solid rgb(10, 10, 41);
  cursor: pointer;
  transition: .5s;
}
ul li span:hover {
  background: #2b79b9;
  transition: .5s;
}
.clear {
  clear: both;
}
</style>
