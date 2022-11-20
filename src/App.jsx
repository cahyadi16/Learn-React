import PlaceContentCenter from "./components/PlaceContentCenter";
import Button from "./components/Button";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevState) => prevState + 1);
  }

  return (
    <PlaceContentCenter>
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
    </PlaceContentCenter>
  );
}
