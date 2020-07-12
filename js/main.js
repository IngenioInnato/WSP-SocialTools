Vue.component('gallery', {
  template:/*template*/ `
  <div class="gallery">
    <div class="gallery__item" v-for="img in imgData" :style="{'background': 'url('+ img.image + ') no-repeat center / cover'}">
      <button class="btn-orange" @click="shareImg(img.image)">Compartir</button>
    </div>
  </div>
  `,
  props: {
    // file: {
    //   type: String,
    //   required: true,
    //   default: ""
    // }
  },
  data() {
    return {
      imgData: [
        {
          "name" : "",
          "image": "./img/post-us/fb-20200117.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200120.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200124.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200127.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200131.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200217.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200308.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200311.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200313.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200422.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200510.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200515.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200527.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200530.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200605.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200608.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200615.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200621.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200708.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200710.jpg",
          "date" : ""
        }, 
        {
          "name" : "",
          "image": "./img/post-us/fb-20200117.jpg",
          "date" : ""
        }
      ]
    }
  },
  methods: { 
    shareImg(img){
      let loc = window.location.pathname;
      let dir = loc.substring(0, loc.lastIndexOf('/'));
      let folder= window.location.hostname + dir + "/";
      let link = folder + img.substr(2);
      clipboard.writeText(link);
    }
  },
  computed: {

  },
});


let app = new Vue({
  el: '.app',
  data: {

  },
  methods: {}
});