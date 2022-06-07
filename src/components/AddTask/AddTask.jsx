import { useState } from "react";
import { FaPlus } from "react-icons/fa";
// import axios from "axios";
import { useAlert } from "react-alert";

import { CustomInput } from "../CustomInput/CustomInput.jsx";
import { CustomButton } from "../CustomButton/CustomButton.jsx";

import "./AddTask.scss";

export const AddTask = () => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0)
        return alert.error("Tarefa precisa de uma descrição para ser criada");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput value={task} onChange={onChange} />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={15} />
      </CustomButton>
    </div>
  );
};
