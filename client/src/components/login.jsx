import { NavLink } from 'react-router-dom';


function Login () {
    return(
       <div>
           <h1>Bienvenido a mi Pokemon Api</h1>
            <NavLink to={"/home"} >
                <button>Login</button>
            </NavLink>
       </div>
    )
   }
   
   
   export default Login;