import React from "react";
import avatar from "/images/user.png";
import starFilled from "/images/star-filled.png";
import starEmpty from "/images/star-empty.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFavorite() {
    setContact((prev) => {
      return {
        ...contact,
        isFavorite: !prev.isFavorite,
      };
    });
  }

  return (
    <div className="bg-[#0C4A6E]">
      <main className="flex h-[100vh] items-center justify-center">
        <article className="h-[350px] w-[200px] rounded-[10px] border-2 border-l-gray-500 bg-white">
          <img
            src={avatar}
            className="w-full p-[10%] pb-0"
            alt="User profile picture of John Doe"
          />
          <div className="p-2.5">
            <button
              onClick={toggleFavorite}
              aria-pressed={contact.isFavorite}
              aria-label={
                contact.isFavorite
                  ? "Remove from favorites"
                  : "Add to favorites"
              }
              className="favorite-button bg-transparent"
            >
              <img
                src={starIcon}
                alt={
                  contact.isFavorite ? "filled start icon" : "empty star icon"
                }
                className="w-6 cursor-pointer"
              />
            </button>
            <h2 className="my-3.5 text-[#333333]">
              {contact.firstName} {contact.lastName}{" "}
            </h2>
            <p className="my-2 text-[0.75rem] text-gray-600">{contact.phone}</p>
            <p className="my-2 text-[0.75rem] text-gray-600">{contact.email}</p>
          </div>
        </article>
      </main>
    </div>
  );
}
