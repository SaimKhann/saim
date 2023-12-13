import React from 'react';
import { Route, Navigate } from 'react-router-dom';
 
const RouteGuard = ({ Element: element, ...rest }) => {
 
   function hasJWT() {
       let flag = false;
 
       //check user has JWT token
       localStorage.getItem("token") ? flag=true : flag=false
      
       return flag
   }
 
   return (
       <Route {...rest}
           render={props => (
               hasJWT() ?
                   <Element {...props} />
                   :
                   <Navigate replace to={{ pathname: '/login' }} />
           )}
       />
   );
};
 
export default RouteGuard;