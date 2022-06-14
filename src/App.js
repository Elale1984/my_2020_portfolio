import './App.css';
import {Routes, Route} from 'react-router-dom';
import Contact from "./containers/contact";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Home from "./containers/home";
import About from "./containers/about";
import NavBar from "./components/navBar";
import Skills from './containers/skills';
function App() {
  return (
    <div className="App">
      {/* particles js */}
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
