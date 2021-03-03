import './styles/styles.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [fetch, setFetch] = useState('')

  useEffect(()=>{
    axios
      .get(`https://api.github.com/users/Broast42/repos`)
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
      <img src="https://ghchart.rshah.org/Broast42" alt="Broast42's Github chart" />
      <div className="">Test text to test some stuff</div>
      
    </div>
  );
}

export default App;
