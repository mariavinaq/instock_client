import React from "react";
import "./Header.scss";
import logo from "../../assets/Logo/InStock-Logo_2x.png";
import logo_big from "../../assets/Logo/InStock-Logo_2x.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo at header"></img>
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
