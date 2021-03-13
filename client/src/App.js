import './styles/styles.scss'
import BioBox from './components/HomePage/BioBox';
import Skills from './components/HomePage/Skills';
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [fetch, setFetch] = useState('')
  const graphcolor= '29648a';

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
      <BioBox data={fetch} graphcolor={graphcolor}/>
      <Skills />
      
    
    
    
    
    </div>
  );
}

export default App;
