import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Button from "./components/Button/Button";
import data from "./data/data";
import Display from "./components/Display/Display";

function App() {
  return (
    <div className="calc-container">
      <Display />
      <div className="calc-buttons">
        {/* PRINT OUT ALL SIGNS FROM JSON*/}
        {data.map((el) => (
          <Button key={uuidv4()} number={el.sign} className={el.style} />
        ))}
      </div>
    </div>
  );
}

export default App;
