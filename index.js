const express = require('express');
const pokedex = require('./templates/pokedex.json');
const index   = require('./templates/index.json');
const app     = express();
const version = 'v1'

app.use(express.json());

//Listar Indice
app.get('/pokedex/'+version, (req, res) => {
    res.send(index);
});

//Listar Pokedex
app.get('/pokedex/'+version+'/all', (req, res) => {
    res.send(pokedex);
});

//Listar Pokedex por id pokemon
app.get('/pokedex/'+version+'/id/:id', (req, res) => {   
    let pokedexItens = pokedex.find(pokedexItens => pokedexItens.id == req.params.id);
   
    if (!pokedexItens) {
        res.status(404).send(); return;
    }

    res.send(pokedexItens);
});

//Listar Pokedex por nome pokemon 
app.get('/pokedex/'+version+'/name/:name', (req, res) => {   
    let pokedexItens = pokedex.find(pokedexItens => pokedexItens.name.english == req.params.name);

    if (!pokedexItens) {
        res.status(404).send(); return;
    }

    res.send(pokedexItens);
});

//Listar Pokedex por tipo
app.get('/pokedex/'+version+'/type/:type', (req, res) => {   
    let pokedexItens = pokedex.filter((pokedexItens) => {return pokedexItens.type.indexOf(req.params.type) >= 0});

    if (!pokedexItens) {
        res.status(404).send(); return;
    }

    res.send(pokedexItens);
});

//Listar Pokedex por ataque
app.get('/pokedex/'+version+'/attack', (req, res) => {   
});

//Listar Pokedex por defesa 
app.get('/pokedex/'+version+'/defense', (req, res) => {   

});

app.listen(3000, () => console.log('Listening on port 3000'));