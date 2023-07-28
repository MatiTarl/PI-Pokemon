import axios from "axios"
import {GET_POKEMONS} from "./actions-type"

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