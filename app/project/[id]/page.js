"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ClientAndChallenge from "@/components/Portfolio/ClientAndChallenge";
import Features from "@/components/Portfolio/Features";
import PortfolioBannar from "@/components/Portfolio/PortfolioBannar";
import PortfolioDescription from "@/components/Portfolio/PortfolioDescription";
import Solutions from "@/components/Portfolio/Solutions";
import { useEffect } from "react";
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

function page({ params }) {
  const project = portfolioData.find((p) => p.id == params.id);
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Navbar />
      <PortfolioBannar project={project} />
      <PortfolioDescription project={project} />
      <ClientAndChallenge project={project} />
      <Solutions project={project} />
      <Features project={project} />
      <Footer />
    </>
  );
}

export default page;
