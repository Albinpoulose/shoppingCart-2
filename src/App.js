import './App.css';
import Home from './User/Pages/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AddProduct from './Admin/Pages/AddProduct';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
       <Route exact path='/' element={<Home/>} >
       </Route>
       <Route path='/admin' element={<AddProduct/>} >
       </Route>
      </Routes>     
      </BrowserRouter>
      
    </div>
  );
}

export default App;
