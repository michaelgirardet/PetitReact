import "../styles/card.css";
import "../components/Footer";

interface bebe {
  countLait: number;
  countPot: number;
}

function Card({ countLait, countPot }: bebe) {
  return (
    <>
      <section className="card">
        <img
          src="./src/assets/babyboss.jpeg"
          alt="Baby Boss"
          className="card-img"
        />
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
