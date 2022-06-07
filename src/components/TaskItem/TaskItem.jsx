import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { useAlert } from "react-alert";

import "../TaskItem/TaskItem.scss";

export const TaskItem = ({ task, fetchTasks }) => {
  const alert = useAlert();
  const handleDeleteTask = async () => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${task._id}`);

      await fetchTasks();
      alert.success("A tarefa foi removida com sucesso");
    } catch (error) {
      alert.error("Não foi possível deletar a tarefa");
    }
  };

  const handleTaskUpdateCheckbox = async (e) => {
    try {
      await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
        isCompleted: e.target.checked,
      });

      await fetchTasks();
      alert.success("A tarefa foi atualizada com sucesso");
    } catch (error) {
      alert.error("Não foi possível atualizar a tarefa");
    }
  };
  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? "checkbox-container-completed"
              : "checkbox-container"
          }
        >
          <h4>{task.description}</h4>
          <input
            type="checkbox"
            defaultChecked={task.isCompleted}
            onChange={handleTaskUpdateCheckbox}
          />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          />
        </label>
      </div>

      <div className="delete">
        <AiFillDelete
          size={18}
          color="#F97474"
          onClick={(e) => handleDeleteTask(e)}
        />
      </div>
    </div>
  );
};
