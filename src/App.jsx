import { useState } from "react";
import "./App.scss";
import Friends from "./components/friends";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <Friends />
    </div>
  );
}

export default App;
