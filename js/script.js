var app = new Vue(
  {
    el:"#root",
    data:{
      searchString:"",
      poster:"https://image.tmdb.org/t/p/w220_and_h330_face",
      films:[],
      flags:[
        "https://hotelbolognasrl.it/wp-content/uploads/2016/06/uk.png",
        "https://i.pinimg.com/originals/f8/9c/9c/f89c9c46646b38537e45f113f829855e.png",
      ],
      // poster:"https://image.tmdb.org/t/p/" + getFlag(film)
    },
    methods:{
      search: function(){
        const self = this;
        Promise.all([
          axios.get("https://api.themoviedb.org/3/search/tv",{
              params:{  // per ora qui solo API key e query di ricerca
                api_key: "8254ee6bdff5c0d69e1229a04775b2cb",
                query: self.searchString,
              }
            }
          ),
          axios.get("https://api.themoviedb.org/3/search/movie",{
              params:{  // per ora qui solo API key e query di ricerca
                api_key: "8254ee6bdff5c0d69e1229a04775b2cb",
                query: self.searchString,
              }
            }
          )
          .then(function(result){
            console.log(result.data.results);
            self.films = result.data.results
            // - ricerca anche serie tv
          })
        ])
      },
      getVote(film) {
        // - generazione stelline -> result.data.results[0].vote_average
        // arrotondo il voto per eccesso usando il math ceil
        return parseInt(film.vote_average / 2);
      },

      // getFlag(film) {

        // - gestione lingue -> result.data.results[0].original_language
        // film.original_language
        //
        // if(film.original_language == "en" ){
        //   return this.flags[0];
        // }else if (film.original_language == "it") {
        //   return this.flags[1];
        // }else {
        //   return film.original_language;
        // };
      //
      // getImage(film){
      //   return film.poster_path;
      // }
      //
      //
      // }
    },
  })

  // poster_path:"https://image.tmdb.org/t/p/w220_and_h330_face"
