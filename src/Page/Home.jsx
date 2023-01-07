import React from "react";
import "./Home.scss";
import Navbar from "../components/Navbar/Navbar";
import Contant from "../contents/Contant";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Contant />
    </div>
  );
};

export default Home;
