import {GET_POKEMONS} from "./actions-type"

const initislState = {
    allPokemons: []
}

const reducer = (state = initislState, {type, payload}) => {
    switch(type){
        case GET_POKEMONS: return {...state, allPokemons: payload}

        default: return {...state}
    }
}

export default reducer;