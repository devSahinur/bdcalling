import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
function PortfolioDescription({ project}) {
  return (
    <div className="container grid grid-cols-12 py-[60px]">
      <div className="col-span-12 md:col-span-6">
        <h2 className="text-[48px] font-semibold py-3">{project.name}</h2>
        <div className="flex flex-wrap flex-row">
          <div className=" text-sm flex items-center border-primary rounded-full border p-2 mr-3 text-center max-w-[230px] my-2">
            <FontAwesomeIcon
              className="w-6 h-6 mx-2 ml-3"
              icon={faCalendarDays}
            />
            <span>{project.date}</span>
          </div>
          <div className=" text-sm   border-primary rounded-full border p-2 mr-3 my-2 ">
            <span>{project.country}</span>
          </div>
          <div className=" text-sm   border-primary rounded-full border p-2 mr-3 my-2">
            <span>{project.tech}</span>
          </div>
        </div>
        <div className="py-10 flex justify-center">
          <p className="text-sm">{project.description}</p>
        </div>
      </div>
      <div className="col-span-6"></div>
    </div>
  );
}

export default PortfolioDescription;
