import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";

const Input = () => {

  const run = () => {
    let htmlCode = document.getElementById("html").value;
    let cssCode = document.getElementById("css").value;
    let jsCode = document.getElementById("js").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML =
      htmlCode + "<style> *{color: #fff}" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
  };

  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex-1 border-l-4 border-black" id="htmlinput">
        <div className="flex bg-black pl-4 pr-4 p-2 items-center justify-between">
          <span className="text-xl font-bold text-white">HTML</span>
          <HtmlIcon
            style={{
              color: "#00aff0",
              background: "#fff",
              borderRadius: "20px",
              padding: 2,
              fontSize: "2rem"
            }}
          />
        </div>
        <textarea
          className="placeholder:text-gray-300 focus:outline-none placeholder:font-bold text-white w-full h-96 p-2"
          id="html"
          placeholder="Type your HTML Code here"
          onKeyUp={run}
        />
      </div>
      <div className="flex-1 border-l-4 border-black" id="cssinput">
        <div className="flex bg-black pl-4 pr-4 p-2 items-center justify-between">
          <span className="text-xl font-bold text-white">CSS</span>
          <CssIcon
            style={{
              color: "#00aff0",
              background: "#fff",
              borderRadius: "20px",
              padding: 2,
              fontSize: "2rem"
            }}
          />
        </div>
        <textarea
          className="placeholder:text-gray-300 placeholder:font-bold focus:outline-none text-white w-full h-96 p-2"
          id="css"
          placeholder="Type your CSS Code here"
          onKeyUp={run}
        />
      </div>
      <div
        className="min-h-full flex-1 border-r-4 border-l-4 border-black"
        id="jsinput"
      >
        <div className="flex bg-black pl-4 pr-4 p-2 items-center justify-between">
          <span className="text-xl font-bold text-white">JS</span>
          <JavascriptIcon
            style={{
              color: "#00aff0",
              background: "#fff",
              borderRadius: "20px",
              padding: 1,
              fontSize: "2rem"
            }}
          />
        </div>
        <textarea
          className="placeholder:text-gray-300 placeholder:font-bold focus:outline-none text-white w-full h-96 p-2"
          id="js"
          placeholder="Type your JS Code here"
          onKeyUp={run}
        />
      </div>
    </div>
  );
};

export default Input;
