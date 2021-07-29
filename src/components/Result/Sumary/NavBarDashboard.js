import { Link } from "react-router-dom";

const NavBarDashBoard = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-body border-2 border-top border-bottom">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 border-bottom-4">
                    <li className="nav-item">
                    <Link className="nav-link text-muted" aria-current="page" to="/insight">Insight</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active fw-bold" to="/summary">Summary</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-muted" to="/response">Response [3]</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBarDashBoard;