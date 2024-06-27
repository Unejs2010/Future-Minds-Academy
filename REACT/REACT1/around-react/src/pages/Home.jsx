
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Service from '../components/Service';
import Work from '../components/Work';
import Clients from '../components/Clients';
import People from '../components/People';
import Testimonials from '../components/Testimonials';
import Case from '../components/Case';
import Intro from '../components/Intro';
import End from '../components/End';



export default function Home(){
return(
    <div>
    <Nav activePage="active" />

    <Hero
      heroContent="The effective solutions for your business"
      unTittle="We are a team who creates marketing strategies for B2B and B2C companies"
    />

    <Stats
      happyClients="540"
      projetCompleted="1240"
      fullTime="30"
      awardsWon="15"
    />

    <Service
      ourServices="Our Services"
      advertising="Advertising communications"
      marketing="Marketing and branding"
      web="Web and Internet marketing"
      email="Email marketing"

      working="Working on communication"
      business="Business copywriting"
    />

    <Work
      industries="Industries we work in"
      services="Services"
      retail="Retail"
      technology="Technology"
    />

    <Clients />
    <People />
    <Testimonials />
<Case />
<Intro />
<End />

  </div>

);

}