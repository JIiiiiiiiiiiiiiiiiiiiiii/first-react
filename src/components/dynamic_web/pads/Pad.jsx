import React from "react";

export default function Pad(props) {
  const [on, setOn] = React.useState(props.on);
  const opacityClass = on ? "opacity-100" : "opacity-10";
  
  function handleClick() {
    setOn((prev) => !prev);
  }
  return (
    <button
      onClick={handleClick}
      className={`h-[100px] w-[100px] cursor-pointer rounded-[5px] border-3 border-white ${opacityClass}`}
      style={{ backgroundColor: props.color }}
    ></button>
  );
}
