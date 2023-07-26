const axios = require("axios");

const getPokemonsByName = async (req, res, url) => {
    const { name } = req.query;
   try {
    //si llega el nombre por query hacemos esto 
     if(name){
        const { data } = await axios(`${url}/${name}`);

        console.log(data);

         const pokemonByName = {
            id: data.id,
            name: data.name,
            imagen: data.sprites.front_default,
            vida: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
         }
         console.log(pokemonByName);
         
         return res.status(200).send(pokemonByName);       
     }
   } catch (error) {
    return res.status(405).send({"error": error.message})
   }
}


module.exports = getPokemonsByName;