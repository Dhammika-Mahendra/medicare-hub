import { useState } from "react";
import Admin from "./Admin";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./Login";
import SignInSide from "./Signin";
import BasicTable from "./Admintable";


function App() {

  const [alignment, setAlignment] =useState('L');

  const handleAlignment = (event, newAlignment) => {
    console.log(newAlignment)
    setAlignment(newAlignment);
  };

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Admin></Admin>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signin" element={<SignInSide></SignInSide>}></Route>
    <Route path="/table" element={<BasicTable></BasicTable>}></Route>

    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
