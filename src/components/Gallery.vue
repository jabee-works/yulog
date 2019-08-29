<template>
  <section>
    <h1>Gallery</h1>
    <div id="gallery">
      <div class="galleryData" v-for="(url, title) in destImg">
        {{title}}
        <ul>
          <li v-for="(img, index) in url">
            <img :src="img">
   
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Gallery',
  data: function() {
    return {
      db: firebase.firestore(),
      strage: firebase.storage(),
      gallerydata: [],
      imgMax: 10,
      destImg: {}
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
    let destImg = this.destImg;
    
    docContentRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());

            if(doc.data()._fl_meta_.schema !== "gallery") {
              return true;
            }

            destImg[doc.data().title] = [];

            const postData = doc.data();
            let imgData = [];
            
            for(let i = 1; i <= imgMax; i++) {
              if(!postData[`image${i}`][0]) {continue;}
              
              imgData.push(postData[`image${i}`][0].id);
            }

            const setData = {
              title: postData.title,
              content: imgData,
              filename:[]
            }
            gallerydata.push(setData);
        });
    }).then(function() {
      // fl_filesと紐つけ
      docFileRef.get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            const id = doc.data().id;

            gallerydata.forEach(data => {
              if(data.content.indexOf(id) != -1){
                data.filename.push(doc.data().file);
              }
            });
            
          });
          
          // mediaと紐つけ
          gallerydata.forEach(data => {
            data.filename.forEach(imgFile => {
              strageRef.child(imgFile).getDownloadURL().then(function(url) {
                // if(!destImg[data.title]) {
                //   destImg[data.title] = [url];
                //   return true;
                // }
                destImg[data.title].push(url);
                
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
  float: left;
  list-style: none;
}
#gallery img {
  width: 30%;
}
</style>
