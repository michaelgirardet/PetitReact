import { useState } from "react";
import "../styles/card.css";

interface bebe {
    potbb : number,
    laitbb : number
}

function card({potbb, laitbb} : bebe) {

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
          <p>
            {laitbb}
          </p>
          <img
            src="./src/assets/compote.png"
            alt="Compote"
            className="compote-img"
          />
          <p>
            {potbb}
          </p>
        </div>
      </section>
    </>
  );
}

export default card;
