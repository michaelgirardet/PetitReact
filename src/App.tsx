import { useState } from "react";// 1°fonction déclaré ici qui et donc apres tranformé en balise
import Mission from "./components/mission.tsx";
import Footer from './component/Footer.tsx' // 1°fonction déclaré ici qui et donc apres tranformé en balise
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
  const [countLait, setCountLait] = useState(0); //2° usestate informations qui doivent circuler en app et la fonction footer en forme de balise
  const [countPot, setCountPot] = useState(0);
  return (

    <>
      <Card />
      <aside>
        <Mission baby={babyList[0]} />
      </aside>
      <Footer className="footer"
     countLait = {countLait} // 3°chffres compte 
     setCountLait = {setCountLait} //fonction qui change le compte, incrémente
     countPot = {countPot}
     setCountPot = {setCountPot} 
     /> 
     {/* 4°remettre ce qu'on a declaré dans app au footer*/} 

    </>
  );
}

export default App;
