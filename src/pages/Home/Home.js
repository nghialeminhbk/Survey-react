import ButtonCreateSurvey from "../../components/Home/Button/ButtonCreate";
import ListSurveys from "../../components/Home/LisrSurveys/ListSurveys";
import NavbarHeader from "../../components/NavBar/NavBar";

const Home = () => {
    return ( 
        <div>
            <h3 className="px-5 py-3 fw-bold text-dark"> My workspace</h3>
            <ButtonCreateSurvey />
            <ListSurveys />
        </div>
     );
}
 
export default Home;