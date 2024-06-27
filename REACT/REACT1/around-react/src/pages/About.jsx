
import '../css/about-us.css';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Abroach from '../components/About/Abroach';
import Located from '../components/About/Located';
import Services from '../components/About/Services';
import EndAbout from '../components/About/EndAbout';



export default function About(){
return(
    <div>
    <Nav activePage="active" />

    <Hero
     heroContent="The effective solutions for your business"
     unTittle="We are a team who creates marketing strategies for B2B and B2C companies"
    />

   <Abroach />

   <Located />

<Services />

   <EndAbout />

  </div>

);

}