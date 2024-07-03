import { category } from "../data/data";

export default function Catagory() {
  return (
    <div className="w-10/12 mx-auto py-8">
      <div className="flex flex-wrap -mx-2">
        {category.map((cat, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <div className=" rounded-3xl overflow-hidden  transition-shadow duration-300 mb-4">
              {cat.img && (
                <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden mb-4">
                  <img
                    className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-transform duration-500"
                    src={cat.img}
                    alt={cat.name}
                  />
                  <p className="absolute bottom-0 left-0 bg-white bg-opacity-75 p-3 text-lg font-semibold text-gray-800 capitalize">
                    {cat.name}
                  </p>
                </div>
              )}
              {cat.imgs && cat.imgs.length > 0 && (
                <div>
                  {cat.imgs.map((image, key) => (
                    <div
                      key={key}
                      className="relative h-48 md:h-64 lg:h-72 overflow-hidden mb-4"
                    >
                      <img
                        className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-transform duration-500"
                        src={image.img}
                        alt={image.name}
                      />
                      <p className="absolute bottom-0 left-0 bg-white bg-opacity-75 p-3 text-lg font-semibold text-gray-800 capitalize">
                        {image.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
