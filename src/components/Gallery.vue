<template>
  <section>
    <h1>Gallery</h1>
    <div id="gallery">
      <div class="galleryData">
        <div v-for="data in gallerydata">
          <h3>{{data.title}}</h3>
          <ul>
            <li v-for="url in data.url">
              <img :src="url">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase, { functions } from 'firebase'

export default {
  name: 'Gallery',
  data: function() {
    return {
      db: firebase.firestore(),
      strage: firebase.storage(),
      gallerydata: [],
      imgMax: 10,
      urls: [],
      destData: []
    }
  },
  props: {
    msg: String
  },
  mounted() {
    // firebaseからgalleryデータ取得
    const docContentRef = this.db.collection("fl_content");
    const docFileRef = this.db.collection("fl_files");
    const strageRef = this.strage.ref("flamelink/media");
    let gallerydata = this.gallerydata;
    const imgMax = this.imgMax;
    let urls = this.urls;

    // fl_contentからデータ取得
    docContentRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        let imgId = [];
        if(doc.data()._fl_meta_.schema !== "gallery") { return true; }

        for(let i = 1; i <= imgMax; i++) {
          if(!doc.data()[`image${i}`]) { continue; }
          if(!doc.data()[`image${i}`].length) { continue; }
          if(!doc.data()[`image${i}`][0]) { continue; }
          // console.log(doc.data()[`image${i}`][0].id);
          imgId.push(doc.data()[`image${i}`][0].id);
        }
        
        gallerydata.push({
          title: doc.data().title,
          imgData: imgId,
          file: [],
          url: []
        });
      });
    }).then(function() {
      // fl_content -> fl_filesに紐つけ
      docFileRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          const fileId = doc.data().id;
          gallerydata.forEach(gallery => {
            let imgFile = [];
            gallery.imgData.forEach(imgData => {
              if(imgData === fileId) {
                gallery.file.push(doc.data().file);
              }
            });
          });
        });

      }).then(function() {
        // fl_file -> strage
        // URL取得
        gallerydata.forEach(gallery => {
          gallery.file.forEach(file => {
            strageRef.child(file).getDownloadURL().then(function(url) {
              gallery.url.push(url);
              urls.push(url);

            }).catch(function(error) {
              // Handle any errors
              console.log("timeout")
            });
          });
        });
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
#gallery li {
  /* float: left; */
  display: contents;
  list-style: none;
}
#gallery img {
  /* width: 30%; */
  height: 20rem;
  margin-right: 10px;
}
</style>
