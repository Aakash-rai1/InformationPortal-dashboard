import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import api from "../constant/api";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setLogin] = useState(false);

  //   login function
  const login = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: api.login,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        setLogin(true);
        localStorage.setItem("isLogin", true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   checklogin
  const checkLogin = () => {
    const access = localStorage.getItem("isLogin");
    console.log(access);
    if (access === true) {
      return <Redirect to="/home" />;
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);

  //   console.log(password);
  if (islogin === true) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      {localStorage.getItem("token") ? (
        <Redirect to="/home"></Redirect>
      ) : (
        <div class="row">
          <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
            <div class="login-panel panel panel-default">
              <div class="panel-heading">Log in</div>
              <div class="panel-body">
                <form role="form">
                  <fieldset>
                    <div class="form-group">
                      <input
                        class="form-control"
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        autofocus=""
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="form-control"
                        placeholder="Password"
                        name="password"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                    <div class="checkbox">
                      <label>
                        <input
                          name="remember"
                          type="checkbox"
                          value="Remember Me"
                        />
                        Remember Me
                      </label>
                    </div>
                    <Link to="#" class="btn btn-primary" onClick={login}>
                      Login
                    </Link>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
