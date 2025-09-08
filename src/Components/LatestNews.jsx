import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((singleData) => {
        setData(singleData);
      });
  }, []);

  return (
    <div className="flex items-center justify-baseline gap-3 bg-[var(--color-base-200)] p-2">
      <p className="bg-[var(--color-socondary)]  px-3 py-2 text-[var(--color-text-300)] font-semibold">
        Latest
      </p>
      <Marquee pauseOnHover="true" className="flex gap-5 items-center">
        {data.map((news) => (
          <p className="font-bold ml-10">"{news.title}"</p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
