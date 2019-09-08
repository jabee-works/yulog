<template>
  <section>
    <h1>Profile</h1>
    <div class="photo">
      <img src="../assets/profile.jpg" alt="profile">
    </div>
    <div class="profile">
      <dl>
        <dt><span>N</span>ame</dt><dd>映</dd>
      </dl>
      <dl>
        <dt><span>B</span>irth</dt><dd>1985年生まれ</dd>
      </dl>
      <dl>
        <dt><span>F</span>rom</dt><dd>長崎県出身</dd>
      </dl>
      <dl>
        <dt><span>F</span>avorite</dt><dd>写真、お絵描き、ゲーム、音楽、映画鑑賞、etc...</dd>
      </dl>
      <dl>
        <dt><span>P</span>rograming</dt><dd>VBA, C++, PHP, Javascript, Objective-C...</dd>
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
section {
  font-family: "游明朝", YuMincho, "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}
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
  border-bottom: 1px solid;
}
dt {
  float: left;
  width: 35%;
}
dt span {
  font-weight: bold;
  color: aqua;
}
dd {
  margin-left: 35%;
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
