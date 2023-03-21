import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { EndlessScroll } from "./component/Endlessscroll";
import { WhetherApp } from "./component/Wheather-app";
import { DropDown } from "./component/Dropdown";
import { LoginPage } from "./component/Loginpage";
import { LoginAuthorization } from "./component/Loginauth";
import { DashBoard } from "./component/Dashboard";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>JS PRACTICE QUESTIONS</h1>
      <BrowserRouter>
        <ul className="ul-list">
          <li className="list">
            <Link to="/endlessscroll">EndlessScroll</Link>
          </li>
          <li className="list">
            <Link to="/whether-app">WhetherApp</Link>
          </li>
          <li className="list">
            <Link to="/dropdown">DropDown</Link>
          </li>
          <li className="list">
            <Link to="/loginpage">Login</Link>
          </li>
          <li className="list">
            <Link to="/loginauth">Login Authorization</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/endlessscroll" element={<EndlessScroll />} />
          <Route path="/whether-app" element={<WhetherApp />} />
          <Route path="/dropdown" element={<DropDown />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/loginauth" element={<LoginAuthorization />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
