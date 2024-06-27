import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Spring from './pages/Spring';
import Summer from './pages/Summer';
import Fall from './pages/Fall';
import Winter from './pages/Winter';
import Allseasons from './pages/Allseasons';




const router = createBrowserRouter([

 
  {path: '/', element: <Spring />},
  {path: '/summer', element: <Summer />},
  {path: '/fall', element: <Fall />},
  {path: '/winter', element: <Winter />},
  {path: '/allseasons', element: <Allseasons />}
]);


//        FUNCTION-App

function App() {
  return (
    <div>
    <RouterProvider router={router} />
    
    </div>
  );
}


export default App;
