import React, { useState } from "react";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);


  const arr = [];

  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }

  const handleInput = (e) => {
    if (e.target.value < 0) {
      return;
    } else {
      setCount(e.target.value);
    }
  };
  return (
    <div className="main">
      <input
        className="input"
        type="number"
        placeholder="Input Number"
        value={count}
        onChange={handleInput}
      />
      <List array={arr}></List>
    </div>
  );
}

export default App;
