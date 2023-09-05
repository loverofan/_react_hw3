
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import SignUp from './components/SignUp';

function App() {

  const server = 'https://todolist-api.hexschool.io';

  return (
    <>
      <hr />
      <div>
        <SignUp server={server}/>
      </div>

      <hr />
      <hr />
      <hr />

    </>
  )
}

export default App
