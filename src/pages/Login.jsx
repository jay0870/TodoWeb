import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { toast } from "react-toastify";

export function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email must not be empty.";
    }

    if (!pwd.trim()) {
      newErrors.pwd = "Password must not be empty.";
    } else if (pwd.trim().length < 6) {
      newErrors.pwd = "Password must be 6 characters long.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem("userLogin", JSON.stringify({ email, pwd }));
      // navigate("/");
    }
    // console.log(email, pwd);
    const SameData = localStorage.getItem("RegisterUser");
    if(SameData){
      const parsedData = JSON.parse(SameData);
      if(email === parsedData.regEmail && pwd === parsedData.regPwd){
        toast.success("Login successFully!");
        navigate("/");
      } else {
        setErrors({
          email: "Invalid email or password.",
          pwd: "Invalid email or password."
        });
      }
    }
  
  };

  return (
    <div className="login-box">
      <div className="title">
        <p className="login">LOGIN</p>
        <p className="welcome">Welcome back !!</p>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          type="email"
          placeholder="john@doe.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "error-input" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Your Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className={errors.pwd ? "error-input" : ""}
        />
        {errors.pwd && <p className="error">{errors.pwd}</p>}

        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  );
}
