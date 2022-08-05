import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse By Property Type</h1>
      </div>
    </div>
  );
};

export default Home;
