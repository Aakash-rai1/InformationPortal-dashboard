import React, { useState, useEffect } from "react";
import api from "../constant/api";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";
import Title from "../components/Title";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
const AddNews = () => {
  const [image, setImage] = React.useState("");
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");

  const fileHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const addNews = (e) => {
    // e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("content", content);
    data.append("image", image);

    axios
      .post("http://localhost:2020/admin/addnews", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    console.log(data);
  };
  return (
    <div>
      {localStorage.getItem("token") ? (
        <div>
          <Header />
          <SideNav />
          <Title name="Add News" />
          <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div class="col-md-6">
              <form role="form">
                <div class="form-group has-success">
                  <label> Name</label>
                  <input
                    class="form-control"
                    placeholder="Event Name"
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

                <div class="form-group">
                  <label>Event Photo</label>
                  <input type="file" onChange={(e) => fileHandler(e)} />
                </div>
              </form>
              <button type="submit" class="btn btn-primary" onClick={addNews}>
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};

export default AddNews;
