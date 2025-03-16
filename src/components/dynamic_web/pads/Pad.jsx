import React from "react";

export default function Pad(props) {
  const opacityClass = props.on ? "opacity-100" : "opacity-10";

  return (
    <button
      className={`h-[100px] w-[100px] cursor-pointer rounded-[5px] border-3 border-white ${opacityClass}`}
      style={{ backgroundColor: props.color }}
      onClick={() => props.toggle(props.id)}
    ></button>
  );
}
