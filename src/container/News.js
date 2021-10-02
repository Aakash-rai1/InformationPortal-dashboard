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
const News = () => {
  const [event, setEvents] = useState([]);
  const getAllNotification = () => {
    axios({
      method: "GET",
      url: api.getNews,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
      .then((res) => {
        console.log(res.data);
        setEvents(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   Delete Event
  const eventDelete = (id) => {
    console.log(id);
    axios({
      method: "DELETE",
      url: api.deleteNotification + id,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
      .then((res) => {
        console.log(res.data);
        window.location.href = "/news";
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
          <Title name="News" />

          <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <table id="example" class="display">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>News Title</th>
                  <th>News content</th>
                  <th>Image</th>

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
                        <img
                          src={`http://localhost:2020/image/post/${item.image}`}
                          style={{ width: 50, height: 50 }}
                        />
                      </td>

                      <td>
                        {/* <Link to={"editevent/" + item._id}>Edit</Link>| */}
                        <Link to="#" onClick={eventDelete.bind(this, item.id)}>
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Link to="/addnews">Add News</Link>
          </div>
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};

export default News;
