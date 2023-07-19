const { Router } = require('express');
const pokemon = Router();
const getPokemons = require("../handlers/getPokemons");
const getPokemonsById = require("../handlers/getPokemonsById");



pokemon.get("/", (req, res) => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    getPokemons(req, res, url);
})

pokemon.get("/:id", (req, res) => {
    getPokemonsById(req, res);
})
 

module.exports = pokemon;
