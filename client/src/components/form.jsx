import { NavLink } from "react-router-dom";
import { useState } from "react";
import { postPokemon } from "../redux/actions";


function Form () {

    
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
     console.log(userData);
     setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postPokemon(userData);
    }


    return(
       <div>
           <NavLink to={"/home"} >
                <button>Home</button>
           </NavLink>
           <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Nombre" name="name" value={userData.name}  onChange={handleChange} />
            <br/>
            <input type="text" placeholder="Imagen" name="imagen" value={userData.imagen}  onChange={handleChange} />
            <br/>
            <input type="text" placeholder="Vida" name="vida" value={userData.vida}  onChange={handleChange} />
            <br/>
            <input type="text" placeholder="Ataque" name="ataque" value={userData.ataque}  onChange={handleChange} />
            <br/>
            <input type="text" placeholder="Defensa" name="defensa" value={userData.defensa}  onChange={handleChange} />
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
            <button>Create</button>
           </form>
       </div>
    )
   }
   
   
   export default Form;