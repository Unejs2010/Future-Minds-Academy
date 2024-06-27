import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Counter from './views/Counter'
import ToggleVisibility from './views/ToggleVisibility';
import InputField from './views/InputField';
import FormHandaling from './views/inputEmail';
import ItemList from './views/ItemList'


const router = createBrowserRouter([

 
  {path: '/', element: <Counter />},
  {path: '/toggle-visibility', element: <ToggleVisibility />},
  {path: '/input-field', element: <InputField />},
  {path: '/form-handaling', element: <FormHandaling />},
  {path: '/array-item', element: <ItemList />}
  
]);
function App() {

  return (
    <>
      <h1>React Hooks</h1>
      <RouterProvider router={router} />
    </>
  )};


export default App
