import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAsid from "../Components/HomeLayout/LeftAsid";
import RightAsid from "../Components/HomeLayout/RightAsid";
import Loading from "../Components/Loading/Loading";

const HomeLayout = () => {
  const {state} = useNavigation()
  return (
    <div>
      <header className=" flex flex-col gap-8">
        <Header />

        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
        {/* Navbar Sticky */}
        <nav className="w-11/12 mx-auto sticky top-0 z-50">
          <Navbar />
        </nav>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-12 gap-4 mt-5">
        {/* left nav  */}
        <section className=" col-span-3">
          <aside className="sticky top-4 max-h-screen overflow-y-auto">
            <LeftAsid />
          </aside>
        </section>
        {/* Main */}

        <section className="main col-span-6 ">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} 
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

export default HomeLayout;
