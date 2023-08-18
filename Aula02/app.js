const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Ta certinho")
})

app.get("/contato", function(req, res){
    res.send("os contatinho")
})

app.get("/produtos/:item/:qtd", function(req, res){
    res.send("item: " + req.params.item + "<br> Quantidade: " + req.params.qtd)
})

app.get("/produtos/:item", function(req, res){
    res.send("item: " + req.params.item )
})

app.get("/index", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(8081, function(){
    console.log("ta rodando na porta 8081 a")
})