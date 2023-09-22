import { Outlet,NavLink } from "react-router-dom";
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
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-700" : ""
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/Products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-700" : ""
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dashboard
            </NavLink>
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
