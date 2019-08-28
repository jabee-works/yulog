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
      db: firebase.firestore(),
      gallerydata: [],
      imgMax: 10
    }
  },
  props: {
    msg: String
  },
  mounted() {
    // firebaseからgalleryデータ取得
    const docContentRef = this.db.collection("fl_content");
    let gallerydata = this.gallerydata;
    const imgMax = this.imgMax;
    
    docContentRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());

            if(doc.data()._fl_meta_.schema !== "gallery") {
              return true;
            }

            const postData = doc.data();
            let imgData = [];
            
            for(let i = 1; i < imgMax; i++) {
              imgData.push(postData["image" + i]);
            }

            const setData = {
              title: postData.title,
              content: imgData
            }
            gallerydata.push(setData);
        });
    });

    // fl_filesと紐つけ
    const docFileRef = this.db.collection("fl_files");
    docFileRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          const id = doc.data().id;

          // console.log(id);
        });
    });

    // mediaと紐つけ
    console.log(gallerydata);
    
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
