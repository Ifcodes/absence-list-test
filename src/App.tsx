import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useFetchAbsences from "./hooks/useFetchAbsences";
import AbsenceListItemCard from "./components/cards/absence-list-item-card/AbsenceListItemCard";

function App() {
  const [count, setCount] = useState(0);
  const { absenceList } = useFetchAbsences();

  console.log({ absenceList });

  return (
    <>
      <div>
        {absenceList.map((absence) => {
          console.log(absence);
          return (
            <AbsenceListItemCard
              key={absence.id}
              {...absence}
              handleCardClick={() => {}}
            />
          );
        })}
        <p>Hello</p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          role="count-toggle"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
