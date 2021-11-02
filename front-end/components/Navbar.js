import classes from "./Navbar.module.css";
// import classes from "./../styles/home.module.css";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

import { signout } from "../auth/Auth";

import {
  faBuilding,
  faHome,
  faPager,
  faSearch,
  faUser,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Navbar from "./Navbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useRouter } from "next/router";

import { signin, authenticate, isAutheticated } from "../auth/Auth";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const router = useRouter();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    signout(() => {
      router.push("/");
    });
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  const admins = () => {
    return (
      <div>
        <h2>Admin View</h2>
        <ul className={classes.ul}>
          <li>
            <i class="fas fa-suitcase-rolling"></i>
            <Link href="/admintrip">
              <a className={classes.a}>Trips</a>
            </Link>
          </li>

          <li>
            <i class="fas fa-wallet"></i>{" "}
            <Link href="/adminReport">
              <a className={classes.a}>Reports</a>
            </Link>
          </li>

          <br /> 
          <br />
        </ul>
      </div>
    );
  };

  const { user } = isAutheticated();
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      {/* <div className={classes.topnav}>
        <a>
         <h3> <FontAwesomeIcon icon={faScroll} className={classes.fa}  />  Expenses</h3>
        </a>

       
        <div className={classes.searchcontainer}>
          <form action='/'>
            <input type='text' placeholder='Search..' name='search' />
            <button type='submit'>
              <FontAwesomeIcon icon={faSearch} className={classes.fa} size={100000} />


            </button>
          </form>
          
        </div>

       <ul  className={classes.menu}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>

       </ul>
      
      </div> */}

      {/* <Navbar /> */}

      <nav
        className={classes.nav}
        style={{ position: "fixed", top: "0", left: "0", right: "0" }}
      >
        <div className={`${classes.icon} ${classes.topLogo}`}>
          <span className="fas fa-scroll"></span> Codingmart Expenses
        </div>
        <div className={classes.search_box}>
        <span className="fa fa-search"></span>
          <input
            className={classes.search_input}
            type="search"
            placeholder="Search here"
          />
        </div>
        <ol>
          <li>
            <a href="#">
              <h4 className={classes.trail}>
                <span>
                  <i className="fas fa-rocket"></i>
                </span>
                Trial Expires in 11 day
              </h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h5>
                <i class="fas fa-cog"></i>
              </h5>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>
                <span>{user.org_name}</span>
              </h4>
            </a>
          </li>

          <li>
            <a href="#">
              <h4>
                {" "}
                <b>
                  {" "}
                  <i class="fas fa-plus-square"></i>
                </b>
              </h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>
                <Button
                  style={{ color: "rgb(110, 117, 156)" }}
                  id="demo-positioned-button"
                  aria-controls="demo-positioned-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <i class="fa fa-user" aria-hidden="true">
                    {"  "}
                    {user.name}
                  </i>
                </Button>
              </h3>
            </a>
          </li>
        </ol>
      </nav>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <div
        className={classes.wrapper}
        style={{
          marginTop: "47px",
          marginLeft: "-4px",
          position: "fixed",
          top: "20px",
        }}
      >
        <div class={classes.sidebar}>
          <h2>My View</h2>
          <ul className={classes.ul}>
          <Link href="/home">

            <li>
              <i class="fas fa-home"></i>
                <a className={classes.a}>Home</a>
            </li>
            </Link>

            <Link href="/tripmain">

            <li>
              <i class="fas fa-suitcase-rolling"></i>
                <a className={classes.a}>Trips</a>
            </li>
            </Link>

            <Link href="/expensemain">
            <li>
              <i class="fas fa-scroll"></i>{" "}
                <a className={classes.a}>Expenses</a>
            </li>
            </Link>

            <Link href="/reportmain">
            <li>
              <i class="fas fa-wallet"></i>{" "}
                <a className={classes.a}>Reports</a>
            </li>
            </Link>

            <Link href="/advancemain">
            <li>
            <i class="fab fa-gg-circle"></i>{" "}
              
                <a className={classes.a}>Advances</a>
            </li>
            </Link>

            <Link href="/cardsmain">
            <li>
            <i class="far fa-credit-card"></i>{" "}
                <a className={classes.a}>Cards</a>
            </li>
            </Link>

            <Link href="/approvalsmain">
            <li>
            <i class="far fa-calendar-check"></i>{" "}
                <a className={classes.a}>Approvals</a>
            </li>
            </Link>

            <Link href="/analyticsmain">
            <li>
            <i class="fas fa-chart-pie"></i>{" "}
                <a className={classes.a}>Analytics</a>
            </li>
            </Link>

            <Link href="/mysettingsmain">
            <li>
            <i class="fas fa-cog"></i>{" "}
                <a className={classes.a}>Settings</a>
            </li>
            </Link>
            <br />
            <br />
          </ul>

          {user.role == 1 && admins()}
        </div>
      </div>
    </>
  );
}
