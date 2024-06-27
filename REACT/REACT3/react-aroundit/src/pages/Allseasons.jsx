import Footer from "../components/Footer";
import Nav from "../components/Nav";



export default function Allseasons(){
    return(
        <div>
            <Nav />
         
         <main className="row">
            <div className="col">
                <h1 className="text-center">Welcome to all seasons!</h1>
                <div>
                    <img className="img-xxl" src="assets/images/spring.png" alt="Summer" />
                </div>
                <div>
                    <img className="img-xxl" src="assets/images/summer.png" alt="Summer" />
                </div>
                <div>
                    <img className="img-xxl" src="assets/images/fall.png" alt="Summer" />
                </div>
                <div>
                    <img className="img-xxl" src="assets/images/winter.png" alt="Summer" />
                </div>

            </div>
        </main>
        <Footer />
        </div>


    )
}