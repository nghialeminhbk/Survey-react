import { Link } from "react-router-dom";

const CardSurvey = ({name, total}) => {
    return ( 
        <div className="card text-center border-dark">
                <div className="card-header d-flex flex-row justify-content-end">
                      <button className="btn btn-close" data-bs-toggle='modal' data-bs-target="#MyModal"></button>     
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{ name }</h5>
                    <p className="card-text text-muted"> { total!=1 && <span>{total} responses</span> } { total==1 && <span>{total-1} responses</span> }</p>
                    <Link to="/insight" className="btn btn-outline-dark fw-bold">Go</Link>
                </div>
        </div>
     );
}
 
export default CardSurvey;