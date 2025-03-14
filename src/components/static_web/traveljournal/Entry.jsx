export default function Entry(props) {
  console.log(props);
  return (
    <article className="mb-9 flex">
      <div className="mr-5 h-[168px] w-[125px] shrink-0 overflow-hidden rounded-[5px]">
        <img
          className="main-image h-full w-full object-cover"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
      <div className="info-container">
        <img
          className="marker w-2"
          src="./images/marker.png"
          alt="map marker icon"
        />
        <span className="mr-3 text-[0.7rem] uppercase">{props.country}</span>
        <a
          href={props.googleMapLink}
          className="text-[0.7rem] text-[#2B283A] visited:text-[#918E9B]"
        >
          View on Google Maps
        </a>
        <h2 className="mt-1.5 mb-4">{props.title}</h2>
        <p className="trip-dates font-bold">{props.dates}</p>
        <p className="flex flex-col text-sm leading-relaxed">{props.text}</p>
      </div>
    </article>
  );
}
