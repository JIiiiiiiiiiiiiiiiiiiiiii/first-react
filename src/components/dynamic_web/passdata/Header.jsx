import avatar from "/images/users.png";

export default function Header(props) {
  

  return (
    <header className="flex h-16 items-center justify-end bg-[#dce6fd] px-5 shadow-[0px_2.98256px_7.4564px_rgba(0,0,0,0.1)]">
      <img className="cursor-pointer" src={avatar} />
      <p className="cursor-pointer">{props.userName}</p>
    </header>
  );
}
