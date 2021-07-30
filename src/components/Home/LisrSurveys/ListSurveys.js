import CardSurvey from "../CardSurvey/CardSurvey"

const ListSurveys = ({surveys}) => {
    return ( 
        <div class="px-5 mt-2">
            <div class="row g-5">
                {surveys.map(survey => (
                    <div className="col-6" key={ survey.id }>
                        <CardSurvey name={survey.name} total={survey.total} />
                    </div> 
                ))}
            </div>
      </div>
     );
}
 
export default ListSurveys;