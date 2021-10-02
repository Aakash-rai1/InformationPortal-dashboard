import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, Redirect } from "react-router-dom";

import SideNav from "../components/SideNav";
import axios from "axios";
// import { Link, Redirect } from "react-router-dom";
//Bootstrap and jQuery libraries
// import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Title from "../components/Title";
// api
import api from "../constant/api";
const Notification = () => {
  const [event, setEvents] = useState([]);
  const getAllNotification = () => {
    axios({
      method: "GET",
      url: api.getAllNotification,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
      .then((res) => {
        console.log(res.data);
        setEvents(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   Delete Event
  const eventDelete = (_id) => {
    console.log(_id);
    axios({
      method: "DELETE",
      url: api.deleteNotification + _id,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
      .then((res) => {
        console.log(res.data);
        // window.location.href = "/notification";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllNotification();
    setTimeout(() => {
      $("#example").DataTable({
        lengthMenu: [
          [5, 10, 15, -1],
          [5, 10, 15, "All"],
        ],
      });
    }, 1000);
  }, []);

  return (
    <div>
      {localStorage.getItem("token") ? (
        <div>
          <Header />
          <SideNav />
          <Title name="Notification" />

          <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <table id="example" class="display">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Notification Title</th>
                  <th>Notification content</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {event.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.content}</td>

                      <td>
                        {/* <Link to={"editevent/" + item._id}>Edit</Link>| */}
                        <Link to="#" onClick={eventDelete.bind(this, item._id)}>
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Link to="/addnotification">Push Notification</Link>
          </div>
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};

export default Notification;
