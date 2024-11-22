import React, { useContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { AuthContext } from "./Providers/AuthProvider";

const Root = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-screen">
        {loading ? (
          <span className="mx-auto loading loading-bars loading-lg"></span>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
