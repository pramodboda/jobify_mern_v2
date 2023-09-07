import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="">
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
