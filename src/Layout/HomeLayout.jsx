import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAsid from "../Components/HomeLayout/LeftAsid";
import RightAsid from "../Components/HomeLayout/RightAsid";

const HomeLayout = () => {
  return (
    <div>
      <header className="flex flex-col gap-8">
        <Header />

        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto">
          <Navbar />
        </nav>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
        {/* left nav  */}
        <section className=" col-span-3">
          <aside>
            <LeftAsid />
          </aside>
        </section>
        {/* Main */}

        <section className="main col-span-6 ">
         <Outlet></Outlet>
        </section>


        {/* right nav  */}

        <section className="col-span-3">
          <aside>
            <RightAsid></RightAsid>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;


