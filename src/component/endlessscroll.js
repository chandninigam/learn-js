import { useEffect, useState } from "react";
import "../App.css";

function Tile({ detail }) {
  return (
    <div className="wrapper">
      <div className="container">
        <span style={{ fontWeight: "bold" }}>UserId:</span> {detail.userId}
      </div>
      <div className="container">
        <span style={{ fontWeight: "bold" }}>Id:</span> {detail.id}
      </div>
      <div className="container">
        <span style={{ fontWeight: "bold" }}>Title:</span> {detail.title}
      </div>
      <div className="container">
        <span style={{ fontWeight: "bold" }}>Body:</span> {detail.body}
      </div>
    </div>
  );
}

export function EndlessScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  async function getDetail() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data = await res.json();
    setData((pre) => [...pre, ...data]);
  }

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleInfinteScroll() {
    const innerHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    if (innerHeight + scrollTop >= scrollHeight) {
      setPage((pre) => pre + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleInfinteScroll);

    return () => window.removeEventListener("scroll", handleInfinteScroll);
  }, []);

  return (
    <div className="endless-Scroll">
      <div className="heading">List End Less Scroll</div>
      {data.map((each) => {
        return <Tile key={each.id} detail={each} />;
      })}
    </div>
  );
}
