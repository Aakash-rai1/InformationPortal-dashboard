import axios from "axios";
import React, { useState, useEffect } from "react";
import api from "../constant/api";

const DashboardCard = () => {
  const [productNum, setProductNum] = useState("");
  const [eventNum, setEventNum] = useState("");
  const [userNum, setUserNum] = useState("");

  const getAllProduct = () => {
    axios({
      method: "GET",
      url: api.getAllProduct,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        const num = res.data.results.length;
        console.log(num);
        setProductNum(num);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllEvents = () => {
    axios({
      method: "GET",
      url: api.getAllEvents,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        const num = res.data.results.length;
        console.log(num);
        setEventNum(num);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllUsers = () => {
    axios({
      method: "GET",
      url: api.getAllActiveUsers,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        const num = res.data.results.length;
        console.log(num);
        setUserNum(num);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProduct();
    getAllEvents();
    getAllUsers();
  });
  return (
    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
      <div class="panel panel-container">
        <div class="row">
          <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
            <div class="panel panel-teal panel-widget border-right">
              <div class="row no-padding">
                <em class="fa fa-xl fa-newspaper-o color-blue"></em>
                <div class="large">3</div>
                <div class="text-muted">News</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
            <div class="panel panel-blue panel-widget border-right">
              <div class="row no-padding">
                <em class="fa fa-xl fa-calendar color-orange"></em>
                <div class="large">2</div>
                <div class="text-muted">Events</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
            <div class="panel panel-orange panel-widget border-right">
              <div class="row no-padding">
                <em class="fa fa-xl fa-users color-teal"></em>
                <div class="large">3</div>
                <div class="text-muted">New Users</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
            <div class="panel panel-red panel-widget ">
              <div class="row no-padding">
                <em class="fa fa-xl fa-download color-red"></em>
                <div class="large">3k</div>
                <div class="text-muted">Visitors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
