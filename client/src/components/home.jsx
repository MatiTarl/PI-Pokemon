import React from "react";
import {NavLink, Nav } from "react-router-dom";
import { connect, useDispatch, } from "react-redux";
import { orderPokemons, orderPokemonsByAtack, orderPokemonsByCreation} from "../redux/actions";

 function Home(prop) {
    
  const allPokemons = [...prop.allPokemons]
  const allPokemonsCopy = allPokemons;

//-------------------------------------------------------------
  const dispatch = useDispatch();
  const handlerOrderByName = (event) => {
    dispatch(orderPokemons(event.target.value));
  }
  const handlerOrderByAtack = (event) => {
    dispatch(orderPokemonsByAtack(event.target.value));
  }
  const handlerOrderByCreation = (event) => {
    dispatch(orderPokemonsByCreation(event.target.value))
  }

  

   return (
    <div>
      <NavLink to={"/form"} >
      <button>Create Pokemon</button>
      </NavLink>
      <div>
      <input type="search" id="buscador" name="search"/>  
      <button >Buscar</button>
      </div>
      <select onChange={handlerOrderByName}>
        <option>Nombre</option>
        <option value={"Nombre A"} >A-Z</option>
        <option value={"Nombre D"} >Z-A</option>
      </select>
      <select onChange={handlerOrderByAtack}>
        <option>Ataque</option>
        <option value={"Ataque A"} >- Ataque</option>
        <option value={"Ataque D"} >+ Ataque</option>
      </select>
      <select onChange={handlerOrderByCreation} >
        <option value={"API_BACK"} >Api y Back</option>
        <option value={"API"} >Solo Api</option>
        <option value={"BACK"} >Solo Back</option>
      </select>
      {
      allPokemonsCopy.map( poke => {
        return <div key={poke.id}>
          <NavLink to={`/detail/${poke.id}`}>
          <h1>{poke.name}</h1>
          <img src={poke.imagen} alt="imagen" ></img>
          {poke.type1 && <h4>{poke.type1}</h4>}
          {poke.type2 && <h4>{poke.type2}</h4>}
          {!poke.type2 && <h4>No second type</h4>}
          </NavLink>
          </div>
      })
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return { allPokemons: state.filteredPokemons ?? state.allPokemons }
}
 export default connect(mapStateToProps, null)(Home);