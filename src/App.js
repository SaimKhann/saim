// import './App.css';

import Routerrs from './routes'

import {setAuthToken} from './helpers/setAuthToken'

function App() {

  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }

  return (
    <div className="App">
      <Routerrs/>
    </div>
  );
}

export default App;