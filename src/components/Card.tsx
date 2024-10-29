import "../styles/card.css";
import "../components/Footer";

interface foodProps {
  countPot: number;
  countLait: number;
  baby: {
    babyName: string;
    babyImg: string;
    badBabyImg: string;
    goodBabyImg: string;
    id: number;
  };
  biberon: number;
  veggies: number;
}

function Card({ countLait, countPot, baby, biberon, veggies }: foodProps) {
  function displayImg() {
    if (countLait > biberon || countPot > veggies) {
      return baby.badBabyImg;
    } else if (countLait === biberon && countPot === veggies) {
      return baby.goodBabyImg;
    } else {
      return baby.babyImg;
    }
  }

  return (
    <>
      <section className="card">
        <img src={displayImg()} alt={baby.babyName} className="card-img" />
        <div className="compteur">
          <img
            src="./src/assets/biberon.png"
            alt="Biberon"
            className="biberon-img"
          />
          <p className="count">
            {countLait}:{countPot}
          </p>
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
