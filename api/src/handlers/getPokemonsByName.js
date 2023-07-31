const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getPokemonsByName = async (req, res, url) => {
    const { name } = req.query;
    const pokemon = await Pokemon.findOne({where: {name: name}});
   try {
        if(pokemon){
         return res.status(200).send(pokemon);       
        } else{
         const { data } = await axios(`${url}/${name}`);
         const pokemonByName = {
            id: data.id,
            name: data.name,
            imagen: data.sprites.front_default,
            vida: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
         }
         return res.status(200).send(pokemonByName);  
        }     
   } catch (error) {
    return res.status(405).send({"error": error.message})
   }
}


module.exports = getPokemonsByName;