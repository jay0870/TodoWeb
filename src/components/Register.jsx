import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { toast } from "react-toastify";

export function Register() {
  const [userName, setUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPwd, setRegPwd] = useState("");
  const [confPwd, setConfPwd] = useState("");
  const [message, setMessage] = useState({});
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newError = {};

    if (!userName.trim()) {
      newError.userName = "Username must not be empty.";
    }
    if (!regEmail.trim()) {
      newError.regEmail = "Email must not be empty.";
    }
    if (!regPwd.trim()) {
      newError.regPwd = "Password must not be empty.";
    }
    if (!confPwd.trim()) {
      newError.confPwd = "Confirm password must not be empty.";
    }
    if (regPwd.trim().length < 6) {
      newError.regPwd = "Password must be at least 6 characters.";
    }
    if (regPwd !== confPwd) {
      newError.confPwd = "Password and confirm password must match.";
    }

    setMessage(newError);

    if (Object.keys(newError).length === 0) {
      localStorage.setItem(
        "RegisterUser",
        JSON.stringify({ userName, regEmail, regPwd, confPwd })
      );
      navigate('/login');
      toast.success("Register successFully!");
      
      
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Register</h2>
        <p className="register-subtitle">Let's create a new account</p>

        <form className="form-group" onSubmit={handleRegister}>
          <div>
            <label className="form-label">Username:</label>
            <input
              type="text"
              className={`form-input ${message.userName ? "error-show" : ""}`}
              onChange={(e) => setUsername(e.target.value)}
            />
            {message.userName && (
              <p className="error-message">{message.userName}</p>
            )}
          </div>

          <div>
            <label className="form-label">Email Address:</label>
            <input
              type="email"
              className={`form-input ${message.regEmail ? "error-show" : ""}`}
              onChange={(e) => setRegEmail(e.target.value)}
            />
            {message.regEmail && (
              <p className="error-message">{message.regEmail}</p>
            )}
          </div>

          <div>
            <label className="form-label">Password:</label>
            <input
              type="password"
              className={`form-input ${message.regPwd ? "error-show" : ""}`}
              onChange={(e) => setRegPwd(e.target.value)}
            />
            {message.regPwd && (
              <p className="error-message">{message.regPwd}</p>
            )}
          </div>

          <div>
            <label className="form-label">Confirm Password:</label>
            <input
              type="password"
              className={`form-input ${message.confPwd ? "error-show" : ""}`}
              onChange={(e) => setConfPwd(e.target.value)}
            />
            {message.confPwd && (
              <p className="error-message">{message.confPwd}</p>
            )}
          </div>

          <button
            type="submit"
            className={`register-btn ${
              userName.trim() &&
              regEmail.trim() &&
              regPwd.trim() &&
              confPwd.trim() &&
              regPwd === confPwd &&
              regPwd.length >= 6
                ? "not-empty"
                : ""
            }`}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
