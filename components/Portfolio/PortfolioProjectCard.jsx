import Link from "next/link";

const portfolioData = [
  {
    id: 1,
    name: "Endorsely",
    description:
      "Endorsely is a cutting-edge social media app designed to encourage and empower individuals to endorse their views and opinions, creating a space for constructive dialogue and mutual support. Our mission is to bring people together by giving them a platform to express themselves, exchange ideas, and amplify each other's voices.",
    date: "January 2021 - Ongoing",
    country: "United States",
    tech: ["Flutter", "Firebase"],
    postImage: "https://i.ibb.co/ChDKYbz/1post.png",
    bannarImage: "https://i.ibb.co/VHTjBSK/1bannar.png",
    ClientChallengeImage: "https://i.ibb.co/88Rykdf/1-Client.png",
    SolutionImage: "https://i.ibb.co/G0N8NCJ/1-Solutions.png",
    Features: [
      "Feature 1 - Endorsement System",
      "Feature 2 - Customizable Feed",
      "Feature 3 - Focused Discussions",
      "Feature 4 - Secure and Private",
      "Feature 5 - Influence and Impact",
      "Feature 6 - Community Building",
      "Feature 7 - Multimedia Sharing",
      "Feature 8 - Event Creation",
      "Feature 9 - Real-time Notifications",
      "Feature 10 - Cross-platform Compatibility",
    ],
    client1:
      "Endorsely approached Duseca Software with a vision to create a unique social media platform focused on empowering users to endorse and amplify each other's voices.",
    client2:
      "They faced the challenge of designing an intuitive interface that would promote meaningful interaction and foster a supportive community, all while maintaining user privacy and data security",
    client3:
      "Endorsely sought a partner with the technical expertise and innovative mindset required to bring their concept to life.",
    solutions1:
      "Duseca Software delivered a robust and engaging social media app that exceeded Endorsely's expectations",
    solutions2:
      "Our team developed a customizable feed that allows users to personalize their experience based on their interests, as well as an endorsement system that promotes constructive dialogue and mutual support.",
    solutions3:
      "We also implemented advanced security measures to ensure user privacy and data protection. One notable success story involved a grassroots environmental campaign that gained traction on Endorsely, resulting in significant positive change in local policies. The campaign's leaders credited the platform's endorsement features and focused discussions as key factors in their success.",
  },
  {
    id: 2,
    name: "Booking app",
    description:
      "Endorsely is a cutting-edge social media app designed to encourage and empower individuals to endorse their views and opinions, creating a space for constructive dialogue and mutual support. Our mission is to bring people together by giving them a platform to express themselves, exchange ideas, and amplify each other's voices.",
    date: "January 2021 - Ongoing",
    country: "United States",
    tech: ["Flutter", "Firebase"],
    postImage:
      "https://d12z45jzadnz51.cloudfront.net/wp-content/uploads/2019/08/empresa-flutter-scaled.webp",
    bannarImage:
      "https://d12z45jzadnz51.cloudfront.net/wp-content/uploads/2019/08/empresa-flutter-scaled.webp",
    ClientChallengeImage:
      "https://d12z45jzadnz51.cloudfront.net/wp-content/uploads/2019/08/empresa-flutter-scaled.webp",
    SolutionImage: "https://i.ibb.co/G0N8NCJ/1-Solutions.png",
    Features: [
      "Feature 1 - Endorsement System",
      "Feature 2 - Customizable Feed",
      "Feature 3 - Focused Discussions",
      "Feature 4 - Secure and Private",
      "Feature 5 - Influence and Impact",
      "Feature 6 - Community Building",
      "Feature 7 - Multimedia Sharing",
      "Feature 8 - Event Creation",
      "Feature 9 - Real-time Notifications",
      "Feature 10 - Cross-platform Compatibility",
    ],
    client1:
      "Endorsely approached Duseca Software with a vision to create a unique social media platform focused on empowering users to endorse and amplify each other's voices.",
    client2:
      "They faced the challenge of designing an intuitive interface that would promote meaningful interaction and foster a supportive community, all while maintaining user privacy and data security",
    client3:
      "Endorsely sought a partner with the technical expertise and innovative mindset required to bring their concept to life.",
    solutions1:
      "Duseca Software delivered a robust and engaging social media app that exceeded Endorsely's expectations",
    solutions2:
      "Our team developed a customizable feed that allows users to personalize their experience based on their interests, as well as an endorsement system that promotes constructive dialogue and mutual support.",
    solutions3:
      "We also implemented advanced security measures to ensure user privacy and data protection. One notable success story involved a grassroots environmental campaign that gained traction on Endorsely, resulting in significant positive change in local policies. The campaign's leaders credited the platform's endorsement features and focused discussions as key factors in their success.",
  },
  {
    id: 3,
    name: "Endorsely",
    description:
      "Endorsely is a cutting-edge social media app designed to encourage and empower individuals to endorse their views and opinions, creating a space for constructive dialogue and mutual support. Our mission is to bring people together by giving them a platform to express themselves, exchange ideas, and amplify each other's voices.",
    date: "January 2021 - Ongoing",
    country: "United States",
    tech: ["Flutter", "Firebase"],
    postImage: "https://i.ibb.co/ChDKYbz/1post.png",
    bannarImage: "https://i.ibb.co/VHTjBSK/1bannar.png",
    ClientChallengeImage: "https://i.ibb.co/88Rykdf/1-Client.png",
    SolutionImage: "https://i.ibb.co/G0N8NCJ/1-Solutions.png",
    Features: [
      "Feature 1 - Endorsement System",
      "Feature 2 - Customizable Feed",
      "Feature 3 - Focused Discussions",
      "Feature 4 - Secure and Private",
      "Feature 5 - Influence and Impact",
      "Feature 6 - Community Building",
      "Feature 7 - Multimedia Sharing",
      "Feature 8 - Event Creation",
      "Feature 9 - Real-time Notifications",
      "Feature 10 - Cross-platform Compatibility",
    ],
    client1:
      "Endorsely approached Duseca Software with a vision to create a unique social media platform focused on empowering users to endorse and amplify each other's voices.",
    client2:
      "They faced the challenge of designing an intuitive interface that would promote meaningful interaction and foster a supportive community, all while maintaining user privacy and data security",
    client3:
      "Endorsely sought a partner with the technical expertise and innovative mindset required to bring their concept to life.",
    solutions1:
      "Duseca Software delivered a robust and engaging social media app that exceeded Endorsely's expectations",
    solutions2:
      "Our team developed a customizable feed that allows users to personalize their experience based on their interests, as well as an endorsement system that promotes constructive dialogue and mutual support.",
    solutions3:
      "We also implemented advanced security measures to ensure user privacy and data protection. One notable success story involved a grassroots environmental campaign that gained traction on Endorsely, resulting in significant positive change in local policies. The campaign's leaders credited the platform's endorsement features and focused discussions as key factors in their success.",
  },
  {
    id: 4,
    name: "Endorsely",
    description:
      "Endorsely is a cutting-edge social media app designed to encourage and empower individuals to endorse their views and opinions, creating a space for constructive dialogue and mutual support. Our mission is to bring people together by giving them a platform to express themselves, exchange ideas, and amplify each other's voices.",
    date: "January 2021 - Ongoing",
    country: "United States",
    tech: ["Flutter", "Firebase"],
    postImage: "https://i.ibb.co/ChDKYbz/1post.png",
    bannarImage: "https://i.ibb.co/VHTjBSK/1bannar.png",
    ClientChallengeImage: "https://i.ibb.co/88Rykdf/1-Client.png",
    SolutionImage: "https://i.ibb.co/G0N8NCJ/1-Solutions.png",
    Features: [
      "Feature 1 - Endorsement System",
      "Feature 2 - Customizable Feed",
      "Feature 3 - Focused Discussions",
      "Feature 4 - Secure and Private",
      "Feature 5 - Influence and Impact",
      "Feature 6 - Community Building",
      "Feature 7 - Multimedia Sharing",
      "Feature 8 - Event Creation",
      "Feature 9 - Real-time Notifications",
      "Feature 10 - Cross-platform Compatibility",
    ],
    client1:
      "Endorsely approached Duseca Software with a vision to create a unique social media platform focused on empowering users to endorse and amplify each other's voices.",
    client2:
      "They faced the challenge of designing an intuitive interface that would promote meaningful interaction and foster a supportive community, all while maintaining user privacy and data security",
    client3:
      "Endorsely sought a partner with the technical expertise and innovative mindset required to bring their concept to life.",
    solutions1:
      "Duseca Software delivered a robust and engaging social media app that exceeded Endorsely's expectations",
    solutions2:
      "Our team developed a customizable feed that allows users to personalize their experience based on their interests, as well as an endorsement system that promotes constructive dialogue and mutual support.",
    solutions3:
      "We also implemented advanced security measures to ensure user privacy and data protection. One notable success story involved a grassroots environmental campaign that gained traction on Endorsely, resulting in significant positive change in local policies. The campaign's leaders credited the platform's endorsement features and focused discussions as key factors in their success.",
  },
];

function PortfolioProjectCard() {
  return (
    <div className="custom-gradient">
      <div className="">
        <div className="container">
          <div className="text-center" style={{paddingTop:"80px"}}>
            <h1 className="text-[56px] font-semibold">Portfolio</h1>
            <p className="text-lg">
              From concept to completion, we're with you every step of the way -
              guiding you towards a successful outcome. Let's make magic happen!
              Or at least a really cool project
            </p>
          </div>
        </div>
        {portfolioData.map((project) => (
          <div
            key={project.id}
            data-aos={`${project.id % 2 === 0 ? "fade-left" : "fade-right"}`}
          >
            <div className=" container">
              <div className=" grid grid-cols-12 py-10">
                <div
                  className={`col-span-12 md:col-span-6 flex justify-center  ${
                    project.id % 2 === 0 ? "order-first" : "md:order-last"
                  }`}
                >
                  <img src={project.SolutionImage} alt="" />
                </div>
                <div
                  className={`col-span-12 md:col-span-6 ${
                    project.id % 2 === 0 ? "order-last " : "md:order-first"
                  } `}
                >
                  <div className="py-10">
                    <h1 className="text-[40px] text-center justify-center md:text-start font-semibold">
                      Endorsely
                    </h1>
                  </div>
                  <div className="block text-center md:text-start">
                    <span className="font-semibold">Platforms</span>{" "}
                    <span>
                      <span>React Native</span> <span>Node</span>
                    </span>
                  </div>
                  <p className="py-5">
                    Endorsely is a cutting-edge social media app designed to
                    encourage and empower individuals to endorse their views and
                    opinions, creating a space for constructive dialogue and
                    mutual support. Our mission is to bring people together by
                    giving them a platform to express themselves, exchange
                    ideas, and amplify each other's voices.
                  </p>
                  <Link href={`/project/${project.id}`}>
                    <button className="bg-primary flex justify-between text-white p-3 text-center w-full  rounded-xl lg:w-auto">
                      <span></span>
                      <span className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mx-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                        VIEW CASE STUDIES
                      </span>
                      <span></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioProjectCard;
