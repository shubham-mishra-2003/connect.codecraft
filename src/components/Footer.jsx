const Footer = () => {
  return (
    <div className="w-full bg-black p-2 text-slate-400 flex flex-col justify-center items-center md:pl-20 md:pr-20">
      <span className="text-sky-400 text-2xl font-extrabold">Connect.CodeCraft</span>
      <div className="flex justify-between items-center w-full md:w-fit gap-5 p-2 text-[12px] md:text-xl">
        <span className="md:text-xl text-sm">
          &copy; All rights reserved by shubham mishra
        </span>
        <a href="https://shubhammishra.vercel.app" target="_main" className="no-underline text-center">
          Meet Developer
        </a>
      </div>
    </div>
  );
};

export default Footer;
