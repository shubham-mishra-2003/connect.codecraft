import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  // Define state for html, css, and js
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <div className="App">
      <Header />
      <Input setHtml={setHtml} setCss={setCss} setJs={setJs} />
      <Output html={html} css={css} js={js} />
    </div>
  );
}

export default App;
