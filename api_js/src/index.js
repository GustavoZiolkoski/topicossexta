const express = require('express');

// Criando um servidor através do express
const app = express();

// Configurando uma requisição com o método GET para a raiz da aplicação
app.get("/", function(request, response){
    console.log("Primeira requisição recebida!");
    response.status(200).json({ message : "Resposta enviada em JSON"});
});



// O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000.");
});