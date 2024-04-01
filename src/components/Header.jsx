import Logo from "../img/logo.jpeg";
import SaveButton from "./SaveButton";
import SavedCodes from "./SavedCodes";

const Header = () => {
  return (
    <header className="w-full flex flex-col justify-between items-center bg-black text-white">
      <div className="w-full items-start flex border-b-2 max-h-16">Ads</div>
      <div className="flex w-full justify-between items-center border-b-8 p-2 pl-4 pr-1 border-blue-500">
        <div className="flex gap-3 items-center">
          <img
            src={Logo}
            className="rounded-full border-white w-10 h-10 md:w-14 md:h-14"
          />
          <div className="flex w-min flex-col md:text-xl text-sm font-bold text-blue-500">
            <span>Connect.CodeCraft</span>
            <span className="md:text-lg text-[0.9em] text-gray-400 self-start">
              By shubham mishra
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <SavedCodes />
          <SaveButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
