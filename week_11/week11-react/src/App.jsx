import { useState } from "react";
import Students from "./Student";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Week 11 Experiment</h1>

      <Students
        name="SHIVAM SHET"
        department="Computer Science"
      />

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;