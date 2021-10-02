import axios from "axios";
import React, { useState, useEffect } from "react";
import api from "../constant/api";
import { Link, Redirect } from "react-router-dom";

const SideNav = () => {
  const [adminDetails, setAdminDetails] = useState({});

  const checkLogin = () => {
    axios({
      method: "GET",
      url: api.checkUser,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setAdminDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    checkLogin();
  }, []);

  const logout = () => {
    axios({
      method: "DELETE",
      url: api.logout,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("token");
        localStorage.removeItem("isLogin");
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
        <div class="profile-sidebar">
          <div class="profile-userpic">
            <img src="logo512.png" class="img-responsive" alt="" />
          </div>
          <div class="profile-usertitle">
            <div class="profile-usertitle-name">Super Admin</div>
            <div class="profile-usertitle-status">
              <span class="indicator label-success"></span>Online
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="divider"></div>

        <ul class="nav menu">
          <li class="active">
            <Link to="/home">
              <em class="fa fa-dashboard">&nbsp;</em> Dashboard
            </Link>
          </li>

          <li>
            <Link to="/events">
              <em class="fa fa-calendar">&nbsp;</em> Events
            </Link>
          </li>
          <li>
            <Link to="/users">
              <em class="fa fa-users">&nbsp;</em> Users
            </Link>
          </li>
          <li>
            <Link to="/notification">
              <em class="fa fa-bell">&nbsp;</em> Notification
            </Link>
          </li>

          <li>
            <Link to="/news">
              <em class="fa fa-newspaper-o">&nbsp;</em> News
            </Link>
          </li>

          <li>
            <Link to="/" onClick={logout}>
              <em class="fa fa-power-off">&nbsp;</em> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
