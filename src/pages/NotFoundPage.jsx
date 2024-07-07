import { Link } from "react-router-dom";
import bgImage from "../assets/banner/banner1.jpg";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div
        className="relative w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 p-8 rounded-lg shadow-lg text-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-50 rounded-lg"></div>
        <div className="relative z-10">
          <h1 className="text-7xl font-extrabold mb-4 animate-bounce">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg mb-8">
            Oops! The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-400 to-green-600 text-black font-bold rounded-full hover:from-teal-500 hover:to-green-700 transition-transform transform hover:scale-105"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
