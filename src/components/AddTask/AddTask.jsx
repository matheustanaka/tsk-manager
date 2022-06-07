import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import { CustomInput } from "../CustomInput/CustomInput.jsx";
import { CustomButton } from "../CustomButton/CustomButton.jsx";

import "./AddTask.scss";

export const AddTask = () => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="add-task-container">
      <CustomInput value={task} onChange={onChange} />
      <CustomButton>
        <FaPlus size={15} />
      </CustomButton>
    </div>
  );
};
