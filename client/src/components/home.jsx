import React from "react";
import {NavLink } from "react-router-dom";
import { connect, useDispatch, } from "react-redux";
import { orderPokemons, orderPokemonsByAtack} from "../redux/actions";

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

   return (
    <div>
      <NavLink to={"/form"} >
      <button>Create Pokemon</button>
      </NavLink>
      <select onChange={handlerOrderByName}>
        <option value={"Nombre A"} >Nombre ascendente</option>
        <option value={"Nombre D"} >Nombre decendente</option>
      </select>
      <select onChange={handlerOrderByAtack}>
        <option value={"Ataque A"} >Ataque ascendente</option>
        <option value={"Ataque D"} >Ataque decendente</option>
      </select>
      <select>
        <option>Api y Back</option>
        <option>Solo Api</option>
        <option>Solo Back</option>
      </select>
      {
      allPokemonsCopy.map( poke => {
        return <div key={poke.id}>
          <NavLink to={`/detail/${poke.id}`}>
          <h1>{poke.name}</h1>
          <img src={poke.imagen} alt="imagen" ></img>
          </NavLink>
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