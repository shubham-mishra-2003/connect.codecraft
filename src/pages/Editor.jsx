import { useState } from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import EditorHeader from "../components/EditorHeader";

function Editor() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <div>
      <EditorHeader />
      <Input setHtml={setHtml} setCss={setCss} setJs={setJs} />
      <Output html={html} css={css} js={js} />
    </div>
  );
}

export default Editor;
