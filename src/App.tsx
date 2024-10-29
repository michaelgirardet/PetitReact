import "./App.css";
import { useState } from "react";
import Card from "./components/Card.tsx";
import Mission from "./components/mission.tsx";
import Footer from "./components/Footer.tsx";

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
  const [countLait, setCountLait] = useState(0);
  const [countPot, setCountPot] = useState(0);
  return (
    <>
      <div className="up-section">
        <Card
          baby={babyList[0]}
          countLait={countLait}
          setCountLait={setCountLait}
          countPot={countPot}
          setCountPot={setCountPot}
        />
        <aside>
          <Mission baby={babyList[0]} />
        </aside>
      </div>
      <section className="app">
        <Footer
          countLait={countLait}
          setCountLait={setCountLait}
          countPot={countPot}
          setCountPot={setCountPot}
        />
      </section>
    </>
  );
}
export default App;
