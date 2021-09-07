
// Manejo de datos
let gallery= Vue.component('gallery', {
  template:/*template*/ `
  <div class="layout">
  <div class="gallery">
  <div class="gallery__item" v-for="img in imgData.slice(0,n)" :style="{'background':  isEng ? 'url('+ img.image + ') no-repeat center / cover' : 'url(../'+ img.image + ') no-repeat center / cover'}">
  <button class="btn-orange btn-ripple" @click="shareImg($event, img.image)">Share</button>
  </div>
  </div>
  <div class="mt-3 text-center">
  <button @click="n -= 9" class="btn-orange btn-ripple mb-lg-0 mb-3" :style="{'display': (n > 9) ? 'inline-block' : 'none'}">Less</button>
  <button @click="n += 9" class="btn-orange btn-ripple" :style="{'display': (n < imgLength) ? 'inline-block': 'none'}">More</button>
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
      n: 9,
      isEng: lang === "en"
    }
  },
  methods: { 
    shareImg(event,img){
      let loc = window.location.pathname;
      let dir = loc.substring(0, loc.lastIndexOf('/'));
      let folder= window.location.hostname + dir + "/";
      let link = folder + img.substr(2);
      clipboard.writeText(link);
      this.changeStatus(event);
    },
    getData(){
      // axios
      axios.get("./" + this.file)
      .then(response => {
        // console.log(response); 
        this.imgData = response.data.reverse();
        this.imgLength = this.imgData.length;
      });
    },
    changeStatus(el) {
      let button = el.currentTarget;

      button.innerHTML = lang === "en"? "Copied!": "¡Copiado!";
      button.style.background = "#0067A3"
      setInterval(() => {
        button.innerHTML = lang === "en"? "Share": "Compartir";
        button.style.background = "#F88E2A"
      }, 1500)
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

// Animaciones
// document.addEventListener("DOMContentLoaded", function() {
  // let btn = document.querySelectorAll(".btn-ripple");
  // btn.forEach(el => {
  //   el.addEventListener("click", function(e) {
  //     let x = e.clientX - e.target.offsetLeft;
  //     let y = e.clientY - e.target.offsetTop;
  //     let ripple = document.createElement("span");
  //     ripple.style.left = `${x}px`;
  //     ripple.style.top = `${y}px`;
  //     this.appendChild(ripple);

  //   });
  // });
// });