<template>
  <section>
    <h1>Blog</h1>
    <div class="blog">
      <div class="blogData" v-for="(data, index) in blogData">
        <h2>{{data.title}}</h2>
        <div>{{data.date}}</div>
        <div v-html="data.content"></div>
      </div>
    </div>
    <div class="pagearea">
      <a v-for="page in pages">
        {{page}}
      </a>
    </div>
  </section>
</template>

<script>
import firebase, { functions } from 'firebase'

export default {
  name: 'Blog',
  data: function() {
    return {
      db: firebase.firestore(),
      blogData: [],
      pageMax: 5,
      pages: []
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
    const docRef = this.db.collection("fl_content");
    let blogData = this.blogData;
    const pageMax = this.pageMax;
    let pages = this.pages;
    
    docRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());

            if(doc.data()._fl_meta_.schema !== "blog") {
              return true;
            }

            const postData = doc.data();

            // 日付処理
            const getDate = new Date(postData.date);
            const date = `${getDate.getFullYear()}年${getDate.getMonth() + 1}月${getDate.getDate()}日`;

            const setData = {
              title: postData.title,
              defDate: getDate,
              date: date,
              content: postData.content
            }
            blogData.push(setData);
        });

        // ブラグデータのソート
        blogData.sort(function(a, b) {
          return b.defDate - a.defDate;
        });
    }).then(function() {
      // ページ数取得
      const getPage = Math.floor(((blogData.length - 1) / pageMax)) + 1;

      for(let i = 1; i <= getPage; i++) {
        pages.push(i);
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  font-family: "游明朝", YuMincho, "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}
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

.blog .blogData {
  background: white;
  color: #574b75;
  padding: 0 20px 20px;
  margin: 20px;
  border: 1px solid;
}

.pagearea {
  text-align: center;
}

.pagearea a {
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  background: #9785c5;
}
</style>
