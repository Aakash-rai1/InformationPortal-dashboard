import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
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

const Users = () => {
  const [users, setusers] = useState([]);

  const getAllUsers = () => {
    axios({
      method: "GET",
      url: api.getAllActiveUsers,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
      .then((res) => {
        console.log(res.data);
        setusers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUsers();
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
          <Title name="User" />

          <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <table id="example" class="display">
              <thead>
                <tr>
                  <th>SN</th>
                  <th> First Name</th>
                  <th> Last Name</th>
                  <th> Email</th>
                  <th> Image</th>
                  <th> Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.fname}</td>
                      <td>{item.lname}</td>

                      <td>{item.email}</td>

                      <td>
                        <img src={item.image} width="80" />
                      </td>
                      <td>
                        <Link to={"viewresult/" + item._id}>View Result</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};

export default Users;
