
import React,{useState} from "react"








function AboutUs() {

  const [peopleCount,setPeopleCount]=useState(8)

  const viewMore=()=>{
      setPeopleCount(peopleCount+4)
  }

  const teamMembers = [
    {
      id: 1,
      name: "Md.Babul mridha",
      image: "https://i.postimg.cc/Z52k3KRK/babulsir.jpg",
      position: "Consultant",
    },
    {
      id: 2,
      name: "shiku",
      image: "https://i.postimg.cc/dt4cQcTn/siku.jpg",
      position: "Team leader",
    },
    {
      id: 3,
      name: "Md.Shehabuddin Tushar",
      image:"https://i.postimg.cc/3RwCVq8J/tushar.png",
      position: "Fullstack-Developer",
    },
    {
      id: 4,
      name: "Towhid",
      image: "https://i.postimg.cc/T3qVwxh3/towhid.png",
      position: "Backend-Developer",
    },
    {
      id: 5,
      name: "Farvez",
      image: "https://i.postimg.cc/BvzXZ75v/Farvez.png",
      position: "Backend-Developer",
    },
    {
      id: 6,
      name: "Rabby",
      image: "https://i.postimg.cc/FRvwSNVC/rabby.png",
      position: "UI/UX Designer",
    },
    {
      id: 7,
      name: "Amrin",
      image: "https://i.postimg.cc/PqJCjnwc/amrin.png",
      position: "UI/UX Designer",
    },
    {
      id: 8,
      name: "Mirza",
      image: "https://i.postimg.cc/zfK93VKR/mirza.png",
      position: "App Developer",
    },
  
  
    {
      id: 9,
      name: "Nahid",
      image: "https://i.postimg.cc/BQ51Q5nG/nahid.png",
      position: "App Developer",
    },
    {
      id: 10,
      name: "Humayun kabir",
      image: "https://i.postimg.cc/7P0fDV5x/humayun.png",
      position: "App Developer",
    },
    {
      id: 11,
      name: "Jubayed",
      image:
        "https://i.postimg.cc/3xnkVxdm/jubayed.png",
      position: "App-Developer",
    },
    {
      id: 12,
      name: "Srabon",
      image: "https://i.postimg.cc/JhrbHFBc/srabon.png",
      position: "App-Developer",
    },
    {
      id: 13,
      name: "Opi",
      image: "https://i.postimg.cc/KjqWCLSC/opi.png",
      position: "App-Developer",
    },
    {
      id: 14,
      name: "Santo",
      image: "https://i.postimg.cc/tJMrBjFj/santo.png",
      position: "App-Developer",
    },
    {
      id: 15,
      name: "Gazi",
      image: "https://i.postimg.cc/xCbqXGg3/gazi.png",
      position: "Sales Executive",
    },
    {
      id: 16,
      name: "Kazi",
      image: "https://i.postimg.cc/hv1Dm2mT/kaji.png",
      position: "UI/UX Designer",
    },
  ];
  return (
    <div id="about">
      <div className="container py-10">
        <h1
          data-aos="fade-right"
          className="text-[40px] text-center md:text-left md:text-[56px] font-semibold"
        >
          Team members
        </h1>
        <p className="text-sm text-center md:text-left">
          innovexasoft Software's diverse professionals have been driving innovation
          and success since 2011. Discover our story and let our expertise speak
          for itself
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 place-items-center">
          {teamMembers.slice(0,peopleCount).map((member) => (
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
        {
          teamMembers.length!==peopleCount &&  <div className="flex justify-center mt-5">
          <button className="bg-primary text-white p-3 rounded-xl w-full lg:max-w-[516px]" onClick={()=>viewMore()}>
            Show More
          </button>
        </div>
          
        }
       
      </div>
    </div>
  );
}

export default AboutUs;
