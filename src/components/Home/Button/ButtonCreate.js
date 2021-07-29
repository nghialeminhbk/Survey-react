const ButtonCreateSurvey = () => {
    return ( 
        <div className="px-5 mb-4">
            <button type="button" className="btn btn-dark fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="far fa-plus-square me-2"></i>Create new survey
            </button>
        </div>
     );
}
 
export default ButtonCreateSurvey;