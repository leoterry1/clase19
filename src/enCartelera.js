let homePage = require("./homepage")
module.exports = {
    enCartelera : function (){
        let datos = homePage.leerJSON();
        let movies = datos.movies
        return movies.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
    }
}

