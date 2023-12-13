import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { setAuthToken } from "../helpers/setAuthToken"

function Login() {
  const navigate = useNavigate()

  const handleSubmit = (email, password) => {
    //reqres registered sample user
    const loginPayload = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }

    axios.post("https://reqres.in/api/login", loginPayload)
      .then(response => {
        //get token from response
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem("token", token);
        navigate("/")


        //set token to axios common header
        // setAuthToken(token);

        //redirect user to home page

      })
      .catch(err => console.log(err));
  };

  return (
    <>
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const [email, password] = event.target.children;
        handleSubmit(email, password);
      }}
    >
      <label >Email</label><br />
      <input type="email" id="email" name="email"/><br />
      <label >Password</label><br />
      <input type="password" id="password" name="password"/><br></br>
      <input type="submit" value="Submit" />
     
    </form>

    </>
  );
}
export default Login