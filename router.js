const index = require("./src/index")

module.exports = function (req, res) {
    switch (req.url) {
        case "/":
            //Se va a acceder al homepage.
            index.homePage(req, res)
            break;
        case "/en-cartelera":
            //Se va a acceder a la cartelera.
            index.enCartelera(req, res)
            break;
        case "/contacto":
            index.contacto(req, res);
            break;
        case "/mas-votadas":
            index.masVotadas(req, res);
            break;
        case "/preguntas-frecuentes":
            index.preguntasFrecuentes(req,res);
            break;
        case "/sucursales":
            index.sucursales(req,res);
            break;
        default:
            res.write(`
              ██╗██╗ █████╗   ██╗██╗  ███╗  ██╗ █████╗ ████████╗  ███████╗ █████╗ ██╗   ██╗███╗  ██╗██████╗
             ██╔╝██║██╔══██╗ ██╔╝██║  ████╗ ██║██╔══██╗╚══██╔══╝  ██╔════╝██╔══██╗██║   ██║████╗ ██║██╔══██╗
            ██╔╝ ██║██║  ██║██╔╝ ██║  ██╔██╗██║██║  ██║   ██║     █████╗  ██║  ██║██║   ██║██╔██╗██║██║  ██║
            ███████║██║  ██║███████║  ██║╚████║██║  ██║   ██║     ██╔══╝  ██║  ██║██║   ██║██║╚████║██║  ██║
            ╚════██║╚█████╔╝╚════██║  ██║ ╚███║╚█████╔╝   ██║     ██║     ╚█████╔╝╚██████╔╝██║ ╚███║██████╔╝
                 ╚═╝ ╚════╝      ╚═╝  ╚═╝  ╚══╝ ╚════╝    ╚═╝     ╚═╝      ╚════╝  ╚═════╝ ╚═╝  ╚══╝╚═════╝ `)
            break;
    }
}