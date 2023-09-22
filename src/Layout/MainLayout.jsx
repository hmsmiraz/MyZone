import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-between shadow-lg px-10 items-center py-4">
        <div className="flex gap-2 items-center">
          <img src="../../public/box.png" alt="" className="h-12 w-12" />
          <h3 className="text-2xl font-bold">MyZone</h3>
        </div>

        <nav>
          <ul className="flex gap-4 text-xl font-semibold">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/products">Products</a>
            </li>

            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
