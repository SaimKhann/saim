import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({}) {
  // console.log(flag)
const navigate = useNavigate()
const Logout = () => {
  localStorage.removeItem("token");
}
useEffect(() => {
  if(localStorage.getItem("token")){
    navigate('/')
  }else{
    navigate('/login')
  }
})
  return (
    <div>
      <h1>home page</h1>
      <button
        onClick={Logout}
      >
        logout
      </button>
    </div>
  );
}

export default HomePage;
