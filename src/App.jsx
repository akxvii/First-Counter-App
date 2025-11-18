import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div classNameName="main-page">
        <input type="text" value={count} readOnly></input>
        <button classNameName="button" onClick={() => setCount(count + 1)}>
          +1
        </button>
        <button classNameName="button" onClick={() => setCount(count - 1)}>
          -1
        </button>
        <button classNameName="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
