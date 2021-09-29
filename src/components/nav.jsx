import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
      <StyledNav>
        <h1>
           <Link id="logo" to="/">
             Capture
           </Link>
        </h1>
        <ul>
            <li>
                <Link to="/">1. About Us</Link>
            </li>
            <li>
                <Link to="/work">2. Our Work</Link>
            </li>
            <li>
                <Link to="/contact">3. Contact Us</Link>
            </li>
        </ul>
      </StyledNav>
    )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem ;
  background: #282828;
  a{
      color: white;
      text-decoration: none;
      font-size: 1.15rem;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  ul{
      display: flex;
      list-style: none;
  }
  #logo {
      font-size: 1.8rem;
      font-weight: lighter;
      font-family: 'Lobster', cursive;
  }
  li{
      padding-left: 5rem;
      position: relative;
  }
`

export default Nav;