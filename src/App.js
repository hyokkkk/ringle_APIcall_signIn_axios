import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { jwtTokenUpdate } from './redux/userSlice'

function App () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState('')

  const jwtToken = useSelector((state) => state.users.jwtToken);
  const dispatch = useDispatch();

  console.log(jwtToken)

  const clickSignIn = async () => {
    let payload = {email: email, password: password};
    const res = await axios.post("https://api.ringleplus.com/api/v4/authenticate/signin", payload);

    console.log(res)

    if (res.data){
      if (res.data.success){
        setLoading(true);
        dispatch(jwtTokenUpdate(res.data.jwt_token));
      }else{
        alert('error');
        setLoading(false);
      }
    }else {
      alert('something went wrong')
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <input placeholder='id' onChange={e => {setEmail(e.target.value)}} ></input>
      <br/>
      <input type='password' placeholder='password' onChange={e => {setPassword(e.target.value)}}></input>
      <br/>
      <button onClick={clickSignIn}> sign In </button>
      
    </div>
  )
}

export default App;
