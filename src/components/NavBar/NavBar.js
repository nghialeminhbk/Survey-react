const NavbarHeader = () => {
    return ( 
        <header className="px-3 pt-2 sticky-top bg-white d-flex justify-content-between flex-row border-bottom">
            <div className="logo">
                <i className="fas fa-user-shield text-dark"></i> <strong className="text-dark">NGHIATITAN</strong>
            </div>
            <div className="d-flex flex-row">
                <a className="none-style text-dark me-2 text-decoration-none">Hello admin</a>
            </div>
      </header>
     );
}
 
export default NavbarHeader;