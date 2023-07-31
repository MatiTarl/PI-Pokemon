import { GET_POKEMONS, ORDER_ATACK, ORDER_NAME, ORDER_CREATION, GET_BY_NAME} from "./actions-type"; 

 const initialState = { 
  allPokemons: [], 
  allPokemonsCopy: [] 
}; 

 const reducer = (state = initialState, { type, payload }) => { 
  switch (type) { 
// ___________________________________________________________
    case GET_POKEMONS: 
      return { ...state, allPokemons: payload }; 
// ___________________________________________________________
     case ORDER_NAME: 
      const allPokemonsNameCopy = [...state.allPokemons]; 
      return { 
        ...state, 
        allPokemons: payload === "Nombre A" ? allPokemonsNameCopy.sort((a, b) => (a.name < b.name ? -1 : 1)) : allPokemonsNameCopy.sort((a, b) => (a.name > b.name ? -1 : 1)) 
      }; 
// ___________________________________________________________
     case ORDER_ATACK: 
      const allPokemonsAttackCopy = [...state.allPokemons]; 
      return { 
        ...state, 
        allPokemons: payload === "Ataque A" ? allPokemonsAttackCopy.sort((a, b) => a.ataque - b.ataque) : allPokemonsAttackCopy.sort((a, b) => b.ataque - a.ataque) 
      }; 
// ___________________________________________________________
     case ORDER_CREATION: 
      const allPokemonsCopy = [...state.allPokemons]; 
      const filteredPokemons = 
        payload === "API" ? allPokemonsCopy.filter((pokemon) => pokemon.id.toString().length > 2) 
        : payload === "BACK" ? allPokemonsCopy.filter((pokemon) => pokemon.id.toString().length < 3) 
        : payload === "API_BACK" && allPokemonsCopy; 
      return { 
        ...state, 
        filteredPokemons: filteredPokemons 
      }; 
// ___________________________________________________________
    case GET_BY_NAME: 
    return {...state, allPokemonsCopy: payload}

     default: 
      return { ...state }; 
  } 
}; 
 export default reducer;