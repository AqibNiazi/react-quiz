import React from "react";
import logo from "../assets/quiz-logo.png";
const Header = () => {
  return (
    <header>
      <img src={logo} alt="Quiz Logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
};

export default Header;
