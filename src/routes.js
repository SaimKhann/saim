import React, { useEffect, useState } from "react";
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";

//history
import { history } from "./helpers/history";

//pages
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

function Routerrs() {
//   console.log(hasJWT())
//   function hasJWT() {
//     let flag = false;
    

//     //check user has JWT token
//     localStorage.getItem("token") ? flag=true : flag=false
   
//     return flag
// }

  
  return (
    <BrowserRouter >
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage />}
          // element={hasJWT() ? <HomePage /> : <Navigate replac to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routerrs;

