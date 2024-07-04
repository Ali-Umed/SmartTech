/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function PageHeading({ pageName, home }) {
  return (
    <div className="w-10/12 mx-auto my-8">
      <div className="bg-gray-100 py-8 px-4 rounded-lg shadow-md relative">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">{pageName}</h1>
          <p className="text-lg text-gray-600 mt-2">
            <Link to="/" className="hover:text-yellow-500 capitalize">
              {home}
            </Link>{" "}
            / {pageName}
          </p>
        </div>
      </div>
    </div>
  );
}
