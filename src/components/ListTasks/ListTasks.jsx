import { useState, useEffect } from "react";
import axios from "axios";

import { TaskItem } from "../TaskItem/TaskItem.jsx";
import { AddTask } from "../AddTask/AddTask.jsx";

import "../ListTasks/ListTasks.scss";

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="tasks-container">
      <div className="input-task">
        <h1>Adicionar Tarefa</h1>
        <AddTask />
      </div>

      <div className="last-tasks">
        <h1>Últimas Tarefas</h1>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <TaskItem key={lastTask.id} task={lastTask} />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h1>Tarefas Concluídas</h1>
        <div className="tasks-list" />
        {tasks
          .filter((task) => task.isCompleted)
          .map((completedTask) => (
            <TaskItem key={completedTask.id} task={completedTask} />
          ))}
      </div>
    </div>
  );
};

export default ListTasks;
