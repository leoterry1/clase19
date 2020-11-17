let fs  = require("fs")

module.exports = {
    faqsJSON : function(){
        return JSON.parse(fs.readFileSync('./data/faqs.json','utf-8'));
    }
}

