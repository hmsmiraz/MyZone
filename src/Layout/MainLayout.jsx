import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <section>
        <div className="flex py-5 shadow-lg items-center gap-2 pl-5">
          <img src="../../public/box.png" alt="" className="h-12 w-12"/>
          <h3 className="text-2xl font-bold">MyZone</h3>
        </div>

        <Outlet></Outlet>
      </section>
      ,
    </div>
  );
};

export default MainLayout;
