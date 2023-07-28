import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

 function Home(prop) {
  
  const allPokemons = [...prop.allPokemons]
  const allPokemonsCopy = allPokemons;

  console.log(allPokemonsCopy);

   return (
    <div>
      {
      allPokemonsCopy.map( poke => {
        return <div>
          <h1>{poke.name}</h1>
          <img src={poke.imagen} alt="imagen" ></img>
          </div>
      })

      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return { allPokemons: state.allPokemons}
}
 export default connect(mapStateToProps, null)(Home);