import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import DashboardCard from "../components/DashboardCard";
import Title from "../components/Title";

import { Link, Redirect } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {localStorage.getItem("token") ? (
        <>
          <Header />
          <SideNav />
          <Title name="Dashboard" />
          <DashboardCard />
        </>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};

export default Home;
