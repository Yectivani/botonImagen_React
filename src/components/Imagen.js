import React from "react";
import oso from './oso.jpg';
import perro from './perro.jpg';
import aguila from './aguila.jpg';
import leon from './leon.jpg';
import mono from './mono.png';



const Imagen = (atributos) => {
    if(atributos.nombreImagen == "oso"){
        return (  
            <img src = {oso} height = "300" width = "300"></img>
        );
    }else if(atributos.nombreImagen  == "perro"){
        return (  
            <img src = {perro} height = "300" width = "300"></img>
        );
    }else if(atributos.nombreImagen  == "aguila"){
        return (  
            <img src = {aguila} height = "300" width = "300"></img>
        );
    }else if(atributos.nombreImagen  == "leon"){
        return (  
            <img src = {leon} height = "300" width = "300"></img>
        );
    }else if(atributos.nombreImagen  == "mono"){
        return (  
            <img src = {mono} height = "300" width = "300"></img>
        );
    }else {
        return(null);
    }
    
}
 
export default Imagen;