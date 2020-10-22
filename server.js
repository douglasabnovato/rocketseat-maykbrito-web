//express para configurar servidor
const express = require("express");
const server = express();

const db = require("./db");

//coleção de dados
const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios Físicos",
        category: "Saúde Física",
        description: "Lorem ipsum dolor sit, praesentium, reiciendis numquam.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Saúde Mental",
        description: "Lorem ipsum sit, adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/2729/2729013.svg",
        title: "Alimentação",
        category: "Alimentar-se BEM",
        description: "Lorem ipsum sit, adipisicing elit.",
        url: "https://rocketseat.com.br"
    }
]

//configurar estrutura de arquivos
server.use(express.static("public"));

//configurar nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views",{
    express: server,
    noCache: true,
})

//criar rota início como /
server.get("/", function(req, res){
    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err) return console.log(err)
        const reversedIdeas = [...rows].reverse();
        let lastIdeas = [];
        for(let idea of reversedIdeas){
            if(lastIdeas.length < 2){
                lastIdeas.push(idea);
            }
        }
        return res.render("index.html", { ideas: lastIdeas });
    });
})

//criar rota ideias como /ideias
server.get("/ideias", function(req, res){
    const reversedIdeas = [...ideas].reverse();
    return res.render("ideias.html", { ideas: reversedIdeas } );
})

//servidor na porta 3000
server.listen(3000);