const axios = require("axios");
let allPokemons = [];

const getPokemons = async (req, res, url) => {
    const { name } = req.query;
    const { data } = await axios(`${url}`);
   try {
    //si llega el nombre por query hacemos esto 
     if(name){
        const { dataByName } = await axios(`${url}/${name}`);
        return res.status(200).send(dataByName);
     }
    // si no llega el nombre por query, mandamos todos los pokemones
     allPokemons = allPokemons.concat(data);
     if (data.next){
        return getPokemons(req, res, data.next)
     }
     return res.status(200).send(allPokemons);

   } catch (error) {
    return res.status(405).send({"error": error.message})
   }
}


module.exports = getPokemons;