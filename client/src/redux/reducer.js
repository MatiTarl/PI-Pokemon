import {GET_POKEMONS, FILTER_POKEMONS, ORDER_ATACK, ORDER_NAME} from "./actions-type"

const initislState = {
    allPokemons: []
}

const reducer = (state = initislState, {type, payload}) => {
    switch(type){
        case GET_POKEMONS: return {...state, allPokemons: payload}

        case ORDER_NAME: const allPokemonsNameCopy = [...state.allPokemons];
        return{...state, 
            allPokemons: payload === "Nombre A" ? allPokemonsNameCopy.sort((a, b) => (a.name < b.name ? -1 : 1)) :
             payload === "Nombre D" ? allPokemonsNameCopy.sort((a, b) => (a.name > b.name ? -1 : 1)) : allPokemonsNameCopy}

        case ORDER_ATACK: const allPokemonsAttackCopy = [...state.allPokemons];
        return{}
    
        default: return {...state}
    }
}

export default reducer;