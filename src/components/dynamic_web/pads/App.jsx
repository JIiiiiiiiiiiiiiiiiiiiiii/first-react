import React from "react";
import padsData from "./pads";
import Pad from "./Pad";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    setPads((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      }),
    );
  }
  const buttonElements = pads.map((pad) => (
    <Pad
      id={pad.id}
      key={pad.id}
      color={pad.color}
      on={pad.on}
      toggle={toggle}
    />
  ));

  return (
    <main className="flex items-center justify-center bg-[#1C1917]">
      <div className="pad-container grid grid-cols-[repeat(4,100px)] grid-rows-[repeat(2,100px)] gap-2.5">
        {buttonElements}
      </div>
    </main>
  );
}
