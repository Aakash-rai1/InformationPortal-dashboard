import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Title from "../components/Title";
import api from "../constant/api";
import { Link, Redirect } from "react-router-dom";

const AddNotification = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  //   update Event
  const updateEvent = () => {
    axios({
      method: "POST",
      url: api.addNotification,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
      data: {
        title: title,
        content: content,
        date: date,
        location: location,
      },
    })
      .then((res) => {
        console.log(res.data);
        window.location.href = "/notification";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {localStorage.getItem("token") ? (
        <div>
          <Header />
          <SideNav />
          <Title name="Add Notification" />
          <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div class="panel panel-default">
              <div class="panel-heading">Add</div>
              <div class="panel-body">
                <div class="col-md-6">
                  <form role="form">
                    <div class="form-group has-success">
                      <label>Notification Title</label>
                      <input
                        class="form-control"
                        placeholder="Event Title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                      />
                    </div>

                    <div class="form-group has-success">
                      <label>Notification Content</label>
                      <textarea
                        class="form-control"
                        rows="3"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                      ></textarea>
                    </div>
                  </form>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={updateEvent}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};

export default AddNotification;
