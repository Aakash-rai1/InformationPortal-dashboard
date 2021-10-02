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
import $, { param } from "jquery";
import Title from "../components/Title";
// api
import api from "../constant/api";

const Users = (props) => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  //   const getAllUsers = () => {
  //     axios({
  //       method: "GET",
  //       url: api.getAllActiveUsers,
  //       // headers: {
  //       //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       // },
  //     })
  //       .then((res) => {
  //         console.log(res.data);
  //         setusers(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  const getResult = () => {
    axios({
      url: `http://localhost:2020/admin/getresult/${props.match.params.id}`,
      method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      //   },
    })
      .then((res) => {
        console.log(res.data);

        setResult(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getResult();
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
          <Title name="View Result" />

          <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            {/* <p>{props.match.params.id}</p> */}
            {loading === false ? (
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Subjects</th>
                    <th scope="col">Marks</th>
                    <th scope="col">Prctical</th>
                    <th scope="col">Aggregate</th>
                    <th scope="col">Remark</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>English</td>
                    <td>{result.message[0].english}</td>
                    <td>-</td>
                    <td>{result.message[0].english}</td>
                    {result.message[0].english >= 40 ? (
                      <td>Pass</td>
                    ) : (
                      <td>Fail</td>
                    )}
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Nepali</td>
                    <td>{result.message[0].nepali}</td>
                    <td>-</td>
                    <td>{result.message[0].nepali}</td>
                    {result.message[0].nepali >= 40 ? (
                      <td>Pass</td>
                    ) : (
                      <td>Fail</td>
                    )}
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Account</td>
                    <td>{result.message[0].account}</td>
                    <td>-</td>
                    <td>{result.message[0].account}</td>
                    {result.message[0].account >= 40 ? (
                      <td>Pass</td>
                    ) : (
                      <td>Fail</td>
                    )}
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>Math</td>
                    <td>{result.message[0].math}</td>
                    <td>-</td>
                    <td>{result.message[0].math}</td>
                    {result.message[0].math >= 40 ? (
                      <td>Pass</td>
                    ) : (
                      <td>Fail</td>
                    )}
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td>Science</td>
                    <td>{result.message[0].science}</td>
                    <td>-</td>
                    <td>{result.message[0].science}</td>
                    {result.message[0].science >= 40 ? (
                      <td>Pass</td>
                    ) : (
                      <td>Fail</td>
                    )}
                  </tr>

                  <tr>
                    <th scope="row">6</th>
                    <td>Opt_math</td>
                    <td>{result.message[0].opt_math}</td>
                    <td>-</td>
                    <td>{result.message[0].opt_math}</td>
                    {result.message[0].opt_math >= 40 ? (
                      <td>Pass</td>
                    ) : (
                      <td>Fail</td>
                    )}
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Health & Population</td>
                    <td>{result.message[0].health_population}</td>
                    <td>-</td>
                    <td>{result.message[0].health_population}</td>
                    {result.message[0].health_population >= 40 ? (
                      <td>Pass</td>
                    ) : (
                      <td>Fail</td>
                    )}
                  </tr>
                </tbody>
                <tr>
                  <td>Total:</td>
                  <td>{result.message[0].total}</td>
                </tr>
              </table>
            ) : (
              <> </>
            )}
          </div>
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};

export default Users;
