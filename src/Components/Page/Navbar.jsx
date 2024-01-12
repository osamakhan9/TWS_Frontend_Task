import React, { useContext, useState } from "react";
import styles from "../main.module.css";
import { NavLink } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { AppContext } from "../../Context/AppContext";
import { Circle } from "@chakra-ui/react";


const Navbar = () => {

  const { TotalQty } = useContext(AppContext);


  return (
    <div id={styles.fixedNav}>

      <div id={styles.navBar}>
        <div id={styles.menuNav}>
          <li>
            <NavLink to="/">
              <img
                src="https://cdn-ibakd.nitrocdn.com/SpeivnGMrKJmdsnbAXZfedsMMvfJxBAk/assets/images/optimized/rev-dfa3ff1/www.tekkiwebsolutions.jobs/wp-content/uploads/logo.svg"
                alt="logo"
              />
            </NavLink>
          </li>
        </div>
        <div id={styles.searchBars}>
        
          <li>
            <p


            >
              <span style={{ display: "flex", alignContent: "center" }} >
                <NavLink to="/cart"><IoBagOutline /></NavLink>

                <span  >
                  {TotalQty !== 0 ? <Circle minWidth={30} bg="#fdd835" >{TotalQty}</Circle> : ""}
                </span>
              </span>
            </p>
          </li>

          <li>
            <p>
              <NavLink to='/orderpage'>
              Order page 
              </NavLink>
            </p>
          </li>


        </div>
      </div>
      <hr className={styles.hrLine} />
    </div>
  );
};

export default Navbar;
