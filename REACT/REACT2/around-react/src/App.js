import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';


const router = createBrowserRouter([
  {path: '/', element: <Home />}
]);


//        FUNCTION-App

 
function App() {
return (
    <RouterProvider router={router} />
  );


}

export default App;
