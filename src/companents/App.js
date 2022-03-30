import './styles/App.css';
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Indastrial from "./Industrial";
import UsProject from "./UsProject";
import Education from "./Education";
import Footer from './Footer';
import EducationalPrograms from "./EducationalPrograms";
import Publications from "./Publications";
import OurTeam from "./OurTeam";
import WeWork from "./WeWork";

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Indastrial/>
      <UsProject/>
      <Education/>
      <EducationalPrograms/>
      <Publications/>
      <OurTeam/>
      <WeWork/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
