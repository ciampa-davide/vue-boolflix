var app = new Vue(
  {
    el:"#root",
    data:{
      searchString:"",
      poster:"",
      filmVote: 0,
      films:[],
    },
    methods:{
      searchMovie: function(){

        const self = this;
        axios.get("https://api.themoviedb.org/3/search/movie",{
            params:{  // per ora qui solo API key e query di ricerca
              api_key: "8254ee6bdff5c0d69e1229a04775b2cb",
              query: self.searchString,
            }
          }
        )
        .then(function(result){
          console.log(result.data.results);
          self.films = result.data.results;
          // self.poster = result.data.result.poster_path;

          // - generazione stelline -> result.data.results[0].vote_average

          for(let i = 0; i<result.data.results.length; i++){
            let voto = Math.ceil(Math.ceil(result.data.results[i].vote_average) / 2);
            self.filmVote = voto;
            console.log(voto);
          };



          // - gestione lingue -> result.data.results[0].original_language

          // - ricerca anche serie tv
      })
      }
    },
  })

  // poster_path:"https://image.tmdb.org/t/p/w220_and_h330_face"
