import { useState, useEffect, useMemo } from "react";
import { useAlert } from "react-alert";
import axios from "axios";

import { TaskItem } from "../TaskItem/TaskItem.jsx";
import { AddTask } from "../AddTask/AddTask.jsx";

import "../ListTasks/ListTasks.scss";

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  const alert = useAlert();

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");

      setTasks(data);
    } catch (_error) {
      alert.error("Não foi possível recuperar a tarefa");
    }
  };

  const lastTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === false);
  }, [tasks]);

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === true);
  }, [tasks]);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="tasks-container">
      <div className="input-task">
        <h1>Adicionar Tarefa</h1>
        <AddTask fetchTasks={fetchTasks} />
      </div>

      <div className="last-tasks">
        <h1>Últimas Tarefas</h1>
        <div className="tasks-list">
          {lastTasks.map((lastTask) => (
            <TaskItem
              key={lastTask._id}
              task={lastTask}
              fetchTasks={fetchTasks}
            />
          ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h1>Tarefas Concluídas</h1>
        <div className="tasks-list" />
        {completedTasks.map((completedTask) => (
          <TaskItem
            key={completedTask._id}
            task={completedTask}
            fetchTasks={fetchTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default ListTasks;
