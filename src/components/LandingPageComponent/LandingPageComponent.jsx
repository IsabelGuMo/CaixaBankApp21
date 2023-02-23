import React from "react";
import img from "../../assets/background.png";

const LandingPageComponent = () => {
    return (

        <container className= "background">
           { <img src= {img} alt="Portada" /> }

            <div>
      <button>COMPRAR</button>
      <button>ALQUILER</button>
            </div>
            
            <div>
        
            </div>
        </container>
    )
    
    
}


export default LandingPageComponent

