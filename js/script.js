var app = new Vue(
  {
    el:"#root",
    data:{
      addTitle:"",
      poster:"",
      films:[]
    },
    methods:{
      addToTitle: function(){

        const self = this;
        axios.get("https://api.themoviedb.org/3/search/movie",{
            params:{
            api_key: "8254ee6bdff5c0d69e1229a04775b2cb",
            query: self.addTitle,
            poster_path:"https://image.tmdb.org/t/p/w220_and_h330_face"
            }
          }
        )
        .then(function(result){
          console.log(result.data.results);
          self.films = result.data.results;
          self.poster = result.data.result.poster_path;
          console.log(self.films);
      })

      }
    },
  })
