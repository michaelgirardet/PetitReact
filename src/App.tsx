import { useState } from "react";
import Mission from "./components/mission.tsx";
import Card from "./components/Card.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Card />
      <aside>
        <Mission />
      </aside>
    </>
  );
}

export default App;
