import React, {useState} from 'react';
import './App.css';

import Loginform from './components/Loginform'

function App() {
  const adminUser ={
    email:"talebireza05@gmail.com",
    passworld:"Reza1386"
  }

  const[user, setUser] = useState({name:"",email:""})
const [error,setError] = useState("");

const Login = details => {
  console.log(details);
  if (details.email==adminUser.email && details.passworld==adminUser.passworld){
    console.log("loged in");
    setUser({
      name:details.name,
      email:details.email
    });
  }else{
    console.log("details do not match");
    setError("details do not match");
  }
}

const Logout = () =>{
  console.log("logout");
  setUser({name:"",email:""})
}
  return (


    <div className="App">
{(user.email != "") ? (
  <div className="welcome">
    <h2>welcome,<span>{user.name}</span></h2>
    <button onClick={Logout}>Logout</button>
    </div>
):(
  <Loginform Login={Login}error={error} />
)}


    </div>
  );
}

export default App;
