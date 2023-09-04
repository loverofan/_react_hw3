
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [message, SetMessage] = useState('');
  
  const server = 'https://todolist-api.hexschool.io';
  const signUpAPI = server + '/users/sign_up';

  const signUp = async () => {
    try {
      const res = await axios.post((signUpAPI), {
        email,
        password,
        nickname
      });
      const successMessage = `註冊成功, UID:  + ${res.data.uid}`;
      SetMessage(successMessage);    
    } catch (error) {
      // console.log(error.response.data); 
      const errorMessage = `註冊失敗: ${error.message}`;
      SetMessage(errorMessage);
    }
  }

  return (
    <>
      <hr />
      <div>
        <h1>註冊</h1>
        <label htmlFor="email" 
               className='badge'>Email</label>
        <input type="email" id='email' name='email' placeholder='Email' 
               onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="password" 
               className='badge' >Password</label>
        <input type="password" id='password' name='password' placeholder='Password' 
               onChange={(e) => setPassword(e.target.value)}/>

        <label htmlFor="nickname" 
               className='badge'>Nick Name</label>
        <input type="text" id='nickname' name='nickname' placeholder='Nickname' 
               onChange={(e) => setNickname(e.target.value)}/>

        <button className='btn btn-primary' 
          onClick={signUp}>送出註冊</button>
        <p>{message}</p>
      </div>

      <hr />
      <hr />
      <hr />

    </>
  )
}

export default App
