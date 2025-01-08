// import LoginPage from "./components/authorization/login";
// import Signup from "./Components/Authorization/SignUp";
import {Routes,Route,} from 'react-router-dom'; 
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ProductEntryPage from './Pages/ProductEntryPage';

function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product-entry-page" element={<ProductEntryPage/>} />   
      </Routes>
    </>
  )
}

export default App;