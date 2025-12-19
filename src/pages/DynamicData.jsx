import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { toggleTheame } from "../context/TheamContext";

function DynamicData() {
  const param = useParams();
  const { taskData } = useContext(toggleTheame);
  const filterData = taskData.filter((item) => item.id == param.id);

  console.log(filterData);

  return (
    <div className="id">
      <p className="toDo-details">Todo Details :-{param.id}</p>
      <p className="details-id">{filterData[0].task}</p>
    </div>
  );
}
 
export default DynamicData;
