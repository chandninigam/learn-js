import { useState } from "react";

const DummyData = [
  {
    id: 1,
    country: "India",
    States: [
      "Uttar Pradesh",
      "Himanchal Pradesh",
      "Uttarkhand",
      "Andhra Pradesh",
      "Delhi",
    ],
  },
  {
    id: 2,
    country: "Pakistan",
    States: ["Khyber", "Pakhtunkhwa", "Balochistan", "Islamabad", "Krachi"],
  },
  {
    id: 3,
    country: "Australia",
    States: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "Western Australia",
      "South Australia",
    ],
  },
];

export function DropDown() {
  const [data] = useState(DummyData);
  const [currCountry, setCurrCountry] = useState(DummyData[0].country);

  function FindCurrentCountryStates() {
    const element = data.find((obj) => obj.country === currCountry);
    return (
      <select style={{ margin: "0.5rem" }}>
        {element.States.map((each) => {
          return <option key={each}>{each}</option>;
        })}
      </select>
    );
  }

  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <h3>Drop Down App</h3>
      <select
        onChange={(e) => {
          setCurrCountry(e.target.value);
        }}
        style={{ margin: "0.5rem" }}
      >
        {data.map((each) => {
          return <option key={each.id}>{each.country}</option>;
        })}
      </select>
      <FindCurrentCountryStates />
    </div>
  );
}
