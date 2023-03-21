import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function DashBoard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/loginauth");
    }
  }, [navigate]);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h3>Welcome DashBoard</h3>
      <h4>Now You are Login</h4>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/loginauth");
        }}
      >
        Logout
      </button>
    </div>
  );
}
