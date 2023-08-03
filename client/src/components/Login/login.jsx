import { NavLink } from 'react-router-dom';
import { getCopyPokemons, getPokemons } from '../../redux/actions';
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import styles from "./login.module.css"
function Login () {

    const dispatch = useDispatch();

    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
    if (!dataLoaded) {
      dispatch(getPokemons());
      dispatch(getCopyPokemons());
      setDataLoaded(true);
    }
    }, [dispatch, dataLoaded]);

    return(
       <div className={styles.divLog}>
           <h1>Bienvenido a mi Pokemon Api</h1>
            <NavLink to={"/home"} >
                <button>Login</button>
            </NavLink>
       </div>
    )
   }


   
   
   export default Login;