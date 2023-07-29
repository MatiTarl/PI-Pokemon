import { NavLink } from "react-router-dom";

function Detail () {
    return(
       <div>
           <h1>Estas en el Detail de cada pokemon</h1>
           <NavLink to={"/home"} >
                <button>Home</button>
           </NavLink>
       </div>
    )
   }
   
   
   export default Detail;