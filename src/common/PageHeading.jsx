/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function PageHeading({ pageName, home }) {
  return (
    <div className="w-10/12 m-auto">
      <div className="bg-img relative">
        <div className="absolute top-1/2 left-16 -translate-y-1/2">
          <h1 className="text-3xl font-bold">{pageName}</h1>
          <p className="">
            {" "}
            <Link to={"/"} className="hover:text-yellow-500 capitalize">
              {home}
            </Link>{" "}
            /{pageName}
          </p>
        </div>
      </div>
    </div>
  );
}
