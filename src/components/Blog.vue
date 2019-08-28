<template>
  <section>
    <h1>Blog</h1>
    <div id="blog">
      <div class="blogData" v-for="(data, index) in blogData">
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
  created() {
    
  },
  mounted() {
    // firebaseからblogデータ取得
    const ref = this.db.ref("flamelink/environments/production/content/newSchema/en-US");
    let blogData = this.blogData;

    ref.once("value")
    .then(function(snapshot) {
      const postData = snapshot.val();
      Object.keys(postData).forEach(id => {
        // 日付処理
        const getDate = new Date(postData[id].date);
        const date = `${getDate.getFullYear()}年${getDate.getMonth() + 1}月${getDate.getDate()}日`;

        const setData = {
          title: postData[id].title,
          date: date,
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
.loader {
  position: absolute;
  top: 0;
  left: -32px;
  right: 0;
  bottom: 0;
  margin: auto;
}

h1 {
  font-size: 2em;
  margin: 0;
  padding-top: 1.5em;
}

#blog .blogData {
  background: white;
  color: #574b75;
  padding: 0 20px 20px;
  margin: 20px;
  border: 1px solid;
}
</style>
