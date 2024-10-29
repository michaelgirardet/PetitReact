import "../styles/card.css";
import "../components/Footer";

interface babyProps {
  countPot: number;
  countLait: number;
  baby: {
    babyName: string;
    babyImg: string;
    badBabyImg: string;
    id: number;
  };
  biberon: number;
  veggies: number;
}

function Card({ countLait, countPot, baby, biberon, veggies }: babyProps) {
  return (
    <>
      <section className="card">
        {countLait > biberon || countPot > veggies ? (
          <img src={baby.badBabyImg} alt={baby.babyName} className="card-img" />
        ) : (
          <img src={baby.babyImg} alt={baby.babyName} className="card-img" />
        )}

        <div className="compteur">
          <img
            src="./src/assets/biberon.png"
            alt="Biberon"
            className="biberon-img"
          />
          <p>{countLait}</p>
          <img
            src="./src/assets/compote.png"
            alt="Compote"
            className="compote-img"
          />
          <p>{countPot}</p>
        </div>
      </section>
    </>
  );
}

export default Card;
