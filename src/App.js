import './App.css';
import About from './Components/About';
import Accomplish from './Components/Accomplish';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Expertise from './Components/Expertise';
import Navbar from './Components/Navbar';
import Technology from './Components/Technology';

function App() {
  return (
    <>
      <Navbar />
      <div class="container-fluid px-5 py-5" style={{backgroundColor: "#F5F5F5"}}>
        <About />
        <Expertise />
        <Experience />
        <Accomplish />
        <Technology />
        <Education />
        <Certification />
        <Contact />
      </div>
      
    </>
  );
}

export default App;
