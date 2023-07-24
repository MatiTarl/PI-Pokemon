const axios = require("axios");

const getPokemonsById = async (req, res, url) => {
   const { id } =  req.params; 
    try {
    const { data } = await axios(`${url}/${id}`); 
    const pokemonById = {
        id: data.id,
        name: data.name,
        imagen: data.sprites.front_default,
        vida: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        speed: data.stats[5].base_stat
     }
     return res.status(200).send(pokemonById);
   } catch (error) {
    return res.staus(405).send({"error": error.message})
   }
}


module.exports = getPokemonsById;