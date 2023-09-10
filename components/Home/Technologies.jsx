const programmingLanguagesData = [
  {
    name: "React Native",
    image: "https://i.ibb.co/7y0QjQy/native.png",
  },
  {
    name: "MongoDB",
    image: "https://i.ibb.co/QdS0SfD/Mongo.png",
  },

  {
    name: "Flutter",
    image: "https://i.ibb.co/yXqgr98/Flutter.png",
  },
  {
    name: "Firebase",
    image: "https://i.ibb.co/JvPv4c5/Firebase.png",
  },
  {
    name: "Express JS",
    image: "https://i.ibb.co/fqgjXtP/Express.png",
  },
  {
    name: "Docker",
    image: "https://i.ibb.co/PWXp56J/Docker.png",
  },

  {
    name: "AWS",
    image: "https://i.ibb.co/zRwMKFm/AWS.png",
  },
  {
    name: "React JS",
    image: "https://i.ibb.co/BVZ3R8J/React.png",
  },
  {
    name: "Node JS",
    image: "https://i.ibb.co/7grfH0X/Node.png",
  },
  {
    name: "Figma",
    image: "https://img.icons8.com/color/48/figma--v1.png",
  },
];

function Technologies() {
  return (
    <div>
      <div className="container py-[70px]">
        <h1
          data-aos="fade-right"
          className="text-[56px] font-semibold text-center lg:text-left"
        >
          Technologies we work with
        </h1>
        <p className="text-sm text-center lg:text-left">
          A comprehensive suite of cutting-edge tools and platforms to help your
          business thrive in today's fast-paced digital world
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  place-items-center">
          {programmingLanguagesData.map((item) => (
            <div
              key={item.image}
              className="flex group cursor-pointer flex-col items-center justify-center p-5"
            >
              <img
                src={item.image}
                alt={item.name}
                className=" group-hover:animate-[bounce_1.5s_infinite;] duration-500"
              />
              <p className="text-center ">{item.name}</p>
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

export default Technologies;
