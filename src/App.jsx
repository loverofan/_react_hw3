
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import CheckToken from './components/CheckToken';
import SignOut from './components/SignOut';

function App() {

  const server = 'https://todolist-api.hexschool.io'; //壞惹? 0905
  // const server = 'https://todolist-api.hexschool.io/doc';
  
  const [token, setToken] = useState('')
  const handleChangeToken = (newToken) => {
    // console.log("newToken====>", newToken);
    return setToken(newToken)
  }

  /* 
  test090502@gmail.ccc
  1qaz2wsx
  */



  return (
    <>
      <hr />
        <SignUp server={server} />
      <hr />
        <SignIn server={server} onChangeToken={handleChangeToken} />
      <hr />
        <CheckToken server={server} onChangeToken={handleChangeToken}/>
      <hr />
        <SignOut server={server} token={token} onTokenUpdate={handleChangeToken}/>
      <hr />

    </>
  )
}

export default App
