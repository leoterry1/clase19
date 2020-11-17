
const homePage = require("./homePage")
const masVotadas = require("./masVotadas")
const contacto = require("./contacto")
const enCartelera = require("./enCartelera")
let movies = homePage.leerJSON();
let preguntas = require("./preguntasFrecuentes")
const teatros = require("./sucursales")
module.exports = {
    homePage: function (req, res) {

        res.write(`
        █ █▄ █ █ █▀▀ █ █▀█
        █ █ ▀█ █ █▄▄ █ █▄█\n\n`)
        res.write(`Total de películas: ` + movies.total_movies + "\n\n")
        movies.movies.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
        movies.movies.forEach(movie => {
            res.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n")
            res.write("Título: " + movie.title + "\n\n")
            res.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n")
        });
        res.end()
        //Voy a mostrar la información. No la proceso.
    },
    enCartelera: function (req, res) {
        let cartelera = enCartelera.enCartelera()
        res.write(`
        █▀▀ ▄▀█ █▀█ ▀█▀ █▀▀ █   █▀▀ █▀█ ▄▀█
        █▄▄ █▀█ █▀▄  █  ██▄ █▄▄ ██▄ █▀▄ █▀█\n\n`)
        res.write("Total de películas: " + cartelera.length + "\n\n");
        cartelera.forEach(movie => {
            res.write("Título: " + movie.title + "\n");
            res.write("Reseña: " + movie.overview +"\n\n")


        });
        
    },
    masVotadas: function (req, res) {
        let votadas = masVotadas.masVotadas()
        res.write(`
        █▀▄▀█ ▄▀█ █▀   █ █ █▀█ ▀█▀ ▄▀█ █▀▄ ▄▀█ █▀
        █ ▀ █ █▀█ ▄█   ▀▄▀ █▄█  █  █▀█ █▄▀ █▀█ ▄█\n\n`)
        res.write(`------------------------------------\nEstas son las películas más votadas:\n------------------------------------ ` + "\n\n");
        res.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n")
        res.write("Rating promedio: " + masVotadas.ratingPromedio() + "\n")
        votadas.forEach(movie => {
            res.write("Título: " + movie.title + "\n");
            res.write("Descripción : " + movie.overview + "\n");
            res.write("Rating: " + movie.vote_average + "\n\n");
            res.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n")
        })
        res.end()
    },
    contacto: function (req, res) {
        res.write(contacto.contacto())
        res.end()
    },
    preguntasFrecuentes: function (req, res) {
        let faqs = preguntas.faqsJSON().faqs
        res.write(`
        █▀█ █▀█ █▀▀ █▀▀ █ █ █▄ █ ▀█▀ ▄▀█ █▀   █▀▀ █▀█ █▀▀ █▀▀ █ █ █▀▀ █▄ █ ▀█▀ █▀▀ █▀
        █▀▀ █▀▄ ██▄ █▄█ █▄█ █ ▀█  █  █▀█ ▄█   █▀  █▀▄ ██▄ █▄▄ █▄█ ██▄ █ ▀█  █  ██▄ ▄█\n\n`)
        res.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n")
        res.write("Total de preguntas: " + preguntas.faqsJSON().total_faqs + "\n\n")
        faqs.forEach(answer => {
            res.write("Pregunta: " + answer.faq_title + "\n")
            res.write("Respuesta: " + answer.faq_answer + "\n\n")
            res.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n")
        });
        res.end()
    },
    sucursales: function (req, res) {
        let sucursales = teatros.sucursales().theaters;
        res.write(`
        █▀ █ █ █▀▀ █ █ █▀█ █▀ ▄▀█ █   █▀▀ █▀
        ▄█ █▄█ █▄▄ █▄█ █▀▄ ▄█ █▀█ █▄▄ ██▄ ▄█\n\n`)
        res.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n")
        res.write("Contamos con " + teatros.sucursales().total_theaters + " sucursales. \n\n")
        sucursales.forEach(sucursal => {
            res.write("Nombre: " + sucursal.name + "\n")
            res.write("Dirección: " + sucursal.address + "\n")
            res.write("Descripción: " + sucursal.description + "\n")
            res.write("Cantidad de salas: " + sucursal.total_rooms + "\n\n")
            res.write("----------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n")
        });
        res.end()

    }
}
