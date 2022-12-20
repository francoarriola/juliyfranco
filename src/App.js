import "./App.css";
import About from "./Components/About";
import Count from "./Components/Countdown";
import Divider from "./Components/Divider";
import Forms from "./Components/Form";
import Gifts from "./Components/Gifts";
import Home from "./Components/Home/index.js";
import Moments from "./Components/Moments";
import Where from "./Components/Where";

function App() {
  return (
    <div className="App">
      <Home />
      <Count />
      <About />
      <Divider message="Donde?" />
      <Where />
      <Divider message="Momentos" />
      <Moments />
      <Divider message="Regalos" />
      <Gifts />
      <Divider message="El mejor regalo es tu compañia" />
      <Forms />
    </div>
  );
}

export default App;
