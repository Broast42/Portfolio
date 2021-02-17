import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [fetch, setFetch] = useState('')

  useEffect(()=>{
    axios
      .get(`https://api.github.com/users/Broast42`)
      .then(res=>{
        setFetch(res)
      })
      .catch(err => {
        console.log(err)
      })    
  },[])
  console.log(fetch)
  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
