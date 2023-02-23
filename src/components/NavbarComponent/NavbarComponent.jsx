import React from 'react';
import '../../styles/Styles.css';
import Logo from '../../assets/images/logoHygge.png';
import { Link, NavLink} from 'react-router-dom';


const NavbarComponent = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between header-container p-4">
        <div className="d-flex flex-row align-items-center gap-4 w-75">
          <NavLink as={Link} to="/"><img src={Logo} alt='logo' /></NavLink>
          <NavLink className='linkNav' as={Link} to="detailBy">COMPRAR</NavLink>
          <NavLink className='linkNav' as={Link} to="detailRent">ALQUILAR</NavLink>
          
        </div>
      
        <div className="w-30">
          <NavLink className='linkNav' as={Link} to="formulary">ANUNCIATE</NavLink> 
        </div>
      </div>
    </div>
    
  )
}

export default NavbarComponent
