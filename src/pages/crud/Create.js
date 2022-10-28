import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import "./create.css";

function Create() {
  toast.configure();
  const [state, setState] = useState({
    name: "",
    job: "",
  });

  const handleChange = (e) => {
    e.persist();
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: state.name,
      job: state.job,
    };

    axios
      .post(`https://reqres.in/api/users`, data)
      .then((res) => {
        console.log(res.data);
        setState({
          name: "",
          job: "",
        });
        toast.success("User added Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error While adding User");
      });
  };

  return (
    <div>
      <Header />
      <div>
        {" "}
        <div id="adduser-user-container" onSubmit={handleSubmit}>
          <h1>Add User</h1>
          <div className="adduser-user-underline"></div>
          <form id="adduser-user_form">
            <div className="adduser-user-name">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                onChange={handleChange}
                value={state.name}
                required
              />
            </div>
            <div className="adduser-user-leftSide">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="Job"
                name="job"
                id="job"
                onChange={handleChange}
                value={state.job}
                required
              />
            </div>
            <div className="adduser-user-submit">
              <input type="submit" value="Add" id="form_button-adduser-user" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Create;
