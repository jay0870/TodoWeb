import { useEffect, useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

export function Task({
  getTaskData,
  notask,
  editData,
  setEditData,
  setTaskData,
  taskData,
}) {
  const [task, setTasks] = useState("");
  let items = taskData;
  // get full

  const taskAddHandler = (event) => {
    setTasks(event.target.value);
  };

  useEffect(() => {
    if (editData) {
      setTasks(editData.task);
    }
  }, [editData]);

  console.log(editData);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task.trim()) {
      return;
    }
    const data = {
      task,
      id: uuidv4(),
      completed: false,
    };
    // console.log(task);

    getTaskData(data);
    setTasks("");
  };

  const updateTaskHandler = (event) => {
    event.preventDefault();
    console.log({ task });
    // findIndex
    const index = items.findIndex((item) => item.id === editData.id);
    items[index] = { ...editData, task };
    localStorage.setItem("todoList", JSON.stringify(items));
    setTaskData(items);
    console.log(index, items);
    setEditData({});
    setTasks("");
  };

  // {task: newValue, id: editData.id} `

  return (
    <div>
      <h1 className="title">
        My Todos <FaSquareCheck style={{ color: "yellow" }} />
      </h1>

      <div className="input-box">
        <form onSubmit={editData?.id ? updateTaskHandler : handleSubmit}>
          <input
            className="task-input"
            type="text"
            placeholder="Enter your task..."
            id="task"
            value={task}
            onChange={taskAddHandler}
          />
          <button className="add-btn" type="submit">
            {editData.id ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <p className="no-tasks">{notask}</p>
    </div>
  );
}

// const arr = [1,2,3,4,6]

// arr[4] = 5
