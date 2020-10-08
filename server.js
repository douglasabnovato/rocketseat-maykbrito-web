//express para configurar servidor
const express = require("express");
const server = express();

//configurar estrutura de arquivos
server.use(express.static("public"));

//configurar nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views",{
    express: server,
})

//criar rota início como /
server.get("/", function(req, res){
    return res.render("index.html");
})

//criar rota ideias como /ideias
server.get("/ideias", function(req, res){
    return res.render("ideias.html");
})

//servidor na porta 3000
server.listen(3000);