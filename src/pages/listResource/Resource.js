import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import axios from "axios";
import "./resource.css";

function Resource() {
  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getResources();
  }, []);

  const getResources = async (page_id) => {
    await axios
      .get(`https://reqres.in/api/unknown?page=${page_id}`)
      .then((res) => {
        setList(res.data.data);
        setTotalPages(res.data.total_pages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <div className="resource-container">
        <h1>All Resources</h1>
        <div className="resource-underline"></div>
        <h4></h4>
        <div id="search-container">
          <input
            type="search"
            id="search-input"
            placeholder="search name here..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <ul className="resource-responsive-table">
          <li className="table-content">
            <div className="col col-1">Id</div>
            <div className="col col-2">Name</div>
            <div className="col col-1">Year</div>
            <div className="col col-2">Color</div>
            <div className="col col-3">Pantone_value</div>
            <div className="col col-3">Details</div>
          </li>
          {list &&
            list
              .filter((val) => {
                if (searchValue === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchValue.toLowerCase())
                )
                  return val;
              })
              .map((resource, index) => {
                return (
                  <li className="resource-table-row" key={index}>
                    <div className="col col-1" data-label="Id">
                      {resource.id}
                    </div>
                    <div className="col col-2" data-label="Name">
                      {resource.name}
                    </div>
                    <div className="col col-1" data-label="Year">
                      {resource.year}
                    </div>

                    <div className="col col-2" data-label="Color">
                      {resource.color}
                    </div>
                    <div className="col col-3" data-label="Pantone_value">
                      {resource.pantone_value}
                    </div>

                    <div className="col col-3">
                      <div className="more-details">
                        <Link to={"/details/" + resource.id}>
                          <button>Details</button>
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
        </ul>
        <div>
          <Pagination
            count={totalPages}
            getproductsByPagination={getResources}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resource;
