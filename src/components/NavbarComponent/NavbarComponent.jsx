import React from 'react';
import '../../styles/Styles.css';
import Logo from '../../assets/images/logoHygge.png';
import { Link } from 'react-router-dom';
import NavLinkAtom from '../../atoms/buttons/NavLinkAtom';


const NavbarComponent = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between header-container p-4">
        <div className="d-flex flex-row align-items-center gap-4 w-75">
          <i className="fa-solid fa-bars h1 text-white"></i>
          <img src={Logo} alt='logo' />
          <NavLinkAtom  as={Link} to="/" class='fs-5' text='COMPRAR'/>
          <NavLinkAtom  as={Link} to="/" class='fs-5' text='ALQUILER'/>
        </div>
      
        <div className="w-30">
          <NavLinkAtom as={Link} to="/" class='fw-bold' text='Publica tu anuncio'/> 
        </div>
      </div>
    </div>
    
  )
}

export default NavbarComponent
