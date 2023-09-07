function ClientAndChallenge({ project }) {
  return (
    <div className="bg-green-100">
      <div className="container grid grid-cols-12 py-10">
        <div className="col-span-12 md:col-span-6">
          <div className="py-10">
            <span className="text-[32px] text-primary">01</span>{" "}
            <span className="text-[24px] font-semibold ml-3">
              Client & Challenge
            </span>
          </div>
          <p className="py-5">{project.client1}</p>
          <p className="py-5">{project.client2}</p>
          <p className="py-5">{project.client3}</p>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center">
          <img src={project.ClientChallengeImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ClientAndChallenge;
