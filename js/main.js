let gallery= Vue.component('gallery', {
  template:/*template*/ `
  <div class="layout">
    <div class="gallery">
      <div class="gallery__item" v-for="img in imgData.slice(0,n)" :style="{'background': 'url('+ img.image + ') no-repeat center / cover'}">
        <button class="btn-orange" @click="shareImg(img.image)">Share</button>
      </div>
    </div>
    <div class="mt-3 text-center">
      <button @click="n -= 9" class="btn-orange" :style="{'display': (n > 9) ? 'inline-block' : 'none'}">Less</button>
      <button @click="n += 9" class="btn-orange" :style="{'display': (n < imgLength) ? 'inline-block': 'none'}">More</button>
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
      imgData: [],
      imgLength: 0,
      n: 9
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
    getData(){
      // axios
      axios.get("../" + this.file)
      .then(response => {
        // console.log(response); 
        this.imgData = response.data.reverse();
        this.imgLength = this.imgData.length;
      });
    }
  },
  mounted() {
    this.getData();
  }
});

let app = new Vue({
  el: '.app',
  components: {
    'gallery': gallery
  }
});