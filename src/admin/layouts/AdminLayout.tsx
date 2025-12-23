import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      Admin Layout
      <h1 className="font-monserrat font-thin">
        Josué Guadalupe Vargas Guzmán
      </h1>
      <h1 className="font-monserrat font-normal">
        Josué Guadalupe Vargas Guzmán
      </h1>
      <h1 className="font-monserrat font-bold">
        Josué Guadalupe Vargas Guzmán
      </h1>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
