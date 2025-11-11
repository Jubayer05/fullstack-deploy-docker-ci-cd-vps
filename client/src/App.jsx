import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://203.96.189.69:5000/api/message')
    .then((res) => res.json())
    .then((data) => {
      setMessage(data.message)});
  },[])

  return (
    <>
      <h1>Hi Jubayer 👋 </h1>
      <p className="" style={{fontSize: '24px'}}>
        {message}
      </p>
    </>
  )
}

export default App
