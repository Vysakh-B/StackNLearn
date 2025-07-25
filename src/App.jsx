import './App.css';
import Home from './components/Home/Home.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contacts/Contacts.jsx';
import About from './components/About/About.jsx';
import Stacks from './components/Stacks/Stacks.jsx';
import Works from './components/Works/Works.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import CursorFollower from './components/CursorFollower/CursorFollower.jsx';

function App() {
  return (
    <div className="app-container">
      <CursorFollower />
      <Navbar />
      <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="stacks">
          <Stacks />
        </div>
        <div id="works">
          <Works />
        </div>
        <div id="contact">
          <Contact />
        </div>
{/* <div className="top"><a href="#home">^</a></div> */}
    </div>
  );
}

export default App;
