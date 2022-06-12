import './App.css';
import {Routes, Route} from 'react-router-dom';
import Contact from "./containers/contact";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Home from "./containers/home";
import About from "./containers/about";
function App() {
  return (
    <div className="App">
      {/* particles js */}
      {/* navbar */}
      {/* main page content */}

      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/skills' element={<skills/>} />



      </Routes>
    </div>
  );
}

export default App;
