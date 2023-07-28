import { NavLink } from 'react-router-dom';
import { getPokemons } from '../redux/actions';
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"

function Login () {

    const dispatch = useDispatch();

    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
    if (!dataLoaded) {
      dispatch(getPokemons());
      setDataLoaded(true);
    }
    }, [dispatch, dataLoaded]);

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