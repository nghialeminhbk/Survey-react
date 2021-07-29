import CardSurvey from "../CardSurvey/CardSurvey"

const ListSurveys = () => {
    return ( 
        <div class="px-5 mt-2">
            <div class="row g-5">
                <div class="col-6">
                    <CardSurvey />
                </div>
                <div class="col-6">
                    <CardSurvey />
                </div>
                <div class="col-6">
                    <CardSurvey />
                </div>
            </div>
      </div>
     );
}
 
export default ListSurveys;