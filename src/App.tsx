import { useState } from "react";
import Mission from "./components/mission.tsx";
import Card from "./components/Card.tsx";
import "./App.css";

const babyList = [
  {
    babyName: "Boss",
    babyImg: "",
    id: 1,
  },
  {
    babyName: "Triplets",
    babyImg: "",
    id: 2,
  },
  {
    babyName: "Jimbo",
    babyImg: "",
    id: 3,
  },
];

function App() {
  return (
    <>
      <Card />
      <aside>
        <Mission baby={babyList[0]} />
      </aside>
    </>
  );
}

export default App;
