import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { EndlessScroll } from "./component/Endlessscroll";
import { WhetherApp } from "./component/Wheather-app";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>JS PRACTICE QUESTIONS</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/endlessscroll">EndlessScroll</Link>
          </li>
          <li>
            <Link to="/whether-app">WhetherApp</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/endlessscroll" element={<EndlessScroll />} />
          <Route path="/whether-app" element={<WhetherApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
