import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './css/fma-general.css';
import './css/fma-responsive.css';
import './css/homeStyle.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portofolio';
import Blogg from './pages/Blogg'
import Bloggdetails from './pages/Bloggdetails';
import Contatsus from './pages/Contatsus';



const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/services', element: <Services />},
  {path: '/portfolio', element: <Portfolio />},
  {path: '/blog', element: <Blogg />},
  {path: '/blog-details', element: <Bloggdetails />},
  {path: '/contact-us', element: <Contatsus />}
]);


//        FUNCTION-App

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
