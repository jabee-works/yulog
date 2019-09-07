<template>
  <section>
    <h1>Profile</h1>
    <div class="photo">
      <img src="../assets/profile.jpg" alt="profile">
    </div>
    <div class="profile">
      <dl class="introduce">
        <dt><span>N</span>ame</dt><dd>映</dd>
        <dt><span>B</span>irth</dt><dd>1985年生まれ</dd>
        <dt><span>F</span>rom</dt><dd>長崎県出身</dd>
        <dt><span>F</span>avorite</dt><dd>写真、お絵描き、ゲーム、音楽、映画鑑賞、etc...</dd>
      </dl>
      <div class="twitter">
        <a href="https://twitter.com/jabee0419" target="_blank"><img src="../assets/twitter.png" alt="twitter"></a>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: 'Profile',
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
.profile,
.photo {
  display: table-cell;
  vertical-align: top;
}
.photo {
  padding-right: 5vw;
}
dl {
  font-size: 1.5em;
}
dt {
  float: left;
  width: 15%;
}
dt span {
  font-weight: bold;
  color: aqua;
}
dd {
  margin-left: 20%;
}
.twitter img {
  width: 30px;
}
@media (max-width:768px) {
.photo {
  display: block;
}
.photo img {
  width: 100%;
}
.profile {
  font-size: 70%;
}
}
</style>
