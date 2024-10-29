import "../styles/Footer.css";
import Laitbb from "../assets/laitbb.png"; //j'importe l'image dans ma variable
import Potbb from "../assets/potbb.png"; //j'importe l'image dans ma variable

//6° faire le type des props dans interface
interface foodProps {
  countLait: number;
  setCountLait: (index: number) => void;
  countPot: number;
  setCountPot: (index: number) => void;
}
//footer recoit les compteurs en props 5°: 7° relier food props à la fonction
function Footer({ countLait, setCountLait, countPot, setCountPot }: foodProps) {
  //2) declarer la const pour mon bouton : usestate fait en sorte que count bouge par le biais de set count.

  //
  return (
    <section className="footer">
      <button type="button" onClick={() => setCountLait(countLait + 1)}>
        <img src="./src/assets/biberon.png" alt="lait bb " />
      </button>
      <button type="button" onClick={() => setCountPot(countPot + 1)}>
        <img src="./src/assets/compote.png" alt=" pot bb " />
      </button>
    </section>
  );
}
export default Footer;
