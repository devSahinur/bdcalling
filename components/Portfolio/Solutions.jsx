function Solutions({ project }) {
  return (
    <div data-aos="fade-left" className="">
      <div className="container grid grid-cols-12 py-10">
        <div className="col-span-12 md:col-span-6 flex justify-center md:order-first">
          <img src={project.SolutionImage} alt="" />
        </div>
        <div className="col-span-12 md:col-span-6 order-first">
          <div className="py-10">
            <span className="text-[32px] text-primary">02</span>{" "}
            <span className="text-[24px] font-semibold ml-3">Solutions</span>
          </div>
          <p className="py-5">{project.solutions1}</p>
          <p className="py-5">{project.solutions2}</p>
          <p className="py-5">{project.solutions3}</p>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
