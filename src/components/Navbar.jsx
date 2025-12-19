import { FaSquareCheck } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaCloudMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoutModel from "./LogoutModel";
import { useContext, useState } from "react";
import { toggleTheame } from "../context/TheamContext";

export function Navbar() {
  const [model, setModel] = useState(false);
  const { handleToggleMode, mode } = useContext(toggleTheame);

  return (
    <>
      {model && <LogoutModel handleCancel={() => setModel(false)} />}

      <nav className="navbar">
        <div className="nav-left">
          <h2 className="todo">
            TODO <FaSquareCheck style={{ color: "yellow" }} />
          </h2>
        </div>

        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/all-todos">All Todos</Link>
          </li>
        </ul>

        <div className="nav-right">
          <span onClick={handleToggleMode} style={{ cursor: "pointer" }}>
            {mode === "dark" ? (
              <TiWeatherPartlySunny
                style={{ color: "white", fontSize: "22px" }}
              />
            ) : (
              <FaCloudMoon style={{ color: "white", fontSize: "20px" }} />
            )}
          </span>

          <button className="logout-btn" onClick={() => setModel(true)}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}
