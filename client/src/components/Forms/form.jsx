import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { postPokemon, getPokemons, getTypes, getCopyPokemons} from "../../redux/actions";
import { useDispatch, connect } from "react-redux";
import { validation } from "./validation";
import styles from "./forms.module.css"
function Form (prop) {
    const status = prop.status
    const types = prop.types
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
       <div className={styles.div3} >
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
            { types.map(type => <option value={`${type.name}`} >{type.name}</option>) }
            </select>
            <select onChange={handleChange} value={userData.type2} name="type2">
            <option>Type 2</option>
            { types.map(type => <option value={`${type.name}`} >{type.name}</option>) }
            </select>
            <br/>
            { !errors.general & !errors.name & !errors.imagen & !errors.vida & !errors.ataque & !errors.defensa ? <button>Create</button> : <p className={styles.div2} >Faltan datos para crear un pokemon</p>}
           </form>
           <div>
            <h3 className={styles.div} >Errores:</h3>
            <h4 className={styles.div} >Generales</h4>
            {errors.general ? <p className={styles.div2} >{errors.general}</p> : <p>No hay errores</p>}
            <h4 className={styles.div} >Nombre:</h4>
            {errors.name ? <p> className={styles.div2} {errors.name}</p> : <p>No hay errores</p>}
            <h4 className={styles.div} >Imagen:</h4>
            {errors.imagen ? <p className={styles.div2} >{errors.imagen}</p> : <p>No hay errores</p>}
            <h4 className={styles.div} >Vida</h4>
            {errors.vida ? <p className={styles.div2} >{errors.vida}</p> : <p>No hay errores</p>}
            <h4 className={styles.div} >Ataque</h4>
            {errors.ataque ? <p className={styles.div2} >{errors.ataque}</p> : <p>No hay errores</p>}
            <h4 className={styles.div} >Defensa</h4>
            {errors.defensa ? <p className={styles.div2} >{errors.defensa}</p> : <p>No hay errores</p>}
           </div>
       </div>
    )
   }
   
   const mapStateToProps = (state) => {
    return { status: state.status,
             types: state.types
    };
  }
   export default connect(mapStateToProps, null)(Form);