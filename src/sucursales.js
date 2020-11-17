module.exports = {
    sucursales : function() {
        const fs = require("fs");
        return JSON.parse(fs.readFileSync("./data/theaters.json", "utf-8"))
    }
}
