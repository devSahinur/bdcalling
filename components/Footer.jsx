import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faLinkedin,
  faTwitter,
  faSquareInstagram,
  faFacebook,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="">
      <div className=" overflow-x-auto">
        <div className="table-responsive overflow-scroll md:overflow-hidden">
          <table className="table border-collapse  border-gray-200 w-full ">
            <tr className="border">
              <td className=" border ">
                <div className="flex items-center justify-center py-3 mx-5">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-6 h-6 mx-5 text-[#00acee] "
                  />
                  <h1 className="hover:text-primary cursor-pointer">Twitter</h1>
                </div>
              </td>
              <td className="border">
                <div className="flex items-center justify-center py-3 mx-5">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="w-6 h-6 mx-5 text-[#0072b1] "
                  />
                  <h1 className="hover:text-primary cursor-pointer">
                  Linkedin
                  </h1>
                </div>
              </td>
              <td className="border">
                <div className="flex items-center justify-center py-3 mx-5">
                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    className="w-6 h-6 mx-5 text-[#ea446d] "
                  />
                  <h1 className="hover:text-primary cursor-pointer">
                    Instagram
                  </h1>
                </div>
              </td>
              <td className="border">
                <div className="flex items-center justify-center py-3 mx-5">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-6 h-6 mx-5 text-[#3b5998] "
                  />
                  <h1 className="hover:text-primary cursor-pointer">
                    Facebook
                  </h1>
                </div>
              </td>
              <td className="border">
                <div className="flex items-center justify-center py-3 mx-5">
                  <FontAwesomeIcon
                    icon={faDribbble}
                    className="w-6 h-6 mx-5 text-[#ea4c89] "
                  />
                  <h1 className="hover:text-primary cursor-pointer">
                    Dribbble
                  </h1>
                </div>
              </td>
              <td className="border">
                <div className="flex items-center justify-center py-3 mx-5">
                  <FontAwesomeIcon
                    icon={faBehance}
                    className="w-6 h-6 mx-5 text-[#1769ff] "
                  />
                  <h1 className="hover:text-primary cursor-pointer">Behance</h1>
                </div>
              </td>
              <td className="border">
                <div className="flex items-center justify-center py-3 mx-5">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="w-6 h-6 mx-5 text-[#CD201F] "
                  />
                  <h1 className="hover:text-primary cursor-pointer">Youtube</h1>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="container py-[60px]">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 py-10 flex flex-col mx-auto justify-center items-center md:items-start md:justify-start">
            <img className="w-[200px]" src="/bdCalling-Logo.png" alt="" />
            <p className="text-center md:text-left mt-3 ">
              Your Partner in Business Empowerment and Digital Innovation
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 text-center md:text-left md:grid md:grid-cols-12">
            <div className="md:col-span-4">
              <h5 className="text-[20px] py-3 font-medium">Company</h5>
              <ul>
                <li className="hover:text-primary cursor-pointer">About</li>
                <li className="hover:text-primary cursor-pointer">Blog</li>
                <li className="hover:text-primary cursor-pointer">Contact</li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <h5 className="text-[20px] py-3  font-medium">Products</h5>
              <ul>
                <li className="hover:text-primary cursor-pointer">Endorsely</li>
                <li className="hover:text-primary cursor-pointer">Snkrr Bar</li>
                <li className="hover:text-primary cursor-pointer">Society</li>
                <li className="hover:text-primary cursor-pointer">Regale</li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <h5 className="text-[20px] py-3  font-medium">Reach Us</h5>
              <ul>
                <li className="hover:text-primary cursor-pointer flex justify-center md:justify-start items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-2" />{" "}
                  contact@duseca.com
                </li>
                <li className="hover:text-primary cursor-pointer flex justify-center md:justify-start  items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-2" />{" "}
                  +923185814384
                </li>
                <li className="hover:text-primary cursor-pointer flex justify-center  md:justify-start items-center">
                  Office no.12, 3rd Floor, Annique Arcade, I-8 Markaz,
                  Islamabad, Pakistan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
