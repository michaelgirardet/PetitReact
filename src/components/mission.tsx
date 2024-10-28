import "../styles/mission.css";

interface babyProps {
  baby: {
    babyName: string;
    babyImg: string;
    id: number;
  };
}

const obj1 = Math.floor(Math.random() * (10 - 0) + 0);
const obj2 = Math.floor(Math.random() * (20 - 0) + 0);
const punishment = [
  "To be spanked (lightly).",
  "To wear their nappies (like a little baby).",
  "To have no candies for a week.",
];
const i = punishment.length - 1;
const punish = Math.floor(Math.random() * (i - 0) + 0);

export default function Mission({ baby }: babyProps) {
  return (
    <div className="aside">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap');
      </style>
      <h1>Missions</h1>
      <p>{baby.babyName}</p>
      <section>
        <h2>Objectifs</h2>
        <ul className="objectifs">
          <li>Will have to drink {obj1} mini bibs.</li>
          <li>Will have to eat {obj2} mini veggie pots.</li>
        </ul>
      </section>
      <section>
        <h2>If mistakes are made they will have :</h2>
        <p>{punishment[punish]}</p>
      </section>
    </div>
  );
}
