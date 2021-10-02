import React, { useState, useEffect } from "react";
import api from "../constant/api";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";
import Title from "../components/Title";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
const Profile = () => {
  const [adminDetails, setAdminDetails] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

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
        setEmail(res.data.email);
        setName(res.data.name);
        setAddress(res.data.address);
        setPhone(res.data.phone);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   update Profile
  const updateAdmin = () => {
    axios({
      method: "PUT",
      url: api.updateAdmin + adminDetails._id,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        name: name,
        email: email,
        address: address,
        phone: phone,
        image: image,
      },
    })
      .then((res) => {
        console.log(res.data);
        window.location.href = "/profile";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div>
      {localStorage.getItem("token") ? (
        <div>
          <Header />
          <SideNav />
          <Title name="Admin Profile" />
          <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div class="col-md-6">
              <form role="form">
                <div class="form-group has-success">
                  <label> Name</label>
                  <input
                    class="form-control"
                    placeholder="Event Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>

                <div class="form-group has-success">
                  <label>Email</label>
                  <input
                    class="form-control"
                    placeholder="Event Name"
                    value={email}
                    // onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div class="form-group has-success">
                  <label>Address</label>
                  <input
                    class="form-control"
                    placeholder="Event Name"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </div>

                <div class="form-group has-success">
                  <label>Phone</label>
                  <input
                    class="form-control"
                    placeholder="Event Name"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>

                <div class="form-group">
                  <label>Event Photo</label>
                  <input
                    type="file"
                    onChange={(e) => {
                      const image = e.target.files[0];
                      console.log(image);
                      const data = new FormData();
                      data.append("image", image);
                      axios({
                        method: "POST",
                        url: api.uploadImage,
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "multipart/form-data",
                        },
                        data: data,
                      })
                        .then(function (res) {
                          console.log(res.data);
                          setImage(res.data.image);
                          // console.log(profilePic);
                        })
                        .catch(function (err) {
                          console.log(err);
                        });
                    }}
                  />
                  <img src={image} width="80" />
                </div>
              </form>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={updateAdmin}
              >
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

export default Profile;
