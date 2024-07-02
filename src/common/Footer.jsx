import { footer } from "../data/data";

export default function Footer() {
  return (
    <div>
      <div className="bg-gray-900 ">
        <div className="w-10/12 m-auto">
          <div className="flex justify-between py-14 gap-8">
            {footer.map((val, index) => (
              <div key={index} className="text-gray-300 w-2/6">
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
    </div>
  );
}
