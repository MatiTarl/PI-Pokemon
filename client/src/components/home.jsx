import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
 function Home() {
  const [allPokemons, setAllPokemons] = useState([]);
   useEffect(() => {
    axios
      .get("http://localhost:3001/pokemons")
      .then((response) => {
        const pokemonData = response.data;
        const uniquePokemons = pokemonData.filter(
            (pokemon, index, self) =>
              index === self.findIndex((p) => p.name === pokemon.name)
        );
        setAllPokemons(uniquePokemons)
      })
      .catch((error) => {
        return error.message
      });
  }, []);
   return (
    <div>
      {allPokemons.map((pokemon) => {
        return <div>
               <Link to={`detail/${pokemon.id}`} >
                <h2>{pokemon.name}</h2>
                <img src={pokemon.imagen} alt="imagen"></img>
               </Link>               
        </div>
            
      })}
    </div>
  );
}
 export default Home;