import Header from "./Header";
import Entry from "./Entry";
import data from "./data";

export default function App() {
  const entryPoint = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        {...entry}
      />
    );
  });

  return (
    <>
      <Header />
      <main className="my-11 mx-10">{entryPoint}</main>
    </>
  );
}
