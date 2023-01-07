import React from "react";
import "./Header.scss";
import data from "../../data";

const Header = () => {
  return (
    <div className="header">
      {data.map((item) => (
        <div className="stories" key={item.id}>
          <div className="img">
            <img src={item.profile} alt={item.id} />
          </div>
          <div className="name">
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
