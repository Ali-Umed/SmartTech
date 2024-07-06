import { footer } from "../data/data";

export default function Footer() {
  return (
    <div className="bg-gray-900 w-full">
      <div className=" w-full px-4 md:px-12 lg:px-52">
        <div className="flex flex-row justify-between items-center   flex-wrap  py-8 gap-2 lg:gap-10">
          {footer.map((val, index) => (
            <div
              key={index}
              className="text-gray-300  text-center sm:text-start sm:w-1/5  md:w-1/5 lg:w-1/5 mb-4 md:mb-0"
            >
              <h1 className="text-2xl mb-5 text-white">{val.header}</h1>
              <p className="hover:text-white transition-colors duration-200">
                {val.content1}
              </p>
              <p className="hover:text-white transition-colors duration-200">
                {val.content2}
              </p>
              <p className="hover:text-white transition-colors duration-200">
                {val.content3}
              </p>
              <p className="hover:text-white transition-colors duration-200">
                {val.content4}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
