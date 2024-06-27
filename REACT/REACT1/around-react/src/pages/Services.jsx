import Nav from '../components/Nav';
import Service from '../components/Service';
import Benefits from '../components/Servicces/Benefits';
import Testimonials from '../components/Testimonials';
import Case from '../components/Case';
import Intro from '../components/Intro';
import End from '../components/End';
import '../css/services.css';



export default function Servies(){
return(
    <div>
    <Nav activePage="active" />

   

  

    <Service
      ourServices="Our Services"
      advertising="Advertising communications"
      marketing="Marketing and branding"
      web="Web and Internet marketing"
      email="Email marketing"

      working="Working on communication"
      business="Business copywriting"
    />

  <Benefits />


  <Testimonials />
<Case />
<Intro />
<End />
  </div>

);

}