const { request, response } = require('express');
const express = require('express');

// Criando um servidor através do express
const app = express();

// Configurar a aplicação para receber dados no formato JSON
app.use(express.json());

// Configurando uma requisição com o método GET para a raiz da aplicação
app.get("/", function(request, response){
    console.log("Primeira requisição recebida!");
    response.status(200).json({ message : "Resposta enviada em JSON"});
});

// EXERCÍCIO - Criar uma nova rota/funcionalidade para receber uma informação pela URL da requisição

app.get("/:categoria/:produto", (request, response) => { // pode ser feito assim também, o => substitui o function
    // const produto = request.params.produto;
    // const categoria = request.params.categoria;
    // ou
    const { produto, categoria} = request.params;
    console.log(produto, categoria);

    response.status(200).json({message : "Categoria: " + categoria + " Produto: " + produto});

    // console.log(request.params.produto, request.params.categoria);
})



app.post("/", (request, response) => {
    // console.log(request.body); // para mostrar no terminal
    response.status(201).json({ message : "Categoria cadastrada!", categoria : request.body });
});

// 


// O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000.");
});