import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function Features({ project }) {
  console.log(project);
  return (
    <div className="bg-green-100">
      <div className="container grid grid-cols-12 py-10">
        <div className="col-span-12">
          <div className="py-10">
            <span className="text-[32px] text-primary">03</span>{" "}
            <span className="text-[24px] font-semibold ml-3">
              Client & Challenge
            </span>
          </div>
          <div className="grid grid-cols-12">
            {project.Features.map((feature) => (
              <div className="flex items-center py-5 col-span-12 md:col-span-6 lg:col-span-3">
                <div className="w-10 ">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className="w-6 h-6 text-primary"
                  />
                </div>
                <h1 className="text-sm ml-3">{feature}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
