<template>
  <section>
    <ul>
      <li><span>Home</span></li>
      <li><span>Profile</span></li>
      <li><span>Gallery</span></li>
      <li><span>Art</span></li>
      <li><span>Contact</span></li>
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
}
ul li span:hover {
  background: #2b79b9;
  transition: .5s;
}
.clear {
  clear: both;
}
</style>
