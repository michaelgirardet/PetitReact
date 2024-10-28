import { useState } from "react";
import Mission from "./components/mission.tsx";

import "./App.css";

const babyList = [
  {
    babyName: "Boss",
    id: 1,
    imageSrc: "",
  },
  {
    babyName: "Jimbo",
    id: 2,
    imageSrc: "",
  },
  {
    babyName: "Triplets",
    id: 2,
    imageSrc: "",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <aside>
      <Mission />
    </aside>
  );
}

export default App;
