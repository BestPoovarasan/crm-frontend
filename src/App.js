import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Dashboard from "./components/dashboard/dasboard"
// import Sidebar from "./components/sidebar/sidebar.jsx"
import Login from "./components/login/login.jsx"
import Signup from "./components/signup/signup.jsx"
function App() {
  return (
    <>
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route> 
      <Route path="/dashboard" element={<Dashboard />}></Route> 
    </Routes>
  </BrowserRouter>
   
    
    </>
    
  );
}

export default App;
