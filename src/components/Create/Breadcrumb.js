import { Link } from "react-router-dom";

const Breadcrumb = () => {
    return (
        <section className="workspace d-flex" >
            <nav style={{'--bs-breadcrumb-divider' : '>'}} aria-label="breadcrumb" className="bg-body px-3 py-2">
                <ol className="breadcrumb m-0 fw-bold">
                    <li className="breadcrumb-item text-dark"><Link className="text-decoration-none text-dark" to="/">My workspace</Link></li>
                    <li className="breadcrumb-item active text-muted" aria-current="page">Survey Love</li>
                    <li className="breadcrumb-item active text-muted" aria-current="page">Insight</li>
                </ol>
            </nav>
            <div className="d-flex align-items-center px-3 border-start border-2">
                <Link to="/insight" className="px-1 text-decoration-none text-muted">Result</Link>
                <Link to="/create" className="px-1 border-bottom border-dark border-2 text-decoration-none text-dark fw-bold">Create</Link>
            </div>
        </section>
     );
}
 
export default Breadcrumb;