const homePage = require("./homepage")

module.exports = {
    masVotadas : function(){
        let movies = homePage.leerJSON().movies;
        let masVotadas = movies.filter(function(movies){
            return movies.vote_average >= 7
        })
        return masVotadas.sort((a, b) => (a.title > b.title)?1:(a.title < b.title)?-1:0);
        
},
    ratingPromedio : function(){
        let rating = this.masVotadas().map(function(movies){
            return movies.vote_average
        })
        let totalR = rating.reduce(function(acum,rating){
            return acum + rating
        })
        return (totalR / rating.length).toFixed(2)
    }
}



