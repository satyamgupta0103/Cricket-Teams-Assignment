import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TeamsGrid from "./components/TeamsGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>CRICKET TEAMS</header>
      <TeamsGrid />
    </>
  );
}

export default App;
