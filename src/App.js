import "./App.css";
// import About from "./Components/About";
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
      {/* <About /> */}
      <Divider message="Invitacion" />
      <Where />
      <Divider message="Momentos" />
      <Moments />
      <Divider message="Regalo" />
      <Gifts />
      <Divider message="" />
      <Forms />
      <Count />
    </div>
  );
}

export default App;
