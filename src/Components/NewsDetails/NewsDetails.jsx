import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import LatestNews from "../LatestNews";
import Header from "../Header";
import RightAsid from "../HomeLayout/RightAsid";
import NewsDetailsCard from "../NewsDetailsCard/NewsDetailsCard";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const NewsData = data.find((singleNews) => singleNews.id == id);
    setNews(NewsData);
  }, [data, id]);
  console.log(data, news);

  return (
    <div>
      <header className=" flex flex-col gap-8">
        <Header />

        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-12 gap-4 mt-5">
        {/* Main */}

        <section className="main col-span-9">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>

        {/* right nav  */}

        <section className="col-span-3">
          <aside className="sticky top-4 max-h-screen overflow-y-auto ">
            <RightAsid></RightAsid>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
