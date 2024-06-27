import '../css/portfolio.css';
import Nav from '../components/Nav';
import Application from "../components/Portofolio/Application";
import End from '../components/End';


export default function Portfolio(){
    return(
        <div>
 <Nav activePage="active" />

<Application />
<End />
        </div>
       
    );
}