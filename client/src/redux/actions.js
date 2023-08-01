import axios from "axios"
import {GET_POKEMONS, FILTER_POKEMONS, ORDER_NAME, ORDER_ATACK, ORDER_CREATION, GET_BY_NAME, GET_COPY_POKEMONS, POST_POKEMON} from "./actions-type"


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

export const orderPokemonsByCreation = (order) => {
  return {
    type: ORDER_CREATION,
    payload: order 
  }
}

export const getByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/pokemons/?name=${name}`);
      return dispatch({
        type: GET_BY_NAME,
        payload: data,
      });
    } catch (error) {
      return console.log(error.message);
    }
  };
};

export const getCopyPokemons = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/pokemons");
      return dispatch({
        type: GET_COPY_POKEMONS,
        payload: data,
      });
    } catch (error) {
      return console.log(error.message);
    }
  };
};

export const postPokemon = async (userData) => {
try { 
  const respuesta = await axios.post(`http://localhost:3001/pokemons`, userData);
  return {
    type: POST_POKEMON,
    payload: respuesta.data
  }
} catch (error) {
  return {"error": error.message}
  }
}