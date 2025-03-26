import trollFace from "/images/troll-face.png"

export default function Header() {
  return (
    <header className="flex items-center h-16 bg-gradient-to-r from-[#672280] via-purple-500 to-[#A626D3] text-white p-5">
        <img className="h-full mr-1.5" src={trollFace} />
        <h1 className="text-xl mr-auto">Meme Generator</h1>
    </header>
  )
}
