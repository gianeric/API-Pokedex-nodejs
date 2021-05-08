const express = require('express');
const pokedex = require('./templates/pokedex.json');
const app = express();
const version = '/v1'

app.use(express.json());

//Listar Pokedex
app.get(version + '/pokedex', (req, res) => {
    res.send(pokedex);
});

//Listar Pokedex por pokemon
app.get(version + '/pokedex/:id', (req, res) => {
    let pokedexItens = pokedex.find(pokedexItens => pokedexItens.id == req.params.id);

    if (!pokedexItens) {
        res.status(404).send(); return;
    }

    res.send(pokedexItens);
});

app.listen(3000, () => console.log('Listening on port 3000'));