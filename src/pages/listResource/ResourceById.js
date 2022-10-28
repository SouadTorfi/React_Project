import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import "./resource_by_id.css";

function ResourceById() {
  const [state, setState] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/unknown/${id}`)
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
        <div className="resource-details-container">
          <div className="resource-details">
            <h1>Details</h1>
            <div className="resource-underline"></div>
            <div className="user-attributes">
              <h3>
                Id: <span>{state.id}</span>
              </h3>
              <br></br>
              <h3>
                Name: <span>{state.name}</span>
              </h3>
              <br></br>
              <h3>
                Year: <span>{state.year}</span>
              </h3>
              <br></br>
              <h3>
                Color: <span>{state.color}</span>
              </h3>
              <br></br>
              <h3>
                Pantone_value: <span>{state.pantone_value}</span>
              </h3>
              <br></br>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default ResourceById;
