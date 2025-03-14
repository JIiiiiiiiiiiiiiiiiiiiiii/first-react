import React from "react";

export default function App() {
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);
  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((things) => (
    <p key={things}>{things}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings((prev) => [...prev, allFavoriteThings[prev.length]]);
  }

  return (
    <main className="flex flex-col items-center bg-[#70B85D] p-5 font-[1.3rem]">
      <button
        onClick={addFavoriteThing}
        className="mb-5 w-full max-w-72 cursor-pointer rounded-[50px] border-2 border-white bg-transparent p-4 hover:bg-[#FFFEF1] hover:text-[#2C5E2E] focus:outline-0"
      >
        Add item
      </button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}
