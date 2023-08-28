import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./User.sass";

function User() {

  //used to get the state from UserList when click in View Profile
  const location = useLocation();

  const [info, setInfo] = useState(true);
  const [loc, setLoc] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="back">
        <a href="/" className="backLink">
          Back
        </a>
      </div>
      <div className="user">
        <img className="userImg" src={location.state.photo} alt="userImg" />

        <h2 className="">
          {location.state.firstname} {location.state.lastname}
        </h2>

        <h3 className="title">{location.state.title}</h3>
      </div>

      <div>
        <button
          onClick={() => {
            setInfo(true);
            setLoc(false);
            setLogin(false);
          }}
          className={info ? "infoEach_active" : "infoEach_inactive"}
        >
          Info
        </button>

        <button
          onClick={() => {
            setInfo(false);
            setLoc(true);
            setLogin(false);
          }}
          className={loc ? "infoEach_active" : "infoEach_inactive"}
        >
          Location
        </button>

        <button
          onClick={() => {
            setInfo(false);
            setLoc(false);
            setLogin(true);
          }}
          className={login ? "infoEach_active" : "infoEach_inactive"}
        >
          Login
        </button>
      </div>

      <div className="content">
        {info && (
          <>
            <h3>First name</h3>
            <h4>{location.state.firstname}</h4>
            <h3>Last name</h3>
            <h4>{location.state.lastname}</h4>
            <h3>Age</h3>
            <h4>{location.state.age}</h4>
          </>
        )}
        {loc && (
          <>
            <h3>City</h3>
            <h4>{location.state.city}</h4>
            <h3>State</h3>
            <h4>{location.state.state}</h4>
            <h3>Country</h3>
            <h4>{location.state.country}</h4>
          </>
        )}
        {login && (
          <>
            <h3>Username</h3>
            <h4>{location.state.username}</h4>
            <h3>Password</h3>
            <h4>********</h4>
            <h3>Email</h3>
            <h4>{location.state.email}</h4>
          </>
        )}
      </div>
    </div>
  );
}

export default User;
