<template>
  <section>
    <h1>Blog</h1>
    <div id="blog">
      <div v-for="(data, index) in blogData">
        <h2>{{data.title}}</h2>
        <div>{{data.date}}</div>
        <div v-html="data.content"></div>
      </div>
    </div>
  </section>
</template>

<script>
// import markdown from "../assets/_posts/2019-08-22-json.md";
import firebase from 'firebase'

export default {
  name: 'Blog',
  data: function() {
    return {
      db: firebase.database(),
      blogData: []
    }
  },
  props: {
    msg: String
  },
  computed: {
    // markdown() {
    //   return markdown;
    // }
  },
  mounted() {
    // firebaseからblogデータ取得
    const ref = this.db.ref("flamelink/environments/production/content/newSchema/en-US");
    let blogData = this.blogData;

    ref.once("value")
    .then(function(snapshot) {
      const postData = snapshot.val();
      Object.keys(postData).forEach(id => {
        const setData = {
          title: postData[id].title,
          date: postData[id].date,
          content: postData[id].content
        }
        blogData.push(setData);
      });
    });
    
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
</style>
