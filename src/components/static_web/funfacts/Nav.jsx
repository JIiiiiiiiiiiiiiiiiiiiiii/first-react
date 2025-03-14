const Nav = () => {
  return (
    <nav className="ml-auto flex p-5 text-white">
      <ul className="flex space-x-5">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;