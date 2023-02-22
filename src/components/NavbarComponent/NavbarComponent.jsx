import React from 'react'

const NavbarComponent = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between header-container p-4">
        <div className="d-flex flex-row align-items-center gap-3">
          <i className="fa-solid fa-bars h1 text-white"></i>
          <img src={Logo} alt='logo' />
          <NavLinkAtom class='fs-5' text='COMPRAR'/>
          <NavLinkAtom class='fs-5' text='ALQUILER'/>
        </div>
      
        <div className="w-30">
          <NavLinkAtom class='fw-bold' text='Publica tu anuncio'/> 
        </div>
        <h1 className="header-text">CaixaBankApp21</h1>
      </div>
      
    </div>
    </div>
  )
}

export default NavbarComponent