import { useState } from "react";

export function LoginPage() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [data, setData] = useState([]);

  function onClickBtn() {
    const obj = {
      name: name,
      pass: pass,
      email: email,
      contact: contact,
    };
    setData((pre) => [...pre, obj]);
    setName("");
    setPass("");
    setEmail("");
    setContact(" ");
  }

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Login Form</h3>
      <div style={{ marginBottom: "0.5rem" }}>
        Name:{" "}
        <input
          value={name}
          type="text"
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        Pass:{" "}
        <input
          value={pass}
          type="pass"
          placeholder="Enter password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        Email:{" "}
        <input
          value={email}
          type="email"
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        Contact:{" "}
        <input
          value={contact}
          placeholder="Enter Contact"
          type="number"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <button onClick={onClickBtn}>Login</button>
      </div>
      <h3 style={{ textAlign: "center" }}>Table</h3>
      <table style={{ marginBottom: "0.5rem", border: "1px solid black" }}>
        <tr>
          <th>Name</th>
          <th>Pass</th>
          <th>Email</th>
          <th>Contact</th>
        </tr>
        {data.map((each, index) => {
          return (
            <tr key={index}>
              <td>{each.name}</td>
              <td>{each.pass}</td>
              <td>{each.email}</td>
              <td>{each.contact}</td>
              <button
                onClick={() => {
                  const res = data.filter((eachEle) => each !== eachEle);
                  setData(res);
                }}
              >
                Delete
              </button>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
