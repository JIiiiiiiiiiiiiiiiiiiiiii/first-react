import starFilled from "/images/star-filled.png";
import starEmpty from "/images/star-empty.png";

export default function Star(props) {
  let starIcon = props.isFilled ? starFilled : starEmpty;
  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
      className="favorite-button bg-transparent"
    >
      <img
        src={starIcon}
        alt={props.isFilled ? "filled start icon" : "empty star icon"}
        className="w-6 cursor-pointer"
      />
    </button>
  );
}
