import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  console.log(email)
  console.log(password)

  const clickSignIn = () => {

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
