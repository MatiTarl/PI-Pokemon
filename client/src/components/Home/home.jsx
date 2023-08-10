import React, { useState, useEffect} from "react";
import {NavLink, Nav } from "react-router-dom";
import { connect, useDispatch, } from "react-redux";
import { orderPokemons, orderPokemonsByAtack, orderPokemonsByCreation, getByName, getPokemons, getCopyPokemons, filterByTypes} from "../../redux/actions";
import styles from "./home.module.css";

 function Home(prop) {
 const allPokemonsCopy = prop.allPokemons; 
 const allTypes = prop.types;
//---------------------------handlers de los filtros-----------------------
  const dispatch = useDispatch();
  const handlerOrderByName = (event) => {
    dispatch(orderPokemons(event.target.value));
  }
  const handlerOrderByAtack = (event) => {
    dispatch(orderPokemonsByAtack(event.target.value));
  }
  const handlerOrderByCreation = (event) => {
    dispatch(orderPokemonsByCreation(event.target.value));
  }
//-----------------------SearchBar----------------------------------------
const [name, setName] = React.useState("");
const handleChange = event => {
   const {value} = event.target;
   setName(value);
}
const searchFuntion = (name) => {
  const lowerName = name.toLowerCase()
  if (name.length < 1) {
    return alert("Debe completar el campo para buscar")
  }
  dispatch(getByName(lowerName));
}

//------------------------Paginado----------------------------------------
const pokemonPerPage = 12; 
let actualPage = 1;
const [pokemons, setPokemons] = useState([...allPokemonsCopy].slice(0, pokemonPerPage));
const [currentPage, setCurrentPage] = useState(0);

const prevHandler = () => {
    const prevPage = currentPage -1
    if(prevPage < 0) return;
    const firstIndex = prevPage * pokemonPerPage; 
    const lastIndex  = firstIndex + pokemonPerPage;
    setPokemons([...allPokemonsCopy].slice(firstIndex, lastIndex));
    setCurrentPage(prevPage);
}
const nextHandler = () => {
    const totalPokemons = allPokemonsCopy.length;
    const nextPage = currentPage + 1; 
    const firstIndex = nextPage * pokemonPerPage;
    const lastIndex  = firstIndex + pokemonPerPage;
    if(firstIndex > totalPokemons) return;
    setPokemons([...allPokemonsCopy].slice(firstIndex, lastIndex));
    setCurrentPage(nextPage);
}

useEffect(() => {
  setPokemons([...allPokemonsCopy].slice(0, pokemonPerPage));
  setCurrentPage(0);
}, [allPokemonsCopy])

//-------------------------Reset de home----------------------------
const resetHandler = () => {
  dispatch(getPokemons());
  dispatch(getCopyPokemons());
}
//--------------------------filtro de typos-------------------------------
const handlerTypes = (event) => {
  dispatch(filterByTypes(event.target.value));
}


   return (
    <div className={styles.DivHome}>
      <NavLink to={"/form"} >
      <button>Create Pokemon</button>
      </NavLink>
      <br/>
      <button onClick={resetHandler}>Reset</button>
      <br/>
      <br/>
      <div>
      <input type="search" id="buscador" name="search" onChange={handleChange} className={styles.input} />  
      <button onClick={() => searchFuntion(name)} className={styles.Button} >Buscar</button>
      </div>
      <br/>
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
      <select onChange={handlerTypes} >
        <option value={"A"} >AllTypes</option>
        { allTypes.map( type => <option value={`${type.name}`} >{type.name}</option>)}
      </select>
      <div>
      <h1 className={styles.divPage} >Page {currentPage + 1}</h1>
      <button onClick={prevHandler} className={styles.divPrevNext} >Prev</button>
      <button onClick={nextHandler} className={styles.divPrevNext} >Next</button>
      </div>
      
        {
      pokemons.map( poke => {
        return <div key={poke.id} className={styles.divCartas} >
          <NavLink to={`/detail/${poke.id}`}>
          <h1>{poke.name}</h1>
          <img src={poke.imagen} alt="imagen" ></img>
          {poke.ataque && <h4>Ataque: {poke.ataque}</h4>}
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
  return { allPokemons: state.allPokemons,
           currentPage: state.currentPage,
           displayedPokemons: state.displayedPokemons,
           types: state.types
  };
}
 export default connect(mapStateToProps, null)(Home);