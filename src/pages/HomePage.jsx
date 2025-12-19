import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { Task } from "../components/TaskAdd";
import { toggleTheame } from "../context/TheamContext";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const { mode, setTaskData, taskData } = useContext(toggleTheame);
  const nav = useNavigate();
  const [editData, setEditData] = useState({});

  const getFormData = (inputData) => {
    console.log(inputData);
    setTaskData([...taskData, inputData]);

    // const getLocalStorage= localStorage.getItem('todoList')
  };
  const deleteCard = (id) => {
    console.log(id);
    setTaskData(taskData.filter((item) => item.id !== id));
  };

  const completeTask = (id) => {
    setTaskData(
      taskData.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (id) => {
    setEditData(taskData.find((task) => task.id === id));
  };
  console.log(editData);

  // console.log(taskData);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(taskData));
  }, [taskData]);

  // useEffect(() => {
  //   console.log("USEEFFECT RUNNING...");
  // },[]);
  const handleDynamicData = (id) => {
    nav(`/details/${id}`);
  };
  return (
    <div className={`${mode === "dark" ? "home-body" : "body-light"}`}>
      {/* <Navbar /> */}
      <div className="body">
        <Task
          editData={editData}
          getTaskData={getFormData}
          notask={taskData.length === 0 ? "no card available" : ""}
          taskData={taskData}
          setEditData={setEditData}
          setTaskData={setTaskData}
        />
        <div className="card-container">
          {taskData.map((task) => (
            <Card
              key={task.id}
              taskValue={task}
              deleteCard={deleteCard}
              completeTask={completeTask}
              updateTask={updateTask}
              handleDynamicData={handleDynamicData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
