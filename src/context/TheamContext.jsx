import React, { createContext, useState } from "react";

export const toggleTheame = createContext();
function TheamContext({ children }) {
  const [mode, setMode] = useState("dark");
  const [taskData, setTaskData] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const handleToggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <>
      <toggleTheame.Provider
        value={{ handleToggleMode, mode, setTaskData, taskData }}
      >
        {children}
      </toggleTheame.Provider>
    </>
  );
}

export default TheamContext;
