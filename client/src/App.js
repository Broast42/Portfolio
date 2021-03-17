import './styles/styles.scss'
import BioBox from './components/HomePage/BioBox';
import Skills from './components/HomePage/Skills';
import ChangeProfile from './components/HomePage/ChangeProfile';
import ThemeUI from './components/HomePage/ThemeUI';
import Projects from './components/HomePage/Projects';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

  const [fetch, setFetch] = useState('');

  const [proInput, setProInput] = useState('');
  const [profile, setProfile] = useState('Broast42');
  const graphcolor= '29648a';

  useEffect(()=>{
    axios
      .get(`https://api.github.com/users/${profile}`)
      .then(res=>{
        setFetch(res.data)
      })
      .catch(err => {
        console.log(err)
      })    
  },[profile])

  //document.querySelector('body').removeAttribute('class');
  document.querySelector('body').classList.add('modern')
  
  const setInput = (e) => {
    setProInput(e.target.value);
  }

  const changeProfile = () => {
    setProfile(proInput);
  }
  
  console.log(fetch)
  return (
    <div className="App">
      <ChangeProfile 
        setInput={setInput}
        changeProfile={changeProfile}
        profile={profile}
      />
      <BioBox 
        data={fetch} 
        graphcolor={graphcolor}
        profile={profile}
      />
      <Skills />
      <ThemeUI/>
      <Projects />
    
    
    
    </div>
  );
}

export default App;
