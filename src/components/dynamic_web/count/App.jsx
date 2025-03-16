import React from "react";
import Count from "./Count"
export default function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function sub() {
    setCount((prevCount) => prevCount - 1);
  }

  const [isGoingOut, setIsGoingOut] = React.useState(false);

  return (
    <main className="flex flex-col bg-amber-300">
      <h1 className="mt-0 ml-[10px] text-2xl">Count me in</h1>
      <div className="mt-10 flex items-end self-center">
        <button
          onClick={sub}
          className="z-[1] mr-[-20px] h-12 w-12 cursor-pointer rounded-full bg-[#737373] text-2xl text-[#D9D9D9] hover:bg-[#404040] hover:text-[#D9D9D9]"
          aria-label="Decrease count"
        >
          –
        </button>
        <Count number={count} />
        <button
          onClick={add}
          className="ml-[-20px] h-12 w-12 cursor-pointer rounded-full bg-[#737373] text-2xl text-[#D9D9D9] hover:bg-[#404040] hover:text-[#D9D9D9]"
          aria-label="Increase count"
        >
          +
        </button>
        <button
          onClick={() => {
            setIsGoingOut(!isGoingOut);
          }}
          className="m-1.5"
        >
          {isGoingOut ? "Yes" : "No"}
        </button>
      </div>
    </main>
  );
}
