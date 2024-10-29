import "../styles/card.css";
import "../components/Footer";

interface foodProps {
  countPot: number;
  setCountLait: (index: number) => void;
  countLait: number;
  setCountPot: (index: number) => void;
  baby: {
    babyName: string;
    babyImg: string;
    id: number;
  };
}

function Card({ countLait, countPot, baby }: foodProps) {
  return (
    <>
      <section className="card">
        <img src={baby.babyImg} alt={baby.babyName} className="card-img" />
        <div className="compteur">
          <img
            src="./src/assets/biberon.png"
            alt="Biberon"
            className="biberon-img"
          />
          <p className="count">{countLait}</p>
          <p className="count">{countPot}</p>
          <img
            src="./src/assets/compote.png"
            alt="Compote"
            className="compote-img"
          />
        </div>
      </section>
    </>
  );
}

export default Card;
