
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {

  const server = 'https://todolist-api.hexschool.io'; //壞惹? 0905
  // const server = 'https://todolist-api.hexschool.io/doc';
  const [token, setToken] = useState('')
  const [message, SetMessage] = useState('');



  const handleChangeToken = (newToken) => {
    return setToken(newToken)
  }
  
  const isTokenValid = async () => {

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() +1);
    document.cookie = `hexschoolTodo=${token}; expires=${tomorrow.toUTCString()}`;
    console.log(
      document.cookie
      .split('; ')
      .find((row) => row.startsWith('hexschoolTodo')),
    );

    const checkOutAPI = `${server}/users/checkout`;

    try {
      const res = await axios.get(checkOutAPI, {
        headers: {Authorization: token}
      });
      if (res.data.status == true) {
        const successMessage = `驗證成功, UID: ${res.data.uid}`;
        SetMessage(successMessage);
      }
      console.log(res);
    } catch (error) {
      const errorMessage = `驗證失敗, 詳細訊息: ${error.message}`;
      SetMessage(errorMessage)
    }
  }

  return (
    <>
      <hr />
      <div>
        <SignUp server={server} />
      </div>
      <hr />
        <SignIn server={server} onChangeToken={handleChangeToken} />
      <hr />
        <h1>驗證</h1>
        <input value={token} placeholder='請輸入token' onChange={(e) => setToken(e.target.value)}/>
        <button onClick={isTokenValid}>檢查Token</button>
        <p>{message}</p>
      <hr />

    </>
  )
}

export default App
