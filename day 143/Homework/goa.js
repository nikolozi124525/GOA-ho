import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  function handleClick() {
    setCount(count + 1);

    if (text === "Hello") {
      setText("You clicked!");
    } else {
      setText("Hello");
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <p>{text}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Counter;
