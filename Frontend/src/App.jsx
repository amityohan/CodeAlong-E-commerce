// import LoginPage from "./components/authorization/login";
// import Signup from "./Components/Authorization/SignUp";
import {Routes,Route,} from 'react-router-dom'; 
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';


function App(){
  return(
    <>
      {/* <LoginPage/> */}
      {/* <Signup/> */}

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App;