// import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Header = () => {
  return (
    <div className="flex justify-between bg-black pl-5 p-3 pr-6 text-white w-full fixed z-10">
      <div className="flex justify-center items-center gap-4 w-max">
        <img
          src={logo}
          alt="codecraft logo"
          className="md:w-12 md:h-12 h-10 w-10 rounded-full"
        />
        <h1 className="flex flex-col sm:text-xl md:text-2xl text-lg font-extrabold text-sky-400">
          Connect.CodeCraft
          <span className="md:text-lg sm:text-sm text-[0.8rem] text-gray-400 self-start">
            by shubham mishra
          </span>
        </h1>
      </div>
      <div className="flex gap-3 md:text-xl justify-center items-center">
        {/* <Link
          target="_main"
          to="/tutorial"
          className="text-gray-300 transition-all hover:text-gray-400"
        >
          Tutorial
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
