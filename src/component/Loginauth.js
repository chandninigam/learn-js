import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginAuthorization() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
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
        localStorage.setItem("token", result.token);
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
      <button onClick={onClickLoginBtn}>Login</button>
    </div>
  );
}
