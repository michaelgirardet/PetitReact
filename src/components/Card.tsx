import "../styles/card.css";

interface babyProps {
  pot: number;
  lait: number;
  baby: {
    babyName: string;
    babyImg: string;
    id: number;
  };
}

function Card({ pot, lait, baby }: babyProps) {
  return (
    <>
      <section className="card">
        <img
          src={baby.babyImg}
          alt={baby.babyName}
          className="card-img"
        />
        <div className="compteur">
          <img
            src="./src/assets/biberon.png"
            alt="Biberon"
            className="biberon-img"
          />
          {/* <p>{laitbb}</p> */}
          <img
            src="./src/assets/compote.png"
            alt="Compote"
            className="compote-img"
          />
          {/* <p>{potbb}</p> */}
        </div>
      </section>
    </>
  );
}

export default Card;
