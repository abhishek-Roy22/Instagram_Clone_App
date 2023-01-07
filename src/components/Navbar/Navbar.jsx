import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Profile from "../../assets/images/profile.jpg";
import ProfileCard from "../profileCard/ProfileCard";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="left">
        <img src={Logo} alt="logo" />
      </div>
      <div className="center">
        <input type="text" placeholder="Search" />
      </div>
      <div className="right">
        <HomeOutlinedIcon />
        <div className="icon">
          <MapsUgcOutlinedIcon />
        </div>
        <AddBoxIcon />
        <ExploreIcon />
        <FavoriteBorderIcon />
        <img src={Profile} alt="profile" onClick={() => setOpen(!open)} />
      </div>
      {open && <ProfileCard />}
    </div>
  );
};

export default Navbar;
