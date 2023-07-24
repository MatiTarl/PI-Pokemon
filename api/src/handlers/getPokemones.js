const axios = require("axios");
const allPokemons = [];
const getPokemons = async (req, res, url, maxpag = 0) => {
  try {
    const { data } = await axios(url);
     for (let indice = 0; indice < data.results.length; indice++) {
      const pokemon = await axios(data.results[indice].url);
       const randomPokemon = {
        id: pokemon.data.id,
        name: pokemon.data.name,
        imagen: pokemon.data.sprites.front_default,
        vida: pokemon.data.stats[0].base_stat,
        ataque: pokemon.data.stats[1].base_stat,
        defensa: pokemon.data.stats[2].base_stat,
        velocidad: pokemon.data.stats[5].base_stat,
      };
      allPokemons.push(randomPokemon);
    } 
     if(maxpag === 2) {
      return allPokemons
     } else{
     if (data.next){
     console.log("Lista creada");
     maxpag++; 
     return getPokemons(req, res, data.next, maxpag);
     }
     }
  } catch (error) {
    return res.status(405).send({ error: error.message });
  }
};
 module.exports = getPokemons;