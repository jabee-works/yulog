<template>
  <section>
    <h1>Gallery</h1>

  </section>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Gallery',
  data: function() {
    return {
      fb: firebase,
      db: firebase.database(),
      gallerydata: []
    }
  },
  props: {
    msg: String
  },
  mounted() {
    // firebaseからblogデータ取得
    const ref = this.db.ref("flamelink/environments/production/content/photo/en-US");
    const mediaref = this.db.ref("flamelink/media/files");
    let gallerydata = this.gallerydata;
    let getPostData = [];

    let imgref = this.fb.storage().ref().child("flamelink/media/files/1566959894878/file/1566959894878_IMG_0682.jpg");
    console.log(imgref);
    imgref.getDownloadURL().then(function(url) {
      console.log(url);
    }).catch(function(error) {
      // Handle any errors
    });

    // 投稿データからデータ生成
    ref.once("value")
    .then(function(snapshot) {
      const postData = snapshot.val();
      Object.keys(postData).forEach(id => {
        let getData = {};
        getData.title = postData[id].title;
        getData.imgData = [];
        Object.keys(postData[id]).forEach(imgfile => {
          // img関係のデータ抜き取り
          if(imgfile.indexOf("field_") != -1) {
            getData.imgData.push(postData[id][imgfile][0])
          }
        });
        getPostData.push(getData);
      });
    }).then(function() {

      mediaref.once("value")
      .then(function(snapshot) {
        const mediaData = snapshot.val();
        console.log(mediaData);
        getPostData.forEach(data => {
          data.imgFile = [];
          data.imgData.forEach(imgId => {
            data.imgFile.push(mediaData[imgId].file);
          });
        });
      });

      // console.log(getPostData);
    });

    // mediaと紐つけ
    
    
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
