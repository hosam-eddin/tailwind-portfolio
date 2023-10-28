import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Clients from "./components/Clients";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Works />
      <Clients />

    </>
  );
}

export default App;
