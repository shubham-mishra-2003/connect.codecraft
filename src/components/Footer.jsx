const Footer = () => {
  return (
    <div className="w-full bg-black p-2 text-white flex flex-col justify-center items-center">
      <span className="text-sky-400 text-2xl font-extrabold">Connect.CodeCraft</span>
      <div className="flex justify-between items-center w-full p-2">
        <span className="text-gray-400 md:text-xl text-sm">
          &copy; All rights reserved <span>by shubham mishra</span>
        </span>
        <a href="https://shubhammishra.vercel.app" target="_main" className="text-slate-400 text-sm no-underline">
          Meet Developer
        </a>
      </div>
    </div>
  );
};

export default Footer;
