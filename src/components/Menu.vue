<template>
  <section>
    <ul id="menu">
      <li v-on:click="change('Home', 0)" v-bind:class="[ activetab === 0 ? 'active' : '' ]"><span>Home</span></li>
      <li v-on:click="change('Profile', 1)" v-bind:class="[ activetab === 1 ? 'active' : '' ]"><span>Profile</span></li>
      <li v-on:click="change('Gallery', 2)" v-bind:class="[ activetab === 2 ? 'active' : '' ]"><span>Gallery</span></li>
      <li v-on:click="change('Blog', 3)" v-bind:class="[ activetab === 3 ? 'active' : '' ]"><span>Blog</span></li>
      <!-- <li v-on:click="change('Contact')"><span>Contact</span></li> -->
    </ul>
    <div class="clear"></div>
  </section>
</template>

<script>
export default {
  name: 'SidMenuebar',
  props: {
    msg: String
  },
  data: function() {
    return {
      scrollY: 0,
      fixedHeight: 135,
      tabName: "Home",
      activetab: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
        this.scrollY = window.scrollY;
        
        document.getElementById("menu").classList.remove("fixed");
        if(this.scrollY > this.fixedHeight) {
          document.getElementById("menu").classList.add("fixed");
        }
    },
    change(tab, activetab) {
      this.tabName = tab;
      this.activetab = activetab;
      this.$emit('changetab', this.tabName);
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
  width: 25vw;
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
ul li.active span {
  background: #2b79b9;
}
ul li span:hover {
  background: #2b79b9;
  transition: .5s;
}
.clear {
  clear: both;
}
</style>
