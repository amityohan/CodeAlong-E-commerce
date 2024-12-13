import LoginPage from "./components/authorization/login";
import Signup from "./Components/Authorization/SignUp";
import {Routes,Route,} from 'react-router-dom'; 

function App(){
  return(
    <>
      {/* <LoginPage/> */}
      {/* <Signup/> */}

      <Routes>
        <Route path="/" element={<>HOME PAGE</>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </>
  )
}

export default App;