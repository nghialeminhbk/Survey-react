import useFetchData from "../../components/fetchAPI/useFetchData";
import ButtonCreateSurvey from "../../components/Home/Button/ButtonCreate";
import ListSurveys from "../../components/Home/LisrSurveys/ListSurveys";
import NavbarHeader from "../../components/NavBar/NavBar";

const Home = () => {
    const {data: surveys, isPending, error} = useFetchData('http://localhost:8000/api/surveys');
    return ( 
        <div>
            <h3 className="px-5 py-3 fw-bold text-dark"> My workspace</h3>
            <ButtonCreateSurvey />
            {surveys && <ListSurveys surveys={ surveys } />}
        </div>
     );
}
 
export default Home;