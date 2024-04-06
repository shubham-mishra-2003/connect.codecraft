import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Editor from "./pages/Editor";
import Tutorial from "./pages/Tutorial";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/editor" element={<Editor />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
