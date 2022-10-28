import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./edituser.css";

function EditUser() {
  toast.configure();
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);

    if (response.status === 200) {
      setState({ ...response.data.data });
    }
  };

  const handleChange = (e) => {
    e.persist();
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
    };

    axios
      .put(`https://reqres.in/api/users/${id}`, data)
      .then((res) => {
        setState({
          first_name: "",
          last_name: "",
          email: "",
        });
        toast.success("User Updated Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error While Updating User");
      });
  };

  return (
    <div>
      <Header />
      <div className="edit-User">
        <div>
          {" "}
          <div id="editUser-container" onSubmit={handleSubmit}>
            <h1>Edit User</h1>
            <div className="editUser-underline"></div>
            <form id="editUser">
              <div className="edituser-user-name ">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  id="first_name"
                  onChange={handleChange}
                  value={state.first_name}
                  required
                />
              </div>
              <div className="edituser-user-leftSide">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  id="last_name"
                  onChange={handleChange}
                  value={state.last_name}
                  required
                />
              </div>
              <div className="edituser-holl">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={state.email}
                  required
                />
              </div>
              <div className="editUser-submit">
                <input
                  type="submit"
                  value="save change"
                  id="form_button-editUser"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default EditUser;
