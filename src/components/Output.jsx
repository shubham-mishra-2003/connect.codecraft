import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import SaveButton from "./SaveButton";

const Output = () => {
  return (
    <div className="flex w-full flex-col min-h-screen border-4 border-black outputArea">
      <div className="flex items-center pl-4 p-3 bg-black text-white justify-between w-full">
        <div className="text-xl gap-3">
          <span className="mr-3">Output</span>
          <PlayCircleFilledWhiteIcon
            style={{
              color: "#00aff0",
              background: "#fff",
              padding: 5,
              borderRadius: "20px",
              alignItems: "center"
            }}
          />
        </div>
        <SaveButton />
      </div>
      <iframe id="output" className="bg-transparent" />
    </div>
  );
};

export default Output;
