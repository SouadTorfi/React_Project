import React from "react";
import { useState, useEffect } from "react";
import Loading from "../../components/loader/Loader";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Pagination from "../../components/pagination/Pagination";
import axios from "axios";
import "./delayed.css";

function DelayedResponse() {
  const [delayed, setDelayed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getDelayed();
  }, []);

  const getDelayed = async (page_id) => {
    await axios
      .get(`https://reqres.in/api/users?delay=3&&page=${page_id}`)
      .then((res) => {
        setDelayed(res.data.data);
        setTotalPages(res.data.total_pages);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <div className="delayed-container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1>Delayed Response</h1>

            <div className="delayed-underline"></div>
            <h4></h4>
            <div id="search-container">
              <input
                type="search"
                id="search-input"
                placeholder="search name here..."
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <ul className="delayed-responsive-table">
              <li className="table-content">
                <div className="col col-1">Id</div>
                <div className="col col-2">First_Name</div>
                <div className="col col-1">Last_Name</div>
                <div className="col col-2">Email</div>
              </li>
              {delayed &&
                delayed
                  .filter((val) => {
                    if (searchValue === "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchValue.toLowerCase())
                    )
                      return val;
                  })
                  .map((del, index) => {
                    return (
                      <li className="delayed-table-row" key={index}>
                        <div className="col col-1" data-label="Id">
                          {del.id}
                        </div>
                        <div className="col col-2" data-label="First_Name">
                          {del.first_name}
                        </div>
                        <div className="col col-1" data-label="Last_Name">
                          {del.last_name}
                        </div>

                        <div className="col col-2" data-label="Email">
                          {del.email}
                        </div>
                      </li>
                    );
                  })}
            </ul>
            <div>
              <Pagination
                count={totalPages}
                getproductsByPagination={getDelayed}
              />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default DelayedResponse;
