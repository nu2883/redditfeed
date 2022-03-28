var app = new Vue({
  el: '#app',
    data() {
        return {
            cari: '',
            artikles:[],
          
      }
    },
    methods: {
        berubah() {
            this.artikles = null;
            let urr = `https://www.reddit.com/r/${this.cari}.json`;
            fetch(urr).then(
            
            res => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
            if (data != null)
            
            this.artikles = data.data.children;
        });
      }
        )
            
        }    ,
        
    },

})