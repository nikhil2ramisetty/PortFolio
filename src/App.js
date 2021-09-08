import './App.css';
import NavBar from './Components/NavBar'
import MainPage from './Components/MainPage'
import { useState } from 'react';
import Home from './Components/Home'
import About from './Components/About'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
function App() {
  const p1 = () => {
    return <Home />
  }
  const p2 = () => {
    return <About />
  }
  const p3 = () => {
    return <Education />
  }
  const p4 = () => {
    return <Contact />
  }
  const p5 = () => {
    return <Projects />
  }
  let [content ,setContent] = useState({Page: p1});
  function clickHandler(props){
    if(props==='HOME'){
      setContent({Page: p1});
    }
    else if (props==='ABOUT'){
      setContent({Page: p2});
    }
    else if (props==='EDUCATION'){
      setContent({Page: p3});
    }
    else if (props==='CONTACT'){
      setContent({Page: p4});
    }
    else if (props==='PROJECTS'){
      setContent({Page: p5});
    }
  }
  
  return (
    <div>
      <NavBar clickHandler={clickHandler}/>
      <content.Page />
    </div>
  );
}

export default App;
