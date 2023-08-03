import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { postPokemon, getPokemons, getTypes, getCopyPokemons} from "../redux/actions";
import { useDispatch } from "react-redux";
import { validation } from "./validation";

function Form () {

    const dispatch = useDispatch();
    const [ errors, setErrors ] = useState({
        general: "Debe completar todos los campos y por lo menos 1 type",
        name: "",
        imagen: "",
        vida: "",
        ataque: "",
        defensa: "",
        type1: "",
        type2: ""
    });

    const [userData, setUserData] = useState({
        name: "",
        imagen: "",
        vida: "",
        ataque: "",
        defensa: "",
        type1: "",
        type2: ""
    })

    const handleChange = (event) =>{
     setUserData({...userData, [event.target.name]: event.target.value});
     setErrors(validation({...userData, [event.target.name]: event.target.value.toLowerCase()}));
    }

    const handleSubmit = (event) => {
        setUserData({...userData, name: userData.name.toLocaleLowerCase()})
        event.preventDefault();
        dispatch(postPokemon(userData));
        setUserData({
        name: "",
        imagen: "",
        vida: "",
        ataque: "",
        defensa: "",
        type1: "",
        type2: ""})
    }

    const handleHome = () => {
        dispatch(getPokemons());
        dispatch(getCopyPokemons());
    }

    useEffect(() => {
        dispatch(getTypes());
        },[])    

    return(
       <div>
           <NavLink to={"/home"} >
                <button onClick={handleHome} >Home</button>
           </NavLink>
           <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Nombre" name="name" value={userData.name}  onChange={handleChange} />
            <br/>
            <input type="text" placeholder="Imagen" name="imagen" value={userData.imagen}  onChange={handleChange} />
            <br/>
            <input type="number" placeholder="Vida" name="vida" value={userData.vida}  onChange={handleChange} />
            <br/>
            <input type="number" placeholder="Ataque" name="ataque" value={userData.ataque}  onChange={handleChange} />
            <br/>
            <input type="number" placeholder="Defensa" name="defensa" value={userData.defensa}  onChange={handleChange} />
            <br/>
            <select onChange={handleChange} value={userData.type1} name="type1" >
            <option>Type 1</option>
            <option value={"normal"}  >normal</option>
            <option value={"fighting"} >fighting</option>
            <option value={"flying"} >flying</option>
            <option value={"poison"} >poison</option>
            <option value={"ground"} >ground</option>
            <option value={"rock"} >rock</option>
            <option value={"bug"} >bug</option>
            <option value={"ghost"} >ghost</option>
            <option value={"steel"} >steel</option>
            <option value={"fire"} >fire</option>
            <option value={"water"} >water</option>
            <option value={"grass"} >grass</option>
            <option value={"electric"} >electric</option>
            <option value={"psychic"} >psychic</option>
            <option value={"ice"} >ice</option>
            <option value={"dragon"} >dragon</option>
            <option value={"dark"} >dark</option>
            <option value={"fairy"} >fairy</option>
            <option value={"unknown"} >unknown</option>
            <option value={"shadow"} >shadow</option>
            </select>
            <select onChange={handleChange} value={userData.type2} name="type2">
            <option>Type 2</option>
            <option value={"normal"} >normal</option>
            <option value={"fighting"} >fighting</option>
            <option value={"flying"} >flying</option>
            <option value={"poison"} >poison</option>
            <option value={"ground"} >ground</option>
            <option value={"rock"} >rock</option>
            <option value={"bug"} >bug</option>
            <option value={"ghost"} >ghost</option>
            <option value={"steel"} >steel</option>
            <option value={"fire"} >fire</option>
            <option value={"water"} >water</option>
            <option value={"grass"} >grass</option>
            <option value={"electric"} >electric</option>
            <option value={"psychic"} >psychic</option>
            <option value={"ice"} >ice</option>
            <option value={"dragon"} >dragon</option>
            <option value={"dark"} >dark</option>
            <option value={"fairy"} >fairy</option>
            <option value={"unknown"} >unknown</option>
            <option value={"shadow"} >shadow</option>
            </select>
            <br/>
            { !errors.general & !errors.name & !errors.imagen & !errors.vida & !errors.ataque & !errors.defensa ? <button>Create</button> : <p>Faltan datos para crear un pokemon</p>}
           </form>
           <div>
            <h3>Errores:</h3>
            <h4>Generales</h4>
            {errors.general ? <p>{errors.general}</p> : <p>No hay errores</p>}
            <h4>Nombre:</h4>
            {errors.name ? <p>{errors.name}</p> : <p>No hay errores</p>}
            <h4>Imagen:</h4>
            {errors.imagen ? <p>{errors.imagen}</p> : <p>No hay errores</p>}
            <h4>Vida</h4>
            {errors.vida ? <p>{errors.vida}</p> : <p>No hay errores</p>}
            <h4>Ataque</h4>
            {errors.ataque ? <p>{errors.ataque}</p> : <p>No hay errores</p>}
            <h4>Defensa</h4>
            {errors.defensa ? <p>{errors.defensa}</p> : <p>No hay errores</p>}
           </div>
       </div>
    )
   }
   
   
   export default Form;