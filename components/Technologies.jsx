const programmingLanguagesData = [
  {
    name: "Native",
    image: "https://i.ibb.co/7y0QjQy/native.png",
  },
  {
    name: "Mongo",
    image: "https://i.ibb.co/QdS0SfD/Mongo.png",
  },
  {
    name: "Kubernetes",
    image: "https://i.ibb.co/QrgjW8D/Kubernetes.png",
  },
  {
    name: "Kotlin",
    image: "https://i.ibb.co/3FmxFB8/Kotlin.png",
  },
  {
    name: "Java",
    image: "https://i.ibb.co/WHBXR3L/Java.png",
  },
  {
    name: "GCP",
    image: "https://i.ibb.co/qJ92L4R/GCP.png",
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
    name: "Express",
    image: "https://i.ibb.co/fqgjXtP/Express.png",
  },
  {
    name: "Docker",
    image: "https://i.ibb.co/PWXp56J/Docker.png",
  },
  {
    name: "Django",
    image: "https://i.ibb.co/xsd6tdc/django.png",
  },
  {
    name: "Azure",
    image: "https://i.ibb.co/ZXS0WTS/Azure.png",
  },
  {
    name: "AWS",
    image: "https://i.ibb.co/zRwMKFm/AWS.png",
  },
  {
    name: "Angular",
    image: "https://i.ibb.co/1dTLKxg/Angular.png",
  },
  {
    name: "Vue",
    image: "https://i.ibb.co/5k7Ykrd/Vue.png",
  },
  {
    name: "Swift",
    image: "https://i.ibb.co/ctHmHyh/Swift.png",
  },
  {
    name: "React",
    image: "https://i.ibb.co/BVZ3R8J/React.png",
  },
  {
    name: "Node",
    image: "https://i.ibb.co/7grfH0X/Node.png",
  },
];

function Technologies() {
  return (
    <div>
      <div className="container py-[70px]">
        <h1 className="text-[56px] font-semibold text-center lg:text-left">
          Technologies we work with
        </h1>
        <p className="text-sm text-center lg:text-left">
          A comprehensive suite of cutting-edge tools and platforms to help your
          business thrive in today's fast-paced digital world
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  place-items-center">
          {programmingLanguagesData.map((item) => (
            <div key={item.image} className="flex group cursor-pointer flex-col items-center justify-center p-5">
              <img src={item.image} alt={item.name} className=" group-hover:animate-[bounce_1.5s_infinite;] duration-500" />
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
