import React from "react";

const Footer = () => {
  const getHour = new Date().getHours();
  const openHour = 12;
  const clodeHour = 22;
  if (getHour >= openHour && getHour <= 22) {
    alert("we are currently open");
  }
  return (
    <footer>
      {getHour >= openHour && getHour <= clodeHour
        ? "W're CurrentlyOpen!"
        : "Sorry We Are Closed"}{" "}
    </footer>
  );
};

export default Footer;
