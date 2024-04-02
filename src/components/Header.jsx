import Logo from "../img/logo.jpeg";
import SaveButton from "./SaveButton";
import SavedCodes from "./SavedCodes";

const Header = () => {
  return (
    <header className="w-full p-2 pl-4 flex justify-between items-center border-b-8 border-blue-500 bg-black text-white">
      <div className="flex gap-3 items-center">
        <img
          src={Logo}
          className="rounded-full border-white w-10 h-10 md:w-14 md:h-14"
        />
        <div className="flex w-min flex-col md:text-xl text-sm">
          <span className="font-extrabold text-sky-400">Connect.CodeCraft</span>
          <span className="md:text-lg text-[0.9em] text-gray-400 self-start">
            By shubham mishra
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <SavedCodes />
        <SaveButton />
      </div>
    </header>
  );
};

export default Header;
