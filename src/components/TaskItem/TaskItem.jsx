import "../TaskItem/TaskItem.scss";

export const TaskItem = ({ task }) => {
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
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          />
        </label>
      </div>
    </div>
  );
};
