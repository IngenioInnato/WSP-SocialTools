Vue.component('gallery', {
  template:/*template*/ `
  <div class="gallery">
    <div class="gallery__item" v-for="img in imgData" :style="{'background': 'url('+ img.image + ') no-repeat center / cover'}">
      <button class="btn-orange" @click="shareImg(img.image)">Compartir</button>
    </div>
  </div>
  `,
  // https://gist.github.com/dvreed77/c37759991b0723eebef3647015495253
  // Otra manera de hacer copy and paste
  props: {
    file: {
      type: String,
      required: true,
      default: ""
    }
  },
  data() {
    return {
      imgData: []
    }
  },
  methods: { 
    shareImg(img){
      let loc = window.location.pathname;
      let dir = loc.substring(0, loc.lastIndexOf('/'));
      let folder= window.location.hostname + dir + "/";
      let link = folder + img.substr(2);
      clipboard.writeText(link);
    },
    fillData(){
      return `

      `
    },
    getData(){
      // axios
      axios.get("../" + this.file)
      .then(response => {
        // console.log(response); 
        this.imgData = response.data;
      });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
  }
});


let app = new Vue({
  el: '.app',
  data: {

  },
  methods: {}
});