import { Link } from "react-router-dom";
import bgImage from "../assets/banner/banner1.jpg";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div
        className="relative w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 p-8 rounded-lg shadow-2xl text-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60 rounded-lg"></div>
        <div className="relative z-10">
          <h1 className="text-9xl font-extrabold mb-4 animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
            404
          </h1>
          <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg mb-8">
            Oops! The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-700 text-black font-bold rounded-full hover:from-blue-500 hover:to-blue-800 transition-transform transform hover:scale-105"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
