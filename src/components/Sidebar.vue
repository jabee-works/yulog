<template>
  <section>
    <ul>
      <li><span>menu1</span></li>
      <li><span>menu2</span></li>
      <li><span>menu3</span></li>
      <li><span>menu4</span></li>
      <li><span>menu5</span></li>
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
  border: 1px solid;
}
.clear {
  clear: both;
}
</style>
