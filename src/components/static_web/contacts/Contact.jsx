export default function Contact({ img, name, phone, email }) {
  return (
    <article className="contact-card flex basis-56 flex-col rounded-2xl bg-white p-3 shadow-[1px_1px_8px_rgba(0,0,0,0.25)]">
      <img
        src={img}
        className="h-auto w-full self-center rounded-[5px] object-cover"
        alt="Photo of Mr. Whiskerson"
      />
      <h3 className="text-[18px] font-bold">{name}</h3>
      <div className="info-group">
        <img src="/images/phone-icon.png" alt="phone icon" />
        <p>{phone}</p>
      </div>
      <div className="info-group flex items-center">
        <img src="/images/mail-icon.png" alt="mail icon" />
        <p className="my-[3px] text-[12px] text-[#2B283A]">{email}</p>
      </div>
    </article>
  );
}

const person = {
  img: "/images/mr-whiskerson.png",
  name: "Mr. Whiskerson",
  phone: "(800) 555-1234",
  email: "mr.whiskaz@catnap.meow",
};

const { img, name } = person;
