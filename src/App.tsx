import "./App.css";
import { useState } from "react";
import Card from "./components/Card.tsx";
import Mission from "./components/mission.tsx";
import Footer from "./components/Footer.tsx";

const babyList = [
  {
    babyName: "Boss",
    babyImg: "./src/assets/2.png",
    badBabyImg: "./src/assets/3.png",
    goodBabyImg: "./src/assets/reau.png",
    id: 1,
  },
  {
    babyName: "Triplets",
    babyImg: "",
    badBabyImg: "",
    goodBabyImg: "",
    id: 2,
  },
  {
    babyName: "Jimbo",
    babyImg: "",
    badBabyImg: "",
    goodBabyImg: "",
    id: 3,
  },
];
//constantes deplacés dans app1°
const obj1 = Math.floor(Math.random() * (10 - 0) + 0);
const obj2 = Math.floor(Math.random() * (20 - 0) + 0);

function App() {
  const [countLait, setCountLait] = useState(0);
  const [countPot, setCountPot] = useState(0);
  return (
    <>
      <section className="app">
        <section className="left-section">
          <Card
            baby={babyList[0]}
            biberon={obj1}
            veggies={obj2}
            countLait={countLait}
            countPot={countPot}
          />

          <Footer
            countLait={countLait}
            setCountLait={setCountLait}
            countPot={countPot}
            setCountPot={setCountPot}
          />
        </section>
        <aside>
          <Mission baby={babyList[0]} biberon={obj1} veggies={obj2} />
          {/*nouvelles props nommées pour nos variables à utiliser 2°*/}
        </aside>
      </section>
    </>
  );
}
export default App;
