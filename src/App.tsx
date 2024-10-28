import { useState } from 'react'
import Mission from "./components/mission.tsx";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card pot={countPot} lait={countLait} />;
      <aside>
        <Mission />
      </aside>
    </>
  );
}

export default App
