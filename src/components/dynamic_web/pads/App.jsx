import React from "react";
import padsData from "./pads";
import Pad from "./Pad";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  const buttonElements = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} on={pad.on} />
  ));

  return (
    <main className="flex items-center justify-center bg-[#1C1917]">
      <div className="pad-container grid grid-cols-[repeat(4,100px)] grid-rows-[repeat(2,100px)] gap-2.5">
        {buttonElements}
      </div>
    </main>
  );
}
