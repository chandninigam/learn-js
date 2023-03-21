import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function InvalidText(obj) {
  if (obj.display === true) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "red", padding: "0.5rem", fontSize: "0.8rem" }}>
          Invalid Username and Password
        </div>
        <h5>See console to get correct username and pass</h5>
      </div>
    );
  }
  return null;
}

export function LoginAuthorization() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState(null);
  const [displayError, setDisplayError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Correct Username: kminchelle");
    console.log("Correct Password: 0lelplR");
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/loginauth");
    }
  }, [data, navigate]);

  function onClickLoginBtn() {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        password: pass,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.token !== undefined) {
          localStorage.setItem("token", result.token);
          setDisplayError(false);
        } else {
          setDisplayError(true);
        }
        setData(result);
      });
  }

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h3>Login Authorization</h3>
      <input
        placeholder="Enter username"
        value={name}
        style={{ padding: "0.5rem", margin: "0.5rem" }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Enter password"
        type="password"
        value={pass}
        style={{ padding: "0.5rem", margin: "0.5rem" }}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <InvalidText display={displayError} />
      <button onClick={onClickLoginBtn}>Login</button>
    </div>
  );
}
