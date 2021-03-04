import './styles/styles.scss'
import BioBox from './components/HomePage/BioBox';
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [fetch, setFetch] = useState('')

  useEffect(()=>{
    axios
      .get(`https://api.github.com/users/Broast42`)
      .then(res=>{
        setFetch(res.data)
      })
      .catch(err => {
        console.log(err)
      })    
  },[])

  //document.querySelector('body').removeAttribute('class');
  document.querySelector('body').classList.add('modern')
  
  
  console.log(fetch)
  return (
    <div className="App">
      <BioBox data={fetch}/>
    </div>
  );
}

export default App;
