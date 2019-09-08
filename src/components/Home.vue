<template>
  <section>
    <h1>楽しくない人生など無価値である。</h1>
    <div>
      <img src="../assets/top.jpg" alt="top">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
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
img {
  width: 100%;
}
</style>
