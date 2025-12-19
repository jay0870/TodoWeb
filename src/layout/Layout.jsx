import React from "react";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
