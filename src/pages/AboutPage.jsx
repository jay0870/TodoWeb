import React from "react";
import "./about.css";
import { toggleTheame } from "../context/TheamContext";
import { useContext } from "react";

import { Navbar } from "../components/Navbar";

export const AboutPage = () => {
  const { mode } = useContext(toggleTheame);

  return (
    <div className={`${mode === "dark" ? "about-body" : "body-light"}`}>
      {/* <Navbar /> */}
      <div className="about-todo">
        <h1>About ToDo</h1>
      </div>
      <div className="container-about">
        <p className="details">
          A to-do list is a list of items that
          <span className="highlight"> need to be completed.</span>
          The items on the list can range from simple activities like replying
          to an email, to more complex tasks like creating project briefs.
        </p>

        <p className="details">
          The items on a to-do list are usually
          <span class="highlight"> action-oriented</span>, such as “Schedule a
          meet with the R&D team” or “Call back customer X.” Some lists include
          more abstract goals, such as “improve your time management skills”or
          “learn how to use a new software program.”
        </p>
      </div>
    </div>
  );
};
