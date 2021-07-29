import { Link } from "react-router-dom";

const CardSurvey = () => {
    return ( 
        <div className="card text-center border-dark">
                <div className="card-header d-flex flex-row justify-content-end">
                      <button className="btn btn-close" data-bs-toggle='modal' data-bs-target="#MyModal"></button>     
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">Survey Love</h5>
                    <p className="card-text text-muted"> 3 responses</p>
                    <Link to="/insight" className="btn btn-outline-dark fw-bold">Go</Link>
                </div>
        </div>
     );
}
 
export default CardSurvey;