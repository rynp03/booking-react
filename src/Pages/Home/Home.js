import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import Propertylist from "../../Components/propertylist/Propertylist";
import Featuredprop from "../../Components/featuredprop/Featuredprop";
import Maillist from "../../Components/maillist/Maillist";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse By Property Type</h1>
        <Propertylist/>
        <h1 className="homeTitle">Homes guests love</h1>
        <Featuredprop/>
        <Maillist/>
      </div>
    </div>
  );
};

export default Home;
