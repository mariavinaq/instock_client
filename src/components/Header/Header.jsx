import React from "react";
import "./Header.scss";
import logo from "../../assets/Logo/InStock-Logo_2x.png";
import logo_big from "../../assets/Logo/InStock-Logo_2x.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo at header" onClick={() => navigate("/")}></img>
      <div className="header__nav">
        <div className="header__nav-wrap">
          <NavLink to="/warehouses" className="header__nav-item">
            Warehouses
          </NavLink>
        </div>
        <div className="header__nav-wrap">
          <NavLink to="/inventories" className="header__nav-item">
            Inventory
          </NavLink>
        </div>
      </div>
    </div>
  );
}
