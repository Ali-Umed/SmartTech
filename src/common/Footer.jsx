import { footer } from "../data/data";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaMoneyCheckAlt,
  FaTruck,
} from "react-icons/fa";

const icons = {
  FaFacebook: <FaFacebook />,
  FaInstagram: <FaInstagram />,
  FaLinkedin: <FaLinkedin />,
  FaTwitter: <FaTwitter />,
  FaMoneyCheckAlt: <FaMoneyCheckAlt />,
  FaTruck: <FaTruck />,
};

export default function Footer() {
  return (
    <div className="bg-gray-900 ">
      <div className=" px-4 md:px-12 mx-auto">
        <div className="flex flex-row  justify-center items-start  flex-wrap py-4 gap-2 ">
          {footer.map((val, index) => (
            <div
              key={index}
              className="text-gray-300 text-center sm:text-start w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/5 mb-4 md:mb-0"
            >
              <h1 className="text-2xl mb-1 text-white">{val.header}</h1>
              {Object.keys(val)
                .filter((key) => key.startsWith("content"))
                .map((contentKey, contentIndex) => {
                  const content = val[contentKey];
                  return (
                    <p
                      key={contentIndex}
                      className="hover:text-teal-400  cursor-pointer transition-colors duration-200 flex  justify-center sm:justify-start"
                    >
                      {typeof content === "string" ? (
                        content
                      ) : (
                        <div className="cursor-pointer flex items-center justify-start text-start ">
                          <span>{icons[content.icon]} </span>
                          <span className="ml-2">{content.text}</span>
                        </div>
                      )}
                    </p>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
