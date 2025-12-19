import React from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LogoutModel({handleCancel}) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
    toast.success("Logout Successfully");
    localStorage.removeItem("userLogin");
  };
  return (
    <>
      {createPortal(
        <>
          <div className="model-overlay">
            <div className="logout-model">
              <p>Are you sure you want to logout?</p>
              <div className="button-group">
                <button className="btn cancel-btn" onClick={handleCancel}>cancel</button>
                <button className="btn logout" onClick={handleNavigate}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>,
        document.getElementById("model")
      )}
    </>
  );
}

export default LogoutModel;
