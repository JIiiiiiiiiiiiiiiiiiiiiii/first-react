const FunFacts = () => {
  return (
    <main className="m-2 flex flex-col bg-[#2f3132]">
      <div className="header m-4">
        <img src="/images/react.svg" className="h-16 w-16" alt="icon" />
      </div>
      <section className="m-4 font-bold text-white">
        <h1 className="text-5xl font-bold">Fun Facts about react</h1>
        <ul className="m-6 list-disc px-3 text-3xl">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walk</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps including mobile apps</li>
        </ul>
      </section>
    </main>
  );
};

export default FunFacts;