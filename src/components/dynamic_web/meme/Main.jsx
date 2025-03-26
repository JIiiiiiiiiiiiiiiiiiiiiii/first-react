export default function Main() {
  return (
    <main className="mx-auto max-w-lg p-9">
      <div className="form grid-template: auto auto / 1fr 1fr mb-4 grid gap-4">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText" />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme relative flex flex-col justify-center items-center">
        <img className="max-w-full h-auto rounded-sm" src="http://i.imgflip.com/1bij.jpg" />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
      </div>
    </main>
  );
}
