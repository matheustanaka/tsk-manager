import { useState } from "react";
import { FaPlus } from "react-icons/fa";
// import axios from "axios";
import { useAlert } from "react-alert";

import { CustomInput } from "../CustomInput/CustomInput.jsx";
import { CustomButton } from "../CustomButton/CustomButton.jsx";

import "./AddTask.scss";
import axios from "axios";

export const AddTask = ({ fetchTasks }) => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0)
        return alert.error("Tarefa precisa de uma descrição para ser criada");

      await axios.post("https://tassks-manager.herokuapp.com/tasks", {
        description: task,
        isCompleted: false,
      });

      await fetchTasks();
      alert.success("A tarefa foi adicionada com Sucesso");
      setTask("");
    } catch (_error) {
      alert.error("Não foi possível criar a tarefa");
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput
        value={task}
        onChange={onChange}
        onEnterPress={handleTaskAddition}
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={15} />
      </CustomButton>
    </div>
  );
};
