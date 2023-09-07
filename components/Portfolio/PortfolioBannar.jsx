function PortfolioBannar({ project }) {
  return (
    <div className="flex justify-center bg-green-100 py-14">
      <img src={project.bannarImage} alt="" />
    </div>
  );
}

export default PortfolioBannar;
