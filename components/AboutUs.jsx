const teamMembers = [
  {
    id: 1,
    name: "Wajahat Malek",
    image: "https://duseca.com/static/media/4.97274a2444903275e480.png",
    position: "Founder / CEO",
  },
  {
    id: 2,
    name: "Wajahat Malek",
    image: "https://duseca.com/static/media/4.97274a2444903275e480.png",
    position: "Founder / CEO",
  },
  {
    id: 3,
    name: "Wajahat Malek",
    image: "https://duseca.com/static/media/4.97274a2444903275e480.png",
    position: "Founder / CEO",
  },
  {
    id: 4,
    name: "Wajahat Malek",
    image: "https://duseca.com/static/media/4.97274a2444903275e480.png",
    position: "Founder / CEO",
  },
  {
    id: 5,
    name: "Wajahat Malek",
    image: "https://duseca.com/static/media/4.97274a2444903275e480.png",
    position: "Founder / CEO",
  },
  {
    id: 6,
    name: "Wajahat Malek",
    image: "https://duseca.com/static/media/4.97274a2444903275e480.png",
    position: "Founder / CEO",
  },
  {
    id: 7,
    name: "Wajahat Malek",
    image: "https://duseca.com/static/media/4.97274a2444903275e480.png",
    position: "Founder / CEO",
  },
  {
    id: 8,
    name: "Wajahat Malek",
    image: "https://duseca.com/static/media/4.97274a2444903275e480.png",
    position: "Founder / CEO",
  },
];

function AboutUs() {
  return (
    <div>
      <div className="container py-10">
        <h1 className="text-[40px] text-center md:text-left md:text-[56px] font-semibold">
          About Us
        </h1>
        <p className="text-sm text-center md:text-left">
          Duseca Software's diverse professionals have been driving innovation
          and success since 2011. Discover our story and let our expertise speak
          for itself
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 place-items-center">
          {teamMembers.map((member) => (
            <div className="flex flex-col items-center py-2">
              <img
                className="border-dashed  border-[1px] border-primary rounded-full h-60 w-60 p-1"
                src={member.image}
                alt=""
              />
              <h1 className="text-[20px] font-medium">{member.name}</h1>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
        <div className="flex lg:hidden justify-center mt-5">
          <button className="bg-primary text-white p-3 rounded-xl w-full lg:max-w-[516px] ">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
