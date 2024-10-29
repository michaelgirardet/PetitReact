import "../styles/mission.css";

interface babyProps {
  baby: {
    babyName: string;
    babyImg: string;
    id: number;
  };
  //typage 3° des props biberon et veggies
  biberon: number;
  veggies: number;
}
//6° supprimer les constantes obj 1 et 2 de mission car elles sont dans le parent app.
const punishment = [
  "To be spanked (lightly).",
  "To wear their nappies (like a little baby).",
  "To have no candies for a week.",
];
const i = punishment.length - 1;
const punish = Math.floor(Math.random() * (i - 0) + 0);
//4 ajouter les props à utiliser dans la fonction
export default function Mission({ baby, biberon, veggies }: babyProps) {
  return (
    <div className="aside">
      <h1>Missions</h1>
      <p>{baby.babyName}</p>
      <section>
        <h2>Objectifs</h2>
        <ul className="objectifs">
          <li>Will have to drink {biberon} mini bibs.</li>
          <li>Will have to eat {veggies} mini veggie pots.</li>
          {/* 5° remplacer les noms des anciennes variables obj1 et obj 2 par les noms des nouvelles props biberon et veggies */}
        </ul>
      </section>
      <section>
        <h2>If mistakes are made they will have :</h2>
        <p>{punishment[punish]}</p>
      </section>
    </div>
  );
}
