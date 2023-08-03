import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { cleanPokemonId, getPokemonId } from "../redux/actions";
function Detail (prop) {
    
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemonId(id))
    }, []) 
    
   const allPokemonsCopy = prop.pokemonById

   const cleanPokemon = () => {
      dispatch(cleanPokemonId())
   }

    return(
       <div>
           <h1>Estas en el Detail de cada pokemon</h1>
           <NavLink to={"/home"} >
                <button onClick={cleanPokemon} >Home</button>
           </NavLink>
           {
      allPokemonsCopy.map( poke => {
        return <div key={poke.id}>
          <h3>ID: {id}</h3>
          <img src={poke.imagen} alt="imagen" ></img>
          <h1>Nombre: {poke.name}</h1>
          <h2>Vida: {poke.vida}</h2>
          <h2>Ataque: {poke.ataque}</h2>
          <h2>Defensa: {poke.defensa}</h2>
          {poke.type1 && <h4>Tipo 1: {poke.type1}</h4>}
          {poke.type2 && <h4>Tipo 2: {poke.type2}</h4>}
          {!poke.type2 && <h4>No second type</h4>}
          </div>
      })
      }
       </div>
    )
   }
   
   const mapStateToProps = (state) => {
  return { pokemonById: state.pokemonById };
}
 export default connect(mapStateToProps, null)(Detail);