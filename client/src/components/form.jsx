import { NavLink } from "react-router-dom";

function Form () {
    return(
       <div>
           <h1>¡Crea tu propio Pokemon!</h1>
           <NavLink to={"/home"} >
                <button>Home</button>
           </NavLink>
       </div>
    )
   }
   
   
   export default Form;