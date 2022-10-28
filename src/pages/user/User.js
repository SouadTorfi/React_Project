import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useState, useEffect } from "react";
import Pagination from "../../components/pagination/Pagination";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./user.css";

function User() {
  const [user, setUser] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (page_id) => {
    await axios
      .get(`https://reqres.in/api/users?page=${page_id}`)
      .then((res) => {
        setUser(res.data.data);
        setTotalPages(res.data.total_pages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function deleteUser(m_id) {
    if (window.confirm("Are you sure you want to delete User?")) {
      const response = await axios
        .delete(`https://reqres.in/api/users/${m_id}`)
        .then((res) => {
          toast.success("User Deleted Successfully");
          getUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="user-search">
        <div id="search-container">
          <input
            type="search"
            id="search-input"
            placeholder="search name here..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="container-user">
        {user &&
          user
            .filter((val) => {
              if (searchValue === "") {
                return val;
              } else if (
                val.first_name.toLowerCase().includes(searchValue.toLowerCase())
              )
                return val;
            })
            .map((alluser, index) => {
              return (
                <div className="box" key={index}>
                  <img src={alluser.avatar} />
                  <h3>{alluser.first_name}</h3>
                  <h3>{alluser.last_name}</h3>
                  <div className="buttons">
                    {" "}
                    <div className="read-more">
                      <button onClick={() => deleteUser(alluser.id)}>
                        Delete
                      </button>
                    </div>
                    <br></br>
                    <div className="read-more">
                      <Link to={"/read/" + alluser.id}>
                        <button>Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div>
        <Pagination count={totalPages} getproductsByPagination={getUsers} />
      </div>
      <Footer />
    </div>
  );
}

export default User;
