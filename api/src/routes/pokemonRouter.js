const { Router } = require('express');
const { Pokemon, Type } = require("../db");
const pokemons = Router();
const getPokemonByName = require("../handlers/getPokemonsByName");
const getPokemonById = require("../handlers/getPokemonsById");
const getPokemon = require("../handlers/getPokemones");
const URL = "https://pokeapi.co/api/v2/pokemon";

 pokemons.get("/", async (req, res) => {
    try {
        const { name } = req.query;
        const backPokemon = await Pokemon.findAll();
        if (name) {
            return getPokemonByName(req, res, URL);
        } else {
            const apiPokemons = await getPokemon(req, res, URL);
            if(backPokemon){
            const dataCombined = apiPokemons.concat(backPokemon);
            return res.send(dataCombined);
            }
            return res.status(200).send(apiPokemons)
        }
    } catch (error) {
        res.status(410).send({ "error": error.message });
    }
});

 pokemons.get("/:id", async (req, res) => {
    try {
    const {id} = req.params;
    const pokemonByDb = await Pokemon.findOne({where: {id: id}});
    if(pokemonByDb === null){
        return getPokemonById(req, res, URL);
    }
    return res.status(200).send(pokemonByDb);
    } catch (error) {
    return res.status(400).send({"error": error.message});
    }
    
});

 pokemons.post("/", async (req, res) => {
    try {
        const { name, imagen, vida, ataque, defensa, type1, type2 } = req.body;
        if(!name || !imagen || !vida || !ataque || !defensa) {   
         return res.status(400).send("faltan datos por completar");}

         const pokemon = await Pokemon.create({
            name,
            imagen,
            vida,
            ataque,
            defensa,
         });

         if(type1){  // esto es para vincular la tablas con el pokemon creado
         const type1Found = await Type.findOne({where: {name: type1}})
         await pokemon.addType(type1Found)
         } 
         if(type2){
         const type2Found = await Type.findOne({where: {name: type2}})
         await pokemon.addType(type2Found)
         }
         
        return res.status(200).send("pokemon creado correctamente");
    } catch (error) {
        return res.status(400).send({"error": error.message});

    }
    
 })

 module.exports = pokemons;