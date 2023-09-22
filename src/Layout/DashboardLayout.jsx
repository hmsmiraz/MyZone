import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="text-center flex flex-col gap-5 items-center">
        <h2 className="text-4xl font-bold p-3">This is Dashboard</h2>
      <div className="mt-3 w-64 text-center text-2xl font-medium">
        <ul className="bg-cyan-100 p-16">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/Dashboard/editProfile">Edit Profile</Link>
          </li>
        </ul>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
