
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {

  const server = 'https://todolist-api.hexschool.io'; //壞惹? 0905
  // const server = 'https://todolist-api.hexschool.io/doc';

  return (
    <>
      <hr />
      <div>
        <SignUp server={server} />
      </div>
      <hr />
        <SignIn server={server} />
      <hr />
      <hr />

    </>
  )
}

export default App
