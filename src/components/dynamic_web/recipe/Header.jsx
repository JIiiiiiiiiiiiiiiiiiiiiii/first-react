import chefClaudeLogo from "/images/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="flex h-[80px] items-center justify-center gap-[11px] bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_1px_2px_0px_rgba(0,0,0,0.06)]">
      <img className="w-[50px]" src={chefClaudeLogo} alt="chef claude icon" />
      <h1 className="font-normal">Chef Claude</h1>
    </header>
  );
}
