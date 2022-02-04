import React from "react";
import "./footer.css";
import black from "../assets/black.png";
import white from "../assets/white.png";
const Footer = ({ lightTheme }) => {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: lightTheme ? "#fff" : "#282c34",
      }}
    >
      <hr style={{ width: "90%", marginTop: 7 }} />
      <span
        className="name"
        style={{
          color: lightTheme ? "black" : "white",
          fontFamily: "Comforter",
          fontSize: "25px",
        }}
      >
        Made by{" "}
        <a href="https://bv-portfolio.netlify.app/" target="__blank">
          <img
            src={lightTheme ? black : white}
            style={{ width: "35px", position: "relative", top: "5px" }}
            alt="logo"
          />
        </a>
      </span>
    </div>
  );
};

export default Footer;
