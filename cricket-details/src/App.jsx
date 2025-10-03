import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBox from "./components/SearchBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>CRICKET TEAMS</header>
      <SearchBox />
    </>
  );
}

export default App;
