import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomeImage from "../../images/HomeImage.png";
import "./home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="homePage">
        <img src={HomeImage} />
        <p>
          This is a Frontend website system that helps to test some fake api
          data.{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
