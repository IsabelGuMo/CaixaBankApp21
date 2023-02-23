import React from 'react';
import { Link } from 'react-router-dom';

const NavLinkAtom = (props) => {
  return (
    <div>
       <div className="nav-item">
            <Link className={`btn-nav ${props.class}`} to="/">{props.text}</Link>
        </div> 
    </div>
  )
}

export default NavLinkAtom;

NavLinkAtom.defaultProps = {
    text: 'Mi botón',
}