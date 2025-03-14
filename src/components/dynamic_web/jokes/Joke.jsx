import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShow() {
    setIsShown((prev) => !prev);
  }

  return (
    <div>
      {props.setup && <h3 className="text-lg font-bold">{props.setup}</h3>}
      {isShown ? <p>{props.punchline}</p> : null}
      <button className="m-1 border" onClick={toggleShow}>
        {isShown ? "Hide" : "Show"} punchline
      </button>
      <hr />
    </div>
  );
}
