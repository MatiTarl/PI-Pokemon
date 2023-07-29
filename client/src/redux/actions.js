import axios from "axios"
import {GET_POKEMONS, FILTER_POKEMONS, ORDER_NAME, ORDER_ATACK} from "./actions-type"


export const getPokemons = () => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get("http://localhost:3001/pokemons");
        return dispatch({
          type: GET_POKEMONS,
          payload: data,
        });
      } catch (error) {
        return console.log(error.message);
      }
    };
  };

export const filterPokemons = (type) => {
  return {
    type: FILTER_POKEMONS,
    payload: type
  }
}

export const orderPokemons = (order) => {
  return {
    type: ORDER_NAME,
    payload: order 
  }
}

export const orderPokemonsByAtack = (order) => {
  return {
    type: ORDER_ATACK,
    payload: order 
  }
}