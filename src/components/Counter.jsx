import Button from "./Button";
import { useState } from "react";
export default function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  function handleClick() {
    setCount((prevState) => prevState + 1);
  }

  return (
    <div>
      <div className={"text-5xl font-bold"}>{count}</div>
      <Button className={"mt-5 flex items-center gap-2"} onClick={handleClick}>
        +1
      </Button>

      <Button
        onClick={() => {
          handleClick();
          handleClick();
          handleClick();
          handleClick();
          handleClick();
        }}
      >
        +5
      </Button>
    </div>
  );
}
