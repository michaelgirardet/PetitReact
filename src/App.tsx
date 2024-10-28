import { useState } from "react";
import Mission from "./components/mission.tsx";
import Card from "./components/Card.tsx";
import "./App.css";

const babyList = [
  {
    babyName: "Boss",
    babyImg: "./src/assets/babyboss.jpeg",
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
      <section className="up-section">
        <Card baby={babyList[0]} />
        <aside>
          <Mission baby={babyList[0]} />
        </aside>
      </section>
    </>
  );
}

export default App;
