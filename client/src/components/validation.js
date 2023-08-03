export const validation = (userData) => {
    const errors = {};
     if(!userData.name || !userData.imagen || !userData.vida || !userData.ataque || !userData.defensa || !userData.type1) errors.general = "Debe completar todos los campos y por lo menos 1 type"
    
         if(!/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(userData.imagen)) errors.imagen = "La imagen debe ser valida"
         if(userData.name.length < 1) errors.name = "El name debe tener mas de 1 caracter";
         if(!/^([1-9][0-9]{0,2}|1000)$/.test(userData.vida)) errors.vida = "La vida no puede ser menor a 0 ni mayor a 999"
         if(!/^([1-9][0-9]{0,2}|1000)$/.test(userData.ataque)) errors.ataque = "El ataque no puede ser menor a 0 ni mayor a 999"
         if(!/^([1-9][0-9]{0,2}|1000)$/.test(userData.defensa)) errors.defensa = "La defensa no puede ser menor a 0 ni mayor a 999" 
    
    return errors 
}