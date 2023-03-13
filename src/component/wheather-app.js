import "../App.css";
import { useEffect, useState } from "react";

export function WhetherApp() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("Delhi");

  async function getDetail() {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=349b5c6c329a972dc87a4945dac9a28b`;
      const response = await fetch(url, {
        method: "GET",
        headers: { accept: "application/json" },
      });

      if (!response.ok) {
        setData([]);
        throw new Error(`Error! status--: ${response.status}`);
      }

      const result = await response.json();
      setData([result]);
    } catch (err) {
      console.log("err", err);
    }
  }

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  function NotFoundComponent() {
    return <div>Not Found</div>;
  }

  function DisplayTemplate() {
    return (
      <>
        {data.map((each) => {
          const c = each.main.temp - 273.15;
          return (
            <div key={each.id}>
              <div>{search}</div>
              <div>{c.toFixed(2)}&deg; C</div>
            </div>
          );
        })}
      </>
    );
  }
  return (
    <div className="App">
      <div className="heading"> Weather App</div>
      <div className="wrapper">
        <div>
          <input
            type="text"
            placeholder="enter place name"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setSearch(inputValue);
              setInputValue(" ");
            }}
          >
            Find
          </button>
        </div>
        {data.length === 0 ? <NotFoundComponent /> : <DisplayTemplate />}
      </div>
    </div>
  );
}
