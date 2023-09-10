import Link from "next/link";

const portfolioData = [
  {
    id: 1,
    name: "Booking app",
    description:
      "Endorsely is a cutting-edge social media app designed to encourage and empower individuals to endorse their views and opinions, creating a space for constructive dialogue and mutual support. Our mission is to bring people together by giving them a platform to express themselves, exchange ideas, and amplify each other's voices.",
    date: "January 2021 - Ongoing",
    country: "United States",
    tech: ["Flutter, Firebase"],
    postImage:
      "https://d12z45jzadnz51.cloudfront.net/wp-content/uploads/2019/08/empresa-flutter-scaled.webp",
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
    name: "Renti APP",
    description:
      "Endorsely is a cutting-edge social media app designed to encourage and empower individuals to endorse their views and opinions, creating a space for constructive dialogue and mutual support. Our mission is to bring people together by giving them a platform to express themselves, exchange ideas, and amplify each other's voices.",
    date: "January 2021 - Ongoing",
    country: "United States",
    tech: ["Flutter, Firebase"],
    postImage:
      "https://www.datocms-assets.com/48294/1617108879-1.png?auto=format",
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
    id: 3,
    name: "Endorsely2",
    description:
      "Endorsely is a cutting-edge social media app designed to encourage and empower individuals to endorse their views and opinions, creating a space for constructive dialogue and mutual support. Our mission is to bring people together by giving them a platform to express themselves, exchange ideas, and amplify each other's voices.",
    date: "January 2021 - Ongoing",
    country: "United States",
    tech: ["Flutter, Firebase"],
    postImage:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/accounting-website-design.jpg",
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
    name: "Endorsely4",
    description:
      "Endorsely is a cutting-edge social media app designed to encourage and empower individuals to endorse their views and opinions, creating a space for constructive dialogue and mutual support. Our mission is to bring people together by giving them a platform to express themselves, exchange ideas, and amplify each other's voices.",
    date: "January 2021 - Ongoing",
    country: "United States",
    tech: ["Flutter, Firebase"],
    postImage:
      "https://gillde.com/wp-content/uploads/2022/07/image-1160x870.png",
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

// https://i.ibb.co/VHTjBSK/1bannar.png
// https://i.ibb.co/ChDKYbz/1post.png
// https://i.ibb.co/G0N8NCJ/1-Solutions.png
// https://i.ibb.co/88Rykdf/1-Client.png

function Portfolio() {
  return (
    <div className="custom-gradient" id="portfolio">
      <div className="container py-[50px]">
        <h2
          data-aos="fade-right"
          className="text-[56px] text-center md:text-left"
        >
          Our Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  place-items-center">
          {portfolioData.map((item, index) => (
             
            <Link key={index} href={`/project/${item.id}`}>
              <div className="relative group overflow-hidden cursor-pointer">
                <img
                  className="rounded-lg h-350 object-cover object-top w-full transition-transform transform scale-95 group-hover:scale-100"
                  src={item.postImage}
                  alt=""
                />
                <div className="absolute  hidden group-hover:block group-hover:bottom-0 p-5 rounded-b-lg backdrop-blur-sm bg-black/80 transition-transform transform scale-95 group-hover:scale-100 ">
                  <h4 className="text-2xl font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="text-[14px] text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/portfolio">
          <div className="flex lg:w-full justify-center mt-5">
            <button className="bg-primary text-white p-3 rounded-xl w-full lg:max-w-[516px] ">
              VIEW MORE
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
