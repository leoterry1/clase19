module.exports = {
    leerJSON : function(){
        const fs = require("fs");
        return JSON.parse(fs.readFileSync('./data/movies.json','utf-8'));
}
}
