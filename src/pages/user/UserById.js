import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../user/user_by_id.css";

function ResourceById() {
  const [state, setState] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setState(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <Header />
      <div className="user-details-container">
        <div className="user-details">
          <h1>Details</h1>
          <div className="user-underline"></div>
          <div className="avatar">
            <img src={state.avatar} alt="avatar" />
          </div>
          <div className="users">
            <div className="user-attributes">
              <h3>
                Id: <span>{state.id}</span>
              </h3>
              <br></br>
              <h3>
                First Name: <span>{state.first_name}</span>
              </h3>
              <br></br>
              <h3>
                Last Name: <span>{state.last_name}</span>
              </h3>
              <br></br>
              <h3>
                Email: <span>{state.email}</span>
              </h3>
              <br></br>
              <div className="updateuser">
                <Link to={"/edituser/" + state.id}>
                  <button>Update</button>
                </Link>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ResourceById;
