import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CurrencyConverter from "./Components/CurrencyConverter";
import Navbar from "./Components/Navbar";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#01101a";
      document.body.style.color = "white";
      setMode("dark");
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      setMode("light");
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <CurrencyConverter />
    </>
  );
}

export default App;
