import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { EndlessScroll } from "./component/Endlessscroll";
import { WhetherApp } from "./component/Wheather-app";
import { DropDown } from "./component/Dropdown";
import { LoginPage } from "./component/Loginpage";

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
          <li>
            <Link to="/dropdown">DropDown</Link>
          </li>
          <li>
            <Link to="/loginpage">Login</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/endlessscroll" element={<EndlessScroll />} />
          <Route path="/whether-app" element={<WhetherApp />} />
          <Route path="/dropdown" element={<DropDown />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
