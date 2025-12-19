import "./Cardstyle.css";
import { HiCheck } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

export function Card({
  taskValue,
  deleteCard,
  completeTask,
  updateTask,
  handleDynamicData,
}) {
  return (
    <div className="card-body">
      <p className={`task-title ${taskValue.completed ? "task-complete" : ""}`}>
        {taskValue.task}
      </p>

      <div className="action-buttons">
        <button
          className="action-btn check"
          onClick={() => completeTask(taskValue.id)}
        >
          <HiCheck />
        </button>

        <button
          className="action-btn edit"
          id="edit"
          onClick={() => updateTask(taskValue.id)}
        >
          <MdEditSquare />
        </button>

        <button
          className="action-btn delete"
          id="delete"
          onClick={() => deleteCard(taskValue.id)}
        >
          <MdDelete />
        </button>

        <button className="action-btn arrow">
          <BsFillArrowRightSquareFill
            onClick={() => handleDynamicData(taskValue.id)}
          />
        </button>
      </div>
    </div>
  );
}
