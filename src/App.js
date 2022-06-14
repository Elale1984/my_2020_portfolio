import './App.css';
import {Routes, Route} from 'react-router-dom';
import Contact from "./containers/contact";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Home from "./containers/home";
import About from "./containers/about";
import NavBar from "./components/navBar";
import Skills from './containers/skills';
import particles from './utils.js/particles';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function App() {
  const handleInit = async (main)=>
    await loadFull(main)
  return (
  
    <div className="App">
      {/* particles js */}
      <Particles id="particles" options={particles} init={handleInit}/>
      {/* navbar */}

      <NavBar/>

      {/* main page content */}

      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        
      


      </Routes>
    </div>
  );
}

export default App;
