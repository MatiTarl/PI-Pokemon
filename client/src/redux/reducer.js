import { GET_POKEMONS, ORDER_ATACK, ORDER_NAME, ORDER_CREATION, GET_BY_NAME, GET_COPY_POKEMONS} from "./actions-type"; 

 const initialState = { 
  allPokemons: [],
  PokemonsCopy: [],
}; 

 const reducer = (state = initialState, { type, payload }) => { 
  switch (type) { 
// ___________________________________________________________
    case GET_POKEMONS: 
      return { ...state, allPokemons: payload }; 
// ___________________________________________________________
   case GET_COPY_POKEMONS:
    return {...state, PokemonsCopy: payload };
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
      const allPokemonsCopy = [...state.PokemonsCopy]; 
      const pokemonsFiltered = [];
      const filteredPokemons = 
        payload === "API" ? allPokemonsCopy.map((pokemon) => {
          if(pokemon.id.toString().length < 3){
            pokemonsFiltered.push(pokemon)
          }}) 
        : payload === "BACK" ? allPokemonsCopy.map((pokemon) => {
          if(pokemon.id.toString().length > 2){
            pokemonsFiltered.push(pokemon)
          }}) 
        : payload === "API_BACK" && pokemonsFiltered.push(...state.PokemonsCopy); 
      return { 
        ...state, 
        allPokemons: pokemonsFiltered 
      }; 
// ___________________________________________________________
    case GET_BY_NAME: 
    return {...state, allPokemons: [payload]}
//_____________________________________________________________ 

     default: 
      return { ...state }; 
  } 
}; 
 export default reducer;