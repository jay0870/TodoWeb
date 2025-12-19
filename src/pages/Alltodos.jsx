import { useEffect, useState, useContext } from "react";
import "./Alltodos.css";
import { toggleTheame } from "../context/TheamContext";

const AllTodos = () => {
  const [apiData, setApiData] = useState([]);
  const { mode } = useContext(toggleTheame);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/todos");
    const result = await response.json();
    setApiData(result.todos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={mode === "dark" ? "alltodos-dark" : "alltodos-light"}>
      <div className="heading">
        <h1>List of Todos</h1>
      </div>

      <div className="todo-list">
        {apiData.map((item) => (
          <div key={item.id} className="list-Todo">
            <h3>{item.todo}</h3>
            <span
              className={
                item.completed ? "status-complete" : "status-pending"
              }
            >
              {item.completed ? "Completed" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTodos;
